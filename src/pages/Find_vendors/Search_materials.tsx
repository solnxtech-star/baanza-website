import React from "react";
import { Search } from "lucide-react";
import card_img1 from "../../assets/recycle.png";
import card_img2 from "../../assets/recycle2.png";
import card_img3 from "../../assets/recycle3.png";
import card_img4 from "../../assets/recycle4.png";
import card_img5 from "../../assets/recycle5.png";
import card_img6 from "../../assets/recycle6.png";
import { RecycleCard } from "../../components/Card"

const recycle_data = [
  {
    id: 1,
    image: card_img1,
    title: "EcoRecycle Lagos",
    rating: 4.7,
    reviewsCount: 89,
    location: "Garki, Abuja",
    distance: "4.2 km",
    description:
      "Professional recycling service with over 10 years of experience. We offer competitive prices and reliable pickup services.",
    priceRange: "₦100 - ₦1200/Kg",
    accepts: ["Copper", "Plastics", "Aluminium"],
  },
  {
    id: 2,
    image: card_img2,
    title: "GreenWaste Solutions",
    rating: 4.7,
    reviewsCount: 89,
    location: "Garki, Abuja",
    distance: "4.2 km",
    description:
      "Environmentally conscious waste management company specializing in industrial and residential recycling.",
    priceRange: "₦100 - ₦1200/Kg",
    accepts: ["Glass", "Copper", "Aluminium"],
  },
  {
    id: 3,
    image: card_img3,
    title: "RecycleMart Abuja",
    rating: 4.7,
    reviewsCount: 89,
    location: "Garki, Abuja",
    distance: "4.2 km",
    description:
      "Leading electronic waste recycling facility with certified disposal processes.",
    priceRange: "₦100 - ₦1200/Kg",
    accepts: ["Brass", "Plastics", "Aluminium"],
  },
  {
    id: 4,
    image: card_img4,
    title: "Bottle Bank Nigeria",
    rating: 4.7,
    reviewsCount: 89,
    location: "Garki, Abuja",
    distance: "4.2 km",
    description:
      "Bottle collection and recycling service with pickup options available.",
    priceRange: "₦100 - ₦1200/Kg",
    accepts: ["Copper", "Plastics", "Glass"],
  },
  {
    id: 5,
    image: card_img5,
    title: "EcoReMetal Recovery Co.",
    rating: 4.7,
    reviewsCount: 89,
    location: "Garki, Abuja",
    distance: "4.2 km",
    description:
      "Specialized metal recycling company with state-of-the-art processing facilities.",
    priceRange: "₦100 - ₦1200/Kg",
    accepts: ["Copper", "Plastics", "Aluminium"],
  },
  {
    id: 6,
    image: card_img6,
    title: "CleanEarth Recyclers",
    rating: 4.7,
    reviewsCount: 89,
    location: "Garki, Abuja",
    distance: "4.2 km",
    description:
      "Family-owned business committed to sustainable waste management practices.",
    priceRange: "₦100 - ₦1200/Kg",
    accepts: ["Brass", "Plastics", "Battery"],
  },
];

export const Search_materials: React.FC = () => {
  return (
    <section className="bg-[#EDF2ED] lg:px-[75px] px-6 py-16">
      {/* Search & Filter Bar */}
      <div className="bg-white p-8 rounded-[12px] flex flex-col mb-12 lg:flex-row justify-between items-center gap-4">
        {/* Search Input */}
        <div className="flex items-center w-full max-w-[500px] bg-white overflow-hidden rounded-[12px] border border-[#DBDBDB]">
          <span className="pl-3 text-gray-500 bg-white">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search by name or material..."
            className="flex-1 px-4 bg-white py-2 md:py-3 text-[#616161] font-medium text-sm lg:text-base outline-none"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          />
        </div>
 
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 w-full lg:w-auto">
          {/* Material */}
          <select className="bg-[#E7E7E7] py-2.5   px-4 lg:px-[33px] rounded-xl outline-none text-[16px] text-[#474646]">
            <option value="">Select Material</option>
            <option value="Aluminium">Aluminium</option>
            <option value="Plastic">Plastic</option>
            <option value="Iron & Steel">Iron & Steel</option>
            <option value="Glass">Glass</option>
            <option value="Brass">Brass</option>
            <option value="Copper">Copper</option>
            <option value="Battery">Battery</option>
          </select>

          {/* Location */}
          <select className="bg-[#E7E7E7] py-2.5 px-4  rounded-xl outline-none text-[16px] text-[#474646]">
            <option value="">Select Location</option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
            <option value="Port Harcourt">Port Harcourt</option>
          </select>

          {/* Rate */}
          <select className="bg-[#E7E7E7] py-2.5 px-4 rounded-xl outline-none text-[16px] text-[#474646]">
            <option value="">Select Rate</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      {/* Cards Section */}
      <h5 className="mb-4  text-[20px] font-bold leading-snug text-[#474646]">
          {recycle_data.length} Materials Found
        </h5>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {recycle_data.map((item) => (
          <RecycleCard
            key={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            reviewsCount={item.reviewsCount}
            location={item.location}
            distance={item.distance}
            description={item.description}
            accepts={item.accepts}
            priceRange={item.priceRange}
            onViewProfile={() => alert(`Viewing ${item.title}`)}
          />
        ))}
      </div>
    </section>
  );
};
