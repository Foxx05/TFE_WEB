import { useEffect } from "react";

export default function ScrollDown() {

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".scroll-down");

      if (!element) return;

      element.classList.toggle("hidden", window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  function scrollToSection() {
    const targetSection = document.querySelector("section");

    if (targetSection instanceof HTMLElement) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div className="scroll-down" onClick={scrollToSection}>
      <svg width="80" height="80" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" stroke="#fafafa" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="100" className="scroll-circle"/>
        <path d="M25 32 l-6 -6 h12 l-6 6" fill="#fafafa"/>
      </svg>
    </div>
  );
}