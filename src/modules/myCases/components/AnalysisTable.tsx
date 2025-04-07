import { useState } from 'react';
import { CaretLeft, CaretRight, MagnifyingGlass, Eye } from '@phosphor-icons/react';

interface Column {
  label: string;
  accessor: string;
  render?: (row: Record<string, any>) => JSX.Element;
}

interface TableProps {
  data: Record<string, any>[];
  columns: Column[];
  onSearchChange?: (value: string) => void;
  pageInfo?: { current: number; total: number };
  onPageChange?: (page: number) => void;
}

export default function AnalysisTable({
  data,
  columns,
  onSearchChange,
  pageInfo,
  onPageChange,
}: TableProps) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange?.(value);
  };

  return (
    <div className="rounded-xl" >

      {/* All analysis and search section */}
      <div className="flex justify-between items-center mb-6" >
        <select className="border border-gray-300 rounded-md px-3 py-2 bg-white " >
          <option className='!bg-white' > All Analysis </option>
        </select>
        < div className="relative" >
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search"
            className="bg-white border border-gray-200 px-3 py-2 rounded-lg pl-10"
          />
          <MagnifyingGlass className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Table Section */}
      < div className="overflow-x-auto rounded-xl border border-gray-200  bg-white" >
        <table className="min-w-full text-sm text-left border rounded-md overflow-hidden" >
          <thead className="bg-gradient-to-br from-blue-50 to-white text-gray-800" >
            <tr>
              {
                columns.map((col, idx) => (
                  <th key={idx} className="py-3 px-4 whitespace-nowrap" >
                    {col.label}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50" >
                  {
                    columns.map((col, colIdx) => (
                      <td key={colIdx} className="py-3 px-4 whitespace-nowrap" >
                        {col.render ? col.render(row) : row[col.accessor]}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
        < div className="flex justify-between items-center border-t border-gray-200 py-2.5 px-3" >
          <button
            className="flex border cursor-pointer border-gray-200 items-center gap-1 px-3 py-1.5 text-sm rounded hover:bg-gray-200"
            onClick={() => onPageChange?.(Math.max((pageInfo?.current || 1) - 1, 1))}
            disabled={pageInfo?.current === 1}
          >
            <CaretLeft size={16} /> Previous
          </button>
          < div className="flex items-center gap-2" >
            {
              [1, 2, 3, '...', (pageInfo?.total || 10)].map((pg, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded ${pg === pageInfo?.current ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                  onClick={() => typeof pg === 'number' && onPageChange?.(pg)}
                >
                  {pg}
                </button>
              ))}
          </div>
          < button
            className="flex border cursor-pointer border-gray-200 items-center gap-1 px-3 py-1.5 text-sm rounded hover:bg-gray-200"
            onClick={() => onPageChange?.((pageInfo?.current || 1) + 1)}
            disabled={pageInfo?.current === pageInfo?.total}
          >
            Next < CaretRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}