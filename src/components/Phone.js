// src/components/Phone.js
import React from "react";

export const Phone = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.23c1.15.45 2.37.68 3.62.68a1 1 0 011 1v3.5a1 1 0 01-1 1C10.69 22 2 13.31 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.23 2.47.68 3.62a1 1 0 01-.23 1.09l-2.2 2.2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};