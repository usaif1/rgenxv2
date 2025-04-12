import React, { useEffect, useState } from "react";
import AnalysisTable from "../components/AnalysisTable";
import { myCasesAPI } from "../api/myCasesAPI";
import useCasesStore from "../store/useCasesStore";
import { Link } from "react-router";
import { Pencil } from "@phosphor-icons/react";

const MyCases: React.FC = () => {
  // Shenanigans for API down moments
  // Dummy data to use when API is down
  const dummyPatients = [
    {
      patientguid: "e9b0156b-2d51-40f3-a918-e86695aed722",
      firstname: "John",
      lastname: "Doe",
      height: 175,
      weight: 72,
      gender: "Male",
      dob: "15 Jan 1990",
      age: "33 years",
      createddate: "10 Apr 2023",
      familyHistory: {
        motherAge: 58,
        motherAgeConception: 25,
        gestationCompleteWeek: 39,
        birthWeight: 3.4,
        motherDiseaseStatus: "yes",
        motherDiseaseDetails: "Gestational diabetes",
        fatherAge: 60,
        fatherDiseaseStatus: "yes",
        fatherDiseaseDetails: "Hypertension",
        otherInfo: "Maternal grandmother had breast cancer"
      }
    },
    {
      patientguid: "a2cd5232-40db-4dff-adde-376e3c2f933b",
      firstname: "Jane",
      lastname: "Smith",
      height: 165,
      weight: 58,
      gender: "Female",
      dob: "22 Mar 1985",
      age: "38 years",
      createddate: "11 Apr 2023",
      familyHistory: {
        motherAge: 62,
        motherAgeConception: 24,
        gestationCompleteWeek: 37,
        birthWeight: 2.9,
        motherDiseaseStatus: "no",
        motherDiseaseDetails: "",
        fatherAge: 65,
        fatherDiseaseStatus: "no",
        fatherDiseaseDetails: "",
        otherInfo: "No significant family history"
      }
    },
    {
      patientguid: "b3ef6343-51ec-4eef-bd9f-467e4d3f944c",
      firstname: "Robert",
      lastname: "Johnson",
      height: 180,
      weight: 80,
      gender: "Male",
      dob: "05 May 1978",
      age: "45 years",
      createddate: "12 Apr 2023",
      familyHistory: {
        motherAge: 70,
        motherAgeConception: 25,
        gestationCompleteWeek: 40,
        birthWeight: 3.8,
        motherDiseaseStatus: "yes",
        motherDiseaseDetails: "Pre-eclampsia",
        fatherAge: 72,
        fatherDiseaseStatus: "yes",
        fatherDiseaseDetails: "Type 2 diabetes, Heart disease",
        otherInfo: "Both parents had late-onset conditions"
      }
    }
  ];



  // Shenanigans end here


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
  //! Change the dummmyPaitents to PatientsList in prod : )
  const transformedData = dummyPatients.map((patient) => ({
    fullName: `${patient.firstname} ${patient.lastname}`,
    age: patient.age,
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
      patient.age.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.gender.toLowerCase().includes(searchQuery.toLowerCase())
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
        console.log("row", row);
        return (
          <div className="flex items-center gap-2">
            <Link to={`/cases/${row.patientguid}/edit`}
              className="text-gray-500 hover:underline hover:text-gray-800 font-medium flex items-center gap-1 group">
              <Pencil className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              Edit
            </Link>
            <p className="text-gray-300 text-sm font-light select-none">|</p>
            <Link
              to={`/analyse/vcf/${row.patientguid}`}
              className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
            >
              Analyse
            </Link>
          </div>
        );
      },
    },
  ];

  return (
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
            {/*! change !== to === in prod*/}
            {patientsList.length !== 0 ? (
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
  );
};

export default MyCases;
