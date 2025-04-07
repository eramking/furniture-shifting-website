// src/components/TextInput.js
import React from "react";

export const TextInput = ({ alternate, className, text, type }) => {
  return (
    <input
      type={type === "default" ? "text" : type}
      placeholder={text}
      className={`text-input ${className} ${alternate ? "alternate" : ""}`}
    />
  );
};