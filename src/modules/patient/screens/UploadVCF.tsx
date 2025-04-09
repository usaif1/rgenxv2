// dependencies
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

// components
import { ModeSelector, VCFUpload } from "./components/UploadVCF";
import { FormHeader, SubmitButtonGroup } from "./components";

// api
import { patientAPI } from "@/globalAPI";
import { convertToCSV, getFileNameWithoutExtension } from "@/utils/helper";

// store
import { usePatientStore } from "@/globalStore";

// types
import { Patient } from "../types/patientTypes";
import { myCasesAPI } from "@/modules/myCases/api/myCasesAPI";

//

const UploadVCF: React.FC = () => {
  const navigate = useNavigate();
  const { puid } = useParams();

  const { metadata, selectedSymptoms } = usePatientStore();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const file = metadata.vcfFile;

    if (!file) {
      return alert("Please attach VCF File");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await patientAPI.uploadVCF(formData);

    if (!response) return alert("Error uploading VCF file");

    const allPatients = await myCasesAPI.getAllPatients();

    let patientDetails: any = null;

    if (allPatients && allPatients.length) {
      patientDetails = allPatients.find((patient) => {
        return patient.patientguid === puid;
      });
    }

    if (!patientDetails) return;

    const vguid = (patientDetails as Patient)?.vguid;

    const metadataPayload = {
      Patient: vguid,
      HPOids: selectedSymptoms.map((symptom) => {
        return symptom.hpoid;
      }),
      S3: response.fileUrl,
      Assembly: metadata?.referenceGenome,
      Mode: metadata?.analysisMode,
    };

    const csvFile = convertToCSV(metadataPayload);
    const metadataS3Link = await sendCSVToServer(csvFile, vguid);

    if (!metadataS3Link) return;

    const mergedFile = await patientAPI.processVCF(
      metadataS3Link,
      metadata?.analysisMode,
      vguid
    );

    if (!mergedFile) return;

    const extractedFileName = getFileNameWithoutExtension(mergedFile);
    navigate(`/analyse/result/${extractedFileName}?vguid=${vguid}`);
  };

  const sendCSVToServer = async (csvContent: any, filename: string) => {
    const blob = new Blob([csvContent], { type: "text/csv" });
    const file = new File([blob], filename, { type: "text/csv" });

    const formData = new FormData();
    formData.append("file", file);

    const response = await patientAPI.uploadMetadataCSV(formData);

    if (response) {
      return response.fileUrl;
    }

    return null;
  };

  useEffect(() => {
    patientAPI.fetchAllSymptoms();
  }, []);

  return (
    <form className="w-1/2 h-full overflow-hidden relative" onSubmit={onSubmit}>
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
