import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "/image/E-Commerce-Platform.png",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://evershop.io/",
      githubUrl: "https://github.com/evershopcommerce/eversh",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
      image: "/image/Task-management-app.png",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/iAhmadAmin/task_management?tab=readme-ov-file",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Responsive design with dark/light mode support.",
      image: "/image/weather-Dashboard.png",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://weather.aniqa.dev/",
      githubUrl: "https://github.com/aniqatc/weather",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduled posting, and engagement tracking across multiple platforms.",
      image: "/image/Social-Media-Dashboard.png",
      technologies: ["React", "TypeScript", "D3.js", "Express.js", "MongoDB"],
      liveUrl: "https://agusdelva.github.io/social-media-dashboard/",
      githubUrl: "https://github.com/agusdelva/social-media-dashboard",
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking with portfolio management, alerts, and detailed market analysis. Features advanced charting and price predictions.",
      image: "/image/Cryptocurrency-Tracker.png",
      technologies: ["React", "TypeScript", "Redux", "CoinGecko API", "Recharts"],
      liveUrl: "#",
      githubUrl: "https://github.com/EthVentures/CryptoTracker",
      featured: false
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform with user-generated content, rating system, and advanced search functionality. Mobile-first responsive design.",
      image: "/image/recipe-hub.png",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PWA"],
      liveUrl: "https://concerned-picture-9849-frontend.vercel.app/explore",
      githubUrl: "https://github.com/AyushmaanRajput/RecipeHub-Recipe-Sharing-Platform",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with video streaming, interactive quizzes, progress tracking, and certification system. Built for educational institutions.",
      image: "/image/learning-manage-system.png",
      technologies: ["React", "TypeScript", "Node.js", "MySQL", "WebRTC"],
      liveUrl: "https://www.claroline.com/",
      githubUrl: "https://github.com/claroline/Claroline",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 border-primary/10 group">
                  
                  <CardContent className="p-6">
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full h-48 object-cover rounded-md mb-4 border border-primary/10"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm" variant="default" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Other Notable Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10 group">
                  
                  <CardContent className="p-4">
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full h-32 object-cover rounded mb-3 border border-primary/10"
                    />
                    <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-hero/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Want to see more?
              </h4>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects, contributions, and code samples.
              </p>
              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <a href="https://github.com/adamszymanski" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
