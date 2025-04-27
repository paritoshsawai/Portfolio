
import React from 'react';

const Home = () => {
  return (
    <div className="py-8 space-y-8">
      <div className="flex items-center mb-6">
        <h1 className="text-4xl font-bold code-variable">Paritosh Sawai</h1>
        <div className="h-6 w-2 bg-accent ml-2 animate-cursor-blink"></div>
      </div>
      
      <div className="code-block">
        <pre>
          <span className="code-comment">// Welcome to my portfolio</span>
          <br />
          <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
          <br />
          {'  '}<span className="code-constant">name</span>: <span className="code-string">"Paritosh Sawai"</span>,
          <br />
          {'  '}<span className="code-constant">title</span>: <span className="code-string">"Software Developer"</span>,
          <br />
          {'  '}<span className="code-constant">skills</span>: [<span className="code-string">"Full Stack Development"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>, ...],
          <br />
          {'  '}<span className="code-function">greeting</span>() {'{'}
          <br />
          {'    '}<span className="code-keyword">return</span> <span className="code-string">"Welcome to my VS Code-themed portfolio!"</span>;
          <br />
          {'  '}{'}'} 
          <br />
          {'}'};
          <br /><br />
          <span className="code-function">console</span>.<span className="code-function">log</span>(<span className="code-variable">developer</span>.<span className="code-function">greeting</span>());
        </pre>
      </div>
      
      <p className="text-xl">
        I'm a software developer with a passion for building clean, efficient, and user-friendly web applications. 
        Browse through my portfolio to learn more about my skills, projects, and experience.
      </p>
      
      <div className="pt-4">
        <p className="active-line pl-2 code-comment">// Use the sidebar navigation to explore different sections</p>
      </div>
    </div>
  );
};

export default Home;
