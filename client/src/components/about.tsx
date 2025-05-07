import { MapPin, BookOpen, GraduationCap, Briefcase, Code, Camera } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="oxford-pattern">
      <div className="container">
        <div className="mb-16 relative overflow-hidden">
          <div className="w-24 h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent mb-6"></div>
          <h2 className="section-title font-cormorant text-4xl md:text-5xl mb-6">The Scholar's Path</h2>
          
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gold/20 opacity-40"></div>
        </div>
        
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24">
          {/* Left sidebar with profile image and credentials */}
          <div className="xl:w-4/12">
            {/* Student image with decorative frame */}
            <div className="relative mb-16">
              {/* Ornamental corners */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-gold/40 z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-gold/40 z-20"></div>
              
              {/* Image frame */}
              <div className="relative">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-gradient-to-br from-gold/30 to-transparent pointer-events-none z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Alex Johnson, Dartmouth MEM Student" 
                  className="w-full h-auto object-cover vintage-shadow relative z-0" 
                />
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ebony/90 to-transparent z-20">
                  <p className="text-sm font-garamond text-cream/80 italic text-center">
                    The boundary between technology and humanities, Winter 2023
                  </p>
                </div>
              </div>
            </div>
            
            {/* Credentials panel */}
            <div className="elegant-card leather-texture p-8">
              <div className="flex items-center mb-6">
                <span className="w-8 h-px bg-gold/40 mr-3"></span>
                <h3 className="font-cormorant text-gold text-2xl">Academic Lineage</h3>
              </div>
              
              <ul className="space-y-8">
                <li>
                  <div className="flex gap-5">
                    <div className="text-gold flex-shrink-0 mt-1">
                      <div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
                        <GraduationCap size={16} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gold font-cormorant text-xl mb-1">Dartmouth College</p>
                      <p className="text-cream/80 font-garamond italic mb-2">Master of Engineering Management</p>
                      <p className="text-cream/60 text-sm">2023–Present · Hanover, New Hampshire</p>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="flex gap-5">
                    <div className="text-gold flex-shrink-0 mt-1">
                      <div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
                        <GraduationCap size={16} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gold font-cormorant text-xl mb-1">University of Washington</p>
                      <p className="text-cream/80 font-garamond italic mb-2">Bachelor of Science, Computer Science</p>
                      <p className="text-cream/60 text-sm">2019–2023 · Seattle, Washington</p>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="flex gap-5">
                    <div className="text-gold flex-shrink-0 mt-1">
                      <div className="w-8 h-8 border border-gold/40 flex items-center justify-center">
                        <Briefcase size={16} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gold font-cormorant text-xl mb-1">Tech Innovations Inc.</p>
                      <p className="text-cream/80 font-garamond italic mb-2">Software Engineer Intern</p>
                      <p className="text-cream/60 text-sm">Summer 2022 · Boston, Massachusetts</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Main content */}
          <div className="xl:w-8/12">
            <div className="elegant-card p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-leather-texture opacity-20"></div>
              
              <h3 className="font-cormorant text-gold text-3xl mb-8">A Scholar's Perspective</h3>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-loose font-baskerville text-cream/90">
                  As a Master of Engineering Management candidate at Dartmouth College, I stand at the confluence of technical ingenuity and leadership philosophy. My foundations in computer science provide the analytical framework through which I approach the ever-evolving landscape of technology management, while my current academic pursuit cultivates the strategic insight essential for guiding innovation.
                </p>
                
                <p className="mb-6 text-lg leading-loose font-baskerville text-cream/90">
                  Beyond the hallowed halls of academia, I am a devoted peripatetic—finding profound wisdom in the exploration of distant lands and unfamiliar cultures. My travels across fifteen nations spanning four continents have been meticulously chronicled through the twin mediums of photography and prose, each journey adding new dimensions to my understanding of our interconnected world.
                </p>
              </div>
            </div>
            
            {/* Quote panel */}
            <div className="mb-12 px-6 md:px-10">
              <div className="relative px-8 md:px-16 py-10 border-l-2 border-gold/30">
                <span className="quote-mark">"</span>
                <p className="text-xl md:text-2xl relative z-10 text-gold/90 font-cormorant italic leading-relaxed">
                  True education is found at the intersection of scholarly pursuit and worldly exploration—where academic theory meets the living laboratory of global experience.
                </p>
                <div className="mt-6 flex items-center">
                  <span className="w-8 h-px bg-gold/30 mr-3"></span>
                  <span className="text-cream/70 font-garamond italic">Personal journal, September 2023</span>
                </div>
              </div>
            </div>
            
            <div className="elegant-card p-10 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-loose font-baskerville text-cream/90">
                  When not immersed in tomes of technical knowledge or traversing foreign landscapes, I find solace in the ancient forests and mist-shrouded mountains surrounding New Hampshire. These wanderings with camera in hand provide both creative respite and renewed perspective, often inspiring projects that marry technological advancement with environmental stewardship.
                </p>
                
                <p className="mb-6 text-lg leading-loose font-baskerville text-cream/90">
                  This digital compendium serves as both portfolio and personal archive—a collection of academic endeavors, expedition journals, and intellectual ventures. It stands as an invitation to kindred spirits who share in the appreciation of technological innovation, scholarly discourse, and the transformative power of deliberate wandering.
                </p>
              </div>
            </div>
            
            {/* Interests grid */}
            <div className="mb-6">
              <div className="flex items-center mb-8">
                <span className="w-10 h-px bg-gold/40 mr-4"></span>
                <h4 className="font-cormorant text-gold text-xl">Areas of Interest & Expertise</h4>
                <span className="w-10 h-px bg-gold/40 ml-4"></span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                <div className="tag">Engineering Management</div>
                <div className="tag">Software Architecture</div>
                <div className="tag">Expedition Photography</div>
                <div className="tag">Literary Documentation</div>
                <div className="tag">Sustainable Innovation</div>
                <div className="tag">Technical Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
