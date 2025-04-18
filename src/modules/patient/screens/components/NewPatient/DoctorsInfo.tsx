// store
import { usePatientStore } from "@/globalStore";

// components/DoctorsInfo.tsx
const DoctorsInfo: React.FC = () => {
  const { formData, setFormData } = usePatientStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        4. Doctor's Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Ordering Physician"
          name="doctorName"
          placeholder="Add doctor's name"
          value={formData.doctorName}
          handleChange={handleChange}
        />

        <InputField
          label="Hospital"
          name="hospitalName"
          placeholder="Add hospital name"
          value={formData.hospitalName}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};

const InputField = ({
  label,
  name,
  placeholder,
  value,
  handleChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}) => {
  // Reuse base input styles from your design system
  const baseInputStyles = `
   w-full px-3 py-2 text-sm border border-gray-300 rounded-lg
   focus:ring-2 focus:ring-purple-500 focus:border-purple-500
   hover:border-purple-300 shadow-sm
 `;

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-xs font-medium text-gray-600">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className={baseInputStyles}
        placeholder={placeholder}
        aria-describedby={`${name}Help`}
        value={value}
        onChange={handleChange}
      />
      <p
        id={`${name}Help`}
        className="text-xs text-gray-500 mt-1 invisible" // Reserve space for potential help text
      >
        &nbsp;
      </p>
    </div>
  );
};

export default DoctorsInfo;
