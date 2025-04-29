
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { AlertCircle } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, description: "ES6+, Async/Await, Promises" },
        { name: "TypeScript", level: 85, description: "Type definitions, interfaces, generics" },
        { name: "Python", level: 80, description: "Data analysis, scripting, automation" },
        { name: "HTML5", level: 95, description: "Semantic markup, accessibility" },
        { name: "CSS3", level: 90, description: "Flexbox, Grid, animations" },
        { name: "SQL", level: 75, description: "Queries, joins, stored procedures" }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 85, description: "Hooks, context API, custom hooks" },
        { name: "Node.js", level: 90, description: "Express, RESTful APIs, middlewares" },
        { name: "Express.js", level: 85, description: "Route handling, middleware" },
        { name: "Redux", level: 70, description: "State management, reducers, actions" },
        { name: "Next.js", level: 75, description: "SSR, file-based routing" },
        { name: "TailwindCSS", level: 90, description: "Utility-first CSS framework" },
        { name: "Material UI", level: 75, description: "React component library" },
        { name: "Bootstrap", level: 80, description: "Responsive layouts, components" }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, description: "Version control, branching strategies" },
        { name: "GitHub", level: 85, description: "Repositories, PRs, actions" },
        { name: "VS Code", level: 90, description: "Extensions, settings, debugging" },
        { name: "Webpack", level: 65, description: "Module bundling, optimization" },
        { name: "Docker", level: 70, description: "Containers, images, compose" },
        { name: "AWS", level: 60, description: "EC2, S3, Lambda" },
        { name: "Jest", level: 75, description: "Unit testing, mocking" },
        { name: "Cypress", level: 70, description: "E2E testing, assertions" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", level: 85, description: "Document DB, Mongoose ODM" },
        { name: "PostgreSQL", level: 75, description: "Relational DB, joins, indexes" },
        { name: "MySQL", level: 70, description: "SQL queries, stored procedures" },
        { name: "Firebase", level: 80, description: "Firestore, authentication" }
      ]
    },
    {
      name: "Methodologies",
      skills: [
        { name: "Agile/Scrum", level: 85, description: "Sprints, stand-ups, retrospectives" },
        { name: "RESTful API Design", level: 90, description: "Resource modeling, status codes" },
        { name: "Responsive Web Design", level: 85, description: "Mobile-first, media queries" },
        { name: "Test-Driven Development", level: 75, description: "Unit tests, integration tests" },
        { name: "CI/CD", level: 70, description: "Continuous integration/deployment" }
      ]
    }
  ];

  const filteredCategories = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="py-8 px-2 md:px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="section-heading mb-2">Technical Proficiency</h1>
        <div className="code-block">
          <pre>
            <span className="code-comment">/**
 * A collection of technologies and methodologies I've worked with
 * Constantly learning and improving my skills
 */</span>
          </pre>
        </div>
      </motion.div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button 
          onClick={() => setActiveCategory("all")}
          className={`pill-tag ${activeCategory === "all" ? "bg-accent text-white" : ""}`}
        >
          All
        </button>
        {skillCategories.map((category, index) => (
          <button 
            key={index} 
            onClick={() => setActiveCategory(category.name)}
            className={`pill-tag ${activeCategory === category.name ? "bg-accent text-white" : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <motion.div 
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <motion.span 
                className="inline-block w-1.5 h-6 bg-accent mr-2"
                initial={{ height: 0 }}
                animate={{ height: 24 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              />
              <span className="code-constant">{category.name}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <HoverCard key={skillIndex}>
                  <HoverCardTrigger asChild>
                    <motion.div 
                      className="glass-panel p-4 card-hover cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full h-2 bg-sidebar rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.2 + (index * 0.05) + (skillIndex * 0.05), duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-sidebar/90 backdrop-blur border-accent/20">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-accent">{skill.name}</h4>
                        <p className="text-xs text-sidebar-foreground">
                          {skill.description}
                        </p>
                      </div>
                      <AlertCircle className="h-4 w-4 text-accent animate-pulse-glow" />
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-10 border-l-2 border-accent pl-4 italic"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ x: 5, borderLeftWidth: '4px' }}
      >
        "Always learning, always growing. Technology evolves, and so do I."
      </motion.div>
    </motion.div>
  );
};

export default Skills;
