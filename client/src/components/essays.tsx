import { ArrowRight, Github, ExternalLink, Code, Server, Database, Monitor, LayoutGrid } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-b border-gold/20 oxford-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-gold mb-6">
            <h2 className="font-cormorant text-gold text-3xl md:text-4xl">Projects</h2>
          </div>
          <p className="text-lg text-cream/90 font-baskerville">
            A collection of my technical projects, engineering management case studies, and creative endeavors. These projects reflect my passion for solving problems at the intersection of technology, design, and user experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ProjectCard 
            title="Sustainable Travel Carbon Calculator"
            category="Web Application"
            date="March 2023"
            description="A tool that helps travelers estimate and offset their carbon footprint from different transportation methods, with personalized recommendations for eco-friendly alternatives."
            image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            imageAlt="Carbon footprint visualization"
            technologies={["React", "Node.js", "Carbon API"]}
            github="https://github.com/alexjohnson/travel-carbon-calculator"
            liveLink="https://travel-carbon.demo.com"
          />
          
          <ProjectCard 
            title="Engineering Team Analytics Dashboard"
            category="Management Tool"
            date="December 2022"
            description="A dashboard that visualizes engineering team metrics, including sprint velocity, code quality, and team health indicators, helping managers make data-driven decisions."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            imageAlt="Analytics dashboard with various charts"
            technologies={["TypeScript", "D3.js", "Express", "MongoDB"]}
            github="https://github.com/alexjohnson/team-analytics"
            liveLink="https://team-analytics.demo.com"
          />
          
          <ProjectCard 
            title="Adventure Photo Journal"
            category="Mobile App"
            date="August 2022"
            description="A mobile application that combines location data, weather conditions, and user notes with photos to create rich, contextual travel memories."
            image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            imageAlt="Travel photos arranged in journal style"
            technologies={["React Native", "Firebase", "Google Maps API"]}
            github="https://github.com/alexjohnson/adventure-journal"
            liveLink="https://apps.apple.com/adventure-journal"
          />
        </div>
        
        <div className="mb-16">
          <h3 className="font-cormorant text-gold text-2xl mb-8">Featured Project</h3>
          
          <div className="elegant-card overflow-hidden border border-gold/30 shadow-md vintage-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8">
                <span className="bg-deepforest text-cream text-xs px-3 py-1 border border-gold/20 mb-4 inline-block">
                  Capstone Project
                </span>
                <h4 className="font-cormorant text-gold text-2xl mb-4">AI-Powered Travel Itinerary Generator</h4>
                <p className="text-cream/90 font-baskerville mb-6">
                  My MEM capstone project combines machine learning with travel expertise to create personalized itineraries based on user preferences, budget constraints, and travel history. The system analyzes thousands of reviews and photos to recommend authentic local experiences beyond typical tourist attractions.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-cormorant text-gold mb-2">Technologies</h5>
                    <ul className="space-y-1 text-sm text-cream/80">
                      <li className="flex items-center gap-1"><Code size={14} className="text-gold" /> Python/TensorFlow</li>
                      <li className="flex items-center gap-1"><Server size={14} className="text-gold" /> Flask API</li>
                      <li className="flex items-center gap-1"><Monitor size={14} className="text-gold" /> React Frontend</li>
                      <li className="flex items-center gap-1"><Database size={14} className="text-gold" /> PostgreSQL</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-cormorant text-gold mb-2">Key Features</h5>
                    <ul className="space-y-1 text-sm text-cream/80">
                      <li>Personality-based recommendations</li>
                      <li>Real-time availability checking</li>
                      <li>Budget optimization</li>
                      <li>Offline access to itineraries</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-huntergreen px-4 py-2 transition-colors text-sm">
                    <Github size={16} /> View Repository
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream/90 hover:border-cream/70 px-4 py-2 transition-colors text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
              
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Travel Itinerary Generator Interface" 
                  className="w-full h-full object-cover border-l border-gold/20" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-cormorant text-gold text-2xl mb-8">Additional Projects</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="elegant-card p-4 border border-gold/30 text-center vintage-shadow">
              <div className="text-gold mb-2 flex justify-center">
                <LayoutGrid size={24} />
              </div>
              <h5 className="font-cormorant text-gold mb-1">Smart Home Dashboard</h5>
              <p className="text-xs text-cream/80 mb-2">IoT Control Interface</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-xs text-gold hover:text-cream/90">Details</a>
              </div>
            </div>
            
            <div className="elegant-card p-4 border border-gold/30 text-center vintage-shadow">
              <div className="text-gold mb-2 flex justify-center">
                <Monitor size={24} />
              </div>
              <h5 className="font-cormorant text-gold mb-1">Hiking Trail Finder</h5>
              <p className="text-xs text-cream/80 mb-2">Interactive Map Application</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-xs text-gold hover:text-cream/90">Details</a>
              </div>
            </div>
            
            <div className="elegant-card p-4 border border-gold/30 text-center vintage-shadow">
              <div className="text-gold mb-2 flex justify-center">
                <Database size={24} />
              </div>
              <h5 className="font-cormorant text-gold mb-1">Photography Portfolio</h5>
              <p className="text-xs text-cream/80 mb-2">Image Management System</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-xs text-gold hover:text-cream/90">Details</a>
              </div>
            </div>
            
            <div className="elegant-card p-4 border border-gold/30 text-center vintage-shadow">
              <div className="text-gold mb-2 flex justify-center">
                <Server size={24} />
              </div>
              <h5 className="font-cormorant text-gold mb-1">Learning Management Tool</h5>
              <p className="text-xs text-cream/80 mb-2">Educational Platform</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-xs text-gold hover:text-cream/90">Details</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-block border border-gold text-gold hover:bg-gold hover:text-huntergreen transition-colors px-5 py-2">
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  github: string;
  liveLink: string;
}

function ProjectCard({ title, category, date, description, image, imageAlt, technologies, github, liveLink }: ProjectCardProps) {
  return (
    <div className="border border-gold/30 shadow-md overflow-hidden vintage-shadow group">
      <div className="relative overflow-hidden">
        <img src={image} alt={imageAlt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-2 left-2">
          <span className="bg-deepforest text-cream text-xs px-2 py-1 border border-gold/20">{category}</span>
        </div>
      </div>
      <div className="p-6 bg-huntergreen">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-cormorant text-gold text-xl">{title}</h4>
        </div>
        <p className="text-xs font-garamond italic text-cream/80 mb-3">{date}</p>
        <p className="mb-4 text-cream/90 text-sm font-baskerville">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-deepforest text-cream/90 px-2 py-1 border border-ivygreen/30">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href={github} className="text-gold hover:text-cream text-sm font-medium flex items-center gap-1 transition-colors">
            <Github size={14} /> Code
          </a>
          <a href={liveLink} className="text-gold hover:text-cream text-sm font-medium flex items-center gap-1 transition-colors">
            Live Demo <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
