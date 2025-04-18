export type Patient = {
  patientguid: string;
  firstname: string;
  lastname: string;
  age: string;
  createddate: string;
  dob: string;
  doctorguid: string;
  gender: string;
  height: number;
  weight: number;
  vguid: string;
};

export interface FamilyInformation {
  familyinformationguid: string; // UUID format
  patientguid: string; // UUID format
  mother_name: string;
  mother_age: number;
  mother_age_at_conception: number | null;
  week_of_complete_gestation: number | null;
  is_mother_suffering_from_any_disease: boolean;
  father_name: string;
  father_age: number | null;
  is_father_suffering_from_any_disease: boolean;
  patient_weight_at_birth: number | null;
  any_other_information: string | null;
  created_at: string; // ISO 8601 date-time format
  created_by: string; // UUID format
  updated_at: string; // ISO 8601 date-time format
  updated_by: string; // UUID format
  father_disease_name: string;
  mother_disease_name: string;
}
