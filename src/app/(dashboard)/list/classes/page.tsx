import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, classesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Class = {
  id: number;
  name: string;
  capacity: number;
};

const columns = [
  {
    header: " نام کلاس ",
    accessor: "name",
  },
  {
    header: " ظرفیت",
    accessor: "capacity",
  },
];

const ClassList = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-100"
    >
      <td className=" gap-1 md:gap-4 p-1 md:p-4 pr-0">{item.name}</td>
      <td className="">{item.capacity} </td>

      <td>
        <div className="flex items-center justify-end gap-1 md:gap-4">
          <FormModal table="class" type="update" id={item.id} />

          {role === "admin" && (
            <FormModal table="class" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-5 shadow-lg  ">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block font-semibold text-lg">کلاس ها </h1>
        <div className="flex flex-col  items-center gap-4 w-full md:w-auto md:flex-row-reverse ">
          <TableSearch />

          <div className="flex justify-start w-full items-center gap-4 selt-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full round-shadow">
              <Image src="/filter.png" alt="فیلتر" width={14} height={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full round-shadow">
              <Image src="/sort.png" alt="مرتب سازی" width={14} height={14} />
            </button>

            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ClassList;