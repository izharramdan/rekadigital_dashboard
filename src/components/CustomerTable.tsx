"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Customer } from "@/features/customers/customerSlice";
import { formatRupiah } from "@/lib/utils";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Pagination from "./Pagination";

export default function CustomerTable() {
  const customers = useSelector((state: RootState) => state.customer.data);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="overflow-x-auto mt-6 rounded-md max-w-full">
        <table className="w-full text-sm text-left font-quicksand table-fixed">
          <thead className="bg-[#FAFAFA] text-md text-gray-500 tracking-wide">
            <tr>
              <th className="px-4 py-[14.5px] w-[20%] truncate">Name</th>
              <th className="px-4 py-[14.5px] w-[15%] truncate">Level</th>
              <th className="px-4 py-[14.5px] w-[20%] truncate">
                Favourite Menu
              </th>
              <th className="px-4 py-[14.5px] w-[10%] text-right truncate">
                Transaction
              </th>
              <th className="px-4 py-[14.5px] w-[20%] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: Customer) => (
              <tr
                key={customer.id}
                className="bg-white hover:bg-[#FAFBFF] text-[#110D17] font-semibold"
              >
                <td className="px-4 py-[14.5px] truncate">{customer.name}</td>
                <td className="px-4 py-[14.5px]">
                  <span
                    className={`px-2 py-1 text-sm font-semibold rounded-md inline-block ${getLevelColor(
                      customer.level
                    )}`}
                  >
                    {customer.level}
                  </span>
                </td>
                <td className="px-4 py-[14.5px] truncate">
                  {customer.favoriteMenu}
                </td>
                <td className="px-4 py-[14.5px] text-right">
                  {formatRupiah(customer.totalTransaction)}
                </td>
                <td className="px-4 py-[14.5px] text-center">
                  <div className="flex justify-center items-center gap-2">
                    <button className="bg-[#F9FAFB] hover:bg-gray-100 text-primary text-xs rounded-md px-2 py-1 shadow-sm">
                      Detail
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-500">
                      <FiEdit2 size={14} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-md text-red-500">
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={page}
        totalPages={38}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </>
  );
}

function getLevelColor(level: string) {
  switch (level) {
    case "Warga":
      return "bg-orange-50 text-orange-500";
    case "Juragan":
      return "bg-cyan-50 text-cyan-500";
    case "Sultan":
      return "bg-green-50 text-green-500";
    case "Konglomerat":
      return "bg-pink-50 text-pink-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
}
