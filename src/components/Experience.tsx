import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Netguru",
      logo: undefined,
      location: "Wroclaw, Poland",
      period: "March 2021 – Present",
      type: "Full-time",
      achievements: [
        "Led React performance optimization project, reducing LCP by 35% through code-splitting and memorization",
        "Designed Node.js micro-service handling 500+ requests per minute (RPM) for payment processing, achieving 99.99% uptime.",
        "Established accessibility audit process that brought client's platform to WCAG 2.1 AA compliance"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "STX Next",
      logo: undefined,
      location: "Poznan, Poland",
      period: "July 2019 – February 2021",
      type: "Full-time",
      achievements: [
        "Reduced Django admin panel load times by 72% through query optimization and caching",
        "Migrated monolithic legacy system to containerized microservices (Docker + Kubernetes)",
        "Implemented Python type hints across codebase, decreasing runtime errors by 40%",
        "Worked in a cross-functional team delivering fin-tech and SaaS solutions"
      ]
    },
    {
      title: "Frontend Tech Lead",
      company: "The Software House (Remote)",
      logo: undefined,
      location: "Remote",
      period: "January 2018 – June 2019",
      type: "Full-time",
      achievements: [
        "Architected Next.js e-commerce platform processing £1M+ monthly transactions",
        "Improved mobile Lighthouse scores from 58 to 89 through image optimization and SSR tuning",
        "Mentored 4 junior developers, with all promoted within 12 months",
        "Oversaw frontend road-map and coordinated releases across teams"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Javrix Web Development",
      logo: undefined,
      location: "Lublin, Poland",
      period: "June 2016 – December 2017",
      type: "Full-time",
      achievements: [
        "Developed Vue.js dashboard with real-time data visualization for IoT startup",
        "Automated testing pipeline reducing regression bugs by 65%",
        "Optimized Docker deployments, cutting AWS costs by $8k/year"
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impactful projects I've contributed to.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-primary"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={exp.logo} />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium mb-2">{exp.company}</p>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}