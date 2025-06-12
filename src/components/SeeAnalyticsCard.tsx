"use client";

export default function SeeAnalyticsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full font-quicksand">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">See Analytics</h2>
        <button className="text-sm text-primary font-medium hover:underline">
          See all
        </button>
      </div>
      <p className="text-gray-500 text-sm">
        Gain insights from this week’s top performance and customer preferences.
      </p>
    </div>
  );
}
