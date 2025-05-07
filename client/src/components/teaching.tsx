import { BookOpen, Globe, ArrowUp10, FileText, Clock, Code, ArrowRight, Calendar, Tag, MessageCircle, Eye, Heart } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Blog</h2>
          </div>
          <p className="text-lg text-darkgray">
            Welcome to my blog where I share insights about engineering management, travel experiences, technology trends, and personal reflections. Writing helps me process experiences, connect ideas across domains, and share knowledge with others.
          </p>
        </div>
        
        <div id="latest-posts" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Latest Posts</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <BlogPostCard 
              title="Sustainable Design Principles in Nordic Tech Companies"
              date="April 15, 2023"
              category="Technology"
              description="Exploring how Scandinavian tech startups are integrating environmental responsibility into their product development lifecycle and corporate culture."
              readTime="8 min read"
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              comments={12}
              likes={48}
            />
            
            <BlogPostCard 
              title="Kyoto's Digital Transformation: Balancing Tradition and Innovation"
              date="March 22, 2023"
              category="Travel & Tech"
              description="A look at how Japan's cultural capital is embracing smart city technologies while preserving its historical architecture and cultural practices."
              readTime="10 min read"
              image="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              comments={7}
              likes={35}
            />
            
            <BlogPostCard 
              title="Engineering Management: Leading Technical Teams in Remote Environments"
              date="February 18, 2023"
              category="Leadership"
              description="Lessons learned from managing distributed engineering teams, with strategies for effective communication, goal setting, and fostering innovation across time zones."
              readTime="12 min read"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              comments={23}
              likes={76}
            />
            
            <BlogPostCard 
              title="Photography Essentials for Travel Bloggers: Gear and Techniques"
              date="January 30, 2023"
              category="Photography"
              description="My photography kit and workflow for capturing compelling travel images, from equipment choices to post-processing techniques that enhance storytelling."
              readTime="9 min read"
              image="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              comments={16}
              likes={52}
            />
          </div>
          
          <div className="text-center mt-10">
            <a href="#archive" className="inline-block border border-dartmouth text-dartmouth hover:bg-dartmouth hover:text-white transition-colors px-5 py-2 rounded">
              View All Posts
            </a>
          </div>
        </div>
        
        <div id="topics" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Blog Topics</h3>
          
          <div className="card bg-white p-8 border border-lightgray rounded-lg shadow-md">
            <div className="grid md:grid-cols-3 gap-8">
              <TopicCard 
                title="Technology & Innovation"
                description="Explorations of emerging technologies, software engineering practices, and the intersection of technical innovation with management principles."
                icon={<Code className="text-dartmouth text-2xl" />}
                count={14}
              />
              
              <TopicCard 
                title="Travel Adventures"
                description="Narratives and reflections from various destinations around the world, focusing on cultural insights, hidden gems, and practical travel tips."
                icon={<Globe className="text-dartmouth text-2xl" />}
                count={22}
              />
              
              <TopicCard 
                title="Engineering Management"
                description="Perspectives on leading technical teams, project management methodologies, and creating environments that foster both innovation and productivity."
                icon={<ArrowUp10 className="text-dartmouth text-2xl" />}
                count={9}
              />
            </div>
          </div>
        </div>
        
        <div id="archive">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Archives</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ArchiveCard 
              title="2023"
              description="Posts covering my MEM studies at Dartmouth, recent travel experiences in Asia, and reflections on tech industry trends."
              count={18}
            />
            
            <ArchiveCard 
              title="2022"
              description="Entries documenting my final year of undergraduate studies, internship experiences, and early travel adventures in South America."
              count={24}
            />
            
            <ArchiveCard 
              title="2021"
              description="Content focused on software development projects, learning experiences, and the beginnings of my travel documentation."
              count={15}
            />
          </div>
          
          <div className="mt-16 card bg-white border border-lightgray p-8 rounded-lg shadow-md">
            <h4 className="font-playfair text-dartmouth text-xl mb-6">Popular Tags</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Travel <span className="text-slate ml-1">(32)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Technology <span className="text-slate ml-1">(24)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Engineering <span className="text-slate ml-1">(19)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Photography <span className="text-slate ml-1">(17)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Leadership <span className="text-slate ml-1">(15)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Dartmouth <span className="text-slate ml-1">(12)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Software <span className="text-slate ml-1">(11)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Japan <span className="text-slate ml-1">(9)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Hiking <span className="text-slate ml-1">(8)</span>
              </span>
              <span className="bg-offwhite border border-lightgray px-3 py-1 text-sm rounded-full flex items-center gap-1">
                <Tag size={14} /> Programming <span className="text-slate ml-1">(7)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BlogPostCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  readTime: string;
  image: string;
  comments: number;
  likes: number;
}

function BlogPostCard({ title, date, category, description, readTime, image, comments, likes }: BlogPostCardProps) {
  return (
    <div className="card bg-white border border-lightgray rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs bg-dartmouth text-white px-2 py-1 rounded-full">{category}</span>
          <span className="text-xs text-slate flex items-center"><Calendar size={12} className="mr-1" /> {date}</span>
        </div>
        <h4 className="font-playfair text-dartmouth text-xl mb-2">{title}</h4>
        <p className="mb-4 text-darkgray text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 text-xs text-slate">
            <span className="flex items-center"><Eye size={14} className="mr-1" /> {readTime}</span>
            <span className="flex items-center"><MessageCircle size={14} className="mr-1" /> {comments}</span>
            <span className="flex items-center"><Heart size={14} className="mr-1" /> {likes}</span>
          </div>
          <a href="#" className="text-dartmouth hover:text-dartmouth/80 text-sm font-medium flex items-center gap-1">
            Read Post <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
}

function TopicCard({ title, description, icon, count }: TopicCardProps) {
  return (
    <div className="border border-lightgray rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h4 className="font-playfair text-dartmouth text-xl mb-2">{title}</h4>
        <p className="text-darkgray text-sm mb-4">{description}</p>
        <span className="bg-offwhite px-3 py-1 text-xs rounded-full border border-lightgray">
          {count} posts
        </span>
      </div>
    </div>
  );
}

interface ArchiveCardProps {
  title: string;
  description: string;
  count: number;
}

function ArchiveCard({ title, description, count }: ArchiveCardProps) {
  return (
    <div className="card bg-white border border-lightgray p-6 rounded-lg shadow-md">
      <h4 className="font-playfair text-dartmouth text-xl mb-2 flex justify-between items-center">
        {title}
        <span className="text-sm bg-offwhite px-2 py-1 rounded-full border border-lightgray">{count}</span>
      </h4>
      <p className="text-darkgray text-sm mb-4">{description}</p>
      <a href="#" className="text-dartmouth hover:text-dartmouth/80 text-sm font-medium flex items-center gap-1">
        Browse Archive <ArrowRight size={14} />
      </a>
    </div>
  );
}
