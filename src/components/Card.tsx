import { LocationEdit, Star } from "lucide-react";
import React from "react";
 

interface RecycleCardProps {
  image: string;
  title: string;
  rating: number;
  reviewsCount: number;
  location?: string;
  distance?: string;
  description: string;
  accepts?: string[];
  priceRange: string;
  onViewProfile: () => void;
  className?: string; 
}

export const RecycleCard: React.FC<RecycleCardProps> = ({
  image,
  title,
  rating,
  reviewsCount,
  location,
  distance,
  description,
  accepts = [],
  priceRange,
  onViewProfile,
  className = "", 
}) => {
  const roundedRating = Math.round(rating * 10) / 10;

  return (
    <article
      className={`max-w-md bg-white rounded-2xl shadow-md overflow-hidden ${className}`}
      aria-label={`${title} card`}
    >
      <div className="">
        <div className="">
          <img
            src={image}
            alt={`${title} cover`}
            className="w-full h-48 object-cover md:h-full"
          />
        </div>

        <div className="p-4 flex flex-col justify-between">
          <div>
           <div className="flex  justify-between">
             <h5 className="text-[20px] font-semibold text-[#101010]">{title}</h5>
             <div className="flex items-center mr-3">
                <Star className="text-amber-400" />
                <span className="ml-1 text-[16px] font-bold text-[#121212]">{roundedRating}</span>
                <span className="ml-2 text-[16px] font-medium text-[#B6B6B6]">({reviewsCount})</span>
              </div>
           </div>

            <div className="mt-2 flex items-center text-sm text-slate-600">
             

              <div className="flex gap-2 items-center">
               <LocationEdit />
                <span className="text-[#B6B6B6] text-[16px] font-bold">
                  {location}
                  {distance ? ` · ${distance}` : ""}
                </span>
              </div>
            </div>

            <p className="mt-3 text-[16px] text-[#6D6D6D] font-medium">{description}</p>

            {accepts.length > 0 && (
              <div className="mt-3">
                <h5 className="text-[12px] font-medium text-[#616161]">Accepts</h5>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {accepts.map((item) => (
                    <li
                      key={item}
                      className="text-xs px-2 py-1 rounded-full text-[#22A747] bg-[#E9F6ED]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-[#616161] font-medium">Price Range</div>
              <div className="font-semibold text-[#22A747] text-[16px] mt-3">{priceRange}</div>
            </div>

            <button
              onClick={onViewProfile}
              className="inline-flex items-center px-6 py-3 bg-[#22A747] hover:bg-emerald-600 text-white text-sm font-medium rounded-[12px] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-300 cursor-pointer"
              aria-label={`View profile of ${title}`}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
