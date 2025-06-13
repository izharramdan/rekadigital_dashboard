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

import Image from "next/image";

export default function CustomerHeaderCard() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white font-quicksand overflow-hidden">
      {/* Decorative Background Image */}
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

      {/* Content */}
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
          <div className="flex-1 min-w-[220px] flex items-center overflow-hidden rounded-md bg-white shadow-sm border border-gray-200 max-w-lg">
            <div className="flex items-center px-3 text-gray-400">
              <FiSearch className="text-base" />
            </div>
            <input
              type="text"
              placeholder="Search Customer"
              className="py-2 pr-2 text-sm text-gray-700 focus:outline-none flex-1 bg-transparent"
            />
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 mr-1 rounded-md">
              Search
            </button>
          </div>

          {/* Action Buttons - Frosted Glass */}
          <div className="flex gap-2 ml-auto">
            {[
              { icon: <FiFilter />, label: "Filter" },
              { icon: <FiRefreshCcw />, label: "Refresh" },
              { icon: <FiPrinter />, label: "" },
            ].map(({ icon, label }, i) => (
              <button
                key={i}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-2 text-sm transition backdrop-blur-sm border border-white/20"
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
        <CustomerAddModal
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
        />
      </div>
    </div>
  );
}
