import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Monogram from "./monogram";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const navItems = [
  { name: "About", href: "#about" },
  { 
    name: "Travel", 
    href: "#travel",
    dropdown: [
      { name: "Destinations", href: "#destinations" },
      { name: "Expedition Log", href: "#upcoming-trips" },
      { name: "Photographic Studies", href: "#gallery" }
    ]
  },
  { 
    name: "Journal", 
    href: "#blog",
    dropdown: [
      { name: "Recent Entries", href: "#latest-posts" },
      { name: "Academic Interests", href: "#topics" },
      { name: "Archives", href: "#archive" }
    ]
  },
  { name: "Scholarly Works", href: "#projects" },
  { name: "Pursuits", href: "#hobbies" },
  { name: "Correspondence", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-darkoak/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gold/20 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Monogram initials="AJ" inverted={true} />
          <div className="hidden md:block">
            <h1 className="font-playfair text-gold text-2xl font-semibold">Alex Johnson</h1>
            <p className="text-sm text-ivory/70 italic font-garamond">Dartmouth College · Est. 1769</p>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gold focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-baskerville">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a 
                href={item.href} 
                className={`text-ivory hover:text-gold transition-colors px-2 py-1 flex items-center ${
                  activeSection === item.href.substring(1) ? "text-gold" : ""
                }`}
              >
                {item.name} 
                {item.dropdown && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              
              {item.dropdown && (
                <div className="absolute z-10 bg-darkoak/95 backdrop-blur-sm border border-gold/20 shadow-lg w-56 py-2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.dropdown.map((dropdownItem) => (
                    <a 
                      key={dropdownItem.name} 
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-ivory/90 hover:bg-gold/10 hover:text-gold transition-colors"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-darkoak/95 backdrop-blur-sm border-t border-gold/20 px-4 py-2 absolute w-full transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-3 py-3">
          {navItems.map((item) => (
            <div key={item.name} className="border-t border-gold/10 pt-2 first:border-t-0 first:pt-0">
              <a 
                href={item.href} 
                className="text-ivory hover:text-gold transition-colors block py-1 font-baskerville"
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
              
              {item.dropdown && (
                <div className="mt-1 ml-3 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <a 
                      key={dropdownItem.name} 
                      href={dropdownItem.href}
                      className="block pl-3 py-1 text-sm text-ivory/70 hover:text-gold transition-colors font-garamond"
                      onClick={closeMobileMenu}
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
