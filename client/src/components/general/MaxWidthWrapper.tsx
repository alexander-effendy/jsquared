import type { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string; // e.g. "1000px", "1200px"
}

const MaxWidthWrapper = ({ children, className = "", maxWidth = "1500px" }: MaxWidthWrapperProps) => {
  return (
    <div
      className={`mx-auto w-full px-2 sm:px-4 ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
