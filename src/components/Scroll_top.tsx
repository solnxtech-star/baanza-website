import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScroll) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-0 bg-[#22A747] text-white p-3 rounded-full shadow-lg hover:bg-[#1d8d3d] transition duration-300 z-[9999]"
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;
