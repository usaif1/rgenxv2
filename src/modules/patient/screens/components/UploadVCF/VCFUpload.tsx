// dependencies
import React, { ChangeEvent, useRef } from "react";

// store
import { usePatientStore } from "@/globalStore";

const baseInputStyles = `
  w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
  focus:ring-2 focus:ring-purple-500 focus:border-purple-500
  transition-all hover:border-purple-300 shadow-sm cursor-pointer
`;

const VcfUpload: React.FC = () => {
  const { metadata, setMetadata } = usePatientStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // 👉 step 1

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setMetadata("vcfFile", file);
  };

  const clearFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMetadata("vcfFile", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // 👉 step 2: reset file input
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        2. Upload VCF
      </h2>

      {/* Reference Genome Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="referenceGenome"
          className="block text-xs font-medium text-gray-600 mb-1"
        >
          Reference Genome
        </label>
        <select
          id="referenceGenome"
          value={metadata.referenceGenome}
          onChange={(e) => {
            setMetadata("referenceGenome", e.target.value);
          }}
          name="referenceGenome"
          className={baseInputStyles}
        >
          <option value="">Select the reference genome</option>
          <option value="hg19">hg19</option>
          <option value="hg38">hg38</option>
        </select>
      </div>

      {/* File Upload Section */}
      <div>
        <label
          htmlFor="vcfFile"
          className="block text-xs font-medium text-gray-600 mb-1"
        >
          VCF File Upload
        </label>

        {/* Upload Dropzone Style Box */}
        <label
          htmlFor="vcfFile"
          className="flex justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-300 transition-colors cursor-pointer"
        >
          {metadata?.vcfFile ? (
            <div className="w-full flex flex-col h-full items-center justify-center">
              <span className="block truncate max-w-[200px] text-purple-600 font-medium">
                {metadata.vcfFile.name}
              </span>
              <button
                type="button"
                onClick={clearFile}
                className="bg-white hover:bg-red-500 border border-red-500 flex items-center justify-center text-red-500 hover:text-white rounded-md font-bold px-2 py-1 mt-4 transition-colors duration-200 ease-in-out text-sm"
              >
                Clear
              </button>
            </div>
          ) : (
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-10 w-10 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="text-xs text-gray-600">
                <span className="text-purple-600 font-medium hover:text-purple-500">
                  Click to upload
                </span>{" "}
                or drag and drop
              </div>
              <p className="text-xs text-gray-500">VCF or VCF.GZ (max 10MB)</p>
            </div>
          )}
        </label>

        {/* Hidden input */}
        <input
          ref={fileInputRef}
          id="vcfFile"
          name="vcfFile"
          type="file"
          className="sr-only"
          accept=".vcf,.vcf.gz"
          onChange={handleFileChange}
        />
      </div>
    </section>
  );
};

export default VcfUpload;
