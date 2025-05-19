
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For sticky navbar effect
      setIsScrolled(window.scrollY > 20);
      
      // For scroll to top button
      setShowScrollTop(window.scrollY > 300);
      
      // For active section highlight
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-cyber-dark/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          <div className="font-bold text-xl text-cyber-blue dark:text-cyber-blue-light">
            Cyber<span className="text-cyber-dark dark:text-white">Portfolio</span>
          </div>
          <nav className="hidden md:flex space-x-1">
            {['home', 'about', 'projects', 'certifications', 'contact'].map((section) => (
              <Button 
                key={section}
                variant="ghost" 
                className={`capitalize ${activeSection === section ? 'text-cyber-blue dark:text-cyber-blue-light font-medium' : 'text-cyber-gray dark:text-gray-300'}`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </Button>
            ))}
            <Button variant="outline" className="ml-2">
              <a href="#" download="resume.pdf">Resume</a>
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden">Menu</Button>
        </div>
      </header>

      {/* Back to Top Button */}
      <Button
        variant="secondary"
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full shadow-lg z-40 transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  );
};

export default Navbar;
