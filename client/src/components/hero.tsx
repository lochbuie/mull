export default function Hero() {
  return (
    <section className="library-pattern text-cream relative min-h-[90vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute top-[20%] right-[20%] w-32 h-32 md:w-48 md:h-48 border border-gold/10 opacity-20 rotate-45"></div>
        <div className="absolute bottom-[20%] left-[20%] w-32 h-32 md:w-64 md:h-64 border border-gold/10 opacity-20 rotate-12"></div>
        <div className="absolute top-[10%] left-[10%] w-16 h-16 md:w-32 md:h-32">
          <div className="w-full h-full border-l border-t border-gold/20"></div>
        </div>
        <div className="absolute bottom-[10%] right-[10%] w-16 h-16 md:w-32 md:h-32">
          <div className="w-full h-full border-r border-b border-gold/20"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side with main content */}
          <div className="lg:w-7/12 relative">
            {/* Hero decorative ornament */}
            <div className="absolute -top-20 -left-6 text-gold/10 font-cormorant text-[180px] leading-none opacity-30 select-none pointer-events-none hidden md:block">
              J
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <span className="decorative-line"></span>
                <span className="text-gold/80 font-garamond italic">Est. MMXXIII</span>
                <span className="decorative-line"></span>
              </div>
              
              <div className="relative mb-8">
                <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-4 text-gold">
                  <span className="relative z-10">Jackson</span>
                  <br/>
                  <span className="relative z-10">McLain</span>
                </h1>
                <div className="absolute h-6 -bottom-1 left-0 w-1/2 bg-gradient-to-r from-mahogany/30 to-transparent z-0"></div>
              </div>
              
              <div className="border-l-2 border-gold/30 pl-5 my-8">
                <p className="text-xl md:text-2xl text-cream/90 font-cormorant italic leading-relaxed">
                  <span className="text-gold font-normal">Master of Engineering Management</span>
                  <span className="text-gold mx-2">·</span>
                  <span>Dartmouth College</span>
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-cream/90 max-w-2xl mb-10 font-baskerville leading-relaxed">
                I'm a graduate student at Dartmouth College, pursuing a degree in Engineering Management. Professionally, I work in product at a fintech company, where I help shape user-driven solutions in the financial space. As an Irving Institute Graduate Energy Fellow, I explore the intersection of energy, technology, and sustainability through research. Originally from Signal Mountain, Tennessee, I now live in Hanover, NH, and will be based in London this summer. I love traveling, discovering new cultures, and learning about history. I'll be graduating from Dartmouth College in 2026.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8 mt-10">
                <a href="#travel" className="btn-primary inline-flex items-center group">
                  <span>Expedition Chronicles</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
                <a href="#projects" className="btn-secondary inline-flex items-center group">
                  <span>Academic Portfolio</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side with decorative image frame */}
          <div className="lg:w-5/12 relative hidden lg:block">
            <div className="relative">
              {/* Ornamental frame */}
              <div className="absolute -inset-4 border border-gold/30 z-0"></div>
              <div className="absolute -inset-2 border border-gold/20 z-0"></div>
              
              {/* Image */}
              <div className="relative z-10 vintage-shadow">
                <img 
                  src="/mull/hero-portrait.png" 
                  alt="Portrait" 
                  style={{ display: "block", maxWidth: "100%", height: "auto", margin: "0 auto" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebony/60 to-transparent"></div>
                <div className="absolute inset-0 box-border p-6 flex items-end">
                  <div className="relative">
                    <p className="font-cormorant italic text-sm text-cream/70">
                      "Generations of Dartmouth students will have at least some familiarity with the 200-year-old case thanks to the oft-quoted words of Daniel Webster, Class of 1801, spoken during his argument on behalf of the College's trustees:
                      'It is, sir, as I have said, a small college, and yet there are those who love it!'"
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Ornamental corners */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-gold/40 z-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-gold/40 z-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gold/60 pointer-events-none">
        <span className="font-garamond text-sm uppercase tracking-widest">Explore</span>
        <div className="mt-2 w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"></div>
      </div>
    </section>
  );
}
