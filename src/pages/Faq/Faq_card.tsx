import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqProps {
  faq_head: string;
  faq_title_content: string[];
  faq_answers: string[];
}

export const Faq_card: React.FC<FaqProps> = ({
  faq_head,
  faq_title_content,
  faq_answers,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="bg-[#F9FAFB] mb-8 rounded-xl overflow-hidden shadow-md transition-all duration-300"
      style={{
        boxShadow: "0px 4px 10px 0px rgba(191, 192, 191, 0.5)",
      }}
    >
      {/* Section Header */}
      <div className="bg-[#F2FAF4] p-4 sm:p-6 flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2E2E2E]">
          {faq_head}
        </h3>
      </div>

      {/* FAQ Titles */}
      {faq_title_content.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center bg-white px-4 sm:px-6 py-4 sm:py-5 border-b border-[#E0E0E0] cursor-pointer hover:bg-[#F7FDF9] transition-colors duration-200"
          >
            <h6 className="text-[#2E2E2E] text-base sm:text-lg md:text-xl font-medium text-left pr-2">
              {item}
            </h6>
            <span className="flex-shrink-0">
              {activeIndex === index ? (
                <ChevronUp className="text-[#22A747] w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <ChevronDown className="text-[#22A747] w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </span>
          </div>

          {/* FAQ Answer */}
          {activeIndex === index && (
            <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 animate-[fadeIn_0.3s_ease-in-out]">
              <p className="text-[#616161] text-sm sm:text-base leading-relaxed text-left">
                {faq_answers[index]}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
