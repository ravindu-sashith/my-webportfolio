
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
  image: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Advanced Memory Forensics Framework",
      description: "A Python-based memory forensics tool that enhances the capabilities of Volatility framework with machine learning for faster malware detection in memory dumps.",
      tags: ["Python", "Volatility", "Machine Learning", "Digital Forensics"],
      githubUrl: "https://github.com/username/memory-forensics-framework",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Network Traffic Analyzer",
      description: "A real-time network traffic analysis tool that detects anomalies and potential threats using deep packet inspection and behavioral analysis.",
      tags: ["Python", "Wireshark", "Machine Learning", "Network Security"],
      githubUrl: "https://github.com/username/network-analyzer",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Secure File Integrity Monitor",
      description: "A file integrity monitoring system that uses cryptographic hashing to detect unauthorized modifications to critical system files.",
      tags: ["Python", "Cryptography", "System Security"],
      githubUrl: "https://github.com/username/file-integrity-monitor",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Malware Behavior Analyzer",
      description: "A sandboxed environment for analyzing malware behavior without risking system infection, with detailed reports on file system, registry, and network activities.",
      tags: ["Python", "Sandbox", "Malware Analysis"],
      githubUrl: "https://github.com/username/malware-analyzer",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop"
    },
  ]);

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
          <p className="text-cyber-gray dark:text-gray-300 max-w-2xl mx-auto">
            Explore my cybersecurity projects and contributions focusing on digital forensics,
            threat detection, and security automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
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
