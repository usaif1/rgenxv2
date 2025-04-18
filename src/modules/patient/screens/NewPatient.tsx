// dependencies
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

// components
import {
  PatientDetails,
  ClinicalDetails,
  DoctorsInfo,
  FamilyHistory,
} from "./components/NewPatient";
import { FormHeader, SubmitButtonGroup } from "./components";
import { LoaderSecondary } from "@/components/Loaders";
import { AnalysisMethod } from "./components/UploadVCF";

// store
import { useGlobalStore, usePatientStore } from "@/globalStore";

// types
import { CreateNewPatientPayload } from "../types/patientTypes";

// services
import { patientFormSchema } from "../utils/newPatient.validation";
import { patientAPI } from "../api/patientAPI";

type InsertNewPateintResponse = {
  message: "string";
  patient: {
    patientguid: string;
  };
};

const NewPatient: React.FC = () => {
  const navigate = useNavigate();

  const { formData, resetFormData } = usePatientStore();
  const { openModal, setModalComponent, closeModal } = useGlobalStore();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openModal();

    try {
      setTimeout(async () => {
        validateForm();

        const newPatientPayload: CreateNewPatientPayload = {
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

        const newPatientResponse = await patientAPI.createNewPatient(
          newPatientPayload
        );

        const puid = (newPatientResponse?.data as InsertNewPateintResponse)
          ?.patient?.patientguid;

        const insertFamilyResponse = await patientAPI.insertFamilyDetails(
          {
            birthWeight: "",
            father: {
              age: 0,
              diseaseName: formData.otherInfo,
              name: formData.clinicalHistory,
              hasDisease: "No",
            },
            mother: {
              age: "0",
              ageAtConception: 0,
              diseaseName: formData.hospitalName,
              name: formData.doctorName,
              hasDisease: "No",
            },
            otherInfo: "",
            weekOfGestation: 0,
          },
          puid
        );

        if (newPatientResponse?.success && insertFamilyResponse?.success) {
          resetFormData();

          navigate(`/analyse/vcf/${puid}`);
        }
      }, 500);
    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
      setTimeout(() => {
        closeModal();
      }, 500);
    }
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
      <LoaderSecondary loaderText="Adding patient. Please wait" />
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
        <ClinicalDetails />
        <div className="h-10 w-full" />
        <DoctorsInfo />
        <div className="h-10 w-full" />
        <AnalysisMethod />
        <div className="h-10 w-full" />
        <SubmitButtonGroup />
      </div>
    </form>
  );
};

export default NewPatient;
