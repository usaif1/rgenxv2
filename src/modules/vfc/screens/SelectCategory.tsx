// dependencies
import React from "react";

const Germline: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Genomic Analysis Options
        </h2>

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
          {/* Germline Proband Card */}
          <div className="group relative w-72 h-[28rem] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col items-center justify-start transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 hover:border-blue-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,100,220,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative w-full h-40 flex items-center justify-center mt-6 mb-8">
              <svg
                width="180"
                height="180"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-105"
              >
                <path
                  d="M100 30 Q120 50 100 70 Q80 90 100 110 Q120 130 100 150 Q80 170 100 170"
                  stroke="url(#dnaGradient1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[3.5]"
                />
                <path
                  d="M80 30 Q60 50 80 70 Q100 90 80 110 Q60 130 80 150 Q100 170 80 170"
                  stroke="url(#dnaGradient1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[3.5]"
                />

                {[30, 50, 70, 90, 110, 130, 150].map((y, i) => (
                  <line
                    key={y}
                    x1={100 - Math.sin(i) * 20}
                    y1={y}
                    x2={80 + Math.sin(i) * 20}
                    y2={y}
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="transition-all duration-300 group-hover:stroke-[2.5]"
                  />
                ))}

                <defs>
                  <linearGradient
                    id="dnaGradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Germline Proband
              </h3>
              <p className="text-blue-600/80 text-sm max-w-xs">
                Analyze inherited variants from a single individual
              </p>
            </div>

            <button className="relative mt-8 z-20 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 active:scale-95">
              Select Analysis
            </button>

            <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Available
            </div>
          </div>

          {/* Germline Trios Card */}
          <div className="group relative w-72 h-[28rem] bg-gradient-to-br from-`gray-50 to-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col items-center justify-start border-2 border-gray-200">
            <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
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

          {/* Somatic Analysis Card */}
          <div className="group relative w-72 h-[28rem] bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col items-center justify-start border-2 border-purple-100">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm">
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
                {/* Cancer cell with mutations */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="url(#cellGradient)"
                  stroke="#7E22CE"
                  strokeWidth="2"
                />
                <circle cx="80" cy="80" r="8" fill="#EC4899" />
                <circle cx="120" cy="70" r="6" fill="#EC4899" />
                <circle cx="110" cy="120" r="7" fill="#EC4899" />
                <circle cx="70" cy="110" r="5" fill="#EC4899" />

                {/* DNA strand inside cell */}
                <path
                  d="M90 110 Q100 90 110 110 Q100 130 90 110"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M95 105 Q100 95 105 105"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />

                <defs>
                  <radialGradient
                    id="cellGradient"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100 100) rotate(90) scale(60)"
                  >
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#7E22CE" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                Somatic Analysis
              </h3>
              <p className="text-purple-600/80 text-sm max-w-xs">
                Identify acquired mutations in tumor samples
              </p>
            </div>

            <button className="mt-8 px-6 py-3 bg-purple-300 text-purple-700 rounded-full font-medium cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Germline;
