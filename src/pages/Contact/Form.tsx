import React from 'react'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Checkbox } from '../../components/Checkbox'
import Button from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { MapPin, Phone, Mail } from 'lucide-react'

export const Form: React.FC = () => {
  return (
    <section className="px-5 md:px-10 lg:px-[125px] py-10">
      {/* FORM */}
      <form className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input inputTitle="Business Name" type="text" placeholder="Your Company Name" />
          <Input inputTitle="Contact Person" type="text" placeholder="Jerry Jakes" />
          <Select select_title="Business Type" options={['Software Engineer', 'Graphics', 'Cyber Security']} />
          <Input inputTitle="Email Address" type="text" placeholder="jerryjakes@gmail.com" />
        </div>

        <div className="my-4">
          <Textarea label="Business Address" placeholder="Full business address including city and state" />
        </div>

        <div className="mb-6">
          <Checkbox checkbox_label="I’d like to receive updates and newsletters from Baanza" />
        </div>

        <div className="flex justify-center">
          <Button
            label="Send Message"
            className="bg-[#22A747] text-white w-full md:w-[400px] lg:w-[500px]"
          />
        </div>
      </form>

      {/* CONTACT INFORMATION */}
      <div className="py-12 lg:py-[70px] text-center">
        <h4 className="text-2xl font-bold mb-8 text-[#2E2E2E]">Contact Information</h4>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-[40px] lg:gap-[60px] justify-center items-center">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="text-[#22A747]" size={22} />
            <p className="text-[#6A6868] text-[16px] break-words">research@agbanilab.org</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="text-[#22A747]" size={22} />
            <p className="text-[#6A6868] text-[16px]">+234 812 345 6789</p>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <MapPin className="text-[#22A747]" size={22} />
            <p className="text-[#6A6868] text-[16px] text-center sm:text-left">
              Port Harcourt, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
