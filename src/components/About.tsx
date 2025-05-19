
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "FTK Imager", level: 85 },
    { name: "Autopsy", level: 88 },
    { name: "SOC Operations", level: 82 },
    { name: "Malware Analysis", level: 78 },
    { name: "Wireshark", level: 86 },
    { name: "Threat Intelligence", level: 80 },
    { name: "SIEM Solutions", level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-cyber-dark/80 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-dark dark:text-white">My Story</h3>
            <div className="space-y-4 text-cyber-gray dark:text-gray-300">
              <p>
                I am a dedicated cybersecurity professional with expertise in digital forensics and incident response. 
                My journey in cybersecurity began with a fascination for understanding how digital systems can be 
                protected and how digital evidence can be collected and analyzed.
              </p>
              <p>
                With experience in both offensive and defensive security measures, I specialize in malware analysis, 
                network security monitoring, and digital investigations. I'm passionate about staying ahead of emerging 
                threats and contributing to a more secure digital environment.
              </p>
              <p>
                When I'm not investigating security incidents or analyzing malware, I enjoy participating in CTF 
                competitions, contributing to open-source security tools, and mentoring aspiring cybersecurity professionals.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-dark dark:text-white">Skills & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="card-hover">
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="font-medium text-cyber-dark dark:text-white">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-cyber-blue dark:bg-cyber-blue-light h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
