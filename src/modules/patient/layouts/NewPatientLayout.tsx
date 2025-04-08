// dependencies
import React from "react";
import { Outlet } from "react-router";

// components
import { RightPanelVisualization } from "../screens/components";

const NewPatientLayout: React.FC = () => {
  return (
    <div className="h-full flex flex-col py-4">
      <div className="h-[calc(100vh-108.55px)] flex w-11/12 border border-slate-300 self-center rounded-lg">
        <Outlet />
        <RightPanelVisualization />
      </div>
    </div>
  );
};

export default NewPatientLayout;
