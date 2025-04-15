// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columns } from "./config/columns";
import filter from "./assets/filter.svg";
import Filter from "./Filter";
import right from "./assets/chevron-right.svg";
import left from "./assets/chevron-left.svg";
import { getDefaultColumnVisibility } from "./utils/columnVisibility";

// services
import { getTableData } from "./utils/services";
import DownloadReportButton from "./DownloadReportButton";
import { useAuthStore } from "@/globalStore";

type Props = {
  csvFile: string;
  vguid: string;
};

const GeneyxTable: React.FC<Props> = ({ csvFile, vguid }) => {
  const { authUser } = useAuthStore();

  const [hoveredHeader, setHoveredHeader] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [clickedHeader, setClickedHeader] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilterColumn, setActiveFilterColumn] = useState(null);
  const [columnFilters, setColumnFilters] = useState([]);
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState(new Set());

  const [columnVisibility, setColumnVisibility] = useState(
    getDefaultColumnVisibility(columns)
  );
  const [expandedHeaders, setExpandedHeaders] = useState({});

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const table = useReactTable({
    data,
    columns,
    getFacetedRowModel: getFacetedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      columnFilters,
      columnVisibility,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      columnPinning: {
        left: ["select", "location", "gene"],
      },
    },
  });

  const handleFilterClick = (event, headerId) => {
    const rect = event.target.getBoundingClientRect();
    setClickedHeader({
      id: headerId,
      x: rect.right - 85,
      y: rect.bottom + window.scrollY - 100,
    });
    setIsOpen(true);
  };

  const handleRowSelection = (rowId) => {
    setSelectedRows((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(rowId)) {
        newSelection.delete(rowId);
      } else {
        if (newSelection.size < 5) {
          newSelection.add(rowId);
        } else {
          alert("You can only select up to 5 rows.");
        }
      }
      return newSelection;
    });
  };

  const getData = async () => {
    await getTableData(csvFile, setTableData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      {authUser ? (
        <div className="mb-2 flex justify-end">
          <DownloadReportButton
            selectedRows={selectedRows}
            table={table}
            vguid={vguid}
          />
        </div>
      ) : null}
      <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
        <div className="bg-slate-300 text-xs rounded-lg px-2 py-1">
          Showing {table.getRowModel().rows.length}{" "}
          {table.getRowModel().rows.length === 1 ? "row" : "rows"}
        </div>
      </div>
      <div className="relative overflow-x-auto overflow-y-auto max-w-screen max-h-[calc(100vh-200px)]">
        <table
          className="table-fixed border-separate border border-gray-200"
          style={{ width: table.getTotalSize() }}
        >
          <thead className="bg-[#eeeeee]">
            {table.getHeaderGroups().map((headerGroup, groupIndex) => (
              <tr key={headerGroup.id}>
                <th className="border border-gray-300 px-2 w-10 text-center"></th>
                {headerGroup.headers.map((header) => {
                  let stickyClass = "";
                  if (header.column.id === "location") {
                    stickyClass = "sticky-col location";
                  } else if (header.column.id === "gene") {
                    stickyClass = "sticky-col gene";
                  }
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onMouseEnter={() => setHoveredHeader(header.id)}
                      onMouseLeave={() => setHoveredHeader(null)}
                      className={`border relative border-gray-300 max-w-fit px-4 py-2 text-center text-xs font-semibold ${stickyClass} ${
                        groupIndex === 0
                          ? "text-heading-blue"
                          : "text-subheading-blue"
                      }`}
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* For subheaders, show filter icon on hover as before */}
                          {groupIndex === 0 && (
                            <span
                              className="absolute right-2 text-sm text-gray-500 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                const currentExpanded =
                                  expandedHeaders[header.column.id] || false;
                                setExpandedHeaders((prev) => ({
                                  ...prev,
                                  [header.column.id]: !currentExpanded,
                                }));

                                // Get all leaf columns for this top-level header
                                const leafColumns =
                                  header.column.getLeafColumns();
                                setColumnVisibility((prev) => {
                                  const newVisibility = { ...prev };
                                  leafColumns.forEach((leaf) => {
                                    if (!currentExpanded) {
                                      // Expanding: force all subheaders to visible
                                      newVisibility[leaf.id] = true;
                                    } else {
                                      newVisibility[leaf.id] =
                                        leaf.columnDef.meta
                                          ?.defaultVisibility === false
                                          ? false
                                          : true;
                                    }
                                  });
                                  return newVisibility;
                                });
                              }}
                            >
                              <img
                                width={18}
                                height={18}
                                src={
                                  expandedHeaders[header.column.id]
                                    ? left
                                    : right
                                }
                                alt="toggle columns"
                              />
                            </span>
                          )}

                          {groupIndex > 0 && hoveredHeader === header.id && (
                            <span
                              className="absolute right-2 text-sm text-gray-500 cursor-pointer"
                              onClick={(e) => {
                                handleFilterClick(e, header.id);
                                setActiveFilterColumn(header.column);
                              }}
                            >
                              <img
                                width={18}
                                height={18}
                                src={filter}
                                alt="filter"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="even:bg-gray-50">
                <td className="borde-none px-2 w-10 text-center sticky left-0 z-[99]">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                  />
                </td>
                {row.getVisibleCells().map((cell) => {
                  let stickyClass = "";
                  if (cell.column.id === "location") {
                    stickyClass = "sticky-col location";
                  } else if (cell.column.id === "gene") {
                    stickyClass = "sticky-col gene";
                  }
                  return (
                    <td
                      key={cell.id}
                      className={`border border-gray-200 max-w-fit px-4 py-2 text-center text-xs ${stickyClass} ${
                        cell.id.includes("genomics-spliceregion") ||
                        cell.id.includes("genomics-lovd") ||
                        cell.id.includes("genomics-snps") ||
                        cell.id.includes("genomics-hgvsc") ||
                        cell.id.includes("genomics-hgvsp") ||
                        cell.id.includes("genomics-codons") ||
                        cell.id.includes("gene") ||
                        cell.id.includes("clinical-phenotypes") ||
                        cell.id.includes("clinical-clinvarreview") ||
                        cell.id.includes("clinical-pubmed") ||
                        cell.id.includes("effect-mutationtasterscore") ||
                        cell.id.includes("effect-adascore") ||
                        cell.id.includes("effect-alphamissensescore") ||
                        cell.id.includes("effect-sift4gscore") ||
                        cell.id.includes("effect-revelscore") ||
                        cell.id.includes("frequency-exacsasaf") ||
                        cell.id.includes("frequency-esp6500eaaf") ||
                        cell.id.includes("frequency-1000gp3sasaf")
                          ? "truncate"
                          : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal - Positioned under clicked header */}
      {isOpen && clickedHeader && (
        <Filter
          position={clickedHeader}
          onClose={() => setClickedHeader(null)}
          column={activeFilterColumn}
        />
      )}
    </div>
  );
};
export default GeneyxTable;
