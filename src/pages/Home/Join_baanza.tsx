import React from 'react'
import Button from '../../components/Button'
import { Recycle } from "lucide-react"; 

export const Join_baanza :React.FC = () => {
  return (
    <section>
        <div className='bg-[#E9F6ED] max-w-[912px] p-5 h-[140px] mx-auto rounded-[12px] flex'
        style={{
            boxShadow:' 0px 4px 20px 0px #0000001A'
        }}
        >
            <div>
            
            <h5 className='text-2xl text-[#22A747] font-bold'>Want to become a Baanza Pro?</h5>
            <p className='text-[#2E2E2E] text-[20px]'>
                Join our network of certified professionals and grow your recycling business
            </p>
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
