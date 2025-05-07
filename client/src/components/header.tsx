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
    <header className={`oxford-pattern sticky top-0 z-50 border-b border-gold/30 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto py-5 flex justify-between items-center">
        <div className="flex items-center space-x-5">
          {/* Custom ornamental element instead of monogram */}
          <div className="relative">
            <div className="w-14 h-14 border border-gold/60 flex items-center justify-center">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <span className="font-cormorant text-gold text-2xl font-semibold tracking-wide">JM</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 border-r border-b border-gold/40"></div>
            <div className="absolute -top-1 -left-1 w-7 h-7 border-l border-t border-gold/40"></div>
          </div>
          
          <div className="hidden md:block">
            <h1 className="font-cormorant text-gold text-2xl font-semibold tracking-wide">Jackson McLain</h1>
            <div className="flex items-center text-cream/70 mt-1">
              <span className="text-sm font-garamond italic">Dartmouth College</span>
              <span className="mx-2 text-gold text-xs">•</span>
              <span className="text-sm font-garamond italic">MDCCLXIX</span>
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gold focus:outline-none border border-gold/30 w-10 h-10 flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 font-cormorant">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a 
                href={item.href} 
                className={`classic-link text-cream hover:text-gold transition-colors flex items-center ${
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
                <div className="absolute z-10 bg-ebony border border-gold/30 shadow-lg w-64 py-4 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="absolute top-0 left-0 w-full h-full bg-leather-texture opacity-50 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold/20"></div>
                  
                  {item.dropdown.map((dropdownItem, index) => (
                    <a 
                      key={dropdownItem.name} 
                      href={dropdownItem.href}
                      className={`relative block px-6 py-3 text-cream hover:text-gold transition-colors font-cormorant text-base ${
                        index < item.dropdown.length - 1 ? "border-b border-gold/10" : ""
                      }`}
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
        className={`md:hidden leather-texture border-t border-gold/20 absolute w-full transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-4 py-6 px-6">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gold/20 pb-4 last:border-b-0 last:pb-0">
              <a 
                href={item.href} 
                className="text-gold block py-1 font-cormorant text-xl tracking-wide"
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
              
              {item.dropdown && (
                <div className="mt-3 ml-4 space-y-3">
                  {item.dropdown.map((dropdownItem) => (
                    <a 
                      key={dropdownItem.name} 
                      href={dropdownItem.href}
                      className="block py-1 text-cream/90 hover:text-gold transition-colors font-garamond"
                      onClick={closeMobileMenu}
                    >
                      — {dropdownItem.name}
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
