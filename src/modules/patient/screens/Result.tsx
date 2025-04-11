// dependencies
import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router";

// components
import { ResultsTable } from "./components/Result";
import { LoaderPrimary } from "@/components/Loaders";
import { patientAPI } from "@/globalAPI";

// store
import { useGlobalStore, usePatientStore } from "@/globalStore";

const Result: React.FC = () => {
  const { filename } = useParams();
  const location = useLocation();

  const isVEP = filename?.includes("VEP");

  const { closeSidebar, openSidebar } = useGlobalStore();
  const { resultFiles } = usePatientStore();

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
        <div className="flex items-center">
          <Link
            className={`w-32 text-sm font-semibold text-center border border-slate-200 px-2 py-1 ${
              isVEP ? "bg-green-800 text-white" : "bg-slate-400 text-black"
            } `}
            to={`/analyse/result/${resultFiles.vep}?vguid=${vguid}`}
          >
            Default
          </Link>
          <Link
            className={`w-32 text-sm font-semibold text-center border border-slate-200 px-2 py-1 
              ${!isVEP ? "bg-green-800 text-white" : "bg-slate-400 text-white"}
              `}
            to={`/analyse/result/${resultFiles.filtered}?vguid=${vguid}`}
          >
            Flitered
          </Link>
        </div>
        <ResultsTable csvFile={csvFile} vguid={vguid as string} />
      </div>
    );
  }
};

export default Result;
