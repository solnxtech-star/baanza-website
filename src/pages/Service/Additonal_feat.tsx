import React from "react";
import { ServicesSection } from "../../components/Services_section"; 
import {   TrendingUp, MapPin,UserCheck} from "lucide-react";

export const Additional_feat: React.FC = () => {
  const Additional_data = [
    {
      id: 1,
      icon: <MapPin className="w-[35px] h-[22px] text-white" />,
      title: "Location-Based Matching",
      description:
        "Find the nearest Baanza Pros based on your location for convenient pickups.",
      // list: [""],
      buttonText: "",
      icon_bg_color: "#22A747",
      shadow : '0px 4px 6px #00000026',
      bg_card: '#FFFFFF'
    },
    {
      id: 2,

      icon: <TrendingUp className="w-[35px] h-[22px] text-white" />,
      title: "Market Price Updates",
      description:
        "Stay informed with real-time pricing for different recyclable materials.",
      // list: [" "],
      buttonText: "",
      icon_bg_color: "#22A747",
      shadow : '0px 4px 6px #00000026',
      bg_card: '#FFFFFF'
    },
    {
      id: 3,
      icon:  <UserCheck className="w-[35px] h-[22px] text-white" />,
      title: "Verified Professionals",
      description:
        "All Baanza Pros are thoroughly vetted and verified for your safety and trust.",
      // list: [" "],
      buttonText: "",
      icon_bg_color: "#22A747",
      shadow : '0px 4px 6px #00000026',
      bg_card: '#FFFFFF'
    },
  ];

  return (
    <section>
      <ServicesSection
        title="Additional"
        highlight="Features"
        description="Extra services that make recycling even easier"
        section_color="#F9FAFB"
        services={Additional_data}
      />
    </section>
  );
};
