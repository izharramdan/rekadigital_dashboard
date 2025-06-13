import { Customer } from "@/features/customers/customerSlice";

export type SortKey = "name" | "level" | "favoriteMenu" | "totalTransaction";
export type SortOrder = "asc" | "desc";

export function sortCustomers(
  customers: Customer[],
  sortKey: SortKey,
  sortOrder: SortOrder
) {
  return [...customers].sort((a, b) => {
    let aValue = a[sortKey];
    let bValue = b[sortKey];
    if (sortKey === "totalTransaction") {
      aValue = Number(aValue);
      bValue = Number(bValue);
    } else {
      aValue = String(aValue).toLowerCase();
      bValue = String(bValue).toLowerCase();
    }
    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
}
