// dependencies
import React from "react";

// assets
import Vgenomics_logo from "@/assets/Vgenomics_logo.png";

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
      <div className="text-xs text-gray-500">
        © 2025 RgenX by Vgenomics. All rights reserved. This system is
        HIPAA-compliant.
      </div>
      <img src={Vgenomics_logo} alt="Vgenomics Logo" className="h-8" />
    </div>
  );
};

export default Footer;
