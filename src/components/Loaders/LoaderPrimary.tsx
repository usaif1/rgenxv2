import React from "react";
import Lottie from "lottie-react";

// animatio
import loader_primary from "@/animation/loader_primary.json";

const LoaderPrimary: React.FC = () => {
  return (
    <Lottie
      animationData={loader_primary}
      loop={true}
      style={{ height: 250, width: 250 }}
    />
  );
};

export default LoaderPrimary;
