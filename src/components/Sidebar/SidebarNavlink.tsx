/* eslint-disable @typescript-eslint/no-explicit-any */
// dependencies
import React from "react";
import { NavLink } from "react-router";

// store
import { useGlobalStore } from "@/globalStore";

type Props = {
  item: {
    id: string;
    label: string;
    icon: any;
    route: string;
  };
};

const SidebarNavlink: React.FC<Props> = ({ item }) => {
  const { isSidebarOpen } = useGlobalStore();

  if (isSidebarOpen) {
    return (
      <NavLink to={item.route} className="flex items-center space-x-3 py-3 px-4 rounded-md">
        <item.icon weight="fill" size={22} />
        <span>{item.label}</span>
      </NavLink>
    );
  }

  return (
    <NavLink to={item.route} className="flex items-center justify-center py-2 px-3 rounded-md">
      <item.icon weight="fill" size={26} />
    </NavLink>
  );
};

export default SidebarNavlink;
