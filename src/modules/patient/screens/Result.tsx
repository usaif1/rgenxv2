// dependencies
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";

// components
import { ResultsTable } from "./components/Result";
import { LoaderPrimary } from "@/components/Loaders";
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

  if (!vguid) {
    return (
      <div>
        <p>Invalid page</p>
      </div>
    );
  }

  if (!csvFile) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center pt-20">
        <LoaderPrimary />
      </div>
    );
  }

  if (csvFile) {
    return (
      <div className="p-4">
        <ResultsTable csvFile={csvFile} vguid={vguid as string} />
      </div>
    );
  }
};

export default Result;
