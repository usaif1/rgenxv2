// components/ClinicalDetails.tsx
import React from "react";

const ClinicalDetails: React.FC = () => {
  // Reuse base styles from your design system
  const baseInputStyles = `w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
    focus:ring-2 focus:ring-purple-500 focus:border-purple-500
    hover:border-purple-300 shadow-sm
    min-h-[120px]`;

  return (
    <div>
      <h2 className="w-full text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        2. Clinical Details
      </h2>
      <div className="w-full space-y-4">
        <div className="w-full space-y-1">
          <label
            htmlFor="clinicalHistory"
            className="block text-xs font-medium text-gray-600"
          >
            Patient's Clinical History
          </label>
          <textarea
            id="clinicalHistory"
            name="clinicalHistory"
            className={baseInputStyles}
            placeholder="Add patient's clinical history"
            aria-describedby="clinicalHistoryHelp"
          />
          <p id="clinicalHistoryHelp" className="text-xs text-gray-500 mt-1">
            Include relevant medical history, current symptoms, and treatment
            context
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalDetails;
