export type PatientFormData = {
  // patient details
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  height: string;
  weight: string;
  email: string;
  phone: string;
  sampleCollectionDate: string;
  sampleReceiveDate: string;

  //family history
  motherAge: string;
  motherAgeConception: string;
  gestationCompleteWeek: string;
  birthWeight: string;
  motherDiseaseStatus: string;
  motherDiseaseDetails: string;
  fatherAge: string;
  fatherDiseaseStatus: string;
  fatherDiseaseDetails: string;
  otherInfo: string;
};

export type CreateNewPatientPayload = {
  firstname: { value: string };
  lastname: { value: string };
  dob: { value: string };
  gender: { value: string };
  height: { value: string };
  weight: { value: string };
  email: { value: string };
  mobile: { value: string };
  sampleCollectionDate: { value: string };
  sampleReceiveDate: { value: string };
};

export type AnalysisMode = "phenotype2genotype" | "genotype2phenotype" | string;

export type PatientMetadata = {
  analysisMode: AnalysisMode;
  hpoids: any[];
  referenceGenome: string;
  vcfFile: File | null;
};

export type Symptom = {
  symptomguid: string;
  name: string;
  hpoid: string;
  definition: string;
  comment: string;
  descendantcount: string;
  synonyms: string;
  xrefs: string;
  column1: string;
  column2: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
  is_active: boolean;
  is_deleted: boolean;
  diseaseguid: string | null;
};

export type Patient = {
  patientguid: string;
  firstname: string;
  lastname: string;
  dob: string; // Consider using Date if you plan to manipulate it as a date
  gender?: string;
  genderguid: string | null;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  is_active: boolean;
  is_deleted: boolean;
  doctorguid: string;
  email: string;
  mobile: string;
  height: number;
  weight: number;
  vguid: string;
  age?: string;
};
