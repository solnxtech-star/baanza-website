import { useState, useEffect } from "react";
import nav_logo from "../assets/baanza_logo.png";
import Button from "./Button";
import { MenuIcon, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

type NavbarLink = {
  id: number;
  nav_text: string;
  nav_url?: string;
  children?: { id: number; label: string; url: string }[];
};

type AuthLink = {
  id: number;
  auth_text: string;
};

export const Navbar: React.FC = () => {
  const nav_links: NavbarLink[] = [
    {
      id: 1,
      nav_text: "Baanza",
      nav_url: "/",
      children: [
        { id: 1, label: "About Baanza", url: "/about" },
        { id: 2, label: "A - Z of Waste", url: "/a-z_waste" },
        { id: 3, label: "News & Blogs", url: "/blog" },
      ],
    },
    {
      id: 2,
      nav_text: "Customers",
      children: [
        { id: 1, label: "Services on Baanza", url: "/services" },
        { id: 2, label: "Vendors Near Me", url: "/vendors" },
        { id: 3, label: "FAQ", url: "/faq" },
      ],
    },
    {
      id: 3,
      nav_text: "Pros",
      nav_url: "/pros",
      children: [
        { id: 1, label: "Baanza Pro", url: "/baanza_pro" },
        { id: 2, label: "Sign up as a Pro", url: "/signup" },
      ],
    },
    {
      id: 4,
      nav_text: "Support",
      nav_url: "/support",
      children: [
        { id: 1, label: "Help", url: "/contact" },
        { id: 2, label: "Terms of Use", url: "/terms" },
        { id: 3, label: "Privacy Policy", url: "/privacy" },
      ],
    },
  ];

  const auth: AuthLink[] = [
    { id: 1, auth_text: "Login" },
    { id: 2, auth_text: "Sign up" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showScroll, setShowScroll] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reusable nav render
  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`flex ${isMobile ? "flex-col gap-6" : "items-center gap-8"}`}
    >
      {nav_links.map((item) => (
        <li
          key={item.id}
          className="relative group"
          onMouseEnter={() => !isMobile && setOpenDropdown(item.id)}
          onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          onClick={() =>
            isMobile &&
            setOpenDropdown(openDropdown === item.id ? null : item.id)
          }
        >
          <span className="font-dm font-semibold text-base leading-6 text-gray-800 hover:text-[#22A747] transition cursor-pointer">
            {item.nav_text}
          </span>

          {/* Dropdown */}
          {item.children && openDropdown === item.id && (
            <div
              className={`absolute ${
                isMobile ? "relative mt-2" : "top-full left-0 mt-2"
              } w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2`}
            >
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.url}
                  className="block px-4 py-2 font-dm text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-[#FDFDFD] relative md:px-[80px] lg:px-[80px] shadow-sm">
        {/* Logo */}
        <a href="/">
          <img src={nav_logo} alt="Baanza logo" className="h-8" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex">{renderNavLinks()}</div>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4">
          {auth.map((item) => (
            <Button
              key={item.id}
              label={item.auth_text}
              className={
                item.auth_text === "Sign up"
                  ? "bg-[#22A747] text-white font-medium hover:bg-white hover:text-black px-6 py-3 h-[48px]"
                  : "h-[48px] text-[#22A747] font-medium hover:bg-white bg-white border border-[#22A747] px-6 py-3"
              }
            />
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="md:hidden text-[#22A747]">
          {menuOpen ? "✖" : <MenuIcon size={28} />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-[60px] right-0 text-left w-[80%] bg-[#FDFDFD] flex flex-col gap-6 p-8 z-[999] h-screen">
            {renderNavLinks(true)}

            <div className="flex flex-col gap-4 mt-6">
              {auth.map((item) => (
                <Button
                  key={item.id}
                  label={item.auth_text}
                  className={
                    item.auth_text === "Sign up"
                      ? "bg-[#22A747] text-white w-[60%] font-medium hover:bg-white hover:text-black px-6 py-3 h-[48px]"
                      : "h-[48px] text-[#22A747] w-[60%] font-medium hover:bg-white bg-white border border-[#22A747] px-6 py-3"
                  }
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#22A747] text-white p-3 rounded-full shadow-lg hover:bg-[#1d8d3d] transition duration-300"
        >
          <ArrowUp size={22} />
        </button>
      )}
      <button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 bg-[#22A747] text-white p-3 rounded-full shadow-lg hover:bg-[#1d8d3d] transition duration-300 z-[9999]"
>
  <ArrowUp size={22} />
</button>

    </>

  );
};
