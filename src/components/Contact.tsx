import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
// Custom SVGs for Discord and Teams
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.112.112 0 0 0-.119.056c-.524.908-.99 1.868-1.361 2.723a18.524 18.524 0 0 0-5.442 0A12.76 12.76 0 0 0 8.6 3.157a.115.115 0 0 0-.119-.057A19.736 19.736 0 0 0 3.677 4.369a.105.105 0 0 0-.047.043C.533 9.045-.32 13.579.099 18.057a.116.116 0 0 0 .045.081c2.053 1.507 4.042 2.422 5.993 3.029a.112.112 0 0 0 .123-.042c.462-.63.874-1.295 1.226-1.994a.112.112 0 0 0-.061-.155c-.652-.247-1.27-.549-1.872-.892a.112.112 0 0 1-.011-.186c.126-.094.252-.192.372-.291a.112.112 0 0 1 .114-.013c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.012c.12.099.246.197.372.291a.112.112 0 0 1-.01.186 12.298 12.298 0 0 1-1.873.893.112.112 0 0 0-.06.154c.36.699.773 1.364 1.225 1.994a.112.112 0 0 0 .123.043c1.951-.607 3.94-1.522 5.993-3.029a.112.112 0 0 0 .045-.081c.5-5.177-.838-9.673-3.61-13.645a.104.104 0 0 0-.047-.043ZM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419Zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419Z" fill="currentColor"/>
  </svg>
);

const TeamsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#6264A7"/>
    <path d="M7.5 8.5h9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Zm1.25 2.25v3.25h1.25v-3.25h-1.25Zm2.25 0v3.25h1.25v-3.25h-1.25Zm2.25 0v3.25h1.25v-3.25h-1.25Z" fill="#fff"/>
  </svg>
);
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "code.specter0527@gmail.com",
      href: "mailto:code.specter0527@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Wroclaw, Poland",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://adam-szymanski-portfolio.vercel.app/",
      color: "hover:text-primary"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:code.specter0527@gmail.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about web development. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          {info.href !== "#" ? (
                            <a 
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary rounded-lg text-muted-foreground ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-card`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div> */}

            {/* Availability Status */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Card className="bg-gradient-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Available for Work</h4>
                      <p className="text-sm text-muted-foreground">
                        Currently open to new opportunities and interesting projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}