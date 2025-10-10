import { CheckCircle } from 'lucide-react'
import React from 'react'

export const Baanza_pro_requirement:React.FC = () => {
    const requirement_data = [
        {
            id:1,
            title: 'Valid business registration (CAC registration)',
                checkbox_icon: <CheckCircle className='text-[#22A747]' />
        },
        {
            id:2,
            title: 'Proper waste handling equipment',
                checkbox_icon: <CheckCircle className='text-[#22A747]' />
        },
        {
            id:3,
            title: 'Physical location for material collection/processing',
                checkbox_icon: <CheckCircle className='text-[#22A747]' />
        },
        {
            id:4,
            title: 'Minimum 2 years experience in waste management',
                checkbox_icon: <CheckCircle className='text-[#22A747]' />
        },
        {
            id:5,
            title: 'Insurance coverage for operations',
                checkbox_icon: <CheckCircle className='text-[#22A747]' />
        },
        {
            id:6,
            title: 'Compliance with environmental regulations',
                checkbox_icon: <CheckCircle className='text-[#22A747]' />
        },
    ]
  return (
    <section className='bg-[#F9FAFB] py-10 lg:py-[50px] lg:px-[115px]'>
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h5 className="text-[#2E2E2E] text-2xl md:text-[40px] font-bold mb-4">
          Requirements to <span className="text-[#22A747]">Join</span>
        </h5>
        <p className="max-w-2xl mx-auto text-[#616161] text-base md:text-xl leading-relaxed">
          Make sure you meet these requirements before applying
        </p>
      </div>

      {/* requirements box  */}
      <div className='bg-white p-8 rounded-xl grid grid-cols-2 space-x-3 space-y-8'
      style={{
        boxShadow: '0px 4px 25px 0px #22A74740'
      }}
      >
        {
            requirement_data.map((item) => {
                return(
                    <div key={item.id} className='flex gap-6 items-center'>
                        <span>{item.checkbox_icon}</span>   
                            <p className='text-[#616161] text-[14px] lg:text-xl'>{item.title}</p>

                    </div>
                )
            })
        }
      </div>

    </section>
  )
}
