// dependencies
import React from "react";
import { Menu, MenuButton, MenuItem, } from "@szhsin/react-menu";
import { SignOut } from "@phosphor-icons/react";

// store
import { useGlobalStore } from "@/globalStore";

type HeaderProps = {
  credits?: number;
  userName?: string;
  userInitials?: string;
};

const navLinks = [{ label: "How to use", href: "#" }];

const Header: React.FC<HeaderProps> = ({
  credits = 10,
  userName = "Dr. Sharad Aggarwal",
  userInitials = "SA",
}) => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalStore();

  const toggleSidebar = () => {
    isSidebarOpen ? closeSidebar() : openSidebar();
  };

  const handleLogout = () => {
    
    console.log("Logging out...");
  };

  return (
    <header className="w-full flex justify-between items-center p-4 border-b border-gray-300 bg-white shadow-sm z-50">
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
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* User Menu */}
        <Menu
          menuButton={
            <MenuButton className="flex items-center cursor-pointer focus:outline-none relative">
              <div className="w-8 h-8 rounded-full mr-2 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
                {userInitials}
              </div>
              <span className="font-medium text-gray-800 text-sm hidden md:inline">
                {userName}
              </span>
            </MenuButton>
          }
          transition
          menuClassName="rounded-lg "
        >
          <MenuItem onClick={handleLogout} className="cursor-pointer py-4 flex gap-1 items-start w-48 rounded-lg bg-white border relative top-2 border-gray-300 p-4 space-x-2 ml-auto">
            <SignOut size={22} />
            <span className="font-medium">Logout</span>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
