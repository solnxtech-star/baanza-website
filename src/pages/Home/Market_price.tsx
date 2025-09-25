import React from "react";
import degree_icon from "../../assets/degree_icon.svg";
import price_img from "../../assets/price_img.png";

type PriceItem = {
  id: number;
  item_name: string;
  weight: string;
  percent_degree: string;
  icon: string;
};

export const Market_price: React.FC = () => {
  const price_items: PriceItem[] = [
    { id: 1, item_name: "Bottles", weight: "N70 - N200/kg", percent_degree: "+15%", icon: degree_icon },
    { id: 2, item_name: "Plastics", weight: "N150 - N300/kg", percent_degree: "+10%", icon: degree_icon },
    { id: 3, item_name: "Metals", weight: "N500 - N800/kg", percent_degree: "+5%", icon: degree_icon },
    { id: 4, item_name: "Cartons", weight: "N40 - N100/kg", percent_degree: "+8%", icon: degree_icon },
  ];

  return (
    <section className="py-8 bg-[#EDF2ED] px-6 lg:px-[83px]">
      <div
        className="bg-white lg:px-[32px] lg:py-[64px] rounded-[12px] p-4 grid lg:grid-cols-2 gap-8 items-center"
        style={{ boxShadow: "0px 4px 20px 0px #22A74726" }}
      >
        {/* Left Content */}
        <div>
          <h4 className="text-[24px] md:text-[28px] lg:text-[36px] font-semibold text-[#2E2E2E] mb-2">
            Today’s <span className="text-[#22A747]">Market Prices</span>
          </h4>
          <p className="text-[#2E2E2E] font-normal text-[16px] md:text-[18px] lg:text-[20px] mb-6 leading-relaxed">
            Everything you need to turn your waste into value while contributing
            to a cleaner environment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {price_items.map((item) => (
              <div
                key={item.id}
                className="bg-[#E7EAE8] w-full px-6 py-4 flex justify-between items-center rounded-lg"
              >
                <div>
                  <h6 className="text-[16px] lg:text-[20px] font-normal text-[#2E2E2E]">
                    {item.item_name}
                  </h6>
                  <h4 className="text-[18px] lg:text-[20px] font-semibold text-[#22A747]">
                    {item.weight}
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={item.icon} alt="trend" className="w-4 h-4" />
                  <span className="text-green-600 font-medium">
                    {item.percent_degree}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-end">
          <img
            src={price_img}
            alt="Market Price Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};
