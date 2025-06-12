"use client";

import {
  MdDashboard,
  MdInventory,
  MdPeople,
  MdRestaurant,
  MdDesignServices,
  MdDescription,
  MdSettings,
  MdAdminPanelSettings,
  MdLogout,
  MdLocalShipping,
  MdInventory2,
} from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const mainMenu = [
  { label: "Dashboard", icon: <MdDashboard size={20} />, path: "/dashboard" },
  { label: "Stock", icon: <MdInventory size={20} />, path: "/stock" },
  { label: "Customer", icon: <MdPeople size={20} />, path: "/customer" },
  {
    label: "Restaurant",
    icon: <MdRestaurant size={20} />,
    path: "/restaurant",
  },
  { label: "Design", icon: <MdDesignServices size={20} />, path: "/design" },
  { label: "Report", icon: <MdDescription size={20} />, path: "/report" },
  {
    label: "Role & Admin",
    icon: <MdAdminPanelSettings size={20} />,
    path: "/role-admin",
  },
  { label: "Settings", icon: <MdSettings size={20} />, path: "/settings" },
];

const integrationMenu = [
  {
    label: "Stock",
    icon: <MdInventory2 size={20} />,
    path: "/integration/stock",
  },
  {
    label: "Supply",
    icon: <MdLocalShipping size={20} />,
    path: "/integration/supply",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r px-4 py-6 flex flex-col justify-between font-quicksand">
      {/* Logo */}
      <div>
        <h1 className="text-primary text-xl font-bold mb-8 px-2">bsquare</h1>

        {/* Menu */}
        <nav className="space-y-4">
          <div className="space-y-1">
            {mainMenu.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition",
                  pathname.startsWith(item.path)
                    ? "bg-blue-100 text-primary"
                    : "text-gray-600"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 text-xs text-gray-400 uppercase tracking-wide px-3">
            Integration
          </div>
          <div className="space-y-1 mt-1">
            {integrationMenu.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition",
                  pathname.startsWith(item.path)
                    ? "bg-blue-100 text-primary"
                    : "text-gray-600"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* User Info + Logout */}
      <div className="mt-8 px-3">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-white font-bold">
            S
          </div>
          <div className="text-sm">
            <div className="font-semibold">Savannah N</div>
            <div className="text-gray-400 text-xs">Food Quality Manager</div>
          </div>
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-red-500 hover:underline transition">
          <MdLogout size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
