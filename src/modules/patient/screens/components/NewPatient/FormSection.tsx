import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const FormSection: React.FC<Props> = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="w-full text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
      {title}
    </h2>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </section>
);

export default FormSection;
