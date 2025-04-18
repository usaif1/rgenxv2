import React from "react";
// import FormSection from "./FormSection";
import FormField from "./FormField";
import { usePatientStore } from "@/globalStore";

const baseInputStyles = `
  w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
  focus:ring-2 focus:ring-purple-500 focus:border-purple-500
  transition-all hover:border-purple-300
  shadow-sm disabled:opacity-50 disabled:cursor-not-allowed
`;

const FamilyHistory: React.FC = () => {
  const { formData, setFormData } = usePatientStore();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  return (
    <section title="2. Family History">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        2. Family History
      </h2>
      {/* <FormField label="Mother's Age" required={false}>
        <input
          type="number"
          name="motherAge"
          value={formData.motherAge}
          onChange={handleChange}
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Mother's Age at Conception" required={false}>
        <input
          type="number"
          name="motherAgeConception"
          value={formData.motherAgeConception}
          onChange={handleChange}
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Week of Complete Gestation" required={false}>
        <input
          type="number"
          name="gestationCompleteWeek"
          value={formData.gestationCompleteWeek}
          onChange={handleChange}
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Patient's Weight at Birth" required={false}>
        <input
          type="number"
          name="birthWeight"
          value={formData.birthWeight}
          onChange={handleChange}
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Does Mother Have a Disease" required={false}>
        <select
          name="motherDiseaseStatus"
          value={formData.motherDiseaseStatus}
          onChange={handleChange}
          className={baseInputStyles}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </FormField>

      {formData.motherDiseaseStatus === "yes" && (
        <FormField
          label="Disease Name and Information (Mother)"
          required={false}
        >
          <input
            type="text"
            name="motherDiseaseDetails"
            value={formData.motherDiseaseDetails}
            onChange={handleChange}
            className={baseInputStyles}
          />
        </FormField>
      )}

      <FormField label="Father's Age" required={false}>
        <input
          type="number"
          name="fatherAge"
          value={formData.fatherAge}
          onChange={handleChange}
          className={baseInputStyles}
        />
      </FormField>

      <FormField label="Does Father Have a Disease" required={false}>
        <select
          name="fatherDiseaseStatus"
          value={formData.fatherDiseaseStatus}
          onChange={handleChange}
          className={baseInputStyles}
        >
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </FormField>

      {formData.fatherDiseaseStatus === "yes" && (
        <FormField
          label="Disease Name and Information (Father)"
          required={false}
        >
          <input
            type="text"
            name="fatherDiseaseDetails"
            value={formData.fatherDiseaseDetails}
            onChange={handleChange}
            className={baseInputStyles}
          />
        </FormField>
      )} */}

      <FormField label="Enter Family History" required={false}>
        <textarea
          name="otherInfo"
          value={formData.otherInfo}
          onChange={handleChange}
          style={{
            width: "100%",
            minHeight: "120px",
          }}
          className={baseInputStyles}
        />
      </FormField>
    </section>
  );
};

export default FamilyHistory;
