import React from 'react'
import { Baanza_pro_hero_section } from './Baanza_pro/Baanza_pro_hero_section'
import { Why_become } from './Baanza_pro/Why_become'
import { Baanza_pro_requirement } from './Baanza_pro/Baanza_pro_requirement'
import { Apply_baanza_pro } from './Baanza_pro/Apply_baanza_pro'
import { Upnext } from './Baanza_pro/Upnext'

export const Baanza_pro:React.FC = () => {
  return (
  <>
     <Baanza_pro_hero_section />
     <Why_become />
     <Baanza_pro_requirement />
     <Apply_baanza_pro />
     <Upnext />
  </>
  )
}
