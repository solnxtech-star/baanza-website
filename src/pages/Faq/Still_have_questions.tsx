import React from "react";

export const Still_have_questions: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: "New User?",
      description: "Learn how to get started with Baanza.",
      linkText: "Getting Started Guide →",
    },
    {
      id: 2,
      title: "Waste Guide",
      description: "Learn about different recyclable materials.",
      linkText: "Browse Materials →",
    },
    {
      id: 3,
      title: "Become a Pro",
      description: "Join our network of verified buyers.",
      linkText: "Apply Now →",
    },
  ];

  return (
    <section className="bg-[#FEFEFE] py-16 px-6 lg:px-[80px] text-center">
      {/* Top section */}
      <div className="max-w-6xl mx-auto mb-12 p-10 rounded-[12px] bg-[#22A747]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E7E7E7] mb-4">
          Still Have Questions?
        </h2>
        <p className="text-[#E7E7E7] text-lg">
          Can't find the answer you're looking for? Our support team is here to help.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="flex items-center gap-2 bg-[#E9F6ED] text-[#22A747] px-8 py-3 rounded-xl font-medium hover:bg-[#157636] hover:text-white transition">
            Contact Support
          </button>
          <button className="flex items-center gap-2 border border-[#fff] text-[#FEFEFE] px-6 py-3 rounded-xl font-medium transition hover:bg-[#FEFEFE] hover:text-[#22A747]">
            Email Us
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#EAEAEA] my-10 w-full max-w-4xl mx-auto" />

      {/* Cards Section (mapped) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="p-6 border bg-[#FAFFFB] rounded-2xl hover:shadow-md transition"
            style={{ boxShadow: "0px 4px 4px 0px #0E221426" }}
          >
            <h5 className="text-lg font-semibold mb-2 text-[#121212]">{card.title}</h5>
            <p className="text-[#616161] text-lg mb-4">{card.description}</p>
            <a href="#" className="text-[#22A747] font-medium text-lg hover:underline">
              {card.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
