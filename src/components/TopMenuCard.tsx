"use client";

type MenuItem = {
  name: string;
  totalSold: number;
};

const mockMenus: MenuItem[] = [
  { name: "Ayam Geprek", totalSold: 120 },
  { name: "Nasi Goreng", totalSold: 98 },
  { name: "Es Teh Manis", totalSold: 85 },
];

export default function TopMenuCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full font-quicksand">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Top Menu This Week
      </h2>
      <ul className="space-y-3">
        {mockMenus.map((menu, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <span className="text-gray-700">{menu.name}</span>
            <span className="text-gray-500">{menu.totalSold} sold</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
