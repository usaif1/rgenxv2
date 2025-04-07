// dependencies
import React from "react";

// store
import { useGlobalStore } from "@/globalStore";

type HeaderProps = {
  credits?: number;
  userName?: string;
  userInitials?: string;
};

const navLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "How to use", href: "#" },
];

const Header: React.FC<HeaderProps> = ({
  credits = 10,
  userName = "Dr. Sharad Aggarwal",
  userInitials = "SA",
}) => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalStore();

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
      return;
    }

    openSidebar();
  };

  return (
    <header className="w-full flex justify-between items-center p-4  border-t-0 border-b border-gray-300 bg-white shadow-sm z-50">
      {/* Logo & Menu Icon */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg
            width={32}
            height={32}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-800">
            RGenX
          </span>
          <span className="text-xs text-gray-600 -mt-1">
            Genomic Analysis Suite
          </span>
        </div>
      </div>

      {/* Right side: credits, links, user info */}
      <div className="flex items-center space-x-6">
        {/* Credits */}
        <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-sm font-medium text-blue-700">
            {credits} credits left
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-4 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
            {userInitials}
          </div>
          <span className="font-medium text-gray-800 text-sm hidden md:inline">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
