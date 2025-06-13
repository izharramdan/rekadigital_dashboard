'use client';

export default function SeeAnalyticsCard() {
  return (
    <div className="relative w-[227px] bg-gradient-to-br from-indigo-500 to-blue-400 text-white rounded-2xl p-6 overflow-hidden font-quicksand">
      {/* Background Garis Lengkung */}
      <div className="absolute right-0 bottom-0 w-2/3 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M0 200 C100 100, 150 100, 200 0"
            stroke="white"
            strokeWidth="40"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <h2 className="text-xl font-semibold leading-snug">
          See analytics of the Customer Clearly
        </h2>
        <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg text-sm w-fit hover:bg-indigo-100">
          See Analytics
        </button>
      </div>
    </div>
  );
}
