import React, { useState } from "react";
import { Calendar, Users, Clock } from "lucide-react";
import article_img1 from "../../assets/article_img1.jpg";
import related_art_img1 from "../../assets/related_article_img.jpg";
import related_art_img2 from "../../assets/related_article_img.jpg";
import related_art_img3 from "../../assets/related_article_img.jpg";
import Button from "../../components/Button";

export const Article_section: React.FC = () => {
  const [currentTab, setCurrenttab] = useState("All");

  const article_data = [
    {
      id: 1,
      title: "Baanza Reaches 10,000 Active Users Milestone",
      content:
        "We are excited to announce that Baanza has reached a significant milestone of 10,000 active users across Nigeria, with over 2,500 tons of waste successfully recycled through our platform.",
      admin: "Baanza Team",
      date: "1/15/2024",
      img: article_img1,
      button: (
        <Button
          label="Read Full Article"
          className="bg-[#22A747] text-white px-8 py-2"
        />
      ),
      material_type: "Metal",
      recycle_status: "Recycleable",
    },
  ];

  const related_articles = [
    {
      id: 1,
      category: "Success Stories",
      image: related_art_img1,
      title: "New Recycling Guidelines for Electronic Waste in Nigeria",
      readTime: "5 min read",
      description:
        "The Nigerian government has introduced new guidelines for e-waste recycling. Learn what this means for electronic waste disposal and",
      admin: "Baanza Team",
      date: "1/15/2024",
    },
    {
      id: 2,
      category: "Regulations",
      image: related_art_img2,
      title: "5 Simple Ways to Reduce Plastic Waste at Home",
      readTime: "5 min read",
      description:
        "Practical tips for reducing plastic waste in your daily life while saving money and helping the environment.",
      admin: "Baanza Team",
      date: "1/15/2024",
    },
    {
      id: 3,
      category: "Education",
      image: related_art_img3,
      title: "Aluminum Can Recycling: Why It Matters",
      readTime: "5 min read",
      description:
        "Discover the environmental and economic benefits of aluminum can recycling and how you can participate.",
      admin: "Baanza Team",
      date: "1/15/2024",
    },
    {
      id: 4,
      category: "Success Stories",
      image: related_art_img1,
      title: "New Recycling Guidelines for Electronic Waste in Nigeria",
      readTime: "5 min read",
      description:
        "The Nigerian government has introduced new guidelines for e-waste recycling. Learn what this means for electronic waste disposal and",
      admin: "Baanza Team",
      date: "1/15/2024",
    },
    {
      id: 5,
      category: "Regulations",
      image: related_art_img2,
      title: "5 Simple Ways to Reduce Plastic Waste at Home",
      readTime: "5 min read",
      description:
        "Practical tips for reducing plastic waste in your daily life while saving money and helping the environment.",
      admin: "Baanza Team",
      date: "1/15/2024",
    },
    {
      id: 6,
      category: "Education",
      image: related_art_img3,
      title: "Aluminum Can Recycling: Why It Matters",
      readTime: "5 min read",
      description:
        "Discover the environmental and economic benefits of aluminum can recycling and how you can participate.",
      admin: "Baanza Team",
      date: "1/15/2024",
    },
  ];

  const tab_menu = ["All", "Success Stories", "Regulations", "Education", "Sustainability" , "Reports", "Company News"];

  const filteredArticles =
    currentTab === "All"
      ? related_articles
      : related_articles.filter((item) => item.category === currentTab);

  return (
    <section className="py-10 px-6 lg:px-20">
      {/* --- Main Article --- */}
      {article_data.map((item) => (
        <article
          key={item.id}
          className="flex flex-col lg:flex-row overflow-hidden rounded-2xl transition-shadow duration-300 mb-16"
        >
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-between">
            <div>
              <div className="flex gap-4 mb-8">
                <span className="bg-[#E7E7E7] px-3 py-2 rounded-full">
                  {item.material_type}
                </span>
                <span className="bg-[#E9F6ED] text-[#22A747] rounded-full px-6 py-2">
                  {item.recycle_status}
                </span>
              </div>
              <h5 className="text-[#2E2E2E] text-2xl md:text-[32px] font-bold mb-3">
                {item.title}
              </h5>
              <p className="text-[#2E2E2E] text-base md:text-lg leading-relaxed mb-5">
                {item.content}
              </p>

              <div className="flex items-center gap-6 text-[#B6B6B6] text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <span>{item.admin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            <div>{item.button}</div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover max-w-[571px] rounded-2xl"
            />
          </div>
        </article>
      ))}



      {/* ===== Tabs Section ===== */}
      <div className="flex flex-wrap justify-center gap-3 pb-8">
        {tab_menu.map((item) => (
          <button
            key={item}
            className={`rounded-full text-[14px] md:text-[16px] font-medium transition-all duration-300 ${
              currentTab === item
                ? "bg-[#22A747] text-white"
                : "bg-white text-[#121212] border border-[#EAEAEA] shadow-sm hover:bg-[#E9F6ED]"
            }`}
            style={{ padding: "10px 20px" }}
            onClick={() => setCurrenttab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* --- Related Articles --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-5">
              <div className="flex items-center gap-4 justify-between text-sm text-[#6A6A6A] mb-3">
                <span
                  className={`font-semibold text-[16px] rounded-full px-6 py-3 ${
                    item.category === "Success Stories"
                      ? "bg-[#E9F6ED] text-[#22A747]"
                      : item.category === "Regulations"
                      ? "bg-[#FFECE5] text-[#C63A0E]"
                      : "bg-[#F2EEFF] text-[#4D30C2]"
                  }`}
                >
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-[#999999]">
                  <Clock size={16} />
                  <span>{item.readTime}</span>
                </div>
              </div>

              <h5 className="text-[#101010] text-xl font-semibold mb-2">
                {item.title}
              </h5>
              <p className="text-[#6D6D6D] py-4 text-base leading-relaxed mb-2">
                {item.description}
              </p>

              <div className="flex items-center gap-6 text-[#B6B6B6] text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{item.admin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
              </div>

              <Button
                label="Read More"
                className="text-[#22A747] text-left pl-0 ml-0 text-xs w-full py-2"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
