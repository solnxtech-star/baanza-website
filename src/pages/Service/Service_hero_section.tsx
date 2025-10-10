import React from 'react'
import hero_banner from '../../assets/hero_baner.jpg' 



export const Service_hero_section: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="service_page min-h-[50vh] flex justify-center items-center flex-col px-4 py-10"
        style={{ 
          background: `linear-gradient(0deg, rgba(34, 167, 71, 0.80), rgba(34, 167, 71, 0.20)), url(${hero_banner})`, 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="bg-gradient-to-r from-[#F5FFF8] to-[#CBF7D6] bg-clip-text text-transparent mb-4 text-3xl md:text-5xl font-bold text-center leading-snug">
        Our Services
        </h1>

        <p className="max-w-3xl text-center text-[#E9F6ED] text-base md:text-xl mb-6 px-2">
         Comprehensive recycling solutions that make waste management profitable and sustainable
        </p>
 
      </section>
 
    </>
  )
}
