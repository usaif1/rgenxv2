import React from 'react';
import { useParams } from 'react-router';
import FamilyHistoryForm from '../components/FamilyHistoryForm';

// Dummy patient data -> same as the myCases Data
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

const EditPatientPage: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const patient = dummyPatients.find(p => p.patientguid === patientId);

  React.useEffect(() => {
    if (patient) {
      console.log("Editing patient:", patient);
    } else {
      console.warn(`Patient with ID ${patientId} not found`);
    }
  }, [patient, patientId]);

  return (
    <div className='mx-auto max-w-5xl pt-8'>
      <h2 className="w-full text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        1. Patient Details
      </h2>
      {patient ? (
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Patient Name</p>
              <p className="font-medium">{patient.firstname} {patient.lastname}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium">{patient.dob}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">{patient.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-medium">{patient.age}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Height</p>
              <p className="font-medium">{patient.height} cm</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Weight</p>
              <p className="font-medium">{patient.weight} kg</p>
            </div>
          </div>
          <div className="pb-1"></div>
          <FamilyHistoryForm initialData={patient.familyHistory} />
        </div>
      ) : (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          Patient record not found
        </div>
      )}
    </div>
  );
};

export default EditPatientPage;