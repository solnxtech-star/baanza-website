import React from 'react'
import { ServicesSection } from '../../components/Services_section' 

export const How_it_works:React.FC = () => {
     const How_it_works_data = [
    {
      id: 1,
      icon:  <h5 className='text-[#22A747] text-2xl'>01</h5>,
      title: "List Your Materials",
      description:
        "Upload details about your recyclable materials including quantity, type, and location.",
      // list: [""],
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
    {
      id: 2,

      icon: <h5 className='text-[#22A747] text-2xl'>02</h5>,
      title: "Get Matched",
      description:
        "Our system matches you with the best Baanza Pros based on your materials and location.",
      // list: [" "],
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
    {
      id: 3,
      icon:  <h5 className='text-[#22A747] text-2xl'>03</h5>,
      title: "Schedule Pickup",
      description:
        "Choose a convenient time for pickup or arrange to deliver your materials.",
      // list: [" "],
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },
    {
      id: 4,
      icon:  <h5 className='text-[#22A747] text-2xl'>04</h5>,
      title: "Get Paid",
      description:
        "Receive payment for your recyclables and contribute to a sustainable future.",
      // list: [" "],
      buttonText: "",
      icon_bg_color: "#E9F6ED",
    },

  ];

  return (
   <ServicesSection title='How it' highlight='Works' description='Simple steps to start earning from your recyclables' services={How_it_works_data} section_color='#F9FAFB' />
  )
}
