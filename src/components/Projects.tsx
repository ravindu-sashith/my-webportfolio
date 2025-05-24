
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "XOR Cipher",
      description: "This is a basic keylogger written in Python using the pynput library. It captures keyboard input and stores it in a local text file. The project is designed strictly for educational and ethical hacking purposes, helping learners understand keylogging behavior and how to defend against it.",
      tags: ["Python", "Cybersecurity", "Ethical Hacking"],
      githubUrl: "https://github.com/ravindu-sashith/xor-cipher",
    }
    {
      id: 2,
      title: "Python Keylogger",
      description: "This is a simple Python script that implements a 4-bit XOR cipher to encrypt and decrypt binary data. XOR (exclusive OR) is a common technique used in symmetric encryption systems due to its simplicity and effectiveness.",
      tags: ["Python", "Cryptography", "Symmetric Encryption"],
      githubUrl: "https://github.com/ravindu-sashith/keylogger",
    }
  ]);

  return (
    <section id="projects" className="py-20 section-padding bg-cyber-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
          <p className="text-cyber-gray dark:text-gray-300 max-w-2xl mx-auto">
            Explore my cybersecurity projects focusing on encryption, security implementation, and more.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyber-gray dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
