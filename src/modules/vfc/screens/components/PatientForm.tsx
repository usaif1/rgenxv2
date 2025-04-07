import React, { useState, useRef } from "react";

const PatientDataForm = () => {
  const [selectedMode, setSelectedMode] = useState("");
  const [showGermlineCard, setShowGermlineCard] = useState(false);
  const formContentRef = useRef(null);

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden flex">
        {/* Left Panel (70%) - Form */}
        <form
          className="w-full lg:w-7/12 flex flex-col"
          onSubmit={handleSubmit}
        >
          {/* Form Header with Gradient */}
          <div className="bg-blue-800 p-6 text-white">
            <h1 className="text-xl font-bold">Patient Data Collection</h1>
            <p className="text-white/90 text-sm">
              Please fill in all required fields marked with *
            </p>
          </div>

          {/* Scrollable Form Content */}
          <div
            ref={formContentRef}
            className="flex-1 overflow-y-auto p-6"
            style={{
              maxHeight: "calc(100vh - 200px)",
              scrollbarWidth: "thin",
              scrollbarColor: "#a78bfa #f3f4f6",
            }}
          >
            {/* Custom scrollbar styling for Webkit browsers */}
            <style>
              {`
                .scrollable-form::-webkit-scrollbar {
                  width: 8px;
                }
                .scrollable-form::-webkit-scrollbar-track {
                  background: #f3f4f6;
                  border-radius: 4px;
                }
                .scrollable-form::-webkit-scrollbar-thumb {
                  background-color: #a78bfa;
                  border-radius: 4px;
                }
                .scrollable-form::-webkit-scrollbar-thumb:hover {
                  background-color: #8b5cf6;
                }
              `}
            </style>

            {/* Section 1 - Patient Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                1. Patient Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Birth Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      name="height"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      placeholder="Height in cm"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      required
                    >
                      <option value="">-- Select --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      placeholder="Weight in kg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of your form sections... */}
            {/* Section 2 - Clinical Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                2. Clinical Details
              </h2>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Patient's Clinical History
                </label>
                <textarea
                  name="clinicalHistory"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm min-h-[120px]"
                  placeholder="Add patient's clinical history"
                />
              </div>
            </div>

            {/* Section 3 - Family History */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                3. Family History
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Known consanguinity in family
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="consanguinity"
                        value="yes"
                        className="h-3 w-3 text-purple-600"
                      />
                      <span className="ml-2 text-gray-700 text-xs">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="consanguinity"
                        value="no"
                        className="h-3 w-3 text-purple-600"
                      />
                      <span className="ml-2 text-gray-700 text-xs">No</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="consanguinity"
                        value="unknown"
                        className="h-3 w-3 text-purple-600"
                      />
                      <span className="ml-2 text-gray-700 text-xs">
                        Unknown
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Description
                  </label>
                  <textarea
                    name="familyHistoryDescription"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm min-h-[80px]"
                    placeholder="Add more details about the patient's family history"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Doctors Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                4. Doctors Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Ordering Physician
                  </label>
                  <input
                    type="text"
                    name="physician"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                    placeholder="Add doctor's name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Hospital
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                    placeholder="Add hospital name"
                  />
                </div>
              </div>
            </div>

            {/* Section 5 - Method */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                5. Method
              </h2>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Method used to generate VCF file
                </label>
                <input
                  type="text"
                  name="method"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                  placeholder="Add method from which vcf file has been generated"
                />
              </div>
            </div>

            {/* Section 6 - Upload VCF */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                6. Upload VCF
              </h2>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Reference Genome
                </label>
                <select
                  name="referenceGenome"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                >
                  <option value="">Select the reference genome</option>
                  <option value="hg19">hg19</option>
                  <option value="hg38">hg38</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  VCF File Upload
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-purple-300 transition-colors">
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
                    <div className="flex text-xs text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="vcfFile"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      VCF files up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 - Mode Selection */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                7. Analysis Mode
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Mode <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="analysisMode"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                    value={selectedMode}
                    onChange={handleModeChange}
                    required
                  >
                    <option value="">-- Select Mode --</option>
                    <option value="genotypeToPhenotype">
                      Genotype to Phenotype
                    </option>
                    <option value="phenotypeToGenotype">
                      Phenotype to Genotype
                    </option>
                  </select>
                </div>

                {selectedMode === "phenotypeToGenotype" && (
                  <div className="mt-3 transition-all duration-300 ease-in-out">
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Phenotype <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phenotype"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-purple-300 shadow-sm"
                      placeholder="Type to search..."
                      required
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Germline Trios Card - appears when scrolled down */}
            {showGermlineCard && (
              <div className="mt-8 transition-all duration-500 ease-in-out">
                <div className="group relative w-full h-[28rem] bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col items-center justify-start border-2 border-gray-200">
                  <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-sm z-10 flex items-center justify-center">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                      Coming Soon
                    </span>
                  </div>

                  <div className="relative w-full h-40 flex items-center justify-center mt-6 mb-8">
                    <svg
                      width="180"
                      height="180"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Family trio DNA strands */}
                      <path
                        d="M60 40 Q80 60 60 80 Q40 100 60 120 Q80 140 60 160"
                        stroke="#94A3B8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M100 30 Q120 50 100 70 Q80 90 100 110 Q120 130 100 150"
                        stroke="#94A3B8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M140 40 Q160 60 140 80 Q120 100 140 120 Q160 140 140 160"
                        stroke="#94A3B8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />

                      {/* Connecting lines */}
                      <line
                        x1="70"
                        y1="60"
                        x2="90"
                        y2="60"
                        stroke="#64748B"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="70"
                        y1="100"
                        x2="90"
                        y2="100"
                        stroke="#64748B"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="110"
                        y1="60"
                        x2="130"
                        y2="60"
                        stroke="#64748B"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="110"
                        y1="100"
                        x2="130"
                        y2="100"
                        stroke="#64748B"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800">
                      Germline Trios
                    </h3>
                    <p className="text-gray-600/80 text-sm max-w-xs">
                      Family-based analysis (proband + parents)
                    </p>
                  </div>

                  <button className="mt-8 px-6 py-3 bg-gray-300 text-gray-600 rounded-full font-medium cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Form Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-200">
            <button
              type="button"
              className="px-5 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right Panel (30%) - Visualization */}
        <div className="hidden lg:block w-5/12 bg-gradient-to-b from-indigo-50 to-purple-50 p-8 border-l border-gray-200">
          <div className="h-full flex flex-col items-center justify-center">
            {/* DNA SVG Visualization */}
            <div className="group relative w-full h-64 flex items-center justify-center mb-8">
              <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-105"
              >
                <path
                  d="M110 40 Q130 60 110 80 Q90 100 110 120 Q130 140 110 160 Q90 180 110 180"
                  stroke="url(#dnaGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[4]"
                />
                <path
                  d="M90 40 Q70 60 90 80 Q110 100 90 120 Q70 140 90 160 Q110 180 90 180"
                  stroke="url(#dnaGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[4]"
                />

                {[40, 60, 80, 100, 120, 140, 160].map((y, i) => (
                  <line
                    key={y}
                    x1={110 - Math.sin(i) * 20}
                    y1={y}
                    x2={90 + Math.sin(i) * 20}
                    y2={y}
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-all duration-300 group-hover:stroke-[3]"
                  />
                ))}

                <defs>
                  <linearGradient
                    id="dnaGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Genomic Analysis
              </h3>
              <p className="text-indigo-600/80 text-xs max-w-xs">
                Comprehensive variant analysis with clinical interpretation
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 w-full">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-xs text-gray-600">SNVs</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-xs text-gray-600">Indels</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                <span className="text-xs text-gray-600">CNVs</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs text-gray-600">SVs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDataForm;
