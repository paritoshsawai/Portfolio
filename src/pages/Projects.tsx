
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
      {/* VS Code-like file header */}
      <div className="flex items-center bg-sidebar/70 text-sidebar-foreground text-xs px-3 py-1 border-b border-border mb-4 rounded-t-md">
        <span className="mr-2">Projects.tsx</span>
        <span className="ml-auto">TypeScript</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">const</span> <span className="code-variable">projects</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-border rounded-md p-5 bg-sidebar/30 hover:bg-sidebar/50 transition-all duration-300 hover:shadow-lg hover:border-accent/50 transform hover:-translate-y-1"
          >
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
                <span key={techIndex} className="px-2 py-1 text-xs bg-sidebar rounded hover:bg-accent/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline hover:text-accent/80 transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>GitHub</span>
              </a>
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline hover:text-accent/80 transition-colors"
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
 * These projects showcase my ability to build responsive,
 * user-friendly applications using modern technologies
 */</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Projects;
