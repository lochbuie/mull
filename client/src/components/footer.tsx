import Monogram from "./monogram";

export default function Footer() {
  return (
    <footer className="bg-dartmouth text-white py-10 border-t border-white/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Monogram initials="AJ" inverted />
            <div>
              <h2 className="font-playfair text-xl">Alex Johnson</h2>
              <p className="text-white/80 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#travel" className="text-white/80 hover:text-white transition-colors">Travel</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
            <a href="#blog" className="text-white/80 hover:text-white transition-colors">Blog</a>
            <a href="#hobbies" className="text-white/80 hover:text-white transition-colors">Hobbies</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>
            Master of Engineering Management Student at Dartmouth College
          </p>
        </div>
      </div>
    </footer>
  );
}
