
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="border-t border-cyber-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Ravindu Hettiarachchi. All rights reserved.
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
