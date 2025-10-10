import React from "react";
import { ServiceCard } from "./ServiceCard";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  list?: string[];
  buttonText: string;
 icon_bg_color: string
}

interface ServicesSectionProps {
  services: Service[];
    title: string;
  highlight?: string; // the green part of the title
  description: string;
  section_color?: string; // background color of the section
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, title, highlight, description , section_color}) => {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col  py-12 text-center md:px-[118px] lg:px-[118px] px-4"
    style={{
      background: section_color || '#FFFFFF'  // Default to white if no color is provided
    }}
    >
      <h2 className="text-[#2E2E2E] text-center mb-4"> 
        {title}{''} {highlight && <span className="text-[#22A747]">{highlight}</span>}
      </h2>
      <p className="max-w-3xl text-center text-[#616161] text-base md:text-[20px] mb-10 md:mb-[67px] px-2">
        {description} 
      </p>

      <div className={` ${services.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} grid grid-cols-1  gap-6 lg:gap-12 w-full`}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
