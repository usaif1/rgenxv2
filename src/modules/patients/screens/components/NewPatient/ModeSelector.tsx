// components/ModeSelector.tsx
interface ModeSelectorProps {
  selectedMode: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({
  selectedMode,
  onChange,
}) => {
  const baseInputStyles = `
    w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
    focus:ring-2 focus:ring-purple-500 focus:border-purple-500
    transition-all hover:border-purple-300 shadow-sm
  `;

  const RequiredAsterisk = () => <span className="text-red-500 ml-1">*</span>;

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        4. Analysis Mode
      </h2>

      <div className="space-y-4">
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
            className={baseInputStyles}
            value={selectedMode}
            onChange={onChange}
            required
            aria-describedby="modeHelp"
          >
            <option value="">-- Select Analysis Mode --</option>
            <option value="genotypeToPhenotype">Genotype to Phenotype</option>
            <option value="phenotypeToGenotype">Phenotype to Genotype</option>
          </select>
          <p id="modeHelp" className="text-xs text-gray-500 mt-1">
            Select the analysis approach for your investigation
          </p>
        </div>

        {selectedMode === "phenotypeToGenotype" && (
          <div className="space-y-1">
            <label
              htmlFor="phenotypeInput"
              className="block text-xs font-medium text-gray-600"
            >
              Phenotype Search <RequiredAsterisk />
            </label>
            <input
              type="text"
              id="phenotypeInput"
              name="phenotype"
              className={baseInputStyles}
              placeholder="Start typing to search phenotypes..."
              required
              aria-describedby="phenotypeHelp"
            />
            <p id="phenotypeHelp" className="text-xs text-gray-500 mt-1">
              Enter known phenotypes or symptoms (e.g., "Marfan syndrome
              features")
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModeSelector;
