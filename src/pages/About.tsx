
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, MinusCircle, Download, ArrowRight, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const About = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("profile");

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <TooltipProvider>
      <div className="py-8 space-y-8 max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start mb-6 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span className="code-keyword">class</span> 
              <motion.span 
                className="code-function gradient-text"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 5
                }}
              >
                Profile
              </motion.span> 
              <span className="text-gray-400">{'{'}</span>
            </h1>
            <p className="text-lg text-gray-300 mb-2 pl-5">
              Software Engineer | Back-End Developer | Node.js & API Specialist
            </p>
            <p className="text-sm text-gray-400 pl-5 flex items-center gap-1">
              <span>London, UK</span>
              <span className="w-1 h-1 bg-accent rounded-full inline-block mx-1"></span>
              <span>paritoshsawai@gmail.com</span>
            </p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="hover-scale">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download my resume</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="shadow-glow hover-scale">
                  <FileText className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </TooltipTrigger>
              <TooltipContent>Let's connect</TooltipContent>
            </Tooltip>
          </div>
        </motion.div>
        
        <motion.div 
          className="code-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <pre>
            <span className="code-comment">/**
 * PROFILE SNAPSHOT
 * Versatile Software Engineer with ~3 years of experience in
 * back-end development, data analysis, and cloud-native applications.
 */</span>
          </pre>
        </motion.div>
        
        <div className="space-y-6">
          <Accordion type="single" collapsible defaultValue="profile" className="w-full">
            <AccordionItem value="profile" className="glass-panel border border-border">
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <h2 className="text-xl font-semibold text-accent">Profile Overview</h2>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="leading-relaxed">
                    Versatile Software Engineer with approximately 3 years of combined experience in back-end development, 
                    data analysis, and cloud-native application design. Proven expertise in building robust RESTful APIs 
                    and microservices using Node.js, Express.js, and MongoDB within modular, scalable architectures.
                  </p>
                  
                  <p className="leading-relaxed">
                    Solid foundation in core software engineering principles, with hands-on experience implementing secure 
                    authentication systems and writing clean, testable code following SOLID and DRY methodologies. Skilled 
                    in Agile environments, collaborating effectively with cross-functional teams to deliver high-quality 
                    solutions aligned with business objectives.
                  </p>

                  <p className="leading-relaxed">
                    Demonstrated ability to lead data-driven projects—from data cleaning and modelling with Python and SQL 
                    to delivering actionable insights through Tableau. Committed to continuous learning, backed by certifications 
                    in Node.js, Azure, and data analytics to stay ahead in evolving tech landscapes.
                  </p>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experience" className="glass-panel border border-border mt-4">
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <h2 className="text-xl font-semibold text-accent">Work Experience</h2>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <div className="space-y-6">
                  <div className="relative pl-6 border-l border-accent/30">
                    <motion.div 
                      className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-accent"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <h3 className="text-lg font-medium">Crew Associate (Part-time) | Roosters Piri Piri</h3>
                    <p className="text-sm text-gray-400 mb-2">March 2024 – Present</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Delivered excellent customer service while managing orders and team coordination.</li>
                      <li>Assisted with maintenance and troubleshooting of till software, resolving technical glitches.</li>
                      <li>Supported basic hardware fixes for store systems and devices.</li>
                      <li>Enhanced multitasking skills and gained insight into cross-functional roles.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-accent/30">
                    <motion.div 
                      className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-accent"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <h3 className="text-lg font-medium">Software Developer | Birlasoft</h3>
                    <p className="text-sm text-gray-400 mb-2">October 2021 – June 2022</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Developed scalable RESTful APIs and microservices using Node.js and Express.js.</li>
                      <li>Integrated MongoDB for optimized data handling, enhancing performance.</li>
                      <li>Secured endpoints with JWT-based authentication and session management.</li>
                      <li>Performed code reviews and enforced Git best practices.</li>
                      <li>Collaborated cross-functionally in an Agile setup.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-accent/30">
                    <motion.div 
                      className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-accent"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <h3 className="text-lg font-medium">Business Analyst Intern | Central Growth</h3>
                    <p className="text-sm text-gray-400 mb-2">July 2022 – November 2022</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Cleaned and structured large datasets using Python and SQL.</li>
                      <li>Built predictive models and conducted statistical analyses.</li>
                      <li>Translated business goals into data requirements.</li>
                      <li>Created interactive Tableau dashboards to visualize KPIs.</li>
                      <li>Identified process inefficiencies and recommended improvements.</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="education" className="glass-panel border border-border mt-4">
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <h2 className="text-xl font-semibold text-accent">Education</h2>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-lg font-medium">University of Salford</h3>
                      <p className="text-sm text-gray-400">Master of Science (MSc) – International Business Management</p>
                    </div>
                    <p className="text-sm text-gray-400">2023 - 2024</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Sinhgad Institutes</h3>
                      <p className="text-sm text-gray-400">Bachelor of Engineering (BEng) – Computer Science & Programming</p>
                    </div>
                    <p className="text-sm text-gray-400">2016 - 2021</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div 
            className="glass-panel p-6 card-hover"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-lg font-medium mb-3 text-accent">Core Competencies</h3>
            <ul className="space-y-2">
              {[
                "Back-End Development & API Design",
                "Microservices Architecture",
                "Authentication & Authorization",
                "Data Analysis & Visualization",
                "Agile Development & CI/CD"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center" 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-accent rounded-full mr-2"
                    animate={{ 
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  <span className="hover:text-accent transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-6 card-hover"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-lg font-medium mb-3 text-accent">Technical Stack</h3>
            <ul className="space-y-2">
              {[
                "Node.js, Express.js, TypeScript",
                "MongoDB, MySQL, PostgreSQL",
                "Docker, Azure, AWS",
                "Python, SQL, NumPy",
                "Git, GitHub, Agile Methods"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span className="hover:text-accent transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="glass-panel p-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-lg font-medium mb-3 text-accent flex items-center">
            <ArrowRight className="mr-2 h-4 w-4 text-accent animate-pulse" />
            Latest Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {[
                { title: "Node.js and Express Development", org: "IBM", date: "Nov 2024" },
                { title: "Python Bootcamp", org: "Udemy", date: "Dec 2024" },
                { title: "Google Data Analytics", org: "Google", date: "May 2024" },
              ].map((cert, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
                  <div>
                    <p className="font-medium hover:text-accent transition-colors">{cert.title}</p>
                    <p className="text-sm text-sidebar-foreground">{cert.org} - {cert.date}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                { title: "Azure Fundamentals (AZ-900)", org: "Microsoft", date: "May 2023" },
                { title: "Business Analysis", org: "Coursera", date: "Sep 2023" },
                { title: "Data Visualization", org: "Tata Group", date: "Sep 2023" },
              ].map((cert, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
                  <div>
                    <p className="font-medium hover:text-accent transition-colors">{cert.title}</p>
                    <p className="text-sm text-sidebar-foreground">{cert.org} - {cert.date}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-l-2 border-accent pl-4 italic mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ x: 5, borderLeftWidth: '4px' }}
        >
          "Committed to delivering scalable solutions with clean, maintainable code while staying current with emerging technologies."
        </motion.div>
        
        <motion.div 
          className="pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="active-line code-comment">// Passionate about building robust back-end systems and RESTful APIs</p>
        </motion.div>
      </div>
    </TooltipProvider>
  );
};

export default About;
