
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, MinusCircle } from 'lucide-react';

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
    <div className="py-8 space-y-8">
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="code-keyword">class</span> <span className="code-function">About</span> {'{}'}
      </motion.h1>
      
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
        <motion.div 
          className="cursor-pointer bg-sidebar/30 p-5 rounded-lg border border-border"
          onClick={() => toggleSection("profile")}
          whileHover={{ scale: 1.01 }}
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-accent">Profile Overview</h2>
            {expandedSection === "profile" ? <MinusCircle size={20} /> : <PlusCircle size={20} />}
          </div>
          
          {expandedSection === "profile" && (
            <motion.div 
              className="mt-4 space-y-4"
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
          )}
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <motion.div 
          className="bg-sidebar/30 p-6 rounded-lg border border-border hover:shadow-md hover:bg-sidebar/40 transition-all duration-300 cursor-pointer"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-lg font-medium mb-3 text-accent">Core Competencies</h3>
          <ul className="space-y-2">
            <motion.li 
              className="flex items-center" 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Back-End Development & API Design</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Microservices Architecture</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Authentication & Authorization</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Data Analysis & Visualization</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Agile Development & CI/CD</span>
            </motion.li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-sidebar/30 p-6 rounded-lg border border-border hover:shadow-md hover:bg-sidebar/40 transition-all duration-300 cursor-pointer"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h3 className="text-lg font-medium mb-3 text-accent">Technical Stack</h3>
          <ul className="space-y-2">
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Node.js, Express.js, TypeScript</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">MongoDB, MySQL, PostgreSQL</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Docker, Azure, AWS</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Python, SQL, NumPy</span>
            </motion.li>
            <motion.li 
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              <span className="hover:text-accent transition-colors">Git, GitHub, Agile Methods</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className="bg-sidebar/30 p-6 rounded-lg border border-border mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="text-lg font-medium mb-3 text-accent">Latest Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2">
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
          <ul className="space-y-2">
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
        <p className="active-line pl-2 code-comment">// Passionate about building robust back-end systems and RESTful APIs</p>
      </motion.div>
    </div>
  );
};

export default About;
