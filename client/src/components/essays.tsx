import { ArrowRight } from "lucide-react";

export default function Essays() {
  return (
    <section id="essays" className="bg-white py-16 md:py-24 border-t border-b border-tweed/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Essays & Commentary</h2>
          </div>
          <p className="text-lg text-tweed">
            Beyond my academic publications, I regularly contribute essays, reviews, and commentaries to a variety of publications, exploring the relevance of historical ideas to contemporary issues.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <EssayCard 
            title="When Oxford Met Harvard: The Special Relationship in Higher Education"
            publication="Times Literary Supplement"
            date="May 15, 2022"
            description="Exploring the deep historical connections between British and American universities and how they continue to shape academic culture on both sides of the Atlantic."
            image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            imageAlt="Vintage books in a classical library setting"
          />
          
          <EssayCard 
            title="The Idea of the University in an Age of Crisis"
            publication="London Review of Books"
            date="January 8, 2022"
            description="Examining how historical debates about the purpose of higher education can inform current challenges facing universities in Britain and America."
            image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            imageAlt="Vintage manuscript pages with handwritten text"
          />
          
          <EssayCard 
            title="Emerson's England: The Making of an American Mind"
            publication="The Atlantic"
            date="October 3, 2021"
            description="How Ralph Waldo Emerson's visits to Britain shaped his thinking and helped establish a distinctly American intellectual tradition."
            image="https://pixabay.com/get/ga01cb941d987a438f1900ed3c72679b05f2f6f35aaa5f75924efdaae41de1404fa80d225e8666d2ff3bd86efae9f569d7234cfe0c1daad0c9db21cdf90ecbc0b_1280.jpg"
            imageAlt="Historical university architecture with gothic elements"
          />
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block border border-dartmouth text-dartmouth hover:bg-dartmouth hover:text-cream transition-colors px-5 py-2 rounded">
            View All Essays
          </a>
        </div>
      </div>
    </section>
  );
}

interface EssayCardProps {
  title: string;
  publication: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
}

function EssayCard({ title, publication, date, description, image, imageAlt }: EssayCardProps) {
  return (
    <div className="oxford-card bg-cream group">
      <div>
        <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6">
        <p className="text-sm text-tweed/70 mb-2">{publication} • {date}</p>
        <h4 className="font-playfair text-oxblood text-xl mb-3 group-hover:text-dartmouth transition-colors">{title}</h4>
        <p className="mb-6 text-sm">
          {description}
        </p>
        <a href="#" className="text-dartmouth hover:text-dartmouth/80 text-sm font-medium flex items-center gap-1">
          Read Essay <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
