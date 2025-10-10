import React from 'react'
import { Article_section } from './Blog/Article_section'
import { Stay_updated } from './Home/Stay_updated'

export const Blog:React.FC = () => {
  return (
   <section className='bg-[#F9FAFB]'>
    {/* Section Header */}
      <div className="text-center pb-10 lg:py-16 py-8">
        <h5 className="text-[#2E2E2E] text-2xl md:text-[40px] font-bold mb-4">
         News &  <span className="text-[#22A747]">Blog</span>
        </h5>
        <p className="max-w-2xl  lg:mx-auto mx-6 text-[#616161] text-base md:text-xl leading-relaxed">
         Stay updated with the latest news, insights, and stories from the world of recycling and sustainability.
        </p>
      </div>
        <Article_section />
        <Stay_updated />

   </section>
  )
}
