import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container md:max-w-6xl mx-auto px-4 md:px-0 ${className}`}>
      {children}
    </div>
  );
};
