import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}
const Certifications = () => {
  const certifications: Certification[] = [{
    id: 1,
    name: "ISC2 CC Certification",
    issuer: "International Information System Security Certification Consortium",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1487958449943-2429e9be8625?w=400&auto=format&fit=crop",
    description: "Certified in cybersecurity fundamentals, risk management, and security controls."
  }, {
    id: 2,
    name: "IT Masters Digital Forensics",
    issuer: "IT Masters University",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&auto=format&fit=crop",
    description: "Advanced training in digital evidence collection, analysis, and investigation techniques."
  }, {
    id: 3,
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "November 2022",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&auto=format&fit=crop",
    description: "Proficient in ethical hacking methodology, tools and techniques for security assessment."
  }, {
    id: 4,
    name: "SANS GIAC Security Essentials",
    issuer: "Global Information Assurance Certification",
    date: "August 2022",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&auto=format&fit=crop",
    description: "Certified in information security concepts, best practices and critical controls."
  }];
  return <section id="certifications" className="py-20 bg-gray-50 dark:bg-cyber-dark/80 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">Certifications</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
          <p className="text-cyber-gray dark:text-gray-300 max-w-2xl mx-auto">Professional certifications and specialized training in cybersecurity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map(cert => <Card key={cert.id} className="card-hover">
              <div className="h-40 overflow-hidden">
                <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-cyber-gray dark:text-gray-300 mb-2">{cert.description}</p>
                <span className="text-xs font-medium text-cyber-blue dark:text-cyber-blue-light">{cert.date}</span>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Certifications;