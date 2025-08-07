import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Scroll to top button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="bg-background border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Name/Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Adam Szymański
            </h3>
            <p className="text-muted-foreground">Senior Web Developer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-xs h-px bg-gradient-primary"
          ></motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © {currentYear} Adam Szymański. Made with
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              and lots of coffee.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}