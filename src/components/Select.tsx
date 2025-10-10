import React from 'react'

interface selectProps {
    select_title: string,
    options: string[]
}

export const Select:React.FC<selectProps> = ({select_title, options}) => {
  return (
     <div className='flex flex-col'>
        <span className='block mb-1 font-bold text-[16px] text-[#4D4D4D] text-left pb-2'>{select_title}</span>
      <select name="" id="" className='border border-[#CDD0D6] bg-[#E9E9ED] p-2.5 w-full   justify-around outline-0 rounded-[8px] text-[16px] text-[#35333b] font-medium h-[60px]'>
          {
            options.map((option, index) => (
                <option key={index} className=''>{option}</option>
            ))
        }
      </select>
     </div>
  )
}
