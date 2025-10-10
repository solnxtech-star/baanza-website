import React from 'react'
import { Pro_form } from './Pro_form'

export const Apply_baanza_pro:React.FC = () => {
  return (
   
    <section className='bg-[#F9FAFB] p-6 lg:p-[80px]'>
     {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h5 className="text-[#2E2E2E] text-2xl md:text-[40px] font-bold mb-4">
          Apply to Become <span className="text-[#22A747]">a Pro</span>
        </h5>
        <p className="max-w-2xl mx-auto text-[#616161] text-base md:text-xl leading-relaxed">
          Fill out this form to start your application process
        </p>
      </div>
      <Pro_form />
    </section>
  )
}
