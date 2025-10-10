import React from 'react'
import { Input } from '../../components/Input' 
import { Checkbox } from '../../components/Checkbox'
import Button from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'

export const Pro_form: React.FC = () => {
  const checkbox_data = [
    { id: 1, title: 'Copper' },
    { id: 2, title: 'Aluminium can' },
    { id: 3, title: 'Cardboard Paper' },
    { id: 4, title: 'Paper' },
    { id: 5, title: 'Glass bottles' },
    { id: 6, title: 'Steel' },
    { id: 7, title: 'Glass' },
    { id: 8, title: 'Electronics' },
    { id: 9, title: 'Batteries' },
    { id: 10, title: 'Plastic container' },
    { id: 11, title: 'Copper wire' },
    { id: 12, title: 'Iron' },
  ]

  return (
    <div className="   py-8">
      <form className="max-w-[1000px] mx-auto space-y-10">
        
        {/* Top Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input inputTitle="Business Name" type="text" placeholder="Your Company Name" />
          <Input inputTitle="Contact Person" type="text" placeholder="Jerry Jakes" />
          <Input inputTitle="Email Address" type="email" placeholder="jerryjakes@gmail.com" />
          <Input inputTitle="Phone Number" type="number" placeholder="+234 916 172 9605" />
        </div>

        {/* Textarea */}
        <div>
          <Textarea label="Business Address" placeholder="Full business address including city and state" />
        </div>

        {/* Checkbox Materials */}
        <div>
          <h6 className="text-[#0E121B] text-lg sm:text-xl font-bold mb-4">
            Select all materials your business can handle
          </h6>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {checkbox_data.map((item) => (
              <Checkbox key={item.id} checkbox_label={item.title} />
            ))}
          </div>
        </div>

        {/* Select and Other Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Select select_title="Business Type" options={['Select business type', 'Software Engineer', 'Graphics', 'Cyber Security']} />
          <Select select_title="Years of Experience" options={['Select experience','1', '2+', '3+', '4+', '5+']} />
          <Input inputTitle="Monthly Capacity" type="text" placeholder="e.g 50" />
          <Input inputTitle="Service Coverage Area" type="text" placeholder="e.g Lagos State" />
        </div>

        {/* Terms Checkbox */}
        <div className="mt-6">
          <Checkbox checkbox_label="I agree to the Baanza Pro Terms and Conditions and confirm that all information provided is accurate" />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            label="Submit Application"
            className="bg-[#22A747] text-white w-full sm:w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </form>
    </div>
  )
}
