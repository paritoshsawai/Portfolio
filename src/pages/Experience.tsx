
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "TechSolutions Inc.",
      period: "January 2022 - Present",
      responsibilities: [
        "Led the development of responsive web applications using React.js and TypeScript",
        "Collaborated with backend developers to integrate RESTful APIs",
        "Implemented state management solutions using Redux and Context API",
        "Conducted code reviews and provided mentorship to junior developers",
        "Improved application performance by 30% through code optimization"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Innovations",
      period: "June 2020 - December 2021",
      responsibilities: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Built interactive UI components using React.js",
        "Assisted in troubleshooting cross-browser compatibility issues",
        "Participated in daily scrum meetings and sprint planning",
        "Contributed to the company's internal component library"
      ]
    },
    {
      title: "Web Development Intern",
      company: "CreativeTech Studio",
      period: "January 2020 - May 2020",
      responsibilities: [
        "Assisted senior developers in creating website layouts",
        "Implemented responsive designs using CSS frameworks",
        "Gained hands-on experience with version control using Git",
        "Contributed to small-scale web application projects"
      ]
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">const</span> <span className="code-variable">workExperience</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-border">
            {/* Highlighted bullet for the first item */}
            {index === 0 ? (
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            ) : (
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-sidebar-active"></div>
            )}
            
            <div className="pb-8">
              <h2 className={`text-xl font-semibold ${index === 0 ? 'text-accent' : 'text-primary'}`}>
                {exp.title}
              </h2>
              
              <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
                <p className="font-medium">{exp.company}</p>
                <p className="text-sidebar-foreground">{exp.period}</p>
              </div>
              
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <span className="code-keyword">]</span>;
      </div>
      
      <div className="code-block mt-8">
        <pre>
          <span className="code-comment">/**
 * 3+ years of professional experience in web development
 * with a focus on frontend technologies and responsive design
 */</span>
        </pre>
      </div>
    </div>
  );
};

export default Experience;
