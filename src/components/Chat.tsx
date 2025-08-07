import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Adam's portfolio assistant. Feel free to ask me about his experience, skills, or projects!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! Thanks for visiting Adam's portfolio. What would you like to know?",
      "Hi there! I'm here to help you learn more about Adam's work and experience.",
    ],
    experience: [
      "Adam has 6 years of experience as a Senior Web Developer, specializing in high-performance full-stack applications using React, Node.js, and Django. He has led teams at Netguru, STX Next, The Software House, and Javrix Web Development, delivering measurable results and scalable solutions.",
      "Adam has worked with companies from startups to enterprises, focusing on performance optimization, cloud deployments, and modernizing legacy systems.",
    ],
    skills: [
      "Adam specializes in React, Node.js, Django, TypeScript, and modern web technologies. He's passionate about clean code, user experience, and scalable architectures.",
      "His technical stack includes React, Next.js, TypeScript, Vue.js, Node.js, Python, Django, Express, NestJS, PostgreSQL, MongoDB, Redis, AWS, Docker, and Kubernetes.",
    ],
    projects: [
      "Adam has built several impressive projects including e-commerce platforms, task management apps, and social media dashboards. Check out the Projects section!",
      "His featured projects include a high-traffic payment processing microservice and a collaborative task management tool with real-time features.",
    ],
    contact: [
      "You can reach Adam at code.specter0527@gmail.com or visit his portfolio. He's currently available for new opportunities!",
      "Feel free to use the contact form on this page or reach out directly via email. Adam typically responds within 24 hours.",
    ],
    education: [
      "Adam holds a Bachelor of Engineering in Computer Science from University of Information Technology and Management (UITM), Rzeszów, Poland, and has completed AWS Academy programs.",
      "He has completed the AWS Academy Cloud Foundations Program and continues to pursue continuous learning through certifications and courses.",
    ],
    default: [
      "That's an interesting question! You might find more detailed information in the relevant sections of this portfolio.",
      "I'd recommend checking out the specific sections of Adam's portfolio for more detailed information about that topic.",
      "Great question! Feel free to contact Adam directly for more specific details about his work and experience.",
    ],
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    } else if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job")) {
      return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    } else if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech")) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    } else if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work")) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("reach")) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    } else if (lowerMessage.includes("education") || lowerMessage.includes("degree") || lowerMessage.includes("university")) {
      return botResponses.education[Math.floor(Math.random() * botResponses.education.length)];
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response with a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96"
          >
            <Card className="shadow-elegant border-primary/20">
              <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5" />
                  <span>Portfolio Assistant</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === "bot" && (
                            <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          )}
                          {message.sender === "user" && (
                            <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          )}
                          <div>
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about Adam..."
                      className="flex-1 border-primary/20 focus:border-primary"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}