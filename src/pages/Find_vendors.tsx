import React from 'react'
import { Vendor_hero_section } from './Find_vendors/Vendor_hero_section'
import { Search_materials } from './Find_vendors/Search_materials'

export const Find_vendors:React.FC = () => {
  return (
    <>
      <Vendor_hero_section />
      <Search_materials />
    </>
  )
}
