import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "University of Information Technology and Management (UITM), Rzeszów, Poland",
      period: "October 2014 – June 2018",
      achievements: [
        "Specialized in web development, distributed systems, and modern database architectures",
        "Thesis: 'Efficiency Analysis of NoSQL vs SQL Databases for High-Traffic Web Applications' (graded 4.8/5.0)",
        "Led 5-person team to build a library management system (Java Spring + React), later adopted by the university",
        "Completed AWS Academy program covering cloud deployment patterns"
      ],
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      name: "Currently pursuing AWS Certified Developer – Associate (Expected completion Q3 2025)",
      issuer: "Amazon Web Services",
      year: "In Progress",
      icon: Award
    },
    {
      name: "Completed AWS Academy Cloud Foundations Program",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-8 text-foreground flex items-center"
            >
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Formal Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <edu.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium mb-2">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                          {edu.achievements && (
                            <div>
                              <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                              <ul className="space-y-2">
                                {edu.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-8 text-foreground flex items-center"
            >
              <Award className="w-6 h-6 mr-3 text-primary" />
              Certifications
            </motion.h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <cert.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground">{cert.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Continuous Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Card className="bg-gradient-accent/10 border-accent/20">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Always staying up-to-date with the latest technologies, frameworks, and best practices 
                    through online courses, conferences, and hands-on projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}