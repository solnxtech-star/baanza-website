import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import footer_logo from "../assets/baanza_logo.png"; // replace with your logo path

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-[#2E2E2E] px-6 md:px-16 py-12 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Description */}
        <div className="col-span-1 md:col-span-2">
          <img src={footer_logo} alt="Baanza logo" className="h-10 mb-4" />
          <p className="text-sm md:text-base max-w-md text-[#E6E6E6] py-5">
            Turning waste into wealth while building a sustainable future.
            Connect with certified professionals to sell your recyclables and
            make a positive environmental impact.
          </p>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-[20px] text-[#FEFEFF] mb-6">
              Contact
            </h5>
            <ul className="space-y-4 text-sm md:text-base text-[#616161]">
              <li className="flex items-center space-x-2 text-[#FEFEFED9]">
                <Mail size={18} className="text-[#22A747]" />
                <span>research@agbanilab.org</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FEFEFED9]">
                <Phone size={18} className="text-[#22A747]" />
                <span>+23481 432 567</span>
              </li>
              <li className="flex items-center space-x-2 text-[#FEFEFED9]">
                <MapPin size={18} className="text-[#22A747]" />
                <span>Port Harcourt, Nigeria</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFFFFF1A] text-[#FEFEFED9] hover:bg-[#22A747] transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFFFFF1A] text-[#FEFEFED9] hover:bg-[#22A747] transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFFFFF1A] text-[#FEFEFED9] hover:bg-[#22A747] transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:research@agbanilab.org"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFFFFF1A] text-[#FEFEFED9] hover:bg-[#22A747] transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold text-[20px] text-[#FEFEFF] mb-10">
            Quick Links
          </h5>
          <ul className="space-y-2 text-sm md:text-base text-[#616161]">
            {[
              "About Banzaa",
              "How it Works",
              "Waste Guide",
              "Find Pros",
              "Sell Recyclables",
            ].map((link, idx) => (
              <li key={idx} className="my-6">
                <a
                  href="/"
                  className="hover:text-[#22A747] text-[#FEFEFED9] text-base transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="font-semibold text-[20px] text-[#FEFEFF] mb-10">
            Support
          </h5>
          <ul className="space-y-2 text-sm md:text-base text-[#616161]">
            {[
              "Help Center",
              "FAQ",
              "Safety Guidelines",
              "Contact Us",
              "Terms of Use",
              "Privacy Policy",
            ].map((link, idx) => (
              <li key={idx} className="my-6">
                <a
                  href="/"
                  className="hover:text-[#22A747] text-[#FEFEFED9] text-base transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Pros */}
        <div>
          <h5 className="font-semibold text-[20px] text-[#FEFEFF] mb-10">
            For Pros
          </h5>
          <ul className="space-y-2 text-sm md:text-base text-[#616161]">
            {["Become a Pro", "Pro Success Stories", "Pro Review"].map(
              (link, idx) => (
                <li key={idx} className="my-6">
                  <a
                    href="/"
                    className="hover:text-[#22A747] text-[#FEFEFED9] text-base transition"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* App buttons */}
          <div>
            <h5 className="font-semibold text-[20px] text-[#FEFEFF] mb-6">
              Download Our Apps
            </h5>
            <div className="flex space-x-3">
              <button className="bg-[#FFFFFF1A] rounded-[8px] px-4 py-2 text-base text-[#FEFEFED9] hover:bg-[#22A747] transition">
                App Store
              </button>
              <button className="bg-[#FFFFFF1A] rounded-[8px] px-4 py-2 text-base text-[#FEFEFED9] hover:bg-[#22A747] transition">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-[#616161]">
        © {new Date().getFullYear()} Baanza. All Rights Reserved.
      </div>
    </footer>
  );
};
