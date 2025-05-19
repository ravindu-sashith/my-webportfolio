
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-10 section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cyber-dark dark:text-white">
              Cybersecurity & <span className="text-cyber-blue dark:text-cyber-blue-light">Digital Forensics</span> Enthusiast
            </h1>
            <p className="text-lg text-cyber-gray dark:text-gray-300 mb-6 max-w-lg">
              Specializing in digital investigations, malware analysis, and SOC operations 
              with a passion for securing digital infrastructures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-cyber-blue hover:bg-cyber-blue/90" onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-cyber-blue dark:border-cyber-blue-light shadow-lg">
              <img
                src="/lovable-uploads/9bdc11d3-4082-4b76-bdfb-77cb437036de.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
