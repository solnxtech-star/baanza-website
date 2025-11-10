import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  list?: string[];
  buttonText?: string;
 icon_bg_color: string;
  bg_card?: string;
  shadow?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  list,
  buttonText,
 icon_bg_color,
 bg_card ,
 shadow
}) => {
  return (
    <div
      className=" rounded-lg flex p-4 flex-col items-center text-center md:max-w-[376px] w-full px-4 md:px-6 py-6"
      style={{ boxShadow: shadow, background: bg_card }}
    >
      <div className="w-[60px] h-[60px] flex justify-center items-center mb-4`] rounded-full"
      
       style={{ backgroundColor:icon_bg_color }}>
        <span>{icon}</span>
      </div>

      <h5 className="text-[20px] font-semibold mb-2 text-[#000] my-4">{title}</h5>
      <p className="text-[#3D3D3D] text-sm mb-4 font-normal">{description}</p>

      {list && (
        <ul className="text-[#3D3D3D] text-sm list-disc list-inside text-left mb-3">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

     
       {
        buttonText && (
           <span className="relative">
           <Button
          type="button"
          label={buttonText || ''}
          className="bg-[#22A747] hover:bg-[#22A747] pl-10 pr-4 py-2 md:py-2.5 
                     w-full sm:w-[288px] text-white font-bold transition relative"
        />
        <ArrowRight className="text-white w-[18px] h-[15px] absolute right-[24%] top-[34%]" />
         </span>
        )
       }
     
    </div>
  );
};
