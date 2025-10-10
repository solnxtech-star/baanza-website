import React from "react";

interface FormProps {
  inputTitle: string;
  type: string;
  placeholder: string; 
}

export const Input: React.FC<FormProps> = ({ inputTitle, type, placeholder }) => {
  return (
    <div className="form_group mb-1">
      <span className="block mb-1 font-bold text-[16px] pb-2 text-[#4D4D4D] text-left">{inputTitle}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#A4A6AC] rounded-[8px] text-[16px] text-[#A4A6AC] p-2.5 h-[60px] focus:outline-none our"
      />
      
    </div>
  );
};
