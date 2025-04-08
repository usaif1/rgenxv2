// dependencies
import { ReactNode } from "react";

type Props = {
  label: string;
  required: boolean;
  children: ReactNode;
};

const FormField: React.FC<Props> = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-1">
    <label className="block text-xs font-medium text-gray-600">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
  </div>
);

export default FormField;
