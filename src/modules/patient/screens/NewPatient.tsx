// dependencies
import React from "react";

// components
import RightPanelVisualization from "./components/NewPatient/RightPanelVisualization";
import {
  FormHeader,
  PatientDetails,
  // ClinicalDetails,
  FamilyHistory,
  // DoctorsInfo,
  // AnalysisMethod,
  // VCFUpload,
  // ModeSelector,
  SubmitButtonGroup,
} from "./components/NewPatient";

// utils
import { patientFormSchema } from "../utils/newPatient.validation";

// store
import { usePatientStore } from "@/globalStore";

const NewPatient: React.FC = () => {
  const { formData } = usePatientStore();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
    console.log("payload");
  };

  const validateForm = () => {
    const result = patientFormSchema.safeParse(formData);
    if (!result.success) {
      console.log("❌ Validation errors:", result.error.flatten());
      // Optionally: store errors in state and show inline
      return result.error.flatten();
    }

    console.log("✅ Form is valid. Ready to submit:", result.data);
    return null;
  };

  return (
    <div className="h-full flex flex-col py-4">
      <div className="h-[calc(100vh-108.55px)] flex w-11/12 border border-slate-300 self-center rounded-lg">
        <form
          onSubmit={onSubmit}
          className="w-1/2 h-full overflow-hidden relative"
        >
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
            {/* <div className="h-10 w-full" /> */}
            {/* <VCFUpload /> */}
            {/* <div className="h-10 w-full" /> */}
            {/* <ModeSelector /> */}
            <div className="h-10 w-full" />
            <SubmitButtonGroup />
          </div>
        </form>
        <RightPanelVisualization />
      </div>
    </div>
  );
};

export default NewPatient;
