import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data:any[]
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-sm text-gray-500 text-right">
          {columns.map((col) => {
            return <th key={col.accessor} className={col.className}>{col.header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;