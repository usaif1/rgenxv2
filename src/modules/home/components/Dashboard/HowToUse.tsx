import { FaUpload, FaUserShield, FaChartLine, FaLock } from "react-icons/fa";

const HowToUse = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          How to Use <span className="text-blue-800">Rgen</span>
          <span className="text-yellow-400">X</span> Platform
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Getting Started */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaUserShield className="mr-2 text-blue-600" />
              Account Setup
            </h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Register</strong> using your professional email and
                credentials
              </li>
              <li>
                <strong>Verify</strong> your healthcare professional status
              </li>
              <li>
                <strong>Complete</strong> your institutional profile
              </li>
            </ol>
          </div>

          {/* Data Submission */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaUpload className="mr-2 text-blue-600" />
              Data Submission
            </h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Prepare</strong> VCF files following our template
              </li>
              <li>
                <strong>Upload</strong> through secure encrypted channels
              </li>
              <li>
                <strong>Tag</strong> files with required metadata
              </li>
            </ol>
          </div>
        </div>

        {/* Analysis Workflow */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <FaChartLine className="mr-2 text-blue-600" />
            Analysis Workflow
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium mb-2">1. Select Pipeline</h3>
              <p className="text-gray-600">
                Choose from clinical or research-grade analysis protocols
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium mb-2">2. Configure Parameters</h3>
              <p className="text-gray-600">
                Set QC thresholds and reporting preferences
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium mb-2">3. Review Results</h3>
              <p className="text-gray-600">
                Interactive visualization and export options
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaLock className="mr-2 text-blue-600" />
            Security & Compliance
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Always de-identify patient data before upload
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Use strong passwords and 2FA authentication
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Download results only to secure devices
            </li>
            {/* <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Review our Terms of Use and Privacy Policy regularly
            </li> */}
          </ul>
        </div>

        {/* <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            By using RgenX, you agree to our{" "}
            <a href="/terms" className="text-blue-600 underline">
              Terms of Use
            </a>{" "}
            and confirm all submitted data complies with applicable regulations
            including HIPAA and GDPR.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default HowToUse;
