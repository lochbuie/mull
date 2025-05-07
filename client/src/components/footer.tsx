import Monogram from "./monogram";

export default function Footer() {
  return (
    <footer className="bg-dartmouth text-cream py-10 border-t border-cream/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Monogram initials="JH" inverted />
            <div>
              <h2 className="font-playfair text-xl">Jonathan Harrington</h2>
              <p className="text-cream/80 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="text-cream/80 hover:text-cream transition-colors">About</a>
            <a href="#research" className="text-cream/80 hover:text-cream transition-colors">Research</a>
            <a href="#teaching" className="text-cream/80 hover:text-cream transition-colors">Teaching</a>
            <a href="#essays" className="text-cream/80 hover:text-cream transition-colors">Essays</a>
            <a href="#contact" className="text-cream/80 hover:text-cream transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cream/20 text-center text-sm text-cream/60">
          <p>
            Designed in the tradition of the great academic institutions: Oxford, Cambridge, Harvard, Dartmouth, and Princeton.
          </p>
        </div>
      </div>
    </footer>
  );
}
