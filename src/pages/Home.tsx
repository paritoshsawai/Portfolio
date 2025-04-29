
import React, { useState, useEffect } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Software Engineer | Back-End Developer | Node.js & API Specialist";
  const [charIndex, setCharIndex] = useState(0);
  const [lineNumbers, setLineNumbers] = useState<string[]>([]);

  useEffect(() => {
    // Generate line numbers for the code block
    const lines = Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(2, '0'));
    setLineNumbers(lines);
  }, []);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 70); // Speed of typing
      
      return () => clearTimeout(typingTimer);
    }
  }, [charIndex, fullText]);

  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-4xl font-bold code-variable">Paritosh Sawai</h1>
        <div className="h-8 mt-2 flex items-center">
          <p className="text-xl text-accent">{displayText}</p>
          <div className="h-5 w-2 bg-accent ml-1 animate-cursor-blink"></div>
        </div>
      </div>
      
      <div className="code-block relative rounded-md overflow-hidden border border-border">
        {/* VS Code-like file header */}
        <div className="flex items-center bg-sidebar/70 text-sidebar-foreground text-xs px-3 py-1 border-b border-border">
          <span className="mr-2">Home.tsx</span>
          <span className="ml-auto">JavaScript</span>
        </div>
        
        {/* Code content with line numbers */}
        <div className="flex">
          {/* Line numbers */}
          <div className="py-3 px-2 text-sidebar-foreground/60 bg-sidebar/40 text-xs font-mono text-right select-none">
            {lineNumbers.map((num) => (
              <div key={num} className="pr-2">{num}</div>
            ))}
          </div>
          
          {/* Code content */}
          <pre className="py-3 px-4 overflow-x-auto flex-1 text-sm">
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
      </div>
      
      <p className="text-xl leading-relaxed bg-sidebar/20 p-4 border-l-2 border-accent rounded-sm">
        Proven expertise in building robust RESTful APIs and microservices using Node.js, Express.js, and MongoDB.
        Skilled in Agile environments and passionate about delivering high-quality solutions aligned with business objectives.
      </p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="bg-sidebar/30 p-6 rounded-lg border border-border cursor-pointer hover:border-accent/70 transition-colors">
              <h3 className="text-lg font-medium mb-3 text-accent flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4EC9B0] mr-2"></div>
                Core Competencies
              </h3>
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
          </HoverCardTrigger>
          <HoverCardContent className="text-xs bg-sidebar/80 border-border">
            Expert in designing scalable back-end systems and APIs
          </HoverCardContent>
        </HoverCard>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="bg-sidebar/30 p-6 rounded-lg border border-border cursor-pointer hover:border-accent/70 transition-colors">
              <h3 className="text-lg font-medium mb-3 text-accent flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#DCDCAA] mr-2"></div>
                Latest Technologies
              </h3>
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
          </HoverCardTrigger>
          <HoverCardContent className="text-xs bg-sidebar/80 border-border">
            Proficient with modern development tools and technologies
          </HoverCardContent>
        </HoverCard>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border flex flex-col">
        <div className="flex items-center text-xs text-sidebar-foreground/70 mb-2">
          <span className="bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-sm mr-2">200 OK</span>
          <span>GET /portfolio/home</span>
          <span className="ml-auto">200ms</span>
        </div>
        <p className="active-line pl-2 code-comment">// Use the sidebar navigation to explore my portfolio</p>
      </div>
    </div>
  );
};

export default Home;
