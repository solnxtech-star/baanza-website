import React from 'react'

interface checkboxProps {
    checkbox_label: string
}

export const Checkbox:React.FC<checkboxProps> = ({checkbox_label}) => {
  return (
     <div className="flex items-center space-x-2 mt-4 ">
          <input type="checkbox" id="newsletter" className="w-5 h-5 rounded-[6px] cursor-pointer bg-white border border-[#D0D5DD] " />
          <label htmlFor="newsletter" className='text-[#667085] text-sm'>
           {checkbox_label}
          </label>
        </div>

  )
}
