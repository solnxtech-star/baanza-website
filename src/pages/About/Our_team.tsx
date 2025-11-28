import React from "react";
import team_img1 from "../../assets/team1.1.jpg";
import team_img2 from "../../assets/Team.2.2.jpg";
import team_img3 from "../../assets/Team3.3.jpg";
import team_img4 from "../../assets/Team4.4.jpg";
import team_img5 from "../../assets/melvin.jpg";
import { Facebook, Instagram, Mail } from "lucide-react";

export const Our_team: React.FC = () => {
  const XIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#101010"
      className="w-5 h-5"
    >
      <path d="M18.244 2H21.5l-7.35 8.39L22 22h-5.657l-4.41-5.77L6.754 22H3.5l7.793-8.89L2 2h5.828l4.066 5.38L18.244 2zm-2.081 17h2.004L8.923 4h-2.12l9.36 15z" />
    </svg>
  );

  const team_data = [
    {
      id: 1,
      team_img: team_img1,
      team_title: "AGBUGBA Onyinye",
      team_text: "Founder / C.E.O",
      social_links: [
        { id: 1, icon: <Facebook className="w-5 h-5 text-[#101010]" /> },
        { id: 2, icon: <Instagram className="w-5 h-5 text-[#101010]" /> },
        { id: 3, icon: XIcon },
        { id: 4, icon: <Mail className="w-5 h-5 text-[#101010]" /> },
      ],
    },
    {
      id: 2,
      team_img: team_img2,
      team_title: "GBUDJE Audrey",
      team_text: "C.F.O",
      social_links: [
        { id: 1, icon: <Facebook className="w-5 h-5 text-[#101010]" /> },
        { id: 2, icon: <Instagram className="w-5 h-5 text-[#101010]" /> },
        { id: 3, icon: XIcon },
        { id: 4, icon: <Mail className="w-5 h-5 text-[#101010]" /> },
      ],
    },
    {
      id: 3,
      team_img: team_img3,
      team_title: "IDERIAH Soselye",
      team_text: "Director, Strategy Lead",
      social_links: [
        { id: 1, icon: <Facebook className="w-5 h-5 text-[#101010]" /> },
        { id: 2, icon: <Instagram className="w-5 h-5 text-[#101010]" /> },
        { id: 3, icon: XIcon },
        { id: 4, icon: <Mail className="w-5 h-5 text-[#101010]" /> },
      ],
    },
    {
      id: 4,
      team_img: team_img4,
      team_title: "ORIANWO Azubike",
      team_text: "COO",
      social_links: [
        { id: 1, icon: <Facebook className="w-5 h-5 text-[#101010]" /> },
        { id: 2, icon: <Instagram className="w-5 h-5 text-[#101010]" /> },
        { id: 3, icon: XIcon },
        { id: 4, icon: <Mail className="w-5 h-5 text-[#101010]" /> },
      ],
    },
    {
      id: 5,
      team_img: team_img5,
      team_title: "EDOJA Melvin",
      team_text: "CTO",
      social_links: [
        { id: 1, icon: <Facebook className="w-5 h-5 text-[#101010]" /> },
        { id: 2, icon: <Instagram className="w-5 h-5 text-[#101010]" /> },
        { id: 3, icon: XIcon },
        { id: 4, icon: <Mail className="w-5 h-5 text-[#101010]" /> },
      ],
    },
  ];

  return (
    <section className="py-14 md:px-[158px] bg-[#FEFEFE]">
      <h2 className="text-[#2E2E2E] text-center text-2xl md:text-3xl font-bold">
        Meet Our <span className="text-[#22A747]">Teams</span>
      </h2>

      <p className="max-w-3xl text-center text-[#616161] text-base md:text-[20px] mb-10 py-4 px-2 mx-auto">
       Our team has gained over 25 years combined experience in waste management, IT, project management, business management consulting, Human Resources, customer relation and business administration from reputable firms like SPDC, KPMG, SUNCOR ENERGY, TMCH and a host of others.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8   justify-center items-center px-4 mb-[4em]">
        {team_data.map((item) => (
          <div
            key={item.id}
            className="feat_container mx-auto border border-[#CDCDCD] bg-[#FEFEFE] rounded-[12px] w-full md:w-[302px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="feat_card_img">
              <img
                src={item.team_img}
                alt={item.team_title}
                className="rounded-t-[12px] w-full h-auto"
              />
            </div>
            <div className="team_body py-4 px-3.5">
              <div className="flex justify-between items-center flex-col translate-y-[-50px] bg-[#22A747] p-4 rounded-3xl">
                <h5 className="text-[#FEFEFF] text-[20px] font-[600]">
                  {item.team_title}
                </h5>
                <p className="text-[#FEFEFF] text-[16px]">{item.team_text}</p>
              </div>

              <div className="flex gap-4 justify-center mt-2">
                {item.social_links.map((social) => (
                  <span
                    key={social.id}
                    className="cursor-pointer border border-[#101010] w-[40px] h-[40px] p-1 rounded-full flex items-center justify-center"
                  >
                    {social.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
