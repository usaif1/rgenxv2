// components/GermlineTriosCard.tsx
const GermlineTriosCard: React.FC = () => (
  <div className="mt-8 transition-all duration-500 ease-in-out">
    <div className="relative w-full h-[28rem] bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col items-center justify-start border-2 border-gray-200">
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
        </svg>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-700">Germline Trios</h3>
        <p className="text-gray-600/80 text-sm max-w-xs">
          Family-based analysis (proband + parents)
        </p>
      </div>
      <button className="mt-8 px-6 py-3 bg-gray-300 text-gray-600 rounded-full font-medium cursor-not-allowed">
        Coming Soon
      </button>
    </div>
  </div>
);
export default GermlineTriosCard;
