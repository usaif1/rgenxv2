// dependencies
import React from "react";
import { HouseLine, UploadSimple, Users } from "@phosphor-icons/react";

// store
import { useGlobalStore } from "@/globalStore";
import SidebarNavlink from "./SidebarNavlink";

const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useGlobalStore();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: HouseLine, route: "/" },
    {
      id: "upload",
      label: "Upload VCF",
      icon: UploadSimple,
      route: "/analyse",
    },
    { id: "cases", label: "My Cases", icon: Users, route: "/cases" },
  ];

  return (
    <div
      className={`h-full max-h-[100svh] relative bg-gradient-to-b from-primary to-slate-900 text-white p-2 px-4 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="absolute inset-0 h-full backdrop-blur-1xl opacity-40"></div>
      <div className="relative z-20 py-2">
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <SidebarNavlink item={tab} key={tab.id} />
          ))}
        </nav>
      </div>

      <p
        className={`text-xs font-medium text-slate-600 text-center pb-4 transition-opacity relative bottom-16 ${
          isSidebarOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        v2.4.1 | © 2024 RGenX
      </p>
    </div>
  );
};

export default Sidebar;
