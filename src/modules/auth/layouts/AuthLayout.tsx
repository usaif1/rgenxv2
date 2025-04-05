// dependencies
import React from "react";
import { Outlet } from "react-router";
import { Logo } from "../components";
import { Footer } from "@/components";

// assets
import DnaPerson from "@/assets/dna_person.png";

const AuthLayout: React.FC = () => {
  return (
    <div className="h-full flex">
      <div className="w-1/2 flex flex-col bg-gradient-to-b from-white via-gray-50 to-white px-8 pt-6 relative">
        <Logo />
        <div className="h-full flex items-center justify-center">
          <Outlet />
        </div>
        <Footer />
      </div>

      {/* Right half - DNA illustration */}
      <div className="w-1/2 h-full bg-gray-100 flex items-center justify-center">
        <img
          src={DnaPerson}
          alt="DNA Illustration"
          className="h-full w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
