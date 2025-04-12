import React from "react";
import FormSection from "../components/FormSection";
import FormField from "../components/FormField";
import { usePatientStore } from "@/globalStore";

interface FamilyHistoryFormProps {
  initialData?: {
    motherAge?: number;
    motherAgeConception?: number;
    gestationCompleteWeek?: number;
    birthWeight?: number;
    motherDiseaseStatus?: string;
    motherDiseaseDetails?: string;
    fatherAge?: number;
    fatherDiseaseStatus?: string;
    fatherDiseaseDetails?: string;
    otherInfo?: string;
  };
}

const baseInputStyles = `
  w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
  focus:ring-2 focus:ring-purple-500 focus:border-purple-500
  transition-all hover:border-purple-300
  shadow-sm disabled:opacity-50 disabled:cursor-not-allowed
`;


const FamilyHistoryForm: React.FC<FamilyHistoryFormProps> = ({ initialData }) => {
  const { formData, setFormData } = usePatientStore();
  const [originalData, setOriginalData] = React.useState({});

  React.useEffect(() => {
    if (initialData) {
      const initialFormData: Record<string, any> = {};
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          initialFormData[key] = value;
        }
      });

      setOriginalData(initialFormData);
      Object.entries(initialFormData).forEach(([key, value]) => {
        setFormData(key, value);
      });
    }
  }, [initialData, setFormData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  const handleCancel = () => {
    Object.entries(originalData).forEach(([key, value]) => {
      setFormData(key, value);
    });
  };

  const isFormModified = () => {
    return Object.keys(originalData).some(
      (key) => formData[key] !== originalData[key]
    );
  };

  const commonButtonStyles = `px-5 py-1.5 text-sm border rounded-md shadow-sm font-medium cursor-pointer`;



  return (
    <form>
      <FormSection title="2. Family History">
        <FormField label="Mother's Age" required={false}>
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
        )}

        <FormField label="Any Other Information" required={false}>
          <input
            type="text"
            name="otherInfo"
            value={formData.otherInfo}
            onChange={handleChange}
            className={baseInputStyles}
          />
        </FormField>
      </FormSection>

      <div className="px-6 py-4 flex justify-end">
        <button
          type="button"
          onClick={handleCancel}
          className={`${commonButtonStyles} border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-3`}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!isFormModified()}
          className={`${commonButtonStyles} border-transparent text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${!isFormModified() ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Update Details
        </button>
      </div>
    </form>
  );
};

export default FamilyHistoryForm;