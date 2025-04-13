// dependencies
import React from "react";

// store
import { usePatientStore } from "@/globalStore";

// components
import Symptoms from "./Symptoms";

const options = [
  {
    label: "Genotype to Phenotype ",
    value: "genotype2phenotype",
  },
  {
    label: "Phenotype to Genotype",
    value: "phenotype2genotype",
  },
];

const ModeSelector: React.FC = () => {
  const { metadata, setMetadata } = usePatientStore();

  const baseInputStyles = `
    w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
    focus:ring-2 focus:ring-purple-500 focus:border-purple-500
    transition-all hover:border-purple-300 shadow-sm cursor-pointer
  `;

  const RequiredAsterisk = () => <span className="text-red-500 ml-1">*</span>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMetadata(name, value);
  };

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        3. Analysis Mode
      </h2>

      <div className="space-y-4">
        {/* Analysis Mode Dropdown */}
        <div className="space-y-1">
          <label
            htmlFor="analysisMode"
            className="block text-xs font-medium text-gray-600"
          >
            Analysis Mode <RequiredAsterisk />
          </label>
          <select
            id="analysisMode"
            name="analysisMode"
            onChange={handleChange}
            className={baseInputStyles}
            required
            aria-describedby="modeHelp"
          >
            <option value="">-- Select Analysis Mode --</option>
            {options.map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
          <p id="modeHelp" className="text-xs text-gray-500 mt-1">
            Select the analysis approach for your investigation
          </p>
        </div>

        {/* Conditional Phenotype Input */}
        {metadata.analysisMode === "phenotype2genotype" ? <Symptoms /> : null}
        {/* {metadata.analysisMode === "phenotype2genotype" && (
          <div className="space-y-1">
            <label
              htmlFor="phenotype"
              className="block text-xs font-medium text-gray-600"
            >
              Search Symptoms <RequiredAsterisk />
            </label>
            <input
              type="text"
              id="phenotype"
              name="phenotype"
              onChange={handleChange}
              className={baseInputStyles}
              placeholder="Start typing to search symptoms..."
              required
              aria-describedby="phenotypeHelp"
            />
            <p id="phenotypeHelp" className="text-xs text-gray-500 mt-1">
              Enter known phenotypes or symptoms (e.g., "Marfan syndrome
              features")
            </p>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ModeSelector;
