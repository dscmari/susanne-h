import { useEffect, useState } from "react";
import ArrowTop from "../assets/icons/arrow-top";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="fixed bottom-5 right-5 bg-custom-blue rounded-4xl p-2 opacity-50 cursor-pointer"
          onClick={scrollToTop}
        >
<ArrowTop/> 

        </button>
      )}
    </>
  );
}
