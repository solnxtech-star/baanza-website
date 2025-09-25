import React from 'react'
import hero_banner from '../../assets/hero_baner.jpg'
import pro_icon from '../../assets/pro_icon.svg'
import Button from '../../components/Button'
import { Search, Recycle } from "lucide-react"; 

const wrapper = [
  { id: 1, number: '100+', text: "Publications" },
  { id: 2, number: '15+', text: "Years of Experience" },
  { id: 3, number: '50+', text: "Collaborations" }, // ⚡ fixed duplicate id
]


export const Hero_section :React.FC = () => {
  return (
     <section
      className="home_page min-h-screen flex justify-center items-center flex-col px-4 py-10"
      style={{
        background: `linear-gradient(0deg , rgba(71, 117, 90, 0.8), rgba(34, 167, 71, 0.20)), url(${hero_banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      {/* Hero Title */}
      <h1 className="bg-gradient-to-r from-[#F5FFF8] to-[#CBF7D6] bg-clip-text text-transparent mb-4 text-3xl md:text-5xl font-bold text-center leading-snug">
        Turn Your Waste Into Money
      </h1>

      {/* Hero Subtitle */}
      <p className="max-w-3xl text-center text-[#E9F6ED] text-base md:text-xl mb-6 px-2">
        Connect with certified Baanza Pros to sell your recyclables and make a
        positive impact on the environment while earning money.
      </p>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-[856px] shadow-md bg-white overflow-hidden rounded-full mb-6">
        <span className="pl-3 text-gray-500">
          <Search size={20} />
        </span>
        <input
          type="text"
          placeholder="Find Recyclables, waste infos or Pros"
          className="flex-1 px-4 py-2 md:py-3 text-[#616161] text-sm md:text-base outline-none rounded-full"
        />
        <Button
          type="button"
          label="Search"
          className="bg-[#22A747] hover:bg-[#1d8c3d] px-4 md:px-6 m-2 py-2 md:py-3 text-white font-bold"
          style={{ borderRadius: '100px' }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
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

        <div className="flex items-center justify-center relative w-full sm:w-auto">
          <img
            src={pro_icon}
            alt=""
            className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <Button
            type="button"
            label="Find a Pro"
            className="border border-[#E9F6ED] bg-[#EEFAF233] hover:bg-[#22A747] pl-10 pr-4 py-2 md:py-2.5 w-full sm:w-[221px] text-white font-bold transition"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="wrapper flex flex-col lg:flex-row justify-center items-center gap-6 xl:gap-10 mt-10 w-full px-4">
        {wrapper.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border p-3 bg-[#FFFFFF29] rounded-[12px] w-full sm:w-[260px] h-[120px] border-[#FFFFFF1A] justify-center "
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <span className="text-3xl md:text-4xl font-bold text-white">{item.number}</span>
            <span className="text-base md:text-lg text-white">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
