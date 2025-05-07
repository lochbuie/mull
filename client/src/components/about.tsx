import { MapPin, BookOpen, GraduationCap, Briefcase, Code, Camera } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            {/* Student image */}
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Alex Johnson, Dartmouth MEM Student" 
              className="card w-full h-auto object-cover rounded-lg shadow-lg" 
            />
            
            <div className="mt-8 card bg-white p-6 rounded-lg">
              <h3 className="font-playfair text-dartmouth text-xl mb-4">Education & Experience</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="text-dartmouth">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Dartmouth College</p>
                    <p className="text-sm text-darkgray">Master of Engineering Management, 2023-Present</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-dartmouth">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium">University of Washington</p>
                    <p className="text-sm text-darkgray">B.S. Computer Science, 2019-2023</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-dartmouth">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Tech Innovations Inc.</p>
                    <p className="text-sm text-darkgray">Software Engineer Intern, Summer 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="inline-block border-b-2 border-dartmouth mb-6">
              <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">About Me</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-darkgray">
              <p className="mb-4 text-lg leading-relaxed">
                I'm a Master of Engineering Management student at Dartmouth College with a background in computer science and a passion for combining technical innovation with effective leadership. My academic journey has equipped me with a strong foundation in software development, while my current studies are helping me build the business acumen needed to lead technical teams.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                Beyond academics, I'm an avid traveler who believes that experiencing diverse cultures broadens perspective and fuels creativity. I've been fortunate to visit over 15 countries across four continents, documenting my journeys through photography and my travel blog.
              </p>
              
              <div className="relative card bg-white p-8 mb-6 italic rounded-lg">
                <span className="quote-mark">"</span>
                <p className="text-lg relative z-10">
                  The best education comes from exploring both classrooms and countries. Technology connects the world, but travel helps us understand it.
                </p>
              </div>
              
              <p className="mb-4 text-lg leading-relaxed">
                When I'm not coding or traveling, you'll find me hiking the scenic trails around New Hampshire, practicing landscape photography, or working on side projects that combine my technical skills with my interest in sustainable technology solutions.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                Through this website, I hope to share my academic journey, travel experiences, and personal projects while connecting with others who share similar interests in technology, adventure, and continuous learning.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Engineering Management</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Software Development</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Travel Photography</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Adventure Blogging</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Sustainable Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
