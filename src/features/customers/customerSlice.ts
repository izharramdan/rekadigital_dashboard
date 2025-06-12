import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Customer {
  id: string;
  name: string;
  level: string;
  favoriteMenu: string;
  totalTransaction: number;
}

interface CustomerState {
  data: Customer[];
  search: string;
  sortBy: keyof Customer | null;
  sortDirection: "asc" | "desc";
  currentPage: number;
}

const initialState: CustomerState = {
  data: [
    {
      id: "1",
      name: "Odis Rhinehart",
      level: "Warga",
      favoriteMenu: "Chicken & Ribs Combo",
      totalTransaction: 194700,
    },
    {
      id: "2",
      name: "Kris Roher",
      level: "Warga",
      favoriteMenu: "Surf & Turf Gift Basket",
      totalTransaction: 631200,
    },
    {
      id: "3",
      name: "Serenity Fisher",
      level: "Juragan",
      favoriteMenu: "Fried Chicken Dinner",
      totalTransaction: 1040920,
    },
    {
      id: "4",
      name: "Brooklyn Warren",
      level: "Sultan",
      favoriteMenu: "Surf & Turf Gift Basket",
      totalTransaction: 730500,
    },
    {
      id: "5",
      name: "Franco Delort",
      level: "Juragan",
      favoriteMenu: "Chicken & Ribs Combo",
      totalTransaction: 96000,
    },
    {
      id: "6",
      name: "Saul Geoghegan",
      level: "Juragan",
      favoriteMenu: "Surf & Turf Gift Basket",
      totalTransaction: 256000,
    },
    {
      id: "7",
      name: "Alfredo Vetrov",
      level: "Juragan",
      favoriteMenu: "Dark & Stormy",
      totalTransaction: 590080,
    },
    {
      id: "8",
      name: "Cristofer Vetrov",
      level: "Konglomerat",
      favoriteMenu: "Shaking Beef Tri-Tip",
      totalTransaction: 782600,
    },
    {
      id: "9",
      name: "Calvin Steward",
      level: "Konglomerat",
      favoriteMenu: "BBQ Rib Dinner",
      totalTransaction: 467500,
    },
    {
      id: "10",
      name: "Calvin Steward",
      level: "Konglomerat",
      favoriteMenu: "BBQ Rib Dinner",
      totalTransaction: 467500,
    },
  ],
  search: "",
  sortBy: null,
  sortDirection: "asc",
  currentPage: 1,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.data.push(action.payload);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    setSort: (state, action: PayloadAction<keyof Customer>) => {
      if (state.sortBy === action.payload) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortBy = action.payload;
        state.sortDirection = "asc";
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { addCustomer, setSearch, setSort, setPage } =
  customerSlice.actions;
export default customerSlice.reducer;
