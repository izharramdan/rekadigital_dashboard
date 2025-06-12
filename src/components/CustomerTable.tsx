'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Customer } from '@/features/customers/customerSlice';
import { formatRupiah } from '@/lib/utils';

export default function CustomerTable() {
  const customers = useSelector((state: RootState) => state.customer.data);

  return (
    <div className="overflow-x-auto mt-6 rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-[#F9FAFB] text-xs text-gray-500 uppercase tracking-wide border-b">
          <tr>
            <th className="px-6 py-4">Customer Name</th>
            <th className="px-6 py-4">Level</th>
            <th className="px-6 py-4">Favorite Menu</th>
            <th className="px-6 py-4 text-right">Total Transaction</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: Customer) => (
            <tr key={customer.id} className="bg-white hover:bg-[#FAFBFF] border-b text-gray-700">
              <td className="px-6 py-4 font-medium">{customer.name}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-xl ${getLevelColor(customer.level)}`}>
                  {customer.level}
                </span>
              </td>
              <td className="px-6 py-4">{customer.favoriteMenu}</td>
              <td className="px-6 py-4 text-right">{formatRupiah(customer.totalTransaction)}</td>
              <td className="px-6 py-4 text-center">
                <button className="text-primary font-semibold hover:underline">Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Fungsi untuk styling badge level
function getLevelColor(level: string) {
  switch (level) {
    case 'Warga':
      return 'bg-orange-100 text-orange-500';
    case 'Juragan':
      return 'bg-cyan-100 text-cyan-500';
    case 'Sultan':
      return 'bg-green-100 text-green-500';
    case 'Konglomerat':
      return 'bg-pink-100 text-pink-500';
    default:
      return 'bg-gray-100 text-gray-500';
  }
}
