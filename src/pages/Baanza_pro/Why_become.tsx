import React from 'react'
import increase_icon from '../../assets/increase_icon.svg'
import customer_icon from '../../assets/customer_icon.svg'
import growth_icon from '../../assets/business_growth_icon.svg'
import recognition_icon from '../../assets/recognition_icon.svg'

export const Why_become: React.FC = () => {
  const why_Become_Data = [
    {
      id: 1,
      icon: increase_icon,
      title: "Increase Revenue",
      description:
        "Access a larger customer base and increase your recyclable material purchases through our platform.",
    },
    {
      id: 2,
      icon: customer_icon,
      title: "Customer Trust",
      description:
        "Build trust with verified reviews and ratings from satisfied customers on the platform.",
    },
    {
      id: 3,
      icon: growth_icon,
      title: "Business Growth",
      description:
        "Expand your reach and grow your recycling business with our marketing and customer acquisition tools.",
    },
    {
      id: 4,
      icon: recognition_icon,
      title: "Professional Recognition",
      description:
        "Get recognized as a certified Baanza Pro with our verification badge and professional profile.",
    },
  ];

  return (
    <section className="bg-white my-16 px-5 md:px-10 lg:px-[105px]">
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h5 className="text-[#2E2E2E] text-2xl md:text-[40px] font-bold mb-4">
          Why Become a <span className="text-[#22A747]">Baanza Pro?</span>
        </h5>
        <p className="max-w-2xl mx-auto text-[#616161] text-base md:text-xl leading-relaxed">
          Join our network and unlock new opportunities for your recycling business.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 justify-center">
        {why_Become_Data.map((item) => (
          <div
            key={item.id}
            className="text-center flex flex-col items-center p-2 hover:shadow-md transition-shadow duration-300 rounded-lg"
          >
            <div className="flex justify-center items-center w-20 h-20 rounded-full mb-4">
              <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
            </div>
            <h6 className="text-[#121212] font-semibold text-lg md:text-xl mb-2">
              {item.title}
            </h6>
            <p className="text-[#616161] text-sm md:text-base leading-relaxed px-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
