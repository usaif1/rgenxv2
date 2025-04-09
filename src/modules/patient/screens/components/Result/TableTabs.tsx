// dependcies
import React from "react";

// data
import { disabledTabs, tabs } from "./data";

const TableTabs = () => {
  return (
    <div>
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            className={`w-40 h-10 border ${
              disabledTabs.includes(tab) ? "bg-gray-400" : ""
            }`}
            disabled={disabledTabs.includes(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default TableTabs;
