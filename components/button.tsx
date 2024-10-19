import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#d4a373] text-white px-12 md:px-8 py-4 rounded-full shadow text-xl font-medium w-full md:w-[400px] ${className}`}
      {...props}
    >
      {children || "Shop Now"}
    </button>
  );
};
