import React, { useEffect, useState } from 'react';
import AnalysisTable from '../components/AnalysisTable';
import { myCasesAPI } from '../auth/myCasesAPI';
import useCasesStore from '../store/useCasesStore';

const MyCases: React.FC = () => {
  const { startLoader, patientsList, stopLoader } = useCasesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllPatients();
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
    return 'N/A';
  };

  // Transform patient data for the table
  const transformedData = patientsList.map(patient => ({
    fullName: `${patient.firstname} ${patient.lastname}`,
    age: patient.age,
    dob: patient.dob,
    gender: patient.gender,
    bmi: calculateBMI(patient.height, patient.weight),
    height: `${patient.height} cm`,
    weight: `${patient.weight} kg`,
    patientData: patient // Keep original data for reference
  }));

  // Filter data based on search query
  const filteredData = transformedData.filter(patient =>
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
    { label: 'Full Name', accessor: 'fullName' },
    { label: 'Age', accessor: 'age' },
    { label: 'Date of Birth', accessor: 'dob' },
    { label: 'Gender', accessor: 'gender' },
    { label: 'BMI', accessor: 'bmi' },
    { label: 'Height', accessor: 'height' },
    { label: 'Weight', accessor: 'weight' },
    {
      label: '',
      accessor: 'action',
      render: () => (
        <button className="text-blue-600 hover:underline font-medium">
          View Details
        </button>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6 px-8">
      <div className='max-w-7xl w-full'>
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
  );
};

export default MyCases;