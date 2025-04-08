// dependencies
import React, { useState } from "react";

// components
import RightPanelVisualization from "./components/NewPatient/RightPanelVisualization";

import {
  FormHeader,
  PatientDetails,
  // ClinicalDetails,
  FamilyHistory,
  // DoctorsInfo,
  // AnalysisMethod,
  VCFUpload,
  ModeSelector,
} from "./components/NewPatient";

const NewPatient: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState("");

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(e.target.value);
  };

  return (
    <div className="h-full flex flex-col py-4">
      <div className="h-[calc(100vh-108.55px)] flex w-11/12 border border-slate-300 self-center rounded-lg">
        <form className="w-1/2 h-full overflow-hidden relative">
          <FormHeader />
          <div className="px-4 pt-[105.98px] h-full custom-scrollbar overflow-y-scroll">
            <PatientDetails />
            {/* <div className="h-10 w-full" />
            <ClinicalDetails /> */}
            <div className="h-10 w-full" />
            <FamilyHistory />
            {/* <div className="h-10 w-full" />
            <DoctorsInfo /> */}
            {/* <div className="h-10 w-full" />
            <AnalysisMethod /> */}
            <div className="h-10 w-full" />
            <VCFUpload />
            <div className="h-10 w-full" />
            <ModeSelector
              selectedMode={selectedMode}
              onChange={handleModeChange}
            />
            <div className="px-6 py-4 flex justify-end border-t border-gray-200">
              <button
                type="button"
                className="px-5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-1.5 text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <RightPanelVisualization />
      </div>
    </div>
  );
};

export default NewPatient;
