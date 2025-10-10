import { ArrowUp, Recycle } from "lucide-react";
import React, { useState } from "react";

export const Materials: React.FC = () => {
  const [currentTab, setCurrenttab] = useState("All");
  const tab_menu: string[] = [
    "All",
    "Plastics",
    "Iron & Steel",
    "Glass",
    "Brass",
    "Copper",
    "Aluminium",
    "Battery",
  ];

   const material_data = [
        {
            id: 1,
            title: 'Aluminium Can',
            description: 'Beverage can made from aluminium, soft drink and othe beverages',
            material_type: 'Aluminium',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 2,
            title: 'PET Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Plastic',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 3,
            title: 'Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Glass',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 4,
            title: 'Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Glass',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 5,
            title: 'Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Iron & Steel',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 6,
            title: 'Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Brass',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 7,
            title: 'Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Copper',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
        {
            id: 8,
            title: 'Bottles',
            description: 'Clear plastic bottle used for water',
            material_type: 'Battery',
            recycle_type: 'Recyclable',
            price_span:  'N150',
            kg_span: 'N300/kg',
            icon: <ArrowUp />,
            recyle_icon: <Recycle />

        },
       
       
    ];
  const filteredMaterials =
    currentTab === "All"
      ? material_data
      : material_data.filter((item) => item.material_type === currentTab);

  return (
    <section className="px-4 md:px-10 lg:px-[100px] py-10">
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
            style={{
              padding: "10px 20px",
            }}
            onClick={() => setCurrenttab(item)}
          >
            {item}
          </button>
        ))}
      </div>
 
      <div className="text-center mb-8">
        <h3 className="mb-2 text-xl md:text-3xl font-bold leading-snug text-[#2E2E2E]">
          {filteredMaterials.length} Materials Found
        </h3>
        <p className="text-[#7D7E7D] text-sm md:text-base max-w-xl mx-auto px-4">
          Click on any material to see detailed handling instructions and
          current prices.
        </p>
      </div>
 
      <div className="flex flex-col gap-6 pb-16">
        {filteredMaterials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-white p-4 sm:p-6 rounded-[12px] shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="bg-[#22A747] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-white rounded-full flex justify-center items-center shrink-0">
              {item.recyle_icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h5 className="text-[#2E2E2E] text-lg sm:text-[22px] font-bold mb-1">
                {item.title}
              </h5>
              <p className="text-[#7D7E7D] text-sm md:text-base mb-3">
                {item.description}
              </p>

              {/* Tags & Price */}
              <div className="flex flex-wrap gap-3 items-center">
                <span className="bg-[#E7E7E7] py-2 px-4 rounded-full text-sm md:text-base text-[#121212] font-medium shadow-sm">
                  {item.material_type}
                </span>
                <span className="bg-[#E9F6ED] py-2 px-4 rounded-full text-sm md:text-base text-[#22A747] font-medium shadow-sm">
                  {item.recycle_type}
                </span>

                <div className="flex gap-1 items-center">
                  <span className="text-[15px] sm:text-[16px] text-[#22A747] font-medium">
                    {item.price_span} -
                  </span>
                  <span className="text-[15px] sm:text-[16px] text-[#22A747] font-medium">
                    {item.kg_span}
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Icon (Right Side) */}
            <div className="ml-auto hidden sm:block text-[#22A747]">{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
