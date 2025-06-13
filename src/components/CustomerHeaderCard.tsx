'use client';

import {
  FiPlus,
  FiFilter,
  FiRefreshCcw,
  FiPrinter,
  FiSearch,
} from 'react-icons/fi';

export default function CustomerHeaderCard() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white font-quicksand overflow-hidden">
      {/* Background Image Decorative */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
        <img
          src="/img/customer-banner.png" // ganti path sesuai asset kamu
          alt="customer"
          className="h-full w-full object-cover rounded-r-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Title + Description */}
        <div className="max-w-2xl">
          <h1 className="text-xl font-bold">Customer</h1>
          <p className="text-sm mt-1">
            On this menu you will be able to create, edit, and also delete the
            customer. Also you can manage it easily.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap gap-3 mt-2">
          {/* Add Button */}
          <button className="flex items-center gap-2 bg-white text-indigo-600 font-semibold rounded-lg px-4 py-2 text-sm hover:bg-indigo-100">
            <FiPlus />
            Add New Customer
          </button>

          {/* Search */}
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search Customer"
              className="px-4 py-2 text-sm text-gray-700 focus:outline-none"
            />
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2">
              <FiSearch />
            </button>
          </div>

          {/* Filter, Refresh, Print */}
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
