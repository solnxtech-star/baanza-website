import React from 'react' 
import { Search_section } from './A_z_waste/Search_section'
import { Materials } from './A_z_waste/Materials'
import { Stay_updated } from './Home/Stay_updated'

export const A_z_waste:React.FC = () => {
  return (
   <section className='bg-[#F9FAFB]'>
   <Search_section  />
   <Materials />
   <Stay_updated />
   </section>
  )
}
