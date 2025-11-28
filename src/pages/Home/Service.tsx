 
import { Recycle } from "lucide-react";
import icon2 from "../../assets/pro_green_icon.svg";
import icon3 from "../../assets/guild_icon.svg";
import { ServicesSection } from "../../components/Services_section";

const servicesData = [
  {
    id: 1,
    icon: <Recycle className="w-[35px] h-[22px] text-[#22A747]" />,
    title: "Sell Recyclables",
    description: "Turn your waste into money by selling to certified Baanza Collectors near you.",
    list: ["Competitive pricing", "Instant quotes", "Door-to-door pickup"],
    buttonText: "Start Selling",
      bg_card: '#FFFFFF',
       shadow: '0px 4px 6px #00000026',
        icon_bg_color: '#E9F6ED'
  },
  {
    id: 2,
    icon: <img src={icon2} alt="icon" className="w-[35px] h-[22px]" />,
    title: "Find Baanza Collectors",
    description: "Connect with verified professionals who buy your recyclable materials.",
    list: ["Verified professionals", "Local network", "Trusted ratings"],
    buttonText: "Find Collectors",
      bg_card: '#FFFFFF',
       shadow: '0px 4px 6px #00000026',
        icon_bg_color: '#E9F6ED'
  },
  {
    id: 3,
    icon: <img src={icon3} alt="icon" className="w-[35px] h-[22px]" />,
    title: "How to Recycle",
    description: "Learn how to properly sort, handle, and maximize value from your waste.",
    list: ["A-Z waste directory", "Handling instructions", "Price insights"],
    buttonText: "Learn More",
     shadow: '0px 4px 6px #00000026',
      bg_card: '#FFFFFF',
    icon_bg_color: '#E9F6ED'
  },
  {
    id: 4,
    icon: <img src={icon3} alt="icon" className="w-[35px] h-[22px]" />,
    title: "Waste deposal",
    description: "Dispose all kinds of waste with ease and convenience",
    list: ["MSW (Municipal Solid Wastes)", "Special Waste (hazardous toxic, biological, medical and chemical)", "Sewage Disposal"],
    buttonText: "coming soon",
     shadow: '0px 4px 6px #00000026',
      bg_card: '#FFFFFF',
    icon_bg_color: '#E9F6ED'
  },
  {
    id: 5,
    icon: <img src={icon3} alt="icon" className="w-[35px] h-[22px]" />,
    title: "Sell Junk and Scraps",
    description: "Sell all kinds of end-of-life items on Baanza",
    list: ["Vehicles", "Equipment", "Electronics and Appliances"],
    buttonText: "Learn More",
     shadow: '0px 4px 6px #00000026',
      bg_card: '#FFFFFF',
    icon_bg_color: '#E9F6ED'
  },
  {
    id: 6,
    icon: <img src={icon3} alt="icon" className="w-[35px] h-[22px]" />,
    title: "Donate and Swap Items",
    description: "Donate items for charity. Or swap items you don't use anymore in exchange for something you might just need, with someone willing to trade.",
    list: ["Donate to charity", "Swap items with other users", "Trade items with other users"],
    buttonText: "Learn More",
     shadow: '0px 4px 6px #00000026',
      bg_card: '#FFFFFF',
    icon_bg_color: '#E9F6ED'
  },
];

export const Service  = () => <ServicesSection services={servicesData}
title="Our" highlight="Services" description=" Everything you need to turn your waste into value while contributing to a cleaner environment" section_color="#EDF2ED"

/>;
