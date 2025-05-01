
import React from 'react';
import { Code, Server, Database, GitBranch, BarChart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Custom skill icons
import JavaScriptIcon from '../components/icons/JavaScriptIcon';
import TypeScriptIcon from '../components/icons/TypeScriptIcon';
import PythonIcon from '../components/icons/PythonIcon';
import HTML5Icon from '../components/icons/HTML5Icon';
import CSS3Icon from '../components/icons/CSS3Icon';
import SQLIcon from '../components/icons/SQLIcon';
import ReactIcon from '../components/icons/ReactIcon';
import NodeIcon from '../components/icons/NodeIcon';
import GitIcon from '../components/icons/GitIcon';
import MongoDBIcon from '../components/icons/MongoDBIcon';
import DockerIcon from '../components/icons/DockerIcon';
import TailwindIcon from '../components/icons/TailwindIcon';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="text-accent" size={20} />,
      skills: [
        { name: "JavaScript", icon: <JavaScriptIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "Python", icon: <PythonIcon /> },
        { name: "HTML5", icon: <HTML5Icon /> },
        { name: "CSS3", icon: <CSS3Icon /> },
        { name: "SQL", icon: <SQLIcon /> }
      ]
    },
    {
      name: "Frameworks & Libraries",
      icon: <Server className="text-accent" size={20} />,
      skills: [
        { name: "React.js", icon: <ReactIcon /> },
        { name: "Node.js", icon: <NodeIcon /> },
        { name: "Express.js", icon: <NodeIcon /> },
        { name: "Redux", icon: <ReactIcon /> },
        { name: "Next.js", icon: <ReactIcon /> },
        { name: "TailwindCSS", icon: <TailwindIcon /> },
        { name: "Material UI", icon: <ReactIcon /> },
        { name: "Bootstrap", icon: <CSS3Icon /> }
      ]
    },
    {
      name: "Tools & Technologies",
      icon: <GitBranch className="text-accent" size={20} />,
      skills: [
        { name: "Git", icon: <GitIcon /> },
        { name: "GitHub", icon: <GitIcon /> },
        { name: "VS Code", icon: <Code /> },
        { name: "Webpack", icon: <NodeIcon /> },
        { name: "Docker", icon: <DockerIcon /> },
        { name: "AWS", icon: <Server /> },
        { name: "Jest", icon: <ReactIcon /> },
        { name: "Cypress", icon: <Code /> }
      ]
    },
    {
      name: "Databases",
      icon: <Database className="text-accent" size={20} />,
      skills: [
        { name: "MongoDB", icon: <MongoDBIcon /> },
        { name: "PostgreSQL", icon: <Database /> },
        { name: "MySQL", icon: <Database /> },
        { name: "Firebase", icon: <Database /> }
      ]
    },
    {
      name: "Methodologies",
      icon: <BarChart className="text-accent" size={20} />,
      skills: [
        { name: "Agile/Scrum", icon: <BarChart /> },
        { name: "RESTful API Design", icon: <Server /> },
        { name: "Responsive Web Design", icon: <HTML5Icon /> },
        { name: "Test-Driven Development", icon: <Code /> },
        { name: "CI/CD", icon: <GitIcon /> }
      ]
    }
  ];

  return (
    <div className="py-8">
      {/* VS Code-like file header */}
      <div className="flex items-center bg-sidebar/70 text-sidebar-foreground text-xs px-3 py-1 border-b border-border mb-4 rounded-t-md">
        <span className="mr-2">Skills.tsx</span>
        <span className="ml-auto">TypeScript</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">
        <span className="code-keyword">const</span> <span className="code-variable">skills</span> <span className="code-keyword">=</span> {'{'}
      </h1>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-accent flex items-center">
              {category.icon}
              <span className="ml-2 code-constant">{category.name}</span>: {'{'}
            </h2>
            
            <div className="flex flex-wrap gap-2 pl-4">
              {Array.isArray(category.skills) && category.skills.map((skill, skillIndex) => {
                // Check if the skill is an object with name and icon
                if (typeof skill === 'object' && skill !== null) {
                  return (
                    <div 
                      key={skillIndex} 
                      className="px-3 py-1.5 bg-sidebar rounded border border-border flex items-center gap-1.5 hover:bg-sidebar/70 transition-colors"
                    >
                      {skill.icon}
                      <span className={skillIndex === 0 ? "active-line pl-2" : ""}>
                        {skill.name}
                      </span>
                    </div>
                  );
                } else {
                  // For skills that are just strings
                  return (
                    <div 
                      key={skillIndex} 
                      className="px-3 py-1.5 bg-sidebar rounded border border-border flex items-center gap-1.5 hover:bg-sidebar/70 transition-colors"
                    >
                      {skillIndex === 0 ? (
                        <span className="active-line pl-2">{skill}</span>
                      ) : (
                        skill
                      )}
                    </div>
                  );
                }
              })}
            </div>
            
            <p className="mt-2">{'}'},</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <span className="code-keyword">{'}'}</span>;
      </div>
      
      <div className="code-block mt-8 relative rounded-md overflow-hidden border border-border">
        {/* VS Code-like line numbers */}
        <div className="flex">
          <div className="py-3 px-2 text-sidebar-foreground/60 bg-sidebar/40 text-xs font-mono text-right select-none">
            <div className="pr-2">01</div>
            <div className="pr-2">02</div>
            <div className="pr-2">03</div>
          </div>
          
          <pre className="py-3 px-4 overflow-x-auto flex-1 text-sm">
            <span className="code-comment">/**
 * Continuously expanding my technical toolkit
 * through practice, projects, and professional development
 */</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Skills;
