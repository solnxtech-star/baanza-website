import React from "react";
import Button from "./Button";
import { Recycle } from "lucide-react";
import pro_icon from "../assets/pro_green_icon.svg";

export const Join_recycle_section: React.FC = () => {
  return (
    <section className="bg-[#EDF2ED] py-[5em] px-[2em] md:px-[8em] lg:px-[10em]">
      <h2 className="text-[#2E2E2E] text-center text-2xl md:text-3xl font-bold">
        Join the Recycling Revolution
      </h2>

      <p className="text-center text-[#616161] text-base md:text-[20px] mb-10 py-4 px-2 mx-auto max-w-2xl">
        Be part of the solution. Start selling your recyclables today and help
        us build a sustainable future.
      </p>

      {/* Buttons */}
      <div className="relative flex flex-col md:flex-row gap-4 justify-center items-center w-full">
        {/* Sell Recyclables */}
        <div className="flex items-center relative w-full md:w-auto">
          <Recycle
            size={20}
            color="#FEFEFE"
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
          />
          <Button
            type="button"
            label="Sell Recyclables"
            className="bg-[#22A747] hover:bg-[#1c8e3d] pl-10 pr-4 py-2 md:py-2.5 w-full md:w-[221px] text-white font-bold transition"
          />
        </div>

        {/* Find a Pro */}
        <div className="flex items-center justify-center relative w-full md:w-auto">
          <img
            src={pro_icon}
            alt=""
            className="absolute left-5 w-5 h-5 top-1/2 transform -translate-y-1/2"
          />
          <Button
            type="button"
            label="Find a Pro"
            className="border border-[#22A747] bg-[#EEFAF233] hover:bg-[#22A747] hover:text-white pl-10 pr-4 py-2 md:py-2.5 w-full md:w-[221px] text-[#22A747] font-bold transition"
          />
        </div>
        {/* sell Recycle  */}
         <div className="flex items-center justify-center relative w-full sm:w-auto">
           <Recycle
            size={20}
            color="#FEFEFE"
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
          />
          <Button
            type="button"
            label="How to Recycle"
            className="border border-[#22A747] bg-[#22A747] hover:bg-[#22A747] pl-10 pr-4 py-2 md:py-2.5 w-full sm:w-[221px] text-[#fff] font-bold transition"
          />
        </div>
      </div>
    </section>
  );
};
