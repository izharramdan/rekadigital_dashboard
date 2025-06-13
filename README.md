# 📘 POS Dashboard Frontend

[🔗 Lihat Repository di GitHub](https://github.com/izharramdan/rekadigital_dashboard)

---

## 📌 Teknologi yang Digunakan

| Teknologi      | Deskripsi                                      |
| -------------- | ---------------------------------------------- |
| **Next.js 15** | Framework React modern dengan App Router       |
| **TypeScript** | Superset JavaScript dengan tipe statis         |
| **TailwindCSS**| Utility-first CSS framework (v4.0)             |
| **Redux Toolkit** | Manajemen state global via @reduxjs/toolkit |
| **React Icons** | Icon library ringan dan fleksibel            |

---

## 🧱 Struktur Folder

```
/components
  ├── CustomerTable.tsx
  ├── CustomerModal.tsx
  ├── CustomerHeaderCard.tsx
  ├── SeeAnalyticsCard.tsx
  ├── TopMenuCard.tsx
  ├── Sidebar.tsx
  ├── Navbar.tsx
  └── Pagination.tsx

/features
  └── customers
      ├── customerSlice.ts
      └── types.ts

/app
  └── customer
      └── page.tsx (CustomerPage)

/store
  ├── index.ts
  └── provider.tsx

/styles
  └── globals.css

/utils
  └── sortCustomer.ts

/lib
└── utils.ts
```

---

## 🧭 Alur Halaman Customer

### 🔹 `/customer/page.tsx`
- Komponen utama halaman customer.
- **Layout:**
  - **Kiri:** `CustomerHeaderCard`, `CustomerTable`
  - **Kanan:** `SeeAnalyticsCard`, `TopMenuCard`

### 🔹 `CustomerHeaderCard`
- Header informatif dengan:
  - Banner background
  - Tombol tambah customer
  - Search bar (terhubung Redux)
  - Dropdown filter level (Warga, Juragan, dst.)
  - Tombol Refresh dan Print (opsional)

### 🔹 `CustomerTable`
- Tabel customer dengan fitur:
  - Pagination
  - Sorting (opsional)
  - Search & filter via Redux
  - Data bersumber dari state global

### 🔹 `CustomerModal`
- Form tambah customer
- Menggunakan controlled input + validasi lokal
- Terkoneksi ke Redux untuk menambah data ke state

### 🔹 `SeeAnalyticsCard` & `TopMenuCard`
- Kartu tambahan di sisi kanan untuk:
  - Insight statistik
  - Navigasi menu terkait

---

## 🔧 Redux State: `customerSlice.ts`

```ts
interface CustomerState {
  search: string;
  filterLevels: string[];
  customers: Customer[];
}
```

- `setSearch(string)`: set keyword pencarian
- `setFilterLevels(string[])`: set level filter
- `setCustomers(Customer[])`: update list customer

---

## 📱 Responsive Design

- Layout menggunakan `flex-col` (mobile) dan `flex-row` (`lg:`)
- Sisi kanan (`lg:max-w-sm`) dan `lg:ml-auto` agar tetap menempel kanan
- Gunakan `overflow-x-hidden` pada parent jika perlu

---
