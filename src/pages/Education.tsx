
import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Engineering University",
      period: "2016 - 2020",
      details: [
        "Graduated with First Class Honors",
        "Specialized in Web Development and Database Systems",
        "Capstone Project: Developed a full-stack e-learning platform using MERN stack",
        "Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development"
      ]
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "Tech Academy Online",
      period: "2020",
      details: [
        "Completed 800+ hours of hands-on coding challenges and projects",
        "Developed multiple full-stack applications using modern JavaScript frameworks",
        "Received commendation for best final project"
      ]
    },
    {
      degree: "React & Node.js Masterclass",
      institution: "Web Development Institute",
      period: "2021",
      details: [
        "Advanced course covering React hooks, Context API, and Redux",
        "Built scalable backend services with Node.js, Express, and MongoDB",
        "Implemented authentication, file uploads, and real-time features"
      ]
    }
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">const</span> <span className="code-variable">education</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="space-y-10">
        {educationHistory.map((edu, index) => (
          <div key={index} className="bg-sidebar/30 border border-border rounded-md p-6">
            <h2 className={`text-xl font-semibold ${index === 0 ? 'text-accent' : 'text-primary'}`}>
              {index === 0 ? (
                <div className="active-line pl-2">{edu.degree}</div>
              ) : (
                edu.degree
              )}
            </h2>
            
            <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
              <p className="font-medium">{edu.institution}</p>
              <p className="text-sidebar-foreground">{edu.period}</p>
            </div>
            
            <ul className="mt-4 space-y-2">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <span className="code-keyword">]</span>;
      </div>
      
      <div className="mt-8 flex items-center">
        <div className="h-px bg-border flex-1"></div>
        <p className="px-4 text-sidebar-foreground">Continuous Learning</p>
        <div className="h-px bg-border flex-1"></div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-sidebar/20 border border-border p-4 rounded">
          <h3 className="font-medium text-accent">Additional Certifications</h3>
          <ul className="mt-2 space-y-1">
            <li>AWS Cloud Practitioner</li>
            <li>TypeScript Advanced Concepts</li>
            <li>UI/UX Design Fundamentals</li>
          </ul>
        </div>
        
        <div className="bg-sidebar/20 border border-border p-4 rounded">
          <h3 className="font-medium text-accent">Online Learning Platforms</h3>
          <ul className="mt-2 space-y-1">
            <li>Udemy</li>
            <li>Pluralsight</li>
            <li>freeCodeCamp</li>
            <li>Coursera</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
