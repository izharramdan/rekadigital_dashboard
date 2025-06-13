"use client";

import { useState } from "react";

const tabs = ["Customer", "Promo", "Voucher"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Customer");

  return (
    <div className="w-full border-b border-gray-200">
      <div className="flex items-center justify-between mb-1">
        {/* Kiri: Judul & Deskripsi */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Customer</h1>
          <p className="text-sm text-gray-400">
            You can manage and organize your customer and other things here
          </p>
        </div>

        {/* Kanan: Tabs selevel dengan judul */}
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "text-indigo-600"
                  : "text-gray-400 hover:text-indigo-500"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-indigo-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
