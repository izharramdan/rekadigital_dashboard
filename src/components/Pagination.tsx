"use client";

import React from "react";
import { cn } from "@/lib/utils"; // opsional jika kamu pakai clsx atau util sejenis

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalData?: number;
  itemsPerPage?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-6 px-4 py-3 bg-white rounded-md text-sm text-gray-600 shadow-xs">
      <div>
        Showing <strong>10</strong> Data Customers
      </div>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={cn(
                "w-8 h-8 rounded-md flex items-center justify-center transition",
                page === currentPage
                  ? "bg-gray-500 text-white font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="px-2">
              ...
            </span>
          )
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="ml-1 px-2 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
