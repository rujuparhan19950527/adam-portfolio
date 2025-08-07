import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Adam%20Szymański.pdf";
    link.download = "Adam Szymański.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
              style={{
                fontSize: "25px", 
                color: "#000000ad",
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
                `,
                transform: "perspective(500px) rotateX(5deg)",
                transition: "all 0.3s ease"
              }}
              whileHover={{
                scale: 1.1,
                rotateX: 15,
                textShadow: `
                  0 1px 0 #4f46e5,
                  0 2px 0 #4338ca,
                  0 3px 0 #3730a3,
                  0 4px 0 #312e81,
                  0 5px 0 #1e1b4b,
                  0 6px 1px rgba(79, 70, 229, 0.2),
                  0 0 10px rgba(79, 70, 229, 0.2),
                  0 1px 5px rgba(79, 70, 229, 0.4),
                  0 3px 8px rgba(79, 70, 229, 0.3),
                  0 5px 15px rgba(79, 70, 229, 0.35),
                  0 10px 15px rgba(79, 70, 229, 0.3),
                  0 20px 25px rgba(79, 70, 229, 0.25)
                `
              }}
              animate={{
                y: [0, -5, 0],
                rotateX: [5, 8, 5]
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateX: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Adam Szymański
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex space-x-8"
            >
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Button
              onClick={downloadResume}
              variant="outline"
              size="sm"
              className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-background/95 backdrop-blur-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={downloadResume}
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}