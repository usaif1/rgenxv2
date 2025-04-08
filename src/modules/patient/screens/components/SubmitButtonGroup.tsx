// dependencies
import React from "react";

const SubmitButtonGroup: React.FC = () => {
  const commonButtonStyles = `px-5 py-1.5 text-sm border rounded-md shadow-sm font-medium cursor-pointer`;

  return (
    <div className="px-6 py-4 flex justify-end">
      <button
        type="submit"
        className={`${commonButtonStyles} border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mr-3`}
      >
        Cancel
      </button>
      <button
        type="submit"
        className={`${commonButtonStyles} border-transparent text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButtonGroup;
