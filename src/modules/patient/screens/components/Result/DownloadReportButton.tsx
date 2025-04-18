// dependencies
import React from "react";
import { JwtPayload } from "jwt-decode";

// utils
import { commonErrorHandler } from "@/utils/helper";
import { generateReportPDF } from "@/modules/patient/utils/generateReportPDF";

// apis
import { myCasesAPI } from "@/modules/myCases/api/myCasesAPI";
// import { useAuthStore } from "@/globalStore";

type Props = {
  selectedRows: Set<any>;
  table: any;
  vguid: string;
};

interface DecodedToken extends JwtPayload {
  userFirstName: string;
  userLastName: string;
  userId: string;
}

const DownloadReportButton: React.FC<Props> = ({
  selectedRows,
  table,
  vguid,
}) => {
  // const { authUser } = useAuthStore();

  const decodedToken: DecodedToken = {
    userFirstName: "Sujata",
    userId: "",
    userLastName: "Mishra",
  };

  // if (authUser) {
  //   decodedToken = jwtDecode(authUser?.token || "");
  // }

  // report genration module
  const downloadReport = () => {
    if (selectedRows.size === 0) {
      commonErrorHandler("No rows selected for the report.");
      return;
    }

    myCasesAPI
      .getAllPatients()
      .then(async (response) => {
        const currentPatient = response?.find((patient) => {
          return patient.vguid === vguid;
        });

        if (currentPatient) {
          generateReportPDF({
            selectedRows,
            table,
            patientDetails: currentPatient,
            decodedToken: decodedToken,
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        return null;
      });
  };

  return (
    <button
      onClick={downloadReport}
      className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium py-1 px-3 rounded border border-gray-300"
    >
      Generate Report
    </button>
  );
};

export default DownloadReportButton;
