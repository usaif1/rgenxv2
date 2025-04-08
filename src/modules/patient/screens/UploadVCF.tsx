// dependencies
import React, { useEffect } from "react";

// components
import { ModeSelector, VCFUpload } from "./components/UploadVCF";
import { FormHeader, SubmitButtonGroup } from "./components";
import { patientAPI } from "@/globalAPI";

const UploadVCF: React.FC = () => {
  useEffect(() => {
    patientAPI.fetchAllSymptoms();
  }, []);

  return (
    <form className="w-1/2 h-full overflow-hidden relative">
      <FormHeader title="Upload VCF File" />
      <div className="px-4 pt-[85.98px] h-full custom-scrollbar overflow-y-scroll">
        <VCFUpload />
        <div className="h-6 w-full" />
        <ModeSelector />
        <div className="h-6 w-full" />
        <SubmitButtonGroup />
      </div>
    </form>
  );
};

export default UploadVCF;
