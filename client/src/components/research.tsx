import { ArrowRight, MapPin, Calendar, Globe, Route, Camera } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Travel() {
  return (
    <section id="travel" className="bg-white py-16 md:py-24 border-t border-b border-lightgray/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Travel Adventures</h2>
          </div>
          <p className="text-lg text-darkgray">
            Exploring the world has been one of my greatest passions. I believe travel broadens our perspective, challenges our assumptions, and connects us to diverse cultures and environments. Here are some highlights from my journeys.
          </p>
        </div>
        
        <div id="destinations" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Favorite Destinations</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <DestinationCard 
              title="Kyoto, Japan"
              date="Spring 2022"
              description="Exploring ancient temples, traditional gardens, and the captivating blend of historical preservation and modern innovation that defines Japan's cultural heart."
              type="Cultural Immersion"
              image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            />
            
            <DestinationCard 
              title="Patagonia, Chile"
              date="Winter 2021"
              description="Hiking through Torres del Paine National Park, encountering breathtaking landscapes of mountains, glaciers, and pristine lakes in one of Earth's most spectacular wilderness areas."
              type="Adventure"
              image="https://images.unsplash.com/photo-1531794543049-304b0cc0be0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            />
            
            <DestinationCard 
              title="Barcelona, Spain"
              date="Summer 2020"
              description="Savoring the unique architecture of Gaudí, Mediterranean cuisine, and the vibrant street life that makes this coastal city a perfect blend of culture, history, and modern energy."
              type="Urban Exploration"
              image="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            />
            
            <DestinationCard 
              title="Bali, Indonesia"
              date="Fall 2019"
              description="Discovering the island's rich spiritual traditions, lush rice terraces, and developing a deeper appreciation for the balance between nature, community, and personal well-being."
              type="Cultural & Nature"
              image="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            />
          </div>
          
          <div className="text-center mt-10">
            <a href="#gallery" className="inline-block border border-gold text-gold hover:bg-gold hover:text-huntergreen transition-colors px-5 py-2">
              View Photo Gallery
            </a>
          </div>
        </div>
        
        <div id="upcoming-trips" className="mb-16">
          <h3 className="font-cormorant text-gold text-2xl mb-8">Upcoming Adventures</h3>
          
          <div className="elegant-card p-8 relative overflow-hidden border border-gold/30 shadow-md">
            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="md:w-2/3">
                <h4 className="font-cormorant text-gold text-2xl mb-4">Nordic Technology Tour: Copenhagen to Helsinki</h4>
                <p className="mb-6 text-lg text-cream/90 font-baskerville">
                  My next major expedition combines my passion for travel with my interest in technology and sustainable innovation.
                </p>
                <p className="mb-6 text-cream/90 font-baskerville">
                  This summer, I'll be embarking on a month-long journey through Scandinavia to explore how Nordic countries have become global leaders in sustainable technology, clean energy solutions, and innovative urban planning. The trip will include visits to tech startups, research centers, and smart city initiatives.
                </p>
                <p className="mb-6 text-cream/90 font-baskerville">
                  I'll be documenting this unique intersection of travel and technology through blog posts, interviews with local innovators, and a photo series highlighting sustainable design in action.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="bg-deepforest border border-ivygreen/30 px-3 py-1 text-sm text-cream/90">Sustainable Tech</span>
                  <span className="bg-deepforest border border-ivygreen/30 px-3 py-1 text-sm text-cream/90">Nordic Design</span>
                  <span className="bg-deepforest border border-ivygreen/30 px-3 py-1 text-sm text-cream/90">Smart Cities</span>
                  <span className="bg-deepforest border border-ivygreen/30 px-3 py-1 text-sm text-cream/90">Clean Energy</span>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                {/* Nordic landscape image */}
                <img 
                  src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Nordic landscape with modern sustainable architecture" 
                  className="w-full h-auto border border-gold/20 shadow-md vintage-shadow" 
                />
                
                <div className="bg-deepforest border border-ivygreen/30 p-4 mt-6">
                  <h5 className="font-cormorant text-gold mb-3">Trip Itinerary</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-cream/90">Copenhagen, Denmark</span>
                      <span className="text-cream/70 font-garamond italic">June 5-10, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-cream/90">Stockholm, Sweden</span>
                      <span className="text-cream/70 font-garamond italic">June 11-17, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-cream/90">Helsinki, Finland</span>
                      <span className="text-cream/70 font-garamond italic">June 18-25, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="gallery">
          <h3 className="font-cormorant text-gold text-2xl mb-8">Travel Photography</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mountain landscape" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Coastal sunset" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Venice canal" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Thai temple" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Local market" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1490349708435-19d432984978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Desert landscape" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1511739172509-0e5b94a8a2a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Northern lights" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
            <img src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Forest waterfall" className="w-full h-64 object-cover border border-gold/20 shadow-md vintage-shadow" />
          </div>

          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-huntergreen px-6 py-3 transition-colors">
              <Camera size={18} /> Follow My Photography
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface DestinationCardProps {
  title: string;
  date: string;
  description: string;
  type: string;
  image: string;
}

function DestinationCard({ title, date, description, type, image }: DestinationCardProps) {
  return (
    <div className="border border-gold/30 shadow-md overflow-hidden vintage-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 bg-huntergreen">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-cormorant text-gold text-xl">{title}</h4>
          <span className="text-xs bg-deepforest px-2 py-1 border border-ivygreen/30 text-cream/90">{type}</span>
        </div>
        <p className="text-sm font-garamond italic text-cream/80 mb-4">{date}</p>
        <p className="mb-6 text-cream/90 font-baskerville">{description}</p>
        <a href="#" className="text-gold hover:text-cream text-sm font-medium flex items-center gap-1 transition-colors">
          Read Travel Story <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
