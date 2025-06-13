import CustomerTable from "@/components/CustomerTable";
import SeeAnalyticsCard from "@/components/SeeAnalyticsCard";
import TopMenuCard from "@/components/TopMenuCard";
import CustomerHeaderCard from "@/components/CustomerHeaderCard";

export default function CustomerPage() {
  return (
    <div className="p-4 font-primary">
      {/* Wrapper: 1 kolom di mobile, 2 kolom di desktop */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* KIRI – header + tabel (≈ 2/3 lebar) */}
        <div className="flex-1 space-y-6">
          <CustomerHeaderCard />
          <CustomerTable />
        </div>

        {/* KANAN – kartu analytics (≈ 1/3 lebar) */}
        <div className="w-full lg:max-w-sm lg:ml-auto flex flex-col gap-6">
          <SeeAnalyticsCard />
          <TopMenuCard />
        </div>
      </div>
    </div>
  );
}
