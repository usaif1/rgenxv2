import React, { JSX } from "react";
import { NavLink } from "react-router";

const Sidebar: React.FC = () => {
  const sidebarOpen = true;

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "home", route: "/" },
    { id: "upload", label: "Upload VCF", icon: "upload", route: "/vcf" },
    { id: "cases", label: "My Cases", icon: "user-group", route: "/cases" },
  ];

  const renderIcon = (icon: string) => {
    const icons: { [key: string]: JSX.Element } = {
      home: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      upload: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      "user-group": (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    };
    return icons[icon];
  };

  return (
    <div
      className={`h-full bg-gradient-to-b from-primary to-slate-600 text-white p-4 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div>
        <div
          className={`flex items-center justify-center mb-8 transition-all duration-300 ${
            sidebarOpen ? "h-16" : "h-12 mt-4"
          }`}
        >
          {sidebarOpen ? (
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
            <NavLink
              to={tab.route}
              key={tab.id}
              className="w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 text-white hover:bg-hover-secondary"
            >
              {renderIcon(tab.icon)}
              {sidebarOpen && <span>{tab.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className={`text-xs text-slate-400 text-center pb-4 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        v2.4.1 | © 2024 RGenX
      </div>
    </div>
  );
};

export default Sidebar;
