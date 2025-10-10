import React from 'react'

export const Upnext:React.FC = () => {
    const Next_data = [
        {
            id: 1,
            number: '01',
            title: 'Application Review',
            description: 'We review your application within 3-5 business days to ensure all requirements are met.'
        },
        {
            id: 2,
            number: '02',
            title: 'Verification',
            description: 'Our team conducts a verification process including background checks and facility inspection'
        },
        {
            id: 3,
            number: '03',
            title: 'Approval & Setup',
            description: 'Once approved, we help you set up your Pro profile and start connecting with customers.'
        },
    ]
  return (
    <section className='bg-[#EDF2ED] py-10'>
          {/* Section Header */}
      <div className="text-center mb-10 lg:mb-16">
        <h5 className="text-[#2E2E2E] text-2xl md:text-[40px] font-bold mb-4">
          What Happens  <span className="text-[#22A747]">Next</span>
        </h5>
        <p className="max-w-2xl mx-auto text-[#616161] text-base md:text-xl leading-relaxed">
          Our application review processt
        </p>
      </div>
        {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 justify-center px-10 lg:px-[140px]">
        {Next_data.map((item) => (
          <div
            key={item.id}
            className="text-center flex flex-col items-center p-2 hover:shadow-md transition-shadow duration-300 rounded-lg"
          >
            <div className="flex justify-center items-center bg-[#22A747] text-[#E9F6ED] rounded-full mb-4 w-[69px] h-[69px]">
              <span className='text-2xl'>{item.number}</span>
            </div>
            <h6 className="text-[#121212] font-semibold text-lg md:text-xl mb-2">
              {item.title}
            </h6>
            <p className="text-[#616161] text-sm md:text-base leading-relaxed px-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
