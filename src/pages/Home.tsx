
import React from 'react';

const Home = () => {
  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-4xl font-bold code-variable">Paritosh Sawai</h1>
        <p className="text-xl text-accent mt-2">Software Engineer | Back-End Developer | Node.js & API Specialist</p>
        <div className="h-6 w-2 bg-accent ml-2 animate-cursor-blink"></div>
      </div>
      
      <div className="code-block">
        <pre>
          <span className="code-comment">// Profile Snapshot</span>
          <br />
          <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
          <br />
          {'  '}<span className="code-constant">name</span>: <span className="code-string">"Paritosh Sawai"</span>,
          <br />
          {'  '}<span className="code-constant">role</span>: <span className="code-string">"Software Engineer"</span>,
          <br />
          {'  '}<span className="code-constant">location</span>: <span className="code-string">"London, UK"</span>,
          <br />
          {'  '}<span className="code-constant">expertise</span>: [
          <br />
          {'    '}<span className="code-string">"Back-End Development"</span>,
          <br />
          {'    '}<span className="code-string">"RESTful API Design"</span>,
          <br />
          {'    '}<span className="code-string">"Node.js & Express.js"</span>,
          <br />
          {'    '}<span className="code-string">"Cloud Solutions"</span>
          <br />
          {'  '}],
          <br />
          {'  '}<span className="code-function">summary</span>() {'{'}
          <br />
          {'    '}<span className="code-keyword">return</span> <span className="code-string">"Versatile Software Engineer with ~3 years of experience in back-end development, data analysis, and cloud-native applications."</span>;
          <br />
          {'  '}{'}'} 
          <br />
          {'}'};
        </pre>
      </div>
      
      <p className="text-xl leading-relaxed">
        Proven expertise in building robust RESTful APIs and microservices using Node.js, Express.js, and MongoDB.
        Skilled in Agile environments and passionate about delivering high-quality solutions aligned with business objectives.
      </p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-sidebar/30 p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-3 text-accent">Core Competencies</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Back-End Development
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              RESTful API Design
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Microservices Architecture
            </li>
          </ul>
        </div>
        
        <div className="bg-sidebar/30 p-6 rounded-lg border border-border">
          <h3 className="text-lg font-medium mb-3 text-accent">Latest Technologies</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Node.js & Express.js
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              MongoDB & SQL
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Docker & Cloud Services
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-4">
        <p className="active-line pl-2 code-comment">// Use the sidebar navigation to explore my portfolio</p>
      </div>
    </div>
  );
};

export default Home;
