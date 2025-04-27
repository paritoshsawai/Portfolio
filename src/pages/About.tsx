
import React from 'react';

const About = () => {
  return (
    <div className="py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">
        <span className="code-keyword">class</span> <span className="code-function">About</span> {'{}'}
      </h1>
      
      <div className="code-block">
        <pre>
          <span className="code-comment">/**
 * PROFILE SNAPSHOT
 * Versatile Software Engineer with ~3 years of experience in
 * back-end development, data analysis, and cloud-native applications.
 */</span>
        </pre>
      </div>
      
      <div className="space-y-6">
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-sidebar/30 p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-3 text-accent">Core Competencies</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Back-End Development & API Design
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Microservices Architecture
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Authentication & Authorization
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Data Analysis & Visualization
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Agile Development & CI/CD
            </li>
          </ul>
        </div>
        
        <div className="bg-sidebar/30 p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-3 text-accent">Technical Stack</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Node.js, Express.js, TypeScript
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              MongoDB, MySQL, PostgreSQL
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Docker, Azure, AWS
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Python, SQL, NumPy
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Git, GitHub, Agile Methods
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-sidebar/30 p-6 rounded-lg border border-border mt-6">
        <h3 className="text-lg font-medium mb-3 text-accent">Latest Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
              <div>
                <p className="font-medium">Node.js and Express Development</p>
                <p className="text-sm text-sidebar-foreground">IBM - Nov 2024</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
              <div>
                <p className="font-medium">Python Bootcamp</p>
                <p className="text-sm text-sidebar-foreground">Udemy - Dec 2024</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
              <div>
                <p className="font-medium">Google Data Analytics</p>
                <p className="text-sm text-sidebar-foreground">Google - May 2024</p>
              </div>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
              <div>
                <p className="font-medium">Azure Fundamentals (AZ-900)</p>
                <p className="text-sm text-sidebar-foreground">Microsoft - May 2023</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
              <div>
                <p className="font-medium">Business Analysis</p>
                <p className="text-sm text-sidebar-foreground">Coursera - Sep 2023</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 mt-2"></span>
              <div>
                <p className="font-medium">Data Visualization</p>
                <p className="text-sm text-sidebar-foreground">Tata Group - Sep 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-l-2 border-accent pl-4 italic mt-8">
        "Committed to delivering scalable solutions with clean, maintainable code while staying current with emerging technologies."
      </div>
      
      <div className="pt-4">
        <p className="active-line pl-2 code-comment">// Passionate about building robust back-end systems and RESTful APIs</p>
      </div>
    </div>
  );
};

export default About;
