// components/FormHeader.tsx
const FormHeader: React.FC = () => (
  <div className="absolute top-0 left-0 right-0 bg-blue-800 p-6 text-white rounded-tl-lg z-10">
    <h1 className="text-xl font-bold">Patient Data Collection</h1>
    <p className="text-white/90 text-sm">
      Please fill in all required fields marked with *
    </p>
  </div>
);
export default FormHeader;
