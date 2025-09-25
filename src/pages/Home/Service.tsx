import React from "react"; 
import icon2 from "../../assets/pro_green_icon.svg"; 
import icon3 from "../../assets/guild_icon.svg"; 
import { ArrowRight, Recycle } from "lucide-react";
import Button from "../../components/Button";

export const Service: React.FC = () => {
  const servicesData = [
    {
      id: 1,
      icon: <Recycle className="w-[35px] h-[22px] text-[#22A747]" />,
      title: "Sell Recyclables",
      description:
        "Turn your waste into money by selling to certified Baanza Pros near you.",
      list: [ 
        "Competitive pricing",
        "Instant quotes",
        "Door-to-door pickup", 
      ],
      buttonText: 'Start Selling'
    },
    {
      id: 2,
      icon: <img src={icon2} alt="icon" className="w-[35px] h-[22px]" />,
      title: "Find Baanza Pros",
      description:
        "Connect with verified professionals who buy your recyclable materials.",
        buttonText: 'Find Pros',
 list: [ 
        "Verified professionals",
        "Local network",
        "Trusted ratings", 
      ],
    },
    {
      id: 3,
      icon:<img src={icon3} alt="icon" className="w-[35px] h-[22px]" />,
      title: "Recycling Guides",
      description:
        "Learn how to properly sort, handle, and maximize value from your waste.", 
         list: [ 
        "A-Z waste directory",
        "Handling instructions",
        "Price insights", 
      ],
        buttonText:' Learn More'
    },
  ];
  return (
    <section className="min-h-screen flex justify-center items-center flex-col bg-[#EDF2ED] py-12 text-center md:px-[118px] lg:px-[118px] px-4">
      <h2 className="text-[#2E2E2E] text-center mb-4">
        Our <span className="text-[#22A747]">Services</span>
      </h2>
      <p className="max-w-3xl text-center text-[#616161] text-base md:text-[20px] mb-10 md:mb-[67PX] px-2">
        Everything you need to turn your waste into value while contributing to
        a cleaner environment
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg flex flex-col items-center text-center md:max-w-[376px] w-full px-4 md:px-6 py-6 "
            style={{
              boxShadow: "0px 4px 6px #00000026",
            }}
          >
            <div className="w-[60px] h-[60px] flex justify-center items-center mb-4 bg-[#E9F6ED] rounded-full">
            <span>  {service.icon}</span>
            </div>
            <h4 className="text-[20px] font-semibold mb-2 text-[#000]">
              {service.title}
            </h4>
            <p className="text-[#3D3D3D] text-sm mb-4 font-normal">{service.description}</p>
            {service.list && (
              <ul className="text-[#3D3D3D] text-sm list-disc list-inside text-left mb-3">
                {service.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
           <span className="relative">
             <Button
              type="button"
              label= {service.buttonText}
               className="bg-[#22A747] hover:bg-[#22A747] pl-10 pr-4 py-2 md:py-2.5 w-full sm:w-[338px] text-white font-bold transition relative"
            />
            <ArrowRight  className="text-white w-[18px] h-[15px] absolute right-[24%] top-[34%]" />
           </span>
          </div>
        ))}
      </div>
    </section>
  );
};
