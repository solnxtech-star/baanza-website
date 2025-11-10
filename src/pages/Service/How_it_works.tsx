import React from 'react'
import { ServicesSection } from '../../components/Services_section'
import { Upload, Users, CalendarCheck, Wallet } from 'lucide-react'  // ✅ Lucide icons

export const How_it_works: React.FC = () => {
  const How_it_works_data = [
    {
      id: 1,
      icon: <Upload className="text-[#22A747] w-7 h-7" />,  // Upload icon for “List Your Materials”
      title: "List Your Materials",
      description:
        "Upload details about your recyclable materials including quantity, type, and location.",
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
    {
      id: 2,
      icon: <Users className="text-[#22A747] w-7 h-7" />, // User match icon
      title: "Get Matched",
      description:
        "Our system matches you with the best Baanza Pros based on your materials and location.",
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
    {
      id: 3,
      icon: <CalendarCheck className="text-[#22A747] w-7 h-7" />, // Calendar for scheduling
      title: "Schedule Pickup",
      description:
        "Choose a convenient time for pickup or arrange to deliver your materials.",
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
    {
      id: 4,
      icon: <Wallet className="text-[#22A747] w-7 h-7" />, // Wallet icon for payment
      title: "Get Paid",
      description:
        "Receive payment for your recyclables and contribute to a sustainable future.",
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
  ];

  return (
    <ServicesSection
      title="How it"
      highlight="Works"
      description="Simple steps to start earning from your recyclables"
      services={How_it_works_data}
      section_color="#F9FAFB"
    />
  );
};
