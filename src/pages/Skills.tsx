
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Redux", "Next.js", "TailwindCSS", "Material UI", "Bootstrap"]
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Docker", "AWS", "Jest", "Cypress"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      name: "Methodologies",
      skills: ["Agile/Scrum", "RESTful API Design", "Responsive Web Design", "Test-Driven Development", "CI/CD"]
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">
        <span className="code-keyword">const</span> <span className="code-variable">skills</span> <span className="code-keyword">=</span> {'{'}
      </h1>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-accent">
              <span className="code-constant">{category.name}</span>: {'{'}
            </h2>
            
            <div className="flex flex-wrap gap-2 pl-4">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="px-3 py-1.5 bg-sidebar rounded border border-border"
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
      
      <div className="code-block mt-8">
        <pre>
          <span className="code-comment">/**
 * Continuously expanding my technical toolkit
 * through practice, projects, and professional development
 */</span>
        </pre>
      </div>
    </div>
  );
};

export default Skills;
