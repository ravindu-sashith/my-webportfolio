
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "IT Masters' Digital Forensics",
      issuer: "IT Masters (Charles Sturt University)",
      date: "March 2025",
      description: "Updated free online short course on digital forensics techniques and practices.",
      certificateUrl: "https://drive.google.com/file/d/1TCgZMlsiWZpACkdTiYtdsTkpVdSeDjwV/view?usp=drive_link"
    },
    {
      id: 2,
      name: "SOC Analyst Learning Path",
      issuer: "LetsDefend",
      date: "April 2025",
      description: "Comprehensive training on Security Operations Center (SOC) analysis and threat detection.",
      certificateUrl: "https://drive.google.com/your-certificate-link-here"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-cyber-blue/5 dark:bg-cyber-dark/80 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">Certifications</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
          <p className="text-cyber-gray dark:text-gray-300 max-w-2xl mx-auto">Professional certifications and specialized training in cybersecurity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map(cert => (
            <Card key={cert.id} className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-cyber-gray dark:text-gray-300 mb-2">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-cyber-blue dark:text-cyber-blue-light">{cert.date}</span>
                  {cert.certificateUrl && (
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                        View Certificate <ExternalLink className="h-3 w-3" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
