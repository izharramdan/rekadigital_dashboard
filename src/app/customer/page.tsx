import CustomerTable from "@/components/CustomerTable";


export default function CustomerPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Customer</h1>
      <CustomerTable />
    </div>
  );
}
