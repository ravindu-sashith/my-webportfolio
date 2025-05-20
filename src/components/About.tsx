
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "C#", "SQL"]
    },
    {
      category: "Digital Forensics",
      skills: ["FTK Imager", "Autopsy"]
    },
    {
      category: "System & Network",
      skills: ["Linux", "Wireshark"]
    }
  ];
  
  return <section id="about" className="py-20 bg-cyber-blue/5 dark:bg-cyber-dark/80 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-dark dark:text-white">My Story</h3>
            <div className="space-y-4 text-cyber-gray dark:text-gray-300">
              <p>I'm an enthusiastic IT student interested in cybersecurity, SOC operations, and digital forensics. I completed my Level 3 Diploma in Information Technology at ESOFT, which was recognised by the Skills &amp; Education Group Awards, and was named the best performer in my batch. Currently, I'm pursuing a Higher National Diploma in Computing and gaining practical experience through academic projects.</p>
              
              <p>I enjoy both teamwork and individual problem solving, and I'm always eager to learn new skills in the ever-changing field of technology.</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-dark dark:text-white">Skills & Expertise</h3>
            
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-medium text-cyber-dark dark:text-white mb-3">{category.category}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map(skill => (
                    <Card key={skill} className="card-hover">
                      <CardContent className="p-4">
                        <div>
                          <span className="font-medium text-cyber-dark dark:text-white">{skill}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default About;
