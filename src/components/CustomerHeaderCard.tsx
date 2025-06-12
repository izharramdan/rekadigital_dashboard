'use client';

import { FiPlus, FiFilter, FiRefreshCcw, FiPrinter, FiSearch } from 'react-icons/fi';

export default function CustomerHeaderCard() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white font-quicksand relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Kiri: Judul dan deskripsi */}
        <div className="flex-1">
          <h1 className="text-xl font-bold">Customer</h1>
          <p className="text-sm mt-1">
            On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.
          </p>
        </div>

        {/* Kanan: Toolbar */}
        <div className="flex flex-wrap gap-2 items-center">
          <button className="flex items-center gap-2 bg-white text-indigo-600 font-semibold rounded-lg px-4 py-2 text-sm hover:bg-indigo-100">
            <FiPlus />
            Add New Customer
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search Customer"
              className="rounded-lg px-4 py-2 pr-10 text-sm text-gray-800"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>

          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm">
            <FiFilter />
            Filter
          </button>

          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm">
            <FiRefreshCcw />
            Refresh
          </button>

          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-sm">
            <FiPrinter />
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
