
import React from 'react';

const About = () => {
  return (
    <div className="py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6">
        <span className="code-keyword">class</span> <span className="code-function">About</span> {'{}'}
      </h1>
      
      <div className="code-block">
        <pre>
          <span className="code-comment">/**
 * PROFILE SNAPSHOT
 * A detail-oriented and analytical Software Developer with 3 years 
 * of expertise in Python, JavaScript, React.js, and TypeScript.
 */</span>
        </pre>
      </div>
      
      <div className="space-y-6">
        <p>
          I am a detail-oriented and analytical Software Developer with 3 years of expertise in Python, JavaScript, React.js, and TypeScript. 
          I excel in developing scalable web applications, optimizing code performance, and implementing robust testing strategies.
        </p>
        
        <p>
          My approach combines technical excellence with strong problem-solving abilities. I thrive in collaborative environments 
          and am passionate about creating innovative solutions that enhance user experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-xl font-medium mb-2 text-accent">Core Strengths</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Stack Web Development</li>
              <li>Responsive UI Design</li>
              <li>API Integration & Development</li>
              <li>Testing & Quality Assurance</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2 text-accent">Personal Attributes</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analytical Problem Solver</li>
              <li>Team Collaborator</li>
              <li>Continuous Learner</li>
              <li>Detail-Oriented</li>
              <li>Adaptable to New Technologies</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-l-2 border-accent pl-4 italic mt-8">
        "Committed to crafting clean, efficient code that drives exceptional digital experiences."
      </div>
      
      <div className="pt-4">
        <p className="active-line pl-2 code-comment">// My focus is on creating maintainable, scalable, and user-friendly applications</p>
      </div>
    </div>
  );
};

export default About;
