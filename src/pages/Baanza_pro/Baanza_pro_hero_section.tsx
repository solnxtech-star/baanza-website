import React from 'react'
import hero_banner from '../../assets/hero_baner.jpg' 
import pro_icon from '../../assets/pro_icon.svg'  

export const Baanza_pro_hero_section:React.FC = () => {
  return (
 
      <section
        className="about_page min-h-[50vh] flex justify-center items-center flex-col px-4 py-10"
        style={{ 
          background: `linear-gradient(0deg, rgba(34, 167, 71, 0.80), rgba(34, 167, 71, 0.20)), url(${hero_banner})`, 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="bg-gradient-to-r from-[#F5FFF8] to-[#CBF7D6] bg-clip-text text-transparent mb-4 text-3xl md:text-5xl font-bold text-center leading-snug">
        Become a Baanza Pro
        </h1>

        <p className="max-w-3xl text-center text-[#E9F6ED] text-base md:text-xl mb-6 px-2">
     Join Nigeria's largest network of verified waste buyers and recycling  professionals. Grow your business and make a positive environmental  impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          {/* Join Button */}
          <div className="flex items-center justify-center relative w-full sm:w-auto">
            <img
              src={pro_icon}
              alt="Pro icon"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
            /> 
          </div>
        </div>
      </section>
  )
}
