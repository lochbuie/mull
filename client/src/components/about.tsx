import { MapPin, BookOpen, GraduationCap, Briefcase, Code, Camera } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 textured-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            {/* Student image */}
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gold/20 -m-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Alex Johnson, Dartmouth MEM Student" 
                className="antique-card w-full h-auto object-cover shadow-lg relative z-10" 
              />
            </div>
            
            <div className="mt-10 antique-card book-texture p-6 border border-gold/30">
              <h3 className="font-playfair text-gold text-xl mb-6 pb-2 border-b border-gold/20">Academic Credentials</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="text-gold mt-1">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gold/90 font-playfair">Dartmouth College</p>
                    <p className="text-sm text-ivory/80 font-garamond">Master of Engineering Management, 2023-Present</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-gold mt-1">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gold/90 font-playfair">University of Washington</p>
                    <p className="text-sm text-ivory/80 font-garamond">B.S. Computer Science, 2019-2023</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-gold mt-1">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gold/90 font-playfair">Tech Innovations Inc.</p>
                    <p className="text-sm text-ivory/80 font-garamond">Software Engineer Intern, Summer 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="inline-block border-b-2 border-gold mb-8">
              <h2 className="font-playfair text-gold text-3xl md:text-4xl">The Scholar's Introduction</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-ivory">
              <p className="mb-6 text-lg leading-relaxed font-baskerville">
                As a Master of Engineering Management candidate at Dartmouth College, I stand at the confluence of technical ingenuity and leadership philosophy. My foundations in computer science provide the analytical framework through which I approach the ever-evolving landscape of technology management, while my current academic pursuit cultivates the strategic insight essential for guiding innovation.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed font-baskerville">
                Beyond the hallowed halls of academia, I am a devoted peripatetic—finding profound wisdom in the exploration of distant lands and unfamiliar cultures. My travels across fifteen nations spanning four continents have been meticulously chronicled through the twin mediums of photography and prose, each journey adding new dimensions to my understanding of our interconnected world.
              </p>
              
              <div className="relative antique-card p-8 my-8 italic">
                <span className="quote-mark">"</span>
                <p className="text-lg relative z-10 text-gold/90 font-playfair">
                  True education is found at the intersection of scholarly pursuit and worldly exploration—where academic theory meets the living laboratory of global experience.
                </p>
              </div>
              
              <p className="mb-6 text-lg leading-relaxed font-baskerville">
                When not immersed in tomes of technical knowledge or traversing foreign landscapes, I find solace in the ancient forests and mist-shrouded mountains surrounding New Hampshire. These wanderings with camera in hand provide both creative respite and renewed perspective, often inspiring projects that marry technological advancement with environmental stewardship.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed font-baskerville">
                This digital compendium serves as both portfolio and personal archive—a collection of academic endeavors, expedition journals, and intellectual ventures. It stands as an invitation to kindred spirits who share in the appreciation of technological innovation, scholarly discourse, and the transformative power of deliberate wandering.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="bg-darkoak border border-gold/30 px-4 py-2 text-sm text-gold/80 font-garamond">Engineering Management</span>
              <span className="bg-darkoak border border-gold/30 px-4 py-2 text-sm text-gold/80 font-garamond">Software Architecture</span>
              <span className="bg-darkoak border border-gold/30 px-4 py-2 text-sm text-gold/80 font-garamond">Expedition Photography</span>
              <span className="bg-darkoak border border-gold/30 px-4 py-2 text-sm text-gold/80 font-garamond">Literary Documentation</span>
              <span className="bg-darkoak border border-gold/30 px-4 py-2 text-sm text-gold/80 font-garamond">Sustainable Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
