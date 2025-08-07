import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Chat } from "@/components/Chat";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chat />
      </div>
    </ThemeProvider>
  );
};

export default Index;
