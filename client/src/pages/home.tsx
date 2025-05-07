import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Research from "@/components/research";
import Teaching from "@/components/teaching";
import Essays from "@/components/essays";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();
  
  // Handle hash links on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Teaching />
        <Essays />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
