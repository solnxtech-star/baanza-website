import { Users, Check } from "lucide-react";
import React from "react";

const mission_list = [
  {
    id: 1,
    text: "Economic Empowerment",
    para: "Creating income opportunities from waste materials",
  },
  {
    id: 2,
    text: "Environmental Protection",
    para: "Reducing landfill waste and promoting recycling",
  },
  {
    id: 3,
    text: "Community Building",
    para: "Connecting people for a common sustainable goal",
  },
];

export const Mission_section: React.FC = () => {
  return (
    <section className="bg-[#EDF2ED] flex flex-col justify-center items-center text-center px-4 py-10">
      <div
        className="bg-white rounded-[12px] px-6 md:px-[90px] flex flex-col lg:flex-row justify-between items-center gap-10 w-full h-auto py-8"
        style={{
          boxShadow: "0px 4px 20px 0px #22A74726",
        }}
      >
        {/* Mission Text + List */}
        <div className="max-w-2xl text-left">
          <h4 className="text-[#2E2E2E] text-xl md:text-2xl font-semibold">
            Our <span className="text-[#22A747]">Mission</span>
          </h4>
          <p className="text-[#7D7E7D] mt-4 text-base md:text-[20px] leading-7 font-normal">
            To create a sustainable circular economy in Nigeria by connecting
            waste generators with recycling professionals, making waste
            profitable while reducing environmental impact.
          </p>

          {/* ✅ Bullet List with Check icons */}
          <ul className="mt-6 space-y-4 text-left">
            {mission_list.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full border border-[#22A747] flex-shrink-0">
                  <Check className="w-4 h-4 text-[#22a747]" />
                </span>

                <div className="flex flex-col">
                  <span className="text-[#2E2E2E] font-bold text-lg md:text-[22px] leading-6">
                    {item.text}
                  </span>
                  <span className="text-[#7D7E7D] font-normal text-sm md:text-[15px] leading-6">
                    {item.para}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Vision Card */}
        <div
          className="flex flex-col items-center border p-6 rounded-[12px] w-full md:w-[590px] h-auto border-[#FFFFFF1A] justify-center text-center"
          style={{
            boxShadow: "0px 4px 25px 0px #22A74740",
          }}
        >
          {/* Perfect Circle for Icon */}
          <div className="w-[60px] h-[60px] flex items-center justify-center mb-4 bg-[#22A747] rounded-full">
            <Users className="text-white w-6 h-6" />
          </div>
          <span className="text-xl md:text-3xl font-bold text-[#121212] mb-2">
            Our Vision
          </span>
          <span className="text-sm md:text-lg text-[#616161] leading-7">
            To be Africa's leading platform for waste-to-wealth transformation,
            creating a world where every piece of waste is seen as a valuable
            resource.
          </span>
        </div>
      </div>
    </section>
  );
};
