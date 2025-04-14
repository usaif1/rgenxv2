// dependencies
import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router";

// components
import { ResultsTable } from "./components/Result";
import { LoaderPrimary } from "@/components/Loaders";
import { patientAPI } from "@/globalAPI";

// store
import { useGlobalStore } from "@/globalStore";
import { getResultFilesLinks } from "@/utils/helper";
import { myCasesAPI } from "@/modules/myCases/api/myCasesAPI";

const Result: React.FC = () => {
  const [vepFile, setVEPFile] = useState<string>("");
  const [filteredFile, setFilteredFile] = useState<string>("");
  const { filename } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const vguid = queryParams.get("vguid");

  const isVEP = filename?.includes("VEP");

  const { closeSidebar, openSidebar } = useGlobalStore();

  const [csvFile, setCSVFile] = useState<string | null | undefined>("");

  useEffect(() => {
    closeSidebar();
    setCSVFile(null);
    if (vguid && filename) {
      myCasesAPI
        .getAllPatients()
        .then((allPatients) => {
          if (!allPatients?.length) return;

          const currentPatient = allPatients.find(
            (patient) => patient.vguid === vguid
          );

          if (!currentPatient) return;

          const parsedLinks = getResultFilesLinks(currentPatient.results);
          if (!parsedLinks.filtered || !parsedLinks.vep) return;

          setVEPFile(parsedLinks.vep);
          setFilteredFile(parsedLinks.filtered);

          patientAPI
            .fetchProcessedFile({ vguid: vguid, filename: filename })
            .then((file) => {
              setCSVFile(file);
            });
        })
        .catch();
    }

    return () => {
      openSidebar();
    };
  }, [closeSidebar, filename, openSidebar, vguid]);

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
        <div className="flex items-center gap-x-2">
          <Link
            className={`w-32 text-sm font-semibold text-center border border-slate-200 text-white rounded-lg px-2 py-1 ${
              isVEP ? "bg-primary" : "bg-slate-400"
            } `}
            to={`/analyse/result/${vepFile || ""}?vguid=${vguid}`}
          >
            Default
          </Link>
          <Link
            className={`w-32 text-sm font-semibold text-center border border-slate-200 rounded-lg px-2 py-1 text-white 
              ${!isVEP ? "bg-primary" : "bg-slate-400"}
              `}
            to={`/analyse/result/${filteredFile || ""}?vguid=${vguid}`}
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
