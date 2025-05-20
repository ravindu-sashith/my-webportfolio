
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return <section id="contact" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-cyber-dark dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyber-blue dark:bg-cyber-blue-light mx-auto mb-6"></div>
          <p className="text-cyber-gray dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out using the form below
            or connect with me on social media.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="h-full flex flex-col justify-between">
              <div className="bg-gray-50 dark:bg-cyber-gray/20 rounded-lg p-6 shadow-sm h-full">
                <h4 className="text-lg font-medium mb-4 text-cyber-dark dark:text-white">Connect With Me</h4>
                <div className="space-y-4">
                  <a href="mailto:ravindu.sashith@gmail.com" className="flex items-center gap-3 text-cyber-gray dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors">
                    <div className="bg-cyber-blue/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-cyber-blue dark:text-cyber-blue-light" />
                    </div>
                    <span>ravindu.sashith@gmail.com</span>
                  </a>
                  <a href="https://github.com/ravindu-sashith" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cyber-gray dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors">
                    <div className="bg-cyber-blue/10 p-3 rounded-full">
                      <Github className="h-5 w-5 text-cyber-blue dark:text-cyber-blue-light" />
                    </div>
                    <span>github.com/ravindu-sashith</span>
                  </a>
                  <a href="https://linkedin.com/in/hrshettiarachchi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cyber-gray dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors">
                    <div className="bg-cyber-blue/10 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-cyber-blue dark:text-cyber-blue-light" />
                    </div>
                    <span>linkedin.com/in/hrshettiarachchi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cyber-dark dark:text-gray-200 mb-1">
                  Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cyber-dark dark:text-gray-200 mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyber-dark dark:text-gray-200 mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." required className="min-h-32 w-full" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-cyber-blue hover:bg-cyber-blue/90">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
