import React from 'react'
import { Search } from "lucide-react"; 

export const Search_section:React.FC = () => {
  return (
     <section className='a-z_waste bg-[#F9FAFB] py-14 md:px-[158px]  flex flex-col items-center'>
         <h2 className="mb-4 text-2xl md:text-2xl font-bold text-center leading-snug">
          A to Z <span className='text-[#22A747]'>Waste Guide</span>
        </h2>

        <p className="max-w-3xl text-center text-[#616161] text-base md:text-xl mb-6 px-2">
    Complete directory of recyclable materials with handling instructions, current prices, and selling tips
        </p>
        <div className="flex items-center w-full max-w-[856px]  bg-white overflow-hidden rounded-full mb-6 border border-[#E7E7E7]">
        <span className="pl-3 text-gray-500 bg-white">
          <Search size={20} />
        </span>
        <input
          type="text"
          placeholder="Find Recylables, waste infos or Pros"
          className="flex-1 px-4 bg-white py-2 md:py-3 text-[#616161] font-bold text-sm lg:text-base outline-none rounded-full"
          style={{
            fontFamily:'DM Sans, sans-serif '
          }}
        />
      </div>


    </section>
  )
}
