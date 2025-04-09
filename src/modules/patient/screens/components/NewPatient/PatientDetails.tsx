// components/PatientDetails.tsx
import React from "react";
import FormSection from "./FormSection";
import FormField from "./FormField";

// store
import { usePatientStore } from "@/globalStore";

const baseInputStyles = `
  w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
  focus:ring-2 focus:ring-purple-500 focus:border-purple-500
  transition-all hover:border-purple-300
  shadow-sm disabled:opacity-50 disabled:cursor-not-allowed
`;

const PatientDetails: React.FC = () => {
  const { formData, setFormData } = usePatientStore();
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  const inputFields = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      required: true,
      placeholder: "First Name",
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      required: true,
      placeholder: "Last Name",
    },
    {
      type: "date",
      name: "birthDate",
      label: "Birth Date",
      max: today,
      required: true,
    },
    {
      type: "select",
      name: "gender",
      label: "Gender",
      required: true,
      options: [
        {
          value: "",
          label: "-- Select --",
        },
        {
          value: "6954a8cb-44c5-4bb4-ac49-f46343d2283d",
          label: "Male",
        },
        {
          value: "80821f39-d336-4784-9c68-5fd31bc59166",
          label: "Female",
        },
        {
          value: "633a5c75-3d57-418e-96bf-072a9aba6d20",
          label: "Other",
        },
      ],
    },
    {
      type: "number",
      name: "height",
      label: "Height (cm)",
      placeholder: "Height in cm",
      required: false,
    },
    {
      type: "weight",
      name: "weight",
      label: "Weight (kg)",
      placeholder: "Weight in kg",
      required: false,
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Email id",
      required: false,
    },
    {
      type: "number",
      name: "phone",
      label: "Mobile",
      placeholder: "",
      required: false,
    },
    {
      type: "date",
      name: "sampleCollectionDate",
      label: "Sample Collection Date",
      max: today,
      required: true,
    },
    {
      type: "date",
      name: "sampleReceiveDate",
      label: "Sample Receive Date",
      max: today,
      required: true,
    },
  ];

  return (
    <FormSection title="1. Patient Details">
      {inputFields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          required={field.required}
        >
          {field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={String(
                formData[field.name as keyof typeof formData] ?? ""
              )}
              onChange={handleChange}
              className={baseInputStyles}
              required={field.required}
            >
              {field.options?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label || "-- Select --"}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              max={field?.max}
              id={field.name}
              name={field.name}
              value={String(
                formData[field.name as keyof typeof formData] ?? ""
              )}
              onChange={handleChange}
              className={baseInputStyles}
              placeholder={field.placeholder}
              required={field.required}
              aria-required={field.required ? "true" : undefined}
            />
          )}
        </FormField>
      ))}
    </FormSection>
  );
};

export default PatientDetails;
