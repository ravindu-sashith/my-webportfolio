
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Reveal animations when scrolling
    const revealSections = () => {
      const reveals = document.querySelectorAll("section");
      
      reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial check on load
    
    return () => {
      window.removeEventListener("scroll", revealSections);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-cyber-dark">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
