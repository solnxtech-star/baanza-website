import React from "react"; 
import { Recycle, Leaf, Heart } from "lucide-react"; 
import icon3 from "../../assets/guild_icon.svg"; 

export const Value_section: React.FC = () => {
  const servicesData = [
    {
      id: 1,
      icon: <Leaf className="w-[28px] h-[28px] text-[#22A747]" />,
      title: "Environmental Impact",
      description:
        "Every transaction on our platform contributes to a cleaner, more sustainable Nigeria and Africa.", 
    },
    {
      id: 2,
      icon: <Heart className="w-[28px] h-[28px] text-[#22A747]" />,
      title: "Community First",
      description:
        "We believe in empowering local communities through economic opportunities in the circular economy.", 
    },
    {
      id: 3,
      icon: <img src={icon3} alt="icon" className="w-[28px] h-[28px]" />,
      title: "Trust & Safety",
      description:
        "All our Pros are verified and rated by the community, ensuring safe and reliable transactions.", 
    },
    {
      id: 4,
      icon: <Recycle className="w-[28px] h-[28px] text-[#22A747]" />,
      title: "Growth & Innovation",
      description:
        "We continuously innovate to make waste recycling more accessible and profitable for everyone.",  
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center flex-col py-12 text-center md:px-[18px] lg:px-[18px] px-4">
      <h2 className="text-[#2E2E2E] text-center mb-4">
        Our <span className="text-[#22A747]">Values</span>
      </h2>
      <p className="max-w-3xl text-center text-[#616161] text-base md:text-[20px] mb-10 md:mb-[67px] px-2">
       The principles that guide everything we do at Baanza
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-20">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg flex flex-col items-center text-center md:max-w-[268px] w-full px-4 md:px-6 py-6"

            style={{
                boxShadow: '0px 4px 10px 0px #00000026'
            }}
          >
            <div className="w-[60px] h-[60px] flex justify-center items-center mb-4 bg-[#E9F6ED] rounded-full">
              <span>{service.icon}</span>
            </div>
            <h5 className="text-[20px] font-semibold mb-2 text-[#000]">
              {service.title}
            </h5>
            <p className="text-[#3D3D3D] text-sm mb-4 font-normal">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
