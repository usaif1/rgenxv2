// dependencies
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";

// components
import { ResultsTable } from "./components/Result";
import { patientAPI } from "@/globalAPI";

// store
import { useGlobalStore } from "@/globalStore";

const Result: React.FC = () => {
  const { filename } = useParams();
  const location = useLocation();

  const { closeSidebar, openSidebar } = useGlobalStore();

  const [csvFile, setCSVFile] = useState<string | null | undefined>("");

  const queryParams = new URLSearchParams(location.search);
  const vguid = queryParams.get("vguid");

  useEffect(() => {
    closeSidebar();
    if (vguid && filename) {
      patientAPI
        .fetchProcessedFile({ vguid: vguid, filename: filename })
        .then((file) => {
          setCSVFile(file);
        });
    }

    return () => {
      openSidebar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!csvFile) {
    return <div>Loading...</div>;
  }

  if (csvFile) {
    return (
      <div className="p-4">
        <ResultsTable csvFile={csvFile} />
      </div>
    );
  }
};

export default Result;
