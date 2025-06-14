"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Customer } from "@/features/customers/customerSlice";
import { formatRupiah } from "@/lib/utils";
import { FiEdit2, FiTrash2, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Pagination from "./Pagination";
import { sortCustomers, SortKey, SortOrder } from "@/utils/sortCustomers";

export default function CustomerTable() {
  const customers = useSelector((state: RootState) => state.customer.data);
  const search = useSelector((state: RootState) => state.customer.search);
  const filterLevels = useSelector(
    (state: RootState) => state.customer.filterLevels || []
  );
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  }
  const itemsPerPage = 10;

  const levelFilteredCustomers =
    filterLevels.length > 0
      ? customers.filter((c) => filterLevels.includes(c.level))
      : customers;

  const filteredCustomers = levelFilteredCustomers.filter((c) =>
    [c.name, c.level, c.favoriteMenu, c.totalTransaction.toString()]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const sortedCustomers = sortCustomers(filteredCustomers, sortKey, sortOrder);

  const paginatedCustomers = sortedCustomers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

  return (
    <>
      <div className="overflow-x-auto mt-6 rounded-md max-w-full">
        <table className="w-full text-sm text-left font-quicksand table-fixed min-w-[600px]">
          <thead className="bg-[#FAFAFA] text-md text-gray-500 tracking-wide">
            <tr>
              <th
                className="px-4 py-[14.5px] w-[20%] truncate cursor-pointer select-none"
                onClick={() => handleSort("name")}
              >
                <span className="flex items-center gap-1">
                  Name
                  {sortKey === "name" &&
                    (sortOrder === "asc" ? (
                      <FiChevronUp size={16} />
                    ) : (
                      <FiChevronDown size={16} />
                    ))}
                </span>
              </th>
              <th
                className="px-4 py-[14.5px] w-[15%] truncate cursor-pointer select-none"
                onClick={() => handleSort("level")}
              >
                <span className="flex items-center gap-1">
                  Level
                  {sortKey === "level" &&
                    (sortOrder === "asc" ? (
                      <FiChevronUp size={16} />
                    ) : (
                      <FiChevronDown size={16} />
                    ))}
                </span>
              </th>
              <th
                className="px-4 py-[14.5px] w-[20%] truncate cursor-pointer select-none"
                onClick={() => handleSort("favoriteMenu")}
              >
                <span className="flex items-center gap-1">
                  Favourite Menu
                  {sortKey === "favoriteMenu" &&
                    (sortOrder === "asc" ? (
                      <FiChevronUp size={16} />
                    ) : (
                      <FiChevronDown size={16} />
                    ))}
                </span>
              </th>
              <th
                className="px-4 py-[14.5px] w-[10%] text-right truncate cursor-pointer select-none"
                onClick={() => handleSort("totalTransaction")}
              >
                <span className="flex items-center gap-1 justify-end">
                  Transaction
                  {sortKey === "totalTransaction" &&
                    (sortOrder === "asc" ? (
                      <FiChevronUp size={16} />
                    ) : (
                      <FiChevronDown size={16} />
                    ))}
                </span>
              </th>
              <th className="px-4 py-[14.5px] w-[20%] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer: Customer) => (
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
        {/* Responsive Card View for Mobile */}
        <div className="block md:hidden">
          {paginatedCustomers.map((customer: Customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-lg shadow p-4 mb-4 text-[#110D17] font-semibold"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{customer.name}</span>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-md ${getLevelColor(
                    customer.level
                  )}`}
                >
                  {customer.level}
                </span>
              </div>
              <div className="text-sm mb-1">
                <span className="font-medium">Menu:</span> {customer.favoriteMenu}
              </div>
              <div className="text-sm mb-2">
                <span className="font-medium">Transaction:</span>{" "}
                {formatRupiah(customer.totalTransaction)}
              </div>
              <div className="flex gap-2">
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
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        totalData={sortedCustomers.length}
        itemsPerPage={itemsPerPage}
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