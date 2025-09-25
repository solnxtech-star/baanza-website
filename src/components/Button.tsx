import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  style?: object;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  style ,
  
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 
        rounded-xl 
        font-inter font-medium 
        text-sm sm:text-base md:text-base
        leading-6 
        transition 
        disabled:opacity-50 disabled:cursor-not-allowed 
        cursor-pointer
        ${className}
      `}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
