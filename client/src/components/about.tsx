import { MapPin, BookOpen, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="md:w-1/3">
            {/* Professor image */}
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Jonathan Harrington, Professor of History" 
              className="oxford-card w-full h-auto object-cover" 
            />
            
            <div className="mt-8 oxford-card bg-white p-6">
              <h3 className="font-playfair text-dartmouth text-xl mb-4">Appointments</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="text-gold">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Oxford University</p>
                    <p className="text-sm text-tweed/80">Associate Professor, 2015-Present</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-gold">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Princeton University</p>
                    <p className="text-sm text-tweed/80">Visiting Fellow, 2018-2019</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="text-gold">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Cambridge University</p>
                    <p className="text-sm text-tweed/80">Lecturer, 2010-2015</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="inline-block border-b-2 border-dartmouth mb-6">
              <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">About</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-tweed">
              <p className="mb-4 text-lg leading-relaxed">
                I am an Associate Professor of History at Oxford University with a focus on 19th-century intellectual history and Anglo-American cultural exchange. My research examines how ideas travel across the Atlantic, specifically the transformation of literary movements between Britain and America during the Victorian era.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                After completing my doctorate at Cambridge on transatlantic publishing networks, I held positions at King's College London and Harvard University before joining the faculty at Oxford. My first book, <em>Atlantic Crossings: Literary Exchange in the Age of Emerson</em>, received the Modern Language Association's Prize for a First Book.
              </p>
              
              <div className="relative oxford-card bg-white p-8 mb-6 italic">
                <span className="quote-mark">"</span>
                <p className="text-lg relative z-10">
                  The intellectual history of the nineteenth century cannot be properly understood without examining the constant flow of ideas across the Atlantic. These transatlantic connections fundamentally shaped both British and American literary traditions.
                </p>
              </div>
              
              <p className="mb-4 text-lg leading-relaxed">
                My current research project explores the influence of Oxford and Cambridge educational models on the development of American universities, particularly focusing on Harvard, Yale, and Princeton during their formative years.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                When not in the archives, I can be found rowing on the Thames, collecting rare first editions of Victorian novels, or writing for various literary publications including the London Review of Books and The Times Literary Supplement.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">19th Century History</span>
              <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Transatlantic Studies</span>
              <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Victorian Literature</span>
              <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Cultural Exchange</span>
              <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Academic Institutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
