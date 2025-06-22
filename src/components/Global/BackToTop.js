import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      let percentage = (scrollPos / bodyHeight) * 100;
      if (percentage > 100) percentage = 100;
      setScrollPercentage(percentage);
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <span className="scroll-to-top-text">Back Top</span>
      <span className="scroll-to-top-wrapper">
        <span
          className="scroll-to-top-inner"
          style={{ width: `${scrollPercentage}%`, }}
        ></span>
      </span>
    </button>
  );
};

export default ScrollToTop;