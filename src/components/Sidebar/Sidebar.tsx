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
    { id: "upload", label: "Upload VCF", icon: UploadSimple, route: "/analyse" },
    { id: "cases", label: "My Cases", icon: Users, route: "/cases" },
  ];

  return (
    <div
      className={`h-full max-h-[100svh] relative bg-gradient-to-b from-primary to-slate-900 text-white p-2 px-4 flex flex-col justify-between overflow-hidden transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"
        }`}
    >
      <div className="absolute inset-0 h-full bg-black backdrop-blur-1xl opacity-40"></div>
      <div className="relative z-20 py-2">
        {/* <div
          className={`flex items-center justify-center mb-6 transition-all duration-300 ${
            isSidebarOpen ? "h-16" : "h-12 mt-4"
          }`}
        >
          {isSidebarOpen ? (
            <div className="flex flex-col items-center pt-3">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                RGenX
              </span>
              <span className="text-xs text-slate-200 mt">
                Genomic Analysis
              </span>
            </div>
          ) : (
            <div className="w-full p-2 py-3 rounded-md bg-blue-500 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          )}
        </div> */}

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <SidebarNavlink item={tab} key={tab.id} />
          ))}
        </nav>

      </div>

      <p
        className={`text-xs font-medium text-slate-600 text-center pb-4 transition-opacity relative bottom-16 ${isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
      >
        v2.4.1 | © 2024 RGenX
      </p>
    </div>
  );
};

export default Sidebar;
