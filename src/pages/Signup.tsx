import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import signup_img from "../assets/signup_img.png";
import signup_logo from "../assets/signup_logo.png";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Checkbox";
import Button from "../components/Button";

export const Signup: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] p-6 lg:p-[80px] signup">
      <div className="signup_container flex flex-col lg:flex-row overflow-hidden shadow-sm">
        {/* Left Image Section */}
        <div className="signup_img_container py-4 bg-[#22A747] w-full lg:w-1/2 flex justify-center items-center">
          <img src={signup_img} alt="signup" className="object-contain" />
        </div>

        {/* Form Section */}
        <div className="signup_form w-full lg:w-1/2 bg-white px-8 py-10 flex flex-col lg:items-center justify-center"> 
            <img src={signup_logo} alt="logo" className="mb-6 w-[120px] lg:translate-x-[-185px]" /> 

          <form className="space-y-6">
            <div className="my-12">
              <h5 className="text-2xl font-semibold text-[#1D1D1D] mb-1">
                Create account
              </h5>
              <p className="text-[#6B6B6B] text-sm">
                For business, band or celebrity.
              </p>
            </div>

            {/* Name */}
            <div className="group_form flex flex-col md:flex-row gap-4">
              <Input type="text" placeholder="" inputTitle="First name"  />
              <Input type="text" placeholder="" inputTitle="Last name"  />
            </div>

            {/* Email and DOB */}
            <div className=" flex flex-col md:flex-row gap-4">
              <Input type="email" placeholder="" inputTitle="Email or phone number"  />
              <Input type="date" placeholder="" inputTitle="Date of birth (MM/DD/YY)"  />
            </div>

            {/* Passwords */}
            <div className="group_form flex flex-col md:flex-row gap-4">
              <Input type="password" placeholder="" inputTitle="Password"  />
              <Input type="password" placeholder="" inputTitle="Confirm password"  />
            </div>

            {/* Checkboxes and Link */}
            <div className="lg:flex justify-between items-center">
             <div>
                 <Checkbox checkbox_label="Remember me" />
              <Checkbox checkbox_label="I agree to all the Terms and Privacy policy" />
             </div>
              <a
                href="/forgotten_password"
                className="text-[#22A747] text-sm hover:underline text-right"
              >
                Forgot password?
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                label="Create account"
                className="bg-[#22A747] text-white px-10 py-3"
                style={{ borderRadius: "4px" }}
              />
              <Button
                label={
                  <span className="flex items-center gap-2 justify-center">
                    <FcGoogle size={20} /> Sign in with Google
                  </span>
                }
                className="border border-[#2F2F2F] text-[#2F2F2F] px-6 py-3"
                style={{ borderRadius: "4px" }}
              />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                label={
                  <span className="flex items-center gap-2">
                    <FaGooglePlay size={18} /> Google Play
                  </span>
                }
                className="bg-black text-white px-6 py-3"
                style={{ borderRadius: "6px" }}
              />
              <Button
                label={
                  <span className="flex items-center gap-2">
                    <FaApple size={18} /> App Store
                  </span>
                }
                className="bg-black text-white px-6 py-3"
                style={{ borderRadius: "6px" }}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
