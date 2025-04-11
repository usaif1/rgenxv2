// dependencies
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

// components
import { PatientDetails, FamilyHistory } from "./components/NewPatient";
import { FormHeader, SubmitButtonGroup } from "./components";

// utils
import { patientFormSchema } from "../utils/newPatient.validation";

// store
import { useGlobalStore, usePatientStore } from "@/globalStore";
import { CreateNewPatientPayload } from "../types/patientTypes";
import { patientAPI } from "../api/patientAPI";
import { LoaderSecondary } from "@/components/Loaders";

type InsertNewPateintResponse = {
  message: "string";
  patient: {
    patientguid: string;
  };
};

const NewPatient: React.FC = () => {
  const navigate = useNavigate();

  const { formData } = usePatientStore();
  const { openModal, setModalComponent, closeModal } = useGlobalStore();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal();

    setTimeout(async () => {
      validateForm();

      const payload: CreateNewPatientPayload = {
        firstname: { value: formData?.firstName },
        lastname: { value: formData?.lastName },
        dob: { value: formData?.birthDate },
        email: { value: formData?.email },
        gender: { value: formData?.gender },
        height: { value: formData?.height },
        weight: { value: formData?.weight },
        mobile: { value: formData?.phone },
        sampleCollectionDate: { value: formData?.sampleCollectionDate },
        sampleReceiveDate: { value: formData?.sampleReceiveDate },
      };

      const response = await patientAPI.createNewPatient(payload);
      closeModal();
      if (response?.success) {
        const puid = (response?.data as InsertNewPateintResponse)?.patient
          ?.patientguid;
        navigate(`/analyse/vcf/${puid}`);
      }
    }, 500);
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

  useEffect(() => {
    setModalComponent(
      <LoaderSecondary loaderText="Creating user. Please wait" />
    );
  }, [setModalComponent]);

  return (
    <form onSubmit={onSubmit} className="w-1/2 h-full overflow-hidden relative">
      <FormHeader
        title="Patient Data Collection"
        subText="Please fill in all required fields marked with *"
      />
      <div className="px-4 pt-[105.98px] h-full custom-scrollbar overflow-y-scroll">
        <PatientDetails />
        <div className="h-10 w-full" />
        <FamilyHistory />
        <div className="h-10 w-full" />
        <SubmitButtonGroup />
      </div>
    </form>
  );
};

export default NewPatient;
