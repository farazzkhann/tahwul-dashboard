import type { ReactNode } from 'react';
import SortingIcon from '../../assets/icons/sorting-icon.svg';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
}

export const DataTable = ({ columns, data }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full rounded-xl">
        <thead className="bg-[#F5F8FB] rounded-xl">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                <div className="flex items-center gap-2">
                  <span>{column.label}</span>
                  <img src={SortingIcon} alt="Sort" className="w-3 h-3" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};