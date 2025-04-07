// src/components/Button.js
import React from "react";

export const Button = ({
  alternate,
  className,
  divClassName,
  icon,
  iconPosition,
  small,
  style,
  text,
}) => {
  return (
    <button
      className={`button ${className} ${small ? "small" : ""} ${style} ${
        alternate ? "alternate" : ""
      }`}
    >
      {iconPosition === "leading" && icon}
      <span className={divClassName}>{text}</span>
      {iconPosition === "trailing" && icon}
    </button>
  );
};