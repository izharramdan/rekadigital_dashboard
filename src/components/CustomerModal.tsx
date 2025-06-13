"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addCustomer } from "@/features/customers/customerSlice";

export default function CustomerAddModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Warga");
  const [favoriteMenu, setFavoriteMenu] = useState("");
  const [totalTransaction, setTotalTransaction] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(
      addCustomer({
        id: Date.now().toString(),
        name,
        level,
        favoriteMenu,
        totalTransaction,
      })
    );
    onClose();
    setName("");
    setLevel("Warga");
    setFavoriteMenu("");
    setTotalTransaction(0);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 font-quicksand">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Add New Customer
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Level
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Warga">🟠 Warga</option>
              <option value="Juragan">🔵 Juragan</option>
              <option value="Sultan">🟢 Sultan</option>
              <option value="Konglomerat">🟣 Konglomerat</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Favorite Menu
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              value={favoriteMenu}
              onChange={(e) => setFavoriteMenu(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Total Transaction
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              value={totalTransaction}
              onChange={(e) => setTotalTransaction(Number(e.target.value))}
              min={0}
              required
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
