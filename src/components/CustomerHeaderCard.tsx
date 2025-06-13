"use client";

import {
  FiPlus,
  FiFilter,
  FiRefreshCcw,
  FiPrinter,
  FiSearch,
} from "react-icons/fi";
import CustomerAddModal from "./CustomerModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setFilterLevels } from "@/features/customers/customerSlice";
import { RootState } from "@/store";
import Image from "next/image";

const LEVELS = ["Warga", "Juragan", "Sultan", "Konglomerat"];

export default function CustomerHeaderCard() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearchInput] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const dispatch = useDispatch();
  const filterLevels = useSelector(
    (state: RootState) => state.customer.filterLevels || []
  );

  function handleLevelChange(level: string) {
    const newLevels = filterLevels.includes(level)
      ? filterLevels.filter((l) => l !== level)
      : [...filterLevels, level];
    dispatch(setFilterLevels(newLevels));
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setSearch(search));
  }

  function handleRefresh() {
    window.location.reload(); // atau dispatch(getCustomers()) jika pakai async thunk
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white font-quicksand overflow-visible">
      {/* Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-[300px] hidden md:block rounded-r-2xl overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/header.jpg"
            alt="Customer Banner"
            fill
            className="object-cover scale-240"
            style={{
              clipPath: "polygon(65% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Header Text */}
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold">Customer</h1>
          <p className="text-sm mt-1 leading-snug">
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {/* Add Button */}
          <button
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-md px-4 py-2 text-sm shadow-sm"
            onClick={() => setShowAddModal(true)}
          >
            <FiPlus />
            Add New Customer
          </button>

          {/* Search Bar */}
          <form
            className="flex-grow min-w-[220px] flex items-center overflow-hidden rounded-md bg-white shadow-sm border border-gray-200 max-w-[900px]"
            onSubmit={handleSearch}
          >
            <div className="flex items-center px-3 text-gray-400">
              <FiSearch className="text-base" />
            </div>
            <input
              type="text"
              placeholder="Search Customer"
              className="py-2 pr-2 text-sm text-gray-700 focus:outline-none flex-1 bg-transparent"
              value={search}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 mr-1 rounded-md"
            >
              Search
            </button>
          </form>

          {/* Buttons: Filter, Refresh, Print */}
          <div className="flex gap-2 ml-auto relative">
            {/* Filter */}
            <button
              type="button"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-2 text-sm transition backdrop-blur-sm border border-white/20"
              onClick={() => setFilterOpen((v) => !v)}
            >
              <FiFilter />
              Filter
            </button>

            {/* Refresh */}
            <button
              type="button"
              onClick={handleRefresh}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-2 text-sm transition backdrop-blur-sm border border-white/20"
            >
              <FiRefreshCcw />
              Refresh
            </button>

            {/* Print */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-2 text-sm transition backdrop-blur-sm border border-white/20"
            >
              <FiPrinter />
            </button>

            {/* Dropdown Filter */}
            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg z-50 p-2">
                <div className="font-semibold mb-2 text-sm">
                  Filter by Level
                </div>
                {LEVELS.map((level) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={filterLevels.includes(level)}
                      onChange={() => handleLevelChange(level)}
                      className="accent-indigo-500"
                    />
                    {level}
                  </label>
                ))}
                <button
                  className="mt-2 w-full text-xs text-indigo-600 hover:underline"
                  onClick={() => {
                    dispatch(setFilterLevels([]));
                    setFilterOpen(false);
                  }}
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <CustomerAddModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </div>
  );
}
