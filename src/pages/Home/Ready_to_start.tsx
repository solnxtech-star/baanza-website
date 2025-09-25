import React from 'react'
import Button from '../../components/Button'
import { Recycle } from "lucide-react"; 
import pro_icon from '../../assets/pro_green_icon.svg'

export const Ready_to_start : React.FC = () => {
  return (
    <section className='bg-[#EDF2ED] py-12 px-4 lg:px-[118px] text-center'>
            <h3>Ready to Start Making Money from Your Waste?</h3>
             <p className="max-w-3xl text-center text-[#616161] text-base md:text-[20px] mb-10 py-4 md:mb-[50PX] px-2 mx-auto">
      Join thousands of satisfied customers who are already earning money while helping the environment
      </p>
    <div className='relative flex space-x-5 justify-center'>
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
            className="absolute left-[40px] w-5 h-5 top-1/2 transform -translate-y-1/2"
          />
          <Button
            type="button"
            label="Find a Pro"
            className="border border-[#22A747] bg-[#EEFAF233] hover:bg-[#22A747] pl-10 pr-4 py-2 md:py-2.5 w-full sm:w-[221px] text-[#22A747] font-bold transition"
          />
        </div>
    </div>
    </section>
  )
}
