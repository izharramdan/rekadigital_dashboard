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
import Image from "next/image";

const mainMenu = [
  { label: "Dashboard", icon: MdDashboard, path: "/dashboard", badge: 4 },
  { label: "Stock", icon: MdInventory, path: "/stock" },
  { label: "Customer", icon: MdPeople, path: "/customer" },
  { label: "Restaurant", icon: MdRestaurant, path: "/restaurant" },
  { label: "Design", icon: MdDesignServices, path: "/design" },
  { label: "Report", icon: MdDescription, path: "/report" },
  { label: "Role & Admin", icon: MdAdminPanelSettings, path: "/role-admin" },
  { label: "Settings", icon: MdSettings, path: "/settings" },
];

const integrationMenu = [
  { label: "Stock", icon: MdInventory2, path: "/integration/stock" },
  { label: "Supply", icon: MdLocalShipping, path: "/integration/supply" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 self-start h-screen w-[200px] bg-white border-r border-[#D1D0D366] flex flex-col justify-between font-primary">
      {/* Top Section */}
      <div>
        <div className="flex justify-center items-center py-6">
          <Image
            src="/logo.png"
            alt="App Logo"
            width={120}
            height={48}
            priority
          />
        </div>

        <nav className="px-3">
          <div className="text-sm text-gray-400 tracking-wide mb-2 px-2">
            Menu
          </div>
          <ul className="space-y-1">
            {mainMenu.map((item) => {
              const isActive = pathname.startsWith(item.path);
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition",
                      isActive
                        ? "text-[#5B5FED] bg-blue-50"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <Icon
                      size={20}
                      className={clsx(
                        isActive ? "text-[#5B5FED]" : "text-gray-400"
                      )}
                    />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="text-xs bg-orange-400 text-white rounded-full px-1.5 py-0.5 font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="text-sm text-gray-400 tracking-wide mt-6 mb-2 px-2">
            Integration
          </div>
          <ul className="space-y-1">
            {integrationMenu.map((item) => {
              const isActive = pathname.startsWith(item.path);
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition",
                      isActive
                        ? "text-[#5B5FED] bg-blue-50"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <Icon
                      size={20}
                      className={clsx(
                        isActive ? "text-[#5B5FED]" : "text-gray-400"
                      )}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* User Section */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <img
            src="https://i.pravatar.cc/40"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-semibold">Savannah N</div>
            <div className="text-gray-400 text-xs">Food Quality Manager</div>
          </div>
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 text-sm font-semibold text-red-600 bg-red-100 hover:bg-red-200 transition py-2 rounded-lg">
          <MdLogout size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
