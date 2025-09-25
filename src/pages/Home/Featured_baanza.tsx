import React from "react";
import feat_img1 from "../../assets/feat_img1.png";
import feat_img2 from "../../assets/feat_img2.png";
import feat_img3 from "../../assets/feat_img3.png";
import star_icon from "../../assets/star_icon.svg";
import Button from '../../components/Button'
import { Recycle } from "lucide-react"; 


export const Featured_baanza: React.FC = () => {
  const featured_data = [
    {
      id: 1,
      feat_img: feat_img1,
      feat_title: "EcoRecycle Lagos",
      feat_rate_img: star_icon,
      feat_rate_number: 4.9,
      feat_item_cat: ["Plastic", "Copper", "Glass"],
    },
    {
      id: 2,
      feat_img: feat_img2,
      feat_title: "GreenWorld Recycling",
      feat_rate_img: star_icon,
      feat_rate_number: 4.8,
      feat_item_cat: ["Paper", "Metal", "Electronics"],
    },
    {
      id: 3,
      feat_img: feat_img3,
      feat_title: "EcoWaste Hub",
      feat_rate_img: star_icon,
      feat_rate_number: 4.7,
      feat_item_cat: ["Plastic", "Aluminium", "Glass"],
    },
  ];

  return (
    <section className="py-14  md:px-[118px] bg-[#FEFEFE]">
      <h2 className="text-[#2E2E2E] text-center text-2xl md:text-3xl font-bold">
        Featured <span className="text-[#22A747]">Baanza Pros</span>
      </h2>

      <p className="max-w-3xl text-center text-[#616161] text-base md:text-[20px] mb-10 py-4 px-2 mx-auto">
        Everything you need to turn your waste into value while contributing to
        a cleaner environment
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center px-4 mb-[4em]">
        {featured_data.map((item) => (
          <div
            key={item.id}
            className="feat_container mx-auto border border-[#CDCDCD] bg-[#FEFEFE] rounded-[12px] w-full md:w-[359px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="feat_card_img">
              <img
                src={item.feat_img}
                alt={item.feat_title}
                className="rounded-t-[12px] w-full h-auto"
              />
            </div>
            <div className="feat_body py-4 px-3.5">
              <div className="flex justify-between items-center">
                <h4 className="text-lg md:text-xl text-[#101010] font-bold">
                  {item.feat_title}
                </h4>
                <div className="flex items-center gap-1">
                  <img
                    src={item.feat_rate_img}
                    className="w-[16px] h-[16px]"
                    alt="rating star"
                  />
                  <span className="text-[12px]">{item.feat_rate_number}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 my-6">
                {item.feat_item_cat.map((child, index) => (
                  <button
                    key={index}
                    className="bg-[#DEF2E3] py-1 px-3 rounded-[42px] text-[#22A747] text-[11px]"
                  >
                    {child}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


         <div className='bg-[#E9F6ED] max-w-[912px] text-center p-5 md:h-[140px] mx-auto rounded-[12px] flex md:flex-row lg:flex-row flex-col'
        style={{
            boxShadow:' 0px 4px 20px 0px #0000001A'
        }}
        >
            <div>
            
            <h5 className='text-2xl text-[#22A747] font-bold'>Want to become a Baanza Pro?</h5>
            <p className='text-[#2E2E2E] text-[20px] py-6'>
                Join our network of certified professionals and grow your recycling business
            </p>
        </div>

             <div className="flex items-center relative w-full sm:w-auto">
          <Recycle
            size={20}
            color="#FEFEFE"
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
          />
          <Button
            type="button"
            label="Sell Recyclables"
            className="bg-[#22A747] hover:bg-[#22A747] pl-10 pr-4 py-2 md:py-2.5 w-full sm:w-[221px] text-white font-bold transition"
          />
        </div>
        </div>
    </section>
  );
};
