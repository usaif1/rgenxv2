// dependencies
import { Header, Sidebar } from "@/components";
import React from "react";

// component
import { Outlet } from "react-router";

const HomeLayout: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <div className="h-full flex items-center">
        <Sidebar />
        <div className="w-full h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
