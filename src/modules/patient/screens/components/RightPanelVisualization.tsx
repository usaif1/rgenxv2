// components/RightPanelVisualization.tsx
const RightPanelVisualization: React.FC = () => (
  <div className="w-1/2 hidden lg:block bg-gradient-to-b from-indigo-50 to-purple-50 p-8 border-l border-gray-200">
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
        <div className="blur-[2px] bg-white/60 p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
          <span className="text-xs text-gray-600">Indels</span>
        </div>
        <div className="blur-[2px] bg-white/60 p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
          <span className="text-xs text-gray-600">CNVs</span>
        </div>
        <div className="blur-[2px] bg-white/60 p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-xs text-gray-600">SVs</span>
        </div>
      </div>
    </div>
  </div>
);
export default RightPanelVisualization;
