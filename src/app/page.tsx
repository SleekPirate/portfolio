"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, ExternalLink, Github, Code, Zap, Shield, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { AIChatbot } from "@/components/ai-chatbot"

const typingTexts = [
  "Building solutions using AI + Digital Innovation",
  "Crafting intelligent systems for tomorrow",
  "Transforming ideas into digital reality",
  "Innovating at the intersection of AI and technology"
]

const projects = [
  {
    title: "Resume Builder",
    description: "Builds resumes via form + multiple templates",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#add-link-here",
    githubLink: "#add-link-here",
    icon: Code,
    screenshot: "/projects/resume-builder.png",
  },
  {
    title: "Fruit Scanner Prototype",
    description: "Detects rotten fruit using machine learning",
    techStack: ["Teachable Machine", "Figma", "JavaScript"],
    liveLink: "#add-link-here",
    githubLink: "#add-link-here",
    icon: Brain,
    screenshot: "/projects/fruit-scanner.png",
  },
  {
    title: "AI Content Generator",
    description: "Generates text, code & images using AI",
    techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    liveLink: "#add-link-here",
    githubLink: "#add-link-here",
    icon: Zap,
    screenshot: "/projects/ai-content-generator.png",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Text sentiment analysis with real-time visualization",
    techStack: ["Python", "NLTK", "Flask", "Chart.js"],
    liveLink: "#add-link-here",
    githubLink: "#add-link-here",
    icon: Shield,
    screenshot: "/projects/sentiment-analysis.png",
  },
  {
    title: "AI Bias Audit",
    description: "Bias detection in AI models using AIF360",
    techStack: ["Python", "AIF360", "Pandas", "Scikit-learn"],
    liveLink: "#add-link-here",
    githubLink: "#add-link-here",
    icon: Brain,
    screenshot: "/projects/ai-bias-audit.png",
  },
]

const skills = [
  { name: "AI/Machine Learning", icon: Brain, level: 90 },
  { name: "Cybersecurity", icon: Shield, level: 75 },
  { name: "Full-Stack Development", icon: Code, level: 85 },
  { name: "Digital Innovation", icon: Zap, level: 95 },
]

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.1), transparent)",
            transform: "skewX(-15deg)",
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Jeneal Mentor</span>
              <br />
              <span className="text-primary text-glow-red">— Digital Associate</span>
            </h1>
            
            <div className="h-8 mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground typing-animation">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary cyber-border group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary text-glow-red">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-red" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Card className="cyber-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Digital Innovator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I focus on building AI projects and using AI tools to solve day-to-day problems while developing my IT Support and Cybersecurity skills.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My passion lies at the intersection of artificial intelligence, cybersecurity, and digital innovation. I create intelligent solutions that address real-world challenges while maintaining security and efficiency.
                  </p>
                  
                  <div className="pt-4">
                    <Button className="bg-primary hover:bg-primary/90 glow-red group">
                      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative group">
                  {/* Profile Image Container */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden cyber-border profile-glow profile-float">
                    <img
                      src="/profile-picture.jpg"
                      alt="Jeneal Mentor - Digital Associate"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/400x400/1a1a1a/dc2626?text=${encodeURIComponent('JM')}`;
                      }}
                    />
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-full cyber-border">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center glow-red-intense badge-float"
                  >
                    <Brain className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                </div>
                
                {/* Profile Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Jeneal Mentor</h3>
                  <p className="text-primary font-medium">Digital Associate</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for Projects</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                  <div className="text-center p-3 bg-muted/20 rounded-lg cyber-border">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg cyber-border">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg cyber-border">
                    <div className="text-2xl font-bold text-primary">AI</div>
                    <div className="text-xs text-muted-foreground">Focus</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-primary text-glow-red">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-red" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-border bg-card/50 backdrop-blur-sm hover:glow-red transition-all duration-300 text-center group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="text-primary font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-2 bg-primary rounded-full glow-red"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary text-glow-red">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-red" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="cyber-border bg-card/50 backdrop-blur-sm hover:glow-red transition-all duration-300 group overflow-hidden">
                  {/* Project Screenshot */}
                  <div className="relative h-48 overflow-hidden bg-muted/20">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/400x200/1a1a1a/dc2626?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2">
                      <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <project.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 cyber-border hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 cyber-border hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-primary text-glow-red">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-red mb-8" />
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to build something amazing together? Whether you have a project in mind or just want to chat about AI and technology, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red group"
                asChild
              >
                <a href="mailto:contact@example.com">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary cyber-border group"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Jeneal Mentor. Built with passion and AI-powered innovation.
          </p>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}