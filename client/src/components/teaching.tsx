import { BookOpen, Globe, ArrowUp10, FileText, Clock, GraduationCap, ArrowRight } from "lucide-react";

export default function Teaching() {
  return (
    <section id="teaching" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block border-b-2 border-dartmouth mb-6">
            <h2 className="font-playfair text-dartmouth text-3xl md:text-4xl">Teaching</h2>
          </div>
          <p className="text-lg text-tweed">
            My teaching philosophy emphasizes close engagement with primary texts, rigorous historical analysis, and developing students' ability to make connections across disciplines. I regularly teach courses on nineteenth-century intellectual history, transatlantic literary movements, and the history of higher education.
          </p>
        </div>
        
        <div id="courses" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Current Courses</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard 
              title="Transatlantic Romanticism"
              term="Michaelmas Term 2022"
              level="Graduate"
              description="Examines the exchange of Romantic ideas between Britain and America, focusing on how authors like Wordsworth, Coleridge, Emerson, and Fuller developed a transatlantic intellectual community."
              texts={[
                "Wordsworth, Lyrical Ballads",
                "Emerson, Nature and Selected Essays",
                "Fuller, Woman in the Nineteenth Century",
                "Thoreau, Walden"
              ]}
            />
            
            <CourseCard 
              title="Victorian Intellectual History"
              term="Hilary Term 2023"
              level="Undergraduate"
              description="Surveys major intellectual developments in Victorian Britain, including responses to industrialization, evolutionary theory, and changing religious beliefs."
              texts={[
                "Mill, On Liberty",
                "Darwin, The Origin of Species (selections)",
                "Eliot, Middlemarch",
                "Arnold, Culture and Anarchy"
              ]}
            />
            
            <CourseCard 
              title="The Rise of the Modern University"
              term="Trinity Term 2023"
              level="Graduate"
              description="Traces the development of modern academic institutions from medieval universities to the research universities of the late nineteenth and early twentieth centuries."
              texts={[
                "Newman, The Idea of a University",
                "Veblen, The Higher Learning in America",
                "Snow, The Two Cultures",
                "Kerr, The Uses of the University"
              ]}
            />
            
            <CourseCard 
              title="Methods in Intellectual History"
              term="Michaelmas Term 2022"
              level="Undergraduate"
              description="Introduces students to the methodological approaches used in intellectual history, with case studies drawn from nineteenth-century British and American thought."
              texts={[
                "Skinner, Visions of Politics, Vol. 1",
                "Lovejoy, The Great Chain of Being",
                "Pocock, Political Thought and History",
                "Collingwood, The Idea of History"
              ]}
            />
          </div>
        </div>
        
        <div id="philosophy" className="mb-16">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Teaching Philosophy</h3>
          
          <div className="oxford-card bg-cream p-8">
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                My approach to teaching is grounded in the belief that historical understanding requires both deep engagement with primary sources and awareness of the contexts in which ideas developed and circulated. I emphasize three key principles in my pedagogy:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-8">
                <div className="bg-white p-6 oxford-card">
                  <div className="text-gold text-2xl mb-3">
                    <BookOpen />
                  </div>
                  <h4 className="font-playfair text-dartmouth text-lg mb-2">Close Reading</h4>
                  <p className="text-sm">
                    Developing students' ability to analyze texts carefully, attending to language, argument structure, and rhetorical strategies.
                  </p>
                </div>
                
                <div className="bg-white p-6 oxford-card">
                  <div className="text-gold text-2xl mb-3">
                    <Globe />
                  </div>
                  <h4 className="font-playfair text-dartmouth text-lg mb-2">Contextual Analysis</h4>
                  <p className="text-sm">
                    Situating ideas within their historical, social, and institutional settings to understand how context shapes intellectual production.
                  </p>
                </div>
                
                <div className="bg-white p-6 oxford-card">
                  <div className="text-gold text-2xl mb-3">
                    <ArrowUp10 />
                  </div>
                  <h4 className="font-playfair text-dartmouth text-lg mb-2">Comparative Thinking</h4>
                  <p className="text-sm">
                    Encouraging students to make connections across national boundaries, disciplines, and time periods.
                  </p>
                </div>
              </div>
              
              <p className="mb-4">
                In tutorials and seminars, I create an environment that balances scholarly rigor with intellectual exploration. Students are encouraged to pursue their own questions while developing the analytical skills necessary for advanced academic work. I emphasize the value of precision in writing and clarity in argumentation.
              </p>
              
              <p>
                My goal is not simply to convey historical knowledge but to help students become thoughtful interpreters of complex intellectual traditions and to recognize the continuing relevance of historical ideas to contemporary questions.
              </p>
            </div>
          </div>
        </div>
        
        <div id="resources">
          <h3 className="font-playfair text-dartmouth text-2xl mb-8">Student Resources</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ResourceCard 
              title="Essay Writing Guide"
              subtitle="For undergraduate and graduate students"
              description="A comprehensive guide to writing academic essays in intellectual history, with sections on developing research questions, constructing arguments, and working with primary sources."
              linkText="Download Guide (PDF)"
              icon={<FileText className="text-3xl" />}
            />
            
            <ResourceCard 
              title="Office Hours"
              subtitle="Scheduling and policies"
              description="Information about scheduling one-on-one meetings, tutorial sessions, and dissertation consultations. Includes policies on appointment booking and cancellation."
              linkText="Schedule Appointment"
              icon={<Clock className="text-3xl" />}
            />
            
            <ResourceCard 
              title="Primary Source Archive"
              subtitle="Digital collection for research"
              description="Access to digitized primary sources relevant to nineteenth-century intellectual history, including letters, journal articles, and unpublished manuscripts."
              linkText="Access Archive"
              icon={<BookOpen className="text-3xl" />}
            />
            
            <ResourceCard 
              title="Graduate Supervision"
              subtitle="Information for prospective students"
              description="Details about my approach to graduate supervision, current and former advisees, and guidelines for submitting research proposals to work under my supervision."
              linkText="Learn More"
              icon={<GraduationCap className="text-3xl" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface CourseCardProps {
  title: string;
  term: string;
  level: string;
  description: string;
  texts: string[];
}

function CourseCard({ title, term, level, description, texts }: CourseCardProps) {
  return (
    <div className="oxford-card bg-white p-6">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-playfair text-oxblood text-xl">{title}</h4>
        <span className="bg-cream text-dartmouth text-xs px-2 py-1 rounded-full">{level}</span>
      </div>
      <p className="text-sm text-tweed/70 mb-4">{term}</p>
      <p className="mb-6">{description}</p>
      <div className="border-t border-tweed/10 pt-4 mt-4">
        <h5 className="text-dartmouth font-medium mb-2">Key Texts</h5>
        <ul className="text-sm space-y-1">
          {texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ResourceCardProps {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  icon: React.ReactNode;
}

function ResourceCard({ title, subtitle, description, linkText, icon }: ResourceCardProps) {
  return (
    <div className="oxford-card bg-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-gold">
          {icon}
        </div>
        <div>
          <h4 className="font-playfair text-oxblood text-xl">{title}</h4>
          <p className="text-sm text-tweed/70">{subtitle}</p>
        </div>
      </div>
      <p className="mb-6">
        {description}
      </p>
      <a href="#" className="text-dartmouth hover:text-dartmouth/80 text-sm font-medium flex items-center gap-1">
        {linkText} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
