import React from 'react'
import { Service_hero_section } from '../pages/Service/Service_hero_section'
import { Service_sec } from '../pages/Service/Services_section'
import { Additional_feat } from '../pages/Service/Additonal_feat' 
import { How_it_works } from '../pages/Service/How_it_works'
import { Join_recycle_section } from '../components/Join_recycle_section'

export const Service:React.FC = () => {
  return (
    <section>
        <Service_hero_section />
        <Service_sec />
        <How_it_works />
        <Additional_feat />
        <Join_recycle_section />
    </section>
  )
}
