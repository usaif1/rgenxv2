// components/FamilyHistory.tsx
import React, { useState } from "react";
import FormSection from "./FormSection";
import FormField from "./FormField";

const baseInputStyles = `
  w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
  focus:ring-2 focus:ring-purple-500 focus:border-purple-500
  transition-all hover:border-purple-300
  shadow-sm disabled:opacity-50 disabled:cursor-not-allowed
`;

const FamilyHistory: React.FC = () => {
  const [motherDiseaseStatus, setMotherDiseaseStatus] = useState("");
  const [fatherDiseaseStatus, setFatherDiseaseStatus] = useState("");

  return (
    <FormSection title="2. Family History">
      <FormField label="Mother's Age" required={false}>
        <input type="number" name="motherAge" className={baseInputStyles} />
      </FormField>

      <FormField label="Mother's Age at Conception" required={false}>
        <input
          type="number"
          name="motherAgeConception"
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Week of Complete Gestation" required={false}>
        <input
          type="number"
          name="gestationCompleteWeek"
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Patient's Weight at Birth" required={false}>
        <input type="number" name="birthWeight" className={baseInputStyles} />
      </FormField>

      <FormField label="Does Mother Have a Disease" required={false}>
        <select
          name="motherDiseaseStatus"
          value={motherDiseaseStatus}
          onChange={(e) => setMotherDiseaseStatus(e.target.value)}
          className={baseInputStyles}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </FormField>

      {motherDiseaseStatus === "yes" && (
        <FormField
          label="Disease Name and Information (Mother)"
          required={false}
        >
          <input
            type="text"
            name="motherDiseaseDetails"
            className={baseInputStyles}
          />
        </FormField>
      )}

      <FormField label="Father's Age" required={false}>
        <input type="number" name="fatherAge" className={baseInputStyles} />
      </FormField>

      <FormField label="Does Father Have a Disease" required={false}>
        <select
          name="fatherDiseaseStatus"
          value={fatherDiseaseStatus}
          onChange={(e) => setFatherDiseaseStatus(e.target.value)}
          className={baseInputStyles}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </FormField>

      {fatherDiseaseStatus === "yes" && (
        <FormField
          label="Disease Name and Information (Father)"
          required={false}
        >
          <input
            type="text"
            name="fatherDiseaseDetails"
            className={baseInputStyles}
          />
        </FormField>
      )}

      <FormField label="Any Other Information" required={false}>
        <input type="text" name="otherInfo" className={baseInputStyles} />
      </FormField>
    </FormSection>
  );
};

export default FamilyHistory;
