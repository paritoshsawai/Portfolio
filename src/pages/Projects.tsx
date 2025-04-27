
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a comprehensive e-commerce platform with React.js frontend and Node.js backend. Implemented user authentication, product catalog, shopping cart, and payment gateway integration.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/paritoshsawai",
      liveDemo: "#"
    },
    {
      title: "Task Management Application",
      description: "Developed a productivity tool for task management with features like drag-and-drop task organization, deadline reminders, and progress tracking.",
      technologies: ["React", "TypeScript", "Firebase", "Material UI"],
      github: "https://github.com/paritoshsawai",
      liveDemo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Created an interactive weather application that provides real-time weather updates, forecasts, and location-based weather information by integrating with a weather API.",
      technologies: ["JavaScript", "React", "OpenWeather API", "CSS3"],
      github: "https://github.com/paritoshsawai",
      liveDemo: "#"
    },
    {
      title: "Personal Portfolio",
      description: "Designed and implemented a VS Code-themed portfolio website showcasing my projects and skills using React and TailwindCSS.",
      technologies: ["React", "TailwindCSS", "React Router"],
      github: "https://github.com/paritoshsawai",
      liveDemo: "#"
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">const</span> <span className="code-variable">projects</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-border rounded-md p-5 bg-sidebar/30 hover:bg-sidebar/50 transition-colors">
            <h2 className="text-xl font-semibold mb-2 text-accent">
              {index === 0 ? (
                <div className="active-line pl-2">{project.title}</div>
              ) : (
                project.title
              )}
            </h2>
            
            <p className="mb-4 text-sidebar-foreground">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 text-xs bg-sidebar rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline"
              >
                <Github size={16} className="mr-1" />
                <span>GitHub</span>
              </a>
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline"
              >
                <ExternalLink size={16} className="mr-1" />
                <span>Live Demo</span>
              </a>
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
 * These projects showcase my ability to build responsive,
 * user-friendly applications using modern technologies
 */</span>
        </pre>
      </div>
    </div>
  );
};

export default Projects;
