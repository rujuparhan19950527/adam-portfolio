import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground" style={{
                textShadow: `
                  0 1px 0 #ccc,
                  0 2px 0 #c9c9c9,
                  0 3px 0 #bbb,
                  0 4px 0 #b9b9b9,
                  0 5px 0 #aaa,
                  0 6px 1px rgba(0,0,0,.1),
                  0 0 5px rgba(0,0,0,.1),
                  0 1px 3px rgba(0,0,0,.3),
                  0 3px 5px rgba(0,0,0,.2),
                  0 5px 10px rgba(0,0,0,.25),
                  0 10px 10px rgba(0,0,0,.2),
                  0 20px 20px rgba(0,0,0,.15)
                `
              }}>Hi, I'm </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent" style={{
                textShadow: `
                  0 1px 0 #4f46e5,
                  0 2px 0 #4338ca,
                  0 3px 0 #3730a3,
                  0 4px 0 #312e81,
                  0 5px 0 #1e1b4b,
                  0 6px 1px rgba(79, 70, 229, 0.1),
                  0 0 5px rgba(79, 70, 229, 0.1),
                  0 1px 3px rgba(79, 70, 229, 0.3),
                  0 3px 5px rgba(79, 70, 229, 0.2),
                  0 5px 10px rgba(79, 70, 229, 0.25),
                  0 10px 10px rgba(79, 70, 229, 0.2),
                  0 20px 20px rgba(79, 70, 229, 0.15)
                `
              }}>
                Adam Szymański
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{color:"hsl(217deg 100% 1.65%)", fontWeight:"900"}}
              className="text-xl md:text-2xl text-muted-foreground mb-2"
            >
              Senior Web Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{color:"hsl(217deg 100% 1.65%)"}}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Hello! I'm a Senior Web Developer with 6 years of experience building high-performance full-stack applications using React, Node.js, and Django. I've consistently delivered measurable results, including 35% faster load times, 30% AWS cost savings, and successful migration of legacy systems to scalable micro-services. I thrive in Agile environments, lead by example, and enjoy mentoring teams to write clean, maintainable code that scales.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {/* <a
              href="https://github.com/piotrkowalski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/piotrkowalski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:piotr@example.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Mail className="w-6 h-6" />
            </a> */}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}