
import React from 'react';
import { Github, ExternalLink, Server, Code, Database } from 'lucide-react';
import CodeHeader from '../components/common/CodeHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Restaurant CRUD API",
      description: "A backend application built using Node.js and Express.js serving as the core API for a food-related system. Provides endpoints for managing users, restaurants, categories, food items, with features like CORS support, Morgan logging, and modular route structure.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "MVC", "RESTful API"],
      github: "https://github.com/paritoshsawai/Resturant-CRUD-operation-using-NodeJS",
      liveDemo: "#",
      date: "Nov 2024"
    },
    {
      title: "Inventory Management System",
      description: "A comprehensive MERN stack application for tracking inventory levels, orders, sales, and deliveries. Features include role-based authentication, dashboard with metrics, product management, real-time tracking, and multi-location support.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Material-UI", "Chart.js", "JWT", "AWS"],
      github: "https://github.com/paritoshsawai/Inventory-Management-System",
      liveDemo: "https://inventory-management-system-1dxj3x4u4-paritoshsawais-projects.vercel.app/",
      date: "2024"
    },
    {
      title: "Online Book Review Application",
      description: "A RESTful web service that allows users to manage books and reviews for an online bookstore. Supports multiple simultaneous users with session and JWT-based authentication. Features include book searching, review management, and user authentication.",
      technologies: ["Node.js", "Express.js", "JWT", "Axios", "RESTful API", "Async/Await"],
      github: "https://github.com/paritoshsawai/NodeJS-and-Express-CRUD-operation",
      liveDemo: "#",
      date: "2024"
    },
    {
      title: "Weather App",
      description: "A simple weather application that displays current weather information for any city. Fetches data from the OpenWeatherMap API and shows details such as temperature, humidity, weather description, and a corresponding emoji.",
      technologies: ["JavaScript", "HTML", "CSS", "Web APIs", "OpenWeatherMap API"],
      github: "https://github.com/paritoshsawai/Get-Weather-Info",
      liveDemo: "#",
      date: "Oct 2024"
    },
    {
      title: "Calculator",
      description: "A simple, responsive calculator providing basic arithmetic operations like addition, subtraction, multiplication, and division. Features a clean UI with real-time result display and a responsive design for various screen sizes.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/paritoshsawai/Calcuator-with-JAVASCRIPT",
      liveDemo: "#",
      date: "Oct 2024"
    },
    {
      title: "Demographic Data Analyzer",
      description: "Python-based analysis of demographic data from the 1994 U.S. Census database. Analyzes distribution of races, average ages, education levels, and income using Pandas and data processing techniques.",
      technologies: ["Python", "Pandas", "Data Analysis"],
      github: "https://github.com/paritoshsawai/Demographic-data-analyzer-with-Python",
      liveDemo: "#",
      date: "2024"
    },
    {
      title: "Statistics Calculator",
      description: "Python function that calculates mean, variance, standard deviation, maximum, minimum, and sum of a 3x3 matrix. Takes a list of 9 numbers as input and outputs a dictionary with calculated statistics.",
      technologies: ["Python", "NumPy", "Statistics"],
      github: "https://github.com/paritoshsawai/mean-var-std-calculator-in-Python",
      liveDemo: "#",
      date: "2024"
    },
    {
      title: "Random Password Generator",
      description: "A tool that generates random passwords based on specified criteria such as length, inclusion of lowercase letters, uppercase letters, numbers, and symbols. Includes validation to ensure a valid length and character selection.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/paritoshsawai/Random-Password-Genrator-with-Javascript",
      liveDemo: "#",
      date: "2024"
    },
    {
      title: "Temperature Converter",
      description: "A responsive web application that converts temperatures between Celsius, Fahrenheit, and Kelvin with real-time conversion and a clean, intuitive interface. Optimized for mobile devices with a responsive layout.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/paritoshsawai/Tempreture-converter",
      liveDemo: "#",
      date: "2024"
    },
    {
      title: "Travel Bloom",
      description: "A dynamic travel website allowing users to search for destinations, learn about the company, and submit travel requirements through an interactive form. Features destination search using AJAX, company information, and a form for travel preferences.",
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "AJAX", "REST API", "DOM Manipulation"],
      github: "#",
      liveDemo: "#",
      date: "2024"
    }
  ];

  // Get a list of all unique technologies across all projects
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

  const getTechColor = (tech) => {
    const techColors = {
      "Node.js": "text-green-500",
      "Express.js": "text-yellow-500",
      "MongoDB": "text-green-600",
      "React.js": "text-blue-400",
      "JavaScript": "text-yellow-300",
      "HTML5": "text-orange-500",
      "CSS3": "text-blue-500",
      "Python": "text-green-400",
      "JWT": "text-purple-400",
      "Material-UI": "text-blue-300",
      "REST API": "text-indigo-400",
    };
    
    return techColors[tech] || "text-accent";
  };

  const getTechIcon = (tech) => {
    const techIcons = {
      "Node.js": <Server className="text-green-500" size={14} />,
      "MongoDB": <Database className="text-green-600" size={14} />,
      "JavaScript": <Code className="text-yellow-300" size={14} />,
      "Python": <Code className="text-green-400" size={14} />
    };
    
    return techIcons[tech] || null;
  };

  return (
    <div className="py-8">
      <CodeHeader filename="Projects.tsx" language="TypeScript" />
      
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">const</span> <span className="code-variable">projects</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="border border-border bg-sidebar/30 hover:bg-sidebar/50 transition-all duration-300 hover:shadow-lg hover:border-accent/50 transform hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className={index === 0 ? "active-line pl-2 text-accent" : "text-accent"}>
                  {project.title}
                </CardTitle>
                <div className="text-xs text-muted-foreground">{project.date}</div>
              </div>
              <CardDescription className="text-sidebar-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={`px-2 py-1 text-xs bg-sidebar rounded hover:bg-accent/20 transition-colors flex items-center gap-1 ${getTechColor(tech)}`}
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex space-x-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-accent hover:underline hover:text-accent/80 transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>GitHub</span>
              </a>
              {project.liveDemo !== "#" && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-accent hover:underline hover:text-accent/80 transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  <span>Live Demo</span>
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-6">
        <span className="code-keyword">]</span>;
      </div>
      
      <div className="code-block mt-8 relative rounded-md overflow-hidden border border-border">
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
