import React from "react";
import {
  DashboardStats,
  MainCharts,
  SecondaryCharts,
} from "../components/Dashboard";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      <div className="flex flex-1 overflow-hidden">
        {/* <Sidebar
          sidebarOpen={sidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
        <div className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Genomic Analysis Dashboard
                </h1>
                <p className="text-gray-600">
                  The most complex part of genetics, simplified and speeded up
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Last updated: Today
                  </span>
                </div>
              </div>
            </div>
            <DashboardStats />
            <MainCharts />
            <SecondaryCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
