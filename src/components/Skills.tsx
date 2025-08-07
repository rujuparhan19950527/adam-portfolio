import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Wrench, 
  Palette, 
  Cloud, 
  GitBranch,
  Smartphone,
  Shield
} from "lucide-react";

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 92 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 93 },
        { name: "Django", level: 90 },
        { name: "Express", level: 95 },
        { name: "NestJS", level: 90 }
      ]
    },
    {
      title: "Database & ORM",
      icon: Database,
      color: "text-success",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 92 },
        { name: "Redis", level: 95 },
        { name: "Django ORM", level: 85 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-warning",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Docker", level: 93 },
        { name: "CI/CD", level: 90 },
        { name: "Kubernetes", level: 85 },
      ]
    }
  ];

  const additionalSkills = [
    { name: "Testing & Quality", icon: Shield, items: ["Jest", "Cypress", "Unit Testing", "Integration Testing"] },
    { name: "Design Tools", icon: Palette, items: ["Figma", "Adobe XD", "Photoshop", "Sketch"] },
    { name: "Mobile Development", icon: Smartphone, items: ["React Native", "PWA", "Responsive Design"] },
    { name: "Version Control", icon: GitBranch, items: ["Git", "GitHub", "GitLab", "Bitbucket"] }
  ];

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={inView ? skill.level : 0} 
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Additional Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                  <CardContent className="p-6">
                    <div className="bg-gradient-accent/10 p-3 rounded-lg w-fit mx-auto mb-4">
                      <skillGroup.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-3">{skillGroup.name}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-hero/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Continuous Learning Mindset
              </h4>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and I stay current through continuous learning, 
                attending conferences, contributing to open source, and experimenting with 
                emerging technologies. My goal is to deliver cutting-edge solutions that a
                drive business success.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}