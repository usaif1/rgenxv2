// dependencies
import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 rounded-[8px] cursor-pointer"
    >
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
