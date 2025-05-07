import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Research() {
  return (
    <section id="research" className="bg-white py-16 md:py-24 border-t border-b border-tweed/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Research</h2>
          </div>
          <p className="text-lg text-tweed">
            My scholarly work focuses on the intellectual and cultural connections between Britain and America during the nineteenth century, with particular emphasis on literary movements, educational institutions, and the exchange of ideas across the Atlantic.
          </p>
        </div>
        
        <div id="publications" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Selected Publications</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PublicationCard 
              title="Atlantic Crossings: Literary Exchange in the Age of Emerson"
              publication="Oxford University Press, 2018"
              description="An examination of how Ralph Waldo Emerson's ideas were shaped by his engagement with British writers and subsequently influenced Victorian literary culture upon their return to British shores."
              type="Book"
            />
            
            <PublicationCard 
              title="The Oxford Connection: American Scholars and British Universities, 1850-1900"
              publication="Journal of Transatlantic Studies, Vol. 28, No. 3, 2020"
              description="This article explores how American scholars who studied at Oxford brought British educational models back to shape the development of American universities."
              type="Journal Article"
            />
            
            <PublicationCard 
              title="Victorian Readers and American Texts: Reception and Influence"
              publication="Cambridge University Press, 2015"
              description="A study of how American literary works were received, interpreted, and adapted by Victorian British readers, with case studies of Hawthorne, Melville, and Dickinson."
              type="Edited Collection"
            />
            
            <PublicationCard 
              title="A Tale of Two Educational Models: Harvard, Oxford, and the Transatlantic Development of Higher Education"
              publication="History of Education Quarterly, Vol. 42, No. 2, 2019"
              description="This comparative study examines the mutual influence between Harvard and Oxford University during the crucial educational reforms of the late nineteenth century."
              type="Journal Article"
            />
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-block border border-dartmouth text-dartmouth hover:bg-dartmouth hover:text-cream transition-colors px-5 py-2 rounded">
              View All Publications
            </a>
          </div>
        </div>
        
        <div id="current-work" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Current Research</h3>
          
          <div className="oxford-card bg-white p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="md:w-2/3">
                <h4 className="font-playfair text-oxblood text-2xl mb-4">The Collegiate Ideal: British Models and American Aspirations</h4>
                <p className="mb-6 text-lg">
                  My current book project examines how the architectural, curricular, and social aspects of Oxford and Cambridge directly influenced the development of elite American universities in the late nineteenth century.
                </p>
                <p className="mb-6">
                  Through extensive archival research at Harvard, Yale, Princeton, Oxford, and Cambridge, I trace the movement of ideas, architectural plans, and educational philosophies across the Atlantic. This book reveals how American educators adapted British collegiate models to create uniquely American institutions that nevertheless retained core elements of their British inspirations.
                </p>
                <p className="mb-6">
                  The project includes chapters on architectural influence, curriculum development, student life, and the transatlantic exchange of faculty and administrators.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Educational History</span>
                  <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Architectural History</span>
                  <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Cultural Exchange</span>
                  <span className="bg-cream border border-dartmouth/20 px-3 py-1 text-sm">Institutional Development</span>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                {/* Historical university architecture image */}
                <img 
                  src="https://pixabay.com/get/gffda493727e577dce7dfe5e27d9a7d13360da240d756d9ba20ff4468e17ad3183e52a398486877b0977d40c690e82b0f648f808fd4c8d6393dfd9ce2bb0ba181_1280.jpg" 
                  alt="Historical university architecture showing Oxford-inspired buildings" 
                  className="w-full h-auto oxford-card" 
                />
                
                <div className="bg-cream border border-tweed/20 p-4 mt-6">
                  <h5 className="font-playfair text-dartmouth mb-3">Research Timeline</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Archival Research</span>
                      <span className="text-tweed/70">2019-2021</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Manuscript Preparation</span>
                      <span className="text-tweed/70">2021-2022</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Expected Publication</span>
                      <span className="text-tweed/70">Spring 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="presentations">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Recent Presentations</h3>
          
          <div className="space-y-6">
            <PresentationCard 
              title="The Architectural Language of Academia: Oxford's Influence on American Campus Design"
              date="April 2022"
              location="Harvard University"
              description="Invited keynote address at the conference 'Transatlantic Educational Exchange: Historical Perspectives.'"
              linkText="View Slides"
            />
            
            <PresentationCard 
              title="Victorian Readers of Emerson: Literary Reception and Intellectual Exchange"
              date="November 2021"
              location="Princeton University"
              description="Paper presented at the annual meeting of the American Studies Association."
              linkText="View Abstract"
            />
            
            <PresentationCard 
              title="The British Foundations of American Higher Education: Models, Methods, and Meanings"
              date="June 2021"
              location="Cambridge University"
              description="Public lecture series on educational history and development."
              linkText="View Recording"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface PublicationCardProps {
  title: string;
  publication: string;
  description: string;
  type: string;
}

function PublicationCard({ title, publication, description, type }: PublicationCardProps) {
  return (
    <div className="oxford-card bg-cream p-6">
      <h4 className="font-playfair text-oxblood text-xl mb-2">{title}</h4>
      <p className="text-sm text-tweed/70 mb-4">{publication}</p>
      <p className="mb-6">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm bg-white px-3 py-1 rounded-full border border-tweed/20">{type}</span>
        <a href="#" className="text-dartmouth hover:text-dartmouth/80 text-sm font-medium flex items-center gap-1">
          Read More <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

interface PresentationCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  linkText: string;
}

function PresentationCard({ title, date, location, description, linkText }: PresentationCardProps) {
  return (
    <div className="oxford-card bg-cream p-6 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/5">
        <p className="text-dartmouth font-medium">{date}</p>
        <p className="text-sm text-tweed/70">{location}</p>
      </div>
      <div className="md:w-4/5">
        <h4 className="font-playfair text-oxblood text-xl mb-2">{title}</h4>
        <p className="mb-2">{description}</p>
        <a href="#" className="text-dartmouth hover:text-dartmouth/80 text-sm font-medium flex items-center gap-1">
          {linkText} <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
