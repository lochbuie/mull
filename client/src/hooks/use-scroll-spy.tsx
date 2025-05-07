import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const handleScroll = () => {
      let currentSection: string | null = null;
      let minDistance = Number.MAX_VALUE;
      
      // Find the section closest to the top of the viewport
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        // We consider the section in view when its top is between -100px and halfway down the screen
        if (sectionTop < 200 && sectionTop > -section.clientHeight / 2) {
          const distance = Math.abs(sectionTop);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section.id;
          }
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  
  return activeSection;
}
