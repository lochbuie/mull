import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Monogram from "./monogram";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const navItems = [
  { name: "About", href: "#about" },
  { 
    name: "Research", 
    href: "#research",
    dropdown: [
      { name: "Publications", href: "#publications" },
      { name: "Current Work", href: "#current-work" },
      { name: "Presentations", href: "#presentations" }
    ]
  },
  { 
    name: "Teaching", 
    href: "#teaching",
    dropdown: [
      { name: "Courses", href: "#courses" },
      { name: "Philosophy", href: "#philosophy" },
      { name: "Resources", href: "#resources" }
    ]
  },
  { name: "Essays", href: "#essays" },
  { name: "Contact", href: "#contact" },
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
    <header className={`bg-cream sticky top-0 z-50 border-b border-dartmouth/20 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Monogram initials="JH" />
          <div className="hidden md:block">
            <h1 className="font-playfair text-dartmouth text-2xl font-semibold">Jonathan Harrington</h1>
            <p className="text-sm text-tweed/80 italic">Academic • Writer • Historian</p>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-dartmouth focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a 
                href={item.href} 
                className={`text-dartmouth hover:text-dartmouth/80 transition-colors px-2 py-1 flex items-center ${
                  activeSection === item.href.substring(1) ? "font-semibold" : ""
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
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              
              {item.dropdown && (
                <div className="absolute z-10 bg-cream border border-dartmouth/20 shadow-lg rounded-sm w-48 py-2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.dropdown.map((dropdownItem) => (
                    <a 
                      key={dropdownItem.name} 
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-dartmouth hover:bg-dartmouth hover:text-cream transition-colors"
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
        className={`md:hidden bg-cream border-t border-dartmouth/20 px-4 py-2 absolute w-full transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-3 py-3">
          {navItems.map((item) => (
            <div key={item.name} className="border-t border-dartmouth/10 pt-2 first:border-t-0 first:pt-0">
              <a 
                href={item.href} 
                className="text-dartmouth hover:text-dartmouth/80 transition-colors block py-1"
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
                      className="block pl-3 py-1 text-sm text-dartmouth/80 hover:text-dartmouth transition-colors"
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
