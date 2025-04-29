
import React from 'react';
import { Code, Server, Database, GitBranch, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="text-accent" size={20} />,
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
      name: "Frameworks & Libraries",
      icon: <Server className="text-accent" size={20} />,
      skills: ["React.js", "Node.js", "Express.js", "Redux", "Next.js", "TailwindCSS", "Material UI", "Bootstrap"]
    },
    {
      name: "Tools & Technologies",
      icon: <GitBranch className="text-accent" size={20} />,
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Docker", "AWS", "Jest", "Cypress"]
    },
    {
      name: "Databases",
      icon: <Database className="text-accent" size={20} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      name: "Methodologies",
      icon: <BarChart className="text-accent" size={20} />,
      skills: ["Agile/Scrum", "RESTful API Design", "Responsive Web Design", "Test-Driven Development", "CI/CD"]
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
              {category.skills.map((skill, skillIndex) => (
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
              ))}
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
