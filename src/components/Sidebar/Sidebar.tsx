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
    { id: "upload", label: "Upload VCF", icon: UploadSimple, route: "/vcf" },
    { id: "cases", label: "My Cases", icon: Users, route: "/cases" },
  ];

  return (
    <div
      className={`h-full bg-gradient-to-b from-primary to-slate-600 text-white p-4 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-24"
      }`}
    >
      <div>
        <div
          className={`flex items-center justify-center mb-8 transition-all duration-300 ${
            isSidebarOpen ? "h-16" : "h-12 mt-4"
          }`}
        >
          {isSidebarOpen ? (
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                RGenX
              </span>
              <span className="text-xs text-slate-200 mt-1">
                Genomic Analysis
              </span>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          )}
        </div>

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <SidebarNavlink item={tab} key={tab.id} />
          ))}
        </nav>
      </div>

      <div
        className={`text-xs text-slate-400 text-center pb-4 transition-opacity ${
          isSidebarOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        v2.4.1 | © 2024 RGenX
      </div>
    </div>
  );
};

export default Sidebar;
