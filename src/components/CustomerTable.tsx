"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Customer } from "@/features/customers/customerSlice";
import { formatRupiah } from "@/lib/utils";

export default function CustomerTable() {
  const customers = useSelector((state: RootState) => state.customer.data);

  return (
    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 mt-6">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b">
          <tr>
            <th className="px-4 py-3">Customer Name</th>
            <th className="px-4 py-3">Level</th>
            <th className="px-4 py-3">Favorite Menu</th>
            <th className="px-4 py-3 text-right">Total Transaction</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: Customer) => (
            <tr
              key={customer.id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <td className="px-4 py-3">{customer.name}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-lg
                  ${getLevelColor(customer.level)}
                `}
                >
                  {customer.level}
                </span>
              </td>
              <td className="px-4 py-3">{customer.favoriteMenu}</td>
              <td className="px-4 py-3 text-right">
                {formatRupiah(customer.totalTransaction)}
              </td>
              <td className="px-4 py-3 text-center">
                <button className="text-blue-500 font-semibold hover:underline">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Warna untuk level badge
function getLevelColor(level: string) {
  switch (level) {
    case "Warga":
      return "bg-orange-100 text-orange-500";
    case "Juragan":
      return "bg-cyan-100 text-cyan-500";
    case "Sultan":
      return "bg-green-100 text-green-500";
    case "Konglomerat":
      return "bg-pink-100 text-pink-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
}
