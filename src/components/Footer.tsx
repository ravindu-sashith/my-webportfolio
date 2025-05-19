
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              Cyber<span className="text-cyber-blue-light">Portfolio</span>
            </h3>
            <p className="text-gray-300 mt-2">
              Cybersecurity & Digital Forensics Professional
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-gray/30 hover:bg-cyber-blue-light/20 p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-gray/30 hover:bg-cyber-blue-light/20 p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="bg-cyber-gray/30 hover:bg-cyber-blue-light/20 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-cyber-gray/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} CyberPortfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-cyber-blue-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-cyber-blue-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
