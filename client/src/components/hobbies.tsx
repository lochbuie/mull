import { Camera, Mountain, Code, Headphones, BookOpen, Coffee, Puzzle, Bike } from "lucide-react";

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Hobbies & Interests</h2>
          </div>
          <p className="text-lg text-darkgray">
            When I'm not studying engineering management or coding, I enjoy a variety of activities that help me relax, stay creative, and maintain perspective. Here's a glimpse into my personal interests outside of academia and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <HobbyCard 
            title="Photography"
            description="Capturing landscapes, urban scenes, and travel moments. I'm particularly drawn to golden hour lighting and architectural details."
            icon={<Camera className="h-10 w-10" />}
          />
          
          <HobbyCard 
            title="Hiking"
            description="Exploring trails around Dartmouth and beyond. My goal is to complete the Appalachian Trail sections in New Hampshire."
            icon={<Mountain className="h-10 w-10" />}
          />
          
          <HobbyCard 
            title="Coding Side Projects"
            description="Building small utilities and creative coding experiments, especially generative art and interactive visualizations."
            icon={<Code className="h-10 w-10" />}
          />
          
          <HobbyCard 
            title="Music Production"
            description="Creating ambient electronic tracks and experimenting with field recordings collected during my travels."
            icon={<Headphones className="h-10 w-10" />}
          />
        </div>
        
        <div className="card bg-white p-8 border border-lightgray rounded-lg shadow-md mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Reading List</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BookCard 
              title="Thinking in Systems"
              author="Donella H. Meadows"
              category="Engineering & Society"
              description="A concise introduction to systems thinking that has profoundly influenced my approach to engineering management challenges."
              image="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            />
            
            <BookCard 
              title="Atomic Habits"
              author="James Clear"
              category="Personal Development"
              description="This book's framework for building good habits and breaking bad ones has been instrumental in my productivity system."
              image="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            />
            
            <BookCard 
              title="The Design of Everyday Things"
              author="Don Norman"
              category="Design & Technology"
              description="A classic that shapes how I think about user experience in every project I undertake."
              image="https://images.unsplash.com/photo-1629772443913-f9c495406071?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
        
        <div>
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Other Interests</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MiniInterestCard 
              title="Coffee Brewing"
              icon={<Coffee className="h-6 w-6" />}
            />
            
            <MiniInterestCard 
              title="Chess"
              icon={<Puzzle className="h-6 w-6" />}
            />
            
            <MiniInterestCard 
              title="Cycling"
              icon={<Bike className="h-6 w-6" />}
            />
            
            <MiniInterestCard 
              title="Language Learning"
              icon={<BookOpen className="h-6 w-6" />}
            />
          </div>
          
          <div className="mt-16 p-6 bg-dartmouth/5 rounded-lg border border-lightgray">
            <h4 className="font-playfair text-dartmouth text-xl mb-4">Current Learning Journey</h4>
            <p className="text-darkgray mb-4">
              I'm currently taking a Japanese language course and learning about sustainable architecture through online lectures. I believe in the concept of lifelong learning and try to dedicate time each week to developing a new skill or exploring a new area of knowledge.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Japanese Language</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Sustainable Design</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">Film Photography</span>
              <span className="bg-white border border-lightgray px-3 py-1 text-sm rounded-full">American Literature</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface HobbyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function HobbyCard({ title, description, icon }: HobbyCardProps) {
  return (
    <div className="card bg-white p-6 border border-lightgray rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-dartmouth mb-4">
        {icon}
      </div>
      <h4 className="font-playfair text-dartmouth text-xl mb-3">{title}</h4>
      <p className="text-darkgray text-sm">
        {description}
      </p>
    </div>
  );
}

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
}

function BookCard({ title, author, category, description, image }: BookCardProps) {
  return (
    <div className="flex gap-4">
      <img src={image} alt={title} className="w-24 h-36 object-cover rounded-lg shadow-sm" />
      <div>
        <span className="text-xs bg-dartmouth text-white px-2 py-1 rounded-full">{category}</span>
        <h4 className="font-playfair text-dartmouth text-lg mt-2 mb-1">{title}</h4>
        <p className="text-slate text-sm mb-2">by {author}</p>
        <p className="text-darkgray text-xs">{description}</p>
      </div>
    </div>
  );
}

interface MiniInterestCardProps {
  title: string;
  icon: React.ReactNode;
}

function MiniInterestCard({ title, icon }: MiniInterestCardProps) {
  return (
    <div className="card bg-white p-4 border border-lightgray rounded-lg shadow-sm flex items-center gap-3">
      <div className="text-dartmouth">
        {icon}
      </div>
      <h5 className="font-playfair text-dartmouth">{title}</h5>
    </div>
  );
}