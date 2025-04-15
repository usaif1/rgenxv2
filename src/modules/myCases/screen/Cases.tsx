import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router";

import AnalysisTable from "../components/AnalysisTable";

import { myCasesAPI } from "../api/myCasesAPI";

import useCasesStore from "../store/useCasesStore";
import { getResultFilesLinks } from "@/utils/helper";

const MyCases: React.FC = () => {
  const { startLoader, patientsList, stopLoader } = useCasesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllPatients = async () => {
    try {
      setIsLoading(true);
      startLoader("cases/patientList");
      await myCasesAPI.getAllPatients();
    } finally {
      setIsLoading(false);
      stopLoader("cases/patientList");
    }
  };

  // Calculate BMI from height (cm) and weight (kg)
  const calculateBMI = (height: number, weight: number) => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    }
    return "N/A";
  };

  // Transform patient data for the table
  const transformedData = patientsList.map((patient) => ({
    fullName: `${patient.firstname} ${patient.lastname}`,
    age: patient?.age,
    dob: patient.dob,
    gender: patient.gender,
    bmi: calculateBMI(patient.height, patient.weight),
    height: `${patient.height} cm`,
    weight: `${patient.weight} kg`,
    patientData: patient, // Keep original data for reference
    patientguid: patient.patientguid,
  }));

  // Filter data based on search query
  const filteredData = transformedData.filter(
    (patient) =>
      patient.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient?.age?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient?.gender?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    { label: "Full Name", accessor: "fullName" },
    { label: "Age", accessor: "age" },
    { label: "Date of Birth", accessor: "dob" },
    { label: "Gender", accessor: "gender" },
    { label: "BMI", accessor: "bmi" },
    { label: "Height", accessor: "height" },
    { label: "Weight", accessor: "weight" },
    {
      label: "",
      accessor: "action",
      render: (row: any) => {
        return row?.patientData?.results ? (
          <Link
            to={`/analyse/result/${
              getResultFilesLinks(row?.patientData?.results || "").vep
            }?vguid=${row?.patientData?.vguid}`}
            className="text-blue-600 hover:underline font-medium text-center"
          >
            Analyse
          </Link>
        ) : (
          <div
            data-tooltip-id="analyse-disabled"
            data-tooltip-content="No data rendered for this patient"
          >
            <p className="text-gray-400 font-medium cursor-pointer">Analyse</p>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6 px-8">
        <div className="max-w-7xl w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
            Patient Records
          </h1>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p>Loading patient data...</p>
            </div>
          ) : (
            <>
              {patientsList.length === 0 ? (
                <div className="text-center py-8">
                  <p>No patient records found</p>
                </div>
              ) : (
                <AnalysisTable
                  data={paginatedData}
                  columns={columns}
                  pageInfo={{ current: currentPage, total: totalPages }}
                  onPageChange={setCurrentPage}
                  onSearchChange={setSearchQuery}
                />
              )}
            </>
          )}
        </div>
      </div>
      <Tooltip id="analyse-disabled" />
    </>
  );
};

export default MyCases;
