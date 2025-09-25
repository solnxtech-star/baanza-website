import React from 'react'
import Button from '../../components/Button'
import { Recycle } from "lucide-react"; 

export const Stay_updated :React.FC = () => {
  return (
    <section className='bg-[#FEFEFE] py-[5em] px-[2em] md:px-[8em] lg:px-[10em]'>
         <h2 className="text-[#2E2E2E] text-center text-2xl md:text-3xl font-bold">
       Stay Updated with Baanza
      </h2>

      <p className="  text-center text-[#616161] text-base md:text-[20px] mb-10 py-4 px-2 mx-auto">
       Get the latest recycling tips, market prices, and eco-friendly news delivered to your inbox
      </p>

        <div className=' flex gap-10 justify-center items-center md:flex-row lg:flex-row flex-col' >
            <div>
            
          <input type="text" placeholder='Enter Your Email' className='bg-[#E7E7E733] p-2.5 border border-[#E7E7E7] text-[#B6B6B6] text-base rounded-[12px] w-[389px]' />
        </div>

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
        </div>
    </section>
  )
}
