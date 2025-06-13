"use client";

type MenuItem = {
  name: string;
};

const topMenus: MenuItem[] = [
  { name: "Nasi Goreng Jamur Special Resto Pak Min" },
  { name: "Tongseng Sapi Gurih" },
  { name: "Nasi Gudeg Telur Ceker" },
  { name: "Nasi Ayam serundeng" },
  { name: "Nasi Goreng Seafood" },
];

export default function TopMenuCard() {
  return (
    <div className="bg-white w-[227px] rounded-2xl p-6 shadow-sm font-quicksand flex flex-col flex-1">
      <h2 className="text-lg font-semibold text-gray-800">
        Top Menu <span className="text-orange-500">This Week</span>
      </h2>
      <p className="text-xs text-gray-400 mt-1 mb-4">10 - 12 Agustus 2023</p>

      {/* Scrollable list if content overflows */}
      <div className="flex-1 space-y-3 pr-1">
        <ul className="space-y-3">
          {topMenus.map((menu, index) => (
            <li key={index} className="relative">
              {index === 0 ? (
                <div className="bg-white rounded-lg shadow-md px-4 py-2 text-sm font-medium flex items-start">
                  {menu.name}
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-lg font-bold shadow-sm">
                    1
                  </span>
                </div>
              ) : (
                <p className="text-[#98949E] text-sm ml-1">
                  {index + 1}. {menu.name}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Chart di bagian bawah */}
      <div className="w-full h-16 mt-4">
        <svg viewBox="0 0 100 20" className="w-full h-full">
          <path
            d="M0 15 C 20 5, 40 25, 60 10 S 100 20, 100 15"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
