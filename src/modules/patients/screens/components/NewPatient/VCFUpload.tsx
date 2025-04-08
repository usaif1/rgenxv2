// components/VcfUpload.tsx
const VcfUpload: React.FC = () => {
  const baseInputStyles = `
    w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
    focus:ring-2 focus:ring-purple-500 focus:border-purple-500
    hover:border-purple-300 shadow-sm
  `;

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        3. Upload VCF
      </h2>

      <div className="space-y-4">
        {/* Reference Genome Selection */}
        <div className="space-y-1">
          <label
            htmlFor="referenceGenome"
            className="block text-xs font-medium text-gray-600"
          >
            Reference Genome
          </label>
          <select
            id="referenceGenome"
            name="referenceGenome"
            className={baseInputStyles}
            aria-describedby="genomeHelp"
          >
            <option value="">Select the reference genome</option>
            <option value="hg19">hg19</option>
            <option value="hg38">hg38</option>
          </select>
          <p id="genomeHelp" className="text-xs text-gray-500 mt-1">
            Select the reference genome used for alignment
          </p>
        </div>

        {/* File Upload */}
        <div className="space-y-1">
          <label
            htmlFor="vcfFile"
            className="block text-xs font-medium text-gray-600"
          >
            VCF File Upload
          </label>
          <div
            className={`${baseInputStyles} border-dashed hover:border-purple-300`}
          >
            <div className="flex justify-center items-center px-6 pt-5 pb-6 cursor-pointer">
              <div className="text-center space-y-2">
                <input
                  type="file"
                  name="vcfFile"
                  id="vcfFile"
                  className="sr-only"
                  accept=".vcf,.vcf.gz"
                  aria-describedby="fileHelp"
                />
                <svg
                  className="mx-auto h-8 w-8 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-purple-600 hover:text-purple-500">
                    Click to upload
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    VCF or compressed VCF.gz (max 10MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p id="fileHelp" className="text-xs text-gray-500 mt-1">
            Supported formats: .vcf, .vcf.gz (gzip compressed)
          </p>
        </div>
      </div>
    </section>
  );
};

export default VcfUpload;
