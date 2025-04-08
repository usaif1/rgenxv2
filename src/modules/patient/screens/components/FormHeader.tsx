// components/FormHeader.tsx

type Props = {
  title: string;
  subText?: string;
};

const FormHeader: React.FC<Props> = ({ title, subText }) => (
  <div className="absolute top-0 left-0 right-0 bg-blue-800 p-6 text-white rounded-tl-lg z-10">
    <h1 className="text-xl font-bold">{title}</h1>
    <p className="text-white/90 text-sm">{subText || ""}</p>
  </div>
);
export default FormHeader;
