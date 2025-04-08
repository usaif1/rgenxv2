export type PatientFormData = {
  // patient details
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  height: string;
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

  //   //   upload vcf
  //   referenceGenome: string;
  //   vcfFile: File | null;

  //   // analysis mode
  //   analysisMode: string;
  //   phenotype: string;
};
