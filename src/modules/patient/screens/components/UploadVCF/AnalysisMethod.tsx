// dependencies
import { usePatientStore } from "@/globalStore";

// Reuse base input styles from your design system
const baseInputStyles = `
 w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
 focus:ring-2 focus:ring-purple-500 focus:border-purple-500
 hover:border-purple-300 shadow-sm
`;

// components/AnalysisMethod.tsx
const AnalysisMethod: React.FC = () => {
  const { formData, setFormData } = usePatientStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        5. Analysis Method
      </h2>

      <div className="space-y-1">
        <label
          htmlFor="analysisMethod"
          className="block text-xs font-medium text-gray-600"
        >
          Method used to generate VCF file
        </label>
        <textarea
          id="analysisMethod"
          name="analysisMethod"
          value={formData.analysisMethod}
          onChange={handleChange}
          className={baseInputStyles}
          placeholder="Add analysis method"
          aria-describedby="methodHelp"
        />
        <p id="methodHelp" className="text-xs text-gray-500 mt-1">
          Example: "Whole exome sequencing using Illumina NovaSeq 6000"
        </p>
      </div>
    </section>
  );
};

export default AnalysisMethod;
