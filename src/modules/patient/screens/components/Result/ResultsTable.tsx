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
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import right from "./assets/chevron-right.svg";
import left from "./assets/chevron-left.svg";
import { getDefaultColumnVisibility } from "./utils/columnVisibility";
import { getTableData } from "./utils/services";

type Props = {
  csvFile: string;
};

const GeneyxTable: React.FC<Props> = ({ csvFile }) => {
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
  // report genration module

  const generateReport = () => {
    if (selectedRows.size === 0) {
      alert("No rows selected for the report.");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Add logo in the top-right corner
    const logo = "/images/vgenomicslogo.jpg"; // Ensure the logo file is accessible
    const logoWidth = 50; // Width of the logo (adjust as needed)
    const logoHeight = 20; // Height of the logo (adjust as needed)
    const logoX = pageWidth - logoWidth - 14; // X position: right-aligned with 14px margin
    const logoY = 10; // Y position: 10px from the top

    doc.addImage(logo, "JPEG", logoX, logoY, logoWidth, logoHeight);

    // Add report heading with blue background
    doc.setFillColor(0, 0, 255); // Blue background
    doc.rect(0, 40, pageWidth, 10, "F"); // Blue rectangle
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255); // White text
    doc.text("Whole Exome Sequencing Report", pageWidth / 2, 45, {
      align: "center",
    });

    // Reset text color for the rest of the document
    doc.setTextColor(0, 0, 0); // Black text

    // Add patient information table
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Patient Information", 14, 60);
    doc.setTextColor(0, 0, 0); // Black text
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text for the title
    doc.text("Patient Information", 14, 60);
    doc.setTextColor(0, 0, 0); // Black text for the table

    // Patient Information Table
    autoTable(doc, {
      startY: 65, // Start the table at Y position 65
      body: [
        ["Test ID :", "XXXX", "Ref Dr. :", "XXXX"],
        ["Test ID :", "XXXX", "Ref. Hospital :", "XXXX"],
        ["Name :", "XXXX", "Specimen Type :", "XXXX"],
        ["Age/DOB :", "XXXX", "Specimen Collected :", "XXXX"],
        ["Gender :", "XXXX", "Specimen Received :", "XXXX"],
        ["Client ID :", "XXXX", "Report Released :", "XXXX"],
      ],
      theme: "plain", // No borders
      styles: {
        fillColor: [255, 255, 255], // Default white background
        textColor: [0, 0, 0], // Black text
        fontStyle: "normal",
      },
      alternateRowStyles: {
        fillColor: [173, 216, 230], // Light blue background for alternate rows
      },
      columnStyles: {
        0: { fontStyle: "bold" }, // Bold for the first column (labels)
        2: { fontStyle: "bold" }, // Bold for the third column (labels)
      },
      tableLineColor: [255, 255, 255], // Hide table borders
      tableLineWidth: 0, // No border width
    });

    // Add Clinical Phenotype section
    let tableEndY = doc.lastAutoTable.finalY; // Get the Y position after the Patient Information table
    let spacing = 10; // Add 10 units of spacing between sections

    // Clinical Phenotype section
    // Add Clinical Phenotype: (CASE HISTORY) section
    tableEndY = doc.lastAutoTable.finalY; // Get the Y position after the Patient Information table
    spacing = 10; // Add 10 units of spacing between sections

    // CASE HISTORY section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Clinical Phenotype: (CASE HISTORY)", 14, tableEndY + spacing); // Position after the table with spacing
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    const caseHistoryText =
      "Patient presented with, waddling gait, walking on the toes, large calf muscles, learning disabilities. Evaluated for related genes.";
    const caseHistoryHeight = doc.getTextDimensions(caseHistoryText, {
      maxWidth: 180,
    }).h;

    doc.text(
      caseHistoryText,
      14,
      tableEndY + spacing + 10, // Add additional spacing for the text
      { maxWidth: 180 }
    );

    // Calculate the end position of the CASE HISTORY section
    const caseHistoryEndY =
      tableEndY + spacing + 10 + caseHistoryHeight + spacing;

    // FAMILY HISTORY section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Clinical Phenotype: (FAMILY HISTORY)", 14, caseHistoryEndY); // Position after the CASE HISTORY section
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    const familyHistoryText =
      "Family history includes similar symptoms in siblings and parents. Genetic counseling recommended.";
    const familyHistoryHeight = doc.getTextDimensions(familyHistoryText, {
      maxWidth: 180,
    }).h;

    doc.text(
      familyHistoryText,
      14,
      caseHistoryEndY + 10, // Add additional spacing for the text
      { maxWidth: 180 }
    );

    // Calculate the end position of the FAMILY HISTORY section
    const familyHistoryEndY =
      caseHistoryEndY + 10 + familyHistoryHeight + spacing;

    // RESULTS section

    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Results:", 14, familyHistoryEndY); // Position after the FAMILY HISTORY section

    // Add Results table with borders and adjacent columns
    autoTable(doc, {
      startY: familyHistoryEndY + 5, // Position after the Results heading

      body: [
        [
          "Pathogenic",
          "Pathogenic variant has been identified in the *DMD* gene related to the phenotype.",
        ],
      ], // Data for the table
      theme: "grid", // Add borders
      styles: {
        fillColor: [173, 216, 230], // Light blue background for all cells
        textColor: [0, 0, 0], // Black text
        fontStyle: "normal",
        cellPadding: 5, // Add padding for better readability
        lineColor: [0, 0, 0], // Black borders
        //lineWidth: 0.5 // Border width
      },
      columnStyles: {
        0: { fontStyle: "bold", cellWidth: 40 }, // Bold for the first column and set width
        1: { cellWidth: 140 }, // Set width for the second column
      },
      tableLineColor: [0, 0, 0], // Black borders
      tableLineWidth: 0.2, // Border width
    });

    // Calculate the end position of the RESULTS section
    const resultsEndY = doc.lastAutoTable.finalY + spacing;

    // Add Variant Details section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Variant Details", 14, resultsEndY); // Position after the RESULTS section
    let finalY = resultsEndY + 5; // Add small spacing before the table

    autoTable(doc, {
      startY: finalY,
      head: [
        [
          "Gene",
          "Genomic Position",
          "cDNA/Protein Change",
          "Zygosity/Inheritance",
          "Allele Coverage",
          "Variant Consequence",
          "Associated Disorder",
          "ACMG/AMP Classification",
        ],
      ],
      body: Array.from(selectedRows).map((rowId) => {
        const row = table.getRowModel().rows.find((r) => {
          return r.id === rowId;
        });

        // const mappedData = [
        //   row.getValue("gene"), // Match "Gene" header
        //   row.getValue("location"), // Match "Genomic Position"
        //   row.getValue("cdna_protein_change"), // Match "cDNA/Protein Change"
        //   row.getValue("zygosity_inheritance"), // Match "Zygosity/Inheritance"
        //   row.getValue("allele_coverage"), // Match "Allele Coverage"
        //   row.getValue("variant_consequence"), // Match "Variant Consequence"
        //   row.getValue("associated_disorder"), // Match "Associated Disorder"
        //   row.getValue("acmg_classification"), // Match "ACMG/AMP Classification"
        // ];

        return row ? row.getVisibleCells().map((cell) => cell.getValue()) : [];
      }),
      theme: "grid",
      didDrawPage: (data) => (finalY = data.cursor.y), // Update finalY after drawing the table
    });
    // Add Therapy Details section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Therapy Details", 14, finalY + 10);
    autoTable(doc, {
      startY: finalY + 15,
      head: [["Gene", "Variants", "Therapy", "Disease"]],
      body: [
        [
          "DMD",
          "c.2791G>T",
          "Golodirsen, Eteplirsen",
          "Duchenne muscular dystrophy",
        ],
      ],
      theme: "grid",
      didDrawPage: (data) => (finalY = data.cursor.y),
    });

    // Add Recommendations section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Recommendations", 14, finalY + 10);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(
      "Validation of the variant by Sanger sequencing is recommended to rule out false positives.",
      14,
      finalY + 20,
      { maxWidth: 180 }
    );

    // Add Limitations section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Limitations", 14, finalY + 40);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(
      [
        "This Exome sequence test is designed to evaluate SNV and Indels variants within coding region; however, this technology is only able to sequence 90 - 95% of the human reference to the requisite 10-fold coverage needed for reliable detection of heterozygous variants.",
        "Next generation sequencing technologies (NGS), including whole exome analysis, have a false positive rate of 5-10%. Additionally, certain types of genetic abnormalities are difficult to identify in sequencing data and have not been validated for clinical use including insertions, deletions, copy number alterations, long repetitive sequences, triplet repeat expansions, chromosomal rearrangements, polyploidy, repetitive regions including mono-, di- and tri-nucleotide repeats, GX rich regions, intronic variants inside and outside the splice-site and epigenetic effects.",
        "Large insertions, deletions, duplications, inversions and complex rearrangements cannot be characterized accurately by NGS as it uses short-read sequencing data. Only variations in genes potentially related to the patient’s phenotype are reported.",
        "Misinterpretation of results may occur, if the information provided is inaccurate or incomplete. Rare polymorphisms may lead to false negative or positive results. This does not imply that reported variants can always explain all symptoms of the patient. More clinical details assist in more precise evaluation.",
        "If results obtained do not match with the clinical findings given, additional testing should be considered. Re-filtering based on additional clinical information can be done when required even after the final report has been issued.",
        "Few genes are not completely covered in our whole genome panel and thus, there might be chances of missing few mutations.",
      ],
      14,
      finalY + 50,
      { maxWidth: 180 }
    );

    // Add Additional Information section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Additional Information", 14, finalY + 120);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(
      "Incidental gene analysis and reporting will be done after receiving the consent from the parent/guardian.",
      14,
      finalY + 130,
      { maxWidth: 180 }
    );

    // Add Disclaimer section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("Disclaimer", 14, finalY + 150);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(
      "It is presumed that the specimen used to perform the test belongs to the patient specified above, such verification having been carried out at the collection level of sample. Variants believed to be benign based on medical literature, or with population frequencies greater than or equal to 5%, or resulting in synonymous amino acid changes, or occurring in 5’ or 3’ untranslated regions are generally not reported. It has not been cleared or approved by the U.S. Food and Drug Administration (FDA) for diagnostic purposes. Hence, test is recommended for research use only. This is a screening test and variants if found, need to be confirmed by Sanger sequencing, as it might be associated with having false positive/ false negative results.",
      14,
      finalY + 160,
      { maxWidth: 180 }
    );

    // Add References section
    doc.setFontSize(12);
    doc.setTextColor(255, 165, 0); // Orange text
    doc.text("References", 14, finalY + 200);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text
    doc.text(
      "https://www.genecards.org/cgi-bin/carddisp.pl?gene=BLK\nhttps://www.ncbi.nlm.nih.gov/snp/rs980105504\nhttps://www.malacards.org/card/maturity_onset_diabetes_of_the_young_type_11\nhttp://omim.org/entry/613375",
      14,
      finalY + 210,
      { maxWidth: 180 }
    );

    // Save the PDF
    doc.save("Geneyx_Report.pdf");
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
      <div className="mb-2 flex justify-end">
        <button
          onClick={generateReport}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium py-1 px-3 rounded border border-gray-300"
        >
          Generate Report
        </button>
      </div>

      <div className="relative overflow-x-auto overflow-y-auto max-w-screen max-h-[80vh]">
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
