import React from "react";
import { Form } from "./Contact/Form";
import Button from "../components/Button";

export const Contact: React.FC = () => {
  return (
    <section className="text-center bg-[#F9FAFB] pt-12">
      <h2 className="text-[#2E2E2E] text-2xl text-center mb-4">
        Get In<span className="text-[#22A747]">Touch</span>
      </h2>
      <p className=" text-center  text-[#616161] text-base md:text-[20px] mb-2 md:mb-[67px] px-2">
        Have questions about Baanza? <br className="lg:hidden block" /> We are here to help.
      </p>
      <Form />
      <div className="bg-[#EDF2ED] p-10 lg:py-[60px]">
        <h5  className="text-[32px] font-bold mb-4 text-[#2E2E2E]">
          Need Quick Help?
        </h5>
        <p className="text-[#616161] text-xl">Check Our FAQ Section for instant answers to common questions</p>
        <Button label="View FAQ" className="bg-[#22A747] px-16 text-white my-12" />
      </div>
    </section>
  );
};
