// dependencies
import React from "react";

type Props = {
  loaderText: string;
};

const LoaderSecondary: React.FC<Props> = ({ loaderText }) => {
  return (
    <div className="min-w-60 flex flex-col items-center gap-y-4">
      <div className="loader_secondary" />
      <p className="font-semibold">{loaderText}</p>
    </div>
  );
};

export default LoaderSecondary;
