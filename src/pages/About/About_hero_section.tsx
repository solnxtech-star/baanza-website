import React from 'react'
import hero_banner from '../../assets/hero_baner.jpg' 
import Button from '../../components/Button'
import pro_icon from '../../assets/pro_icon.svg'
import { Recycle, Users, ShieldCheck, MapPin } from "lucide-react"

const wrapper = [
  { id: 1, number: '5,000+', text: "Happy Customers", icon: <Users className="w-[28px] h-[28px] text-white" /> },
  { id: 2, number: '15+', text: "Verified Pros", icon: <ShieldCheck className="w-[28px] h-[28px] text-white" /> },
  { id: 3, number: '1M+ Kg', text: "Materials Recycled", icon: <Recycle className="w-[28px] h-[28px] text-white" /> }, 
  { id: 4, number: '50+', text: "Cities Covered", icon: <MapPin className="w-[28px] h-[28px] text-white" /> },  
]

export const About_hero_section: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="about_page min-h-[70vh] flex justify-center items-center flex-col px-4 py-10"
        style={{ 
          background: `linear-gradient(0deg, rgba(34, 167, 71, 0.80), rgba(34, 167, 71, 0.20)), url(${hero_banner})`, 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="bg-gradient-to-r from-[#F5FFF8] to-[#CBF7D6] bg-clip-text text-transparent mb-4 text-3xl md:text-5xl font-bold text-center leading-snug">
          About Baanza
        </h1>

        <p className="max-w-3xl text-center text-[#E9F6ED] text-base md:text-xl mb-6 px-2">
          We're on a mission to transform how Nigeria thinks about waste by making recycling profitable, accessible, and impactful for everyone
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
            <Button
              type="button"
              label="Join Our Mission"
              className="bg-[#22A747] hover:bg-[#1c8e3d] pl-10 pr-4 py-2 md:py-2.5 w-full sm:w-[221px] text-white font-bold transition"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
    <section className="wrapper bg-[#EDF2ED] min-h-[291px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4 sm:gap-6 xl:gap-10 w-full px-4 py-10 lg:px-[180px]">
  {wrapper.map((item) => (
    <div
      key={item.id}
      className="flex flex-col items-center border p-3 rounded-[12px] w-full h-[150px] sm:h-[160px] border-[#FFFFFF1A] justify-center"
    >
      {/* Perfect Circle for Icon */}
      <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] p-3 flex items-center justify-center mb-3 sm:mb-4 bg-[#22A747] rounded-full">
        {item.icon}
      </div>
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#121212]">
        {item.number}
      </span>
      <span className="text-xs sm:text-sm md:text-base text-[#3C3C3C] text-center">
        {item.text}
      </span>
    </div>
  ))}
</section>

    </>
  )
}
