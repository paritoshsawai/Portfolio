
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <div className="code-block mb-6 relative rounded-md overflow-hidden border border-border">
        {/* VS Code-like line numbers */}
        <div className="flex">
          <div className="py-3 px-2 text-sidebar-foreground/60 bg-sidebar/40 text-xs font-mono text-right select-none">
            <div className="pr-2">01</div>
            <div className="pr-2">02</div>
            <div className="pr-2">03</div>
            <div className="pr-2">04</div>
            <div className="pr-2">05</div>
          </div>
          
          <pre className="py-3 px-4 overflow-x-auto flex-1 text-sm">
            <span className="code-comment">/**
 * Get in touch with me through
 * this contact form or using the
 * contact information provided
 */</span>
          </pre>
        </div>
      </div>
      
      {/* Contact information boxes */}
      <div className="space-y-6">
        <div className="bg-sidebar/30 p-4 border border-border rounded-md hover:bg-sidebar/40 transition-all duration-300">
          <div className="flex items-center">
            <Mail size={20} className="text-accent mr-3" />
            <a href="mailto:paritoshsawai@gmail.com" className="hover:text-accent transition-colors">paritoshsawai@gmail.com</a>
          </div>
        </div>
        
        <div className="bg-sidebar/30 p-4 border border-border rounded-md hover:bg-sidebar/40 transition-all duration-300">
          <div className="flex items-center">
            <Phone size={20} className="text-accent mr-3" />
            <a href="tel:07901372167" className="hover:text-accent transition-colors">07901372167</a>
          </div>
        </div>
        
        <div className="bg-sidebar/30 p-4 border border-border rounded-md hover:bg-sidebar/40 transition-all duration-300">
          <div className="flex items-center">
            <MapPin size={20} className="text-accent mr-3" />
            <span>London, UK</span>
          </div>
        </div>
        
        <div className="bg-sidebar/30 p-4 border border-border rounded-md hover:bg-sidebar/40 transition-all duration-300">
          <div className="flex items-center">
            <Github size={20} className="text-accent mr-3" />
            <a href="https://github.com/paritoshsawai" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-accent transition-colors">
              github.com/paritoshsawai
              <ExternalLink size={14} className="ml-1 opacity-70" />
            </a>
          </div>
        </div>
        
        <div className="bg-sidebar/30 p-4 border border-border rounded-md hover:bg-sidebar/40 transition-all duration-300">
          <div className="flex items-center">
            <Linkedin size={20} className="text-accent mr-3" />
            <a href="https://linkedin.com/in/paritoshsawai" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-accent transition-colors">
              linkedin.com/in/paritoshsawai
              <ExternalLink size={14} className="ml-1 opacity-70" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Availability section */}
      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4 flex items-center">
          <Calendar className="mr-2 text-accent" size={20} />
          Availability
        </h2>
        <div className="bg-sidebar/30 border border-border rounded-md p-4">
          <div className="flex justify-between mb-2">
            <span>Monday - Friday</span>
            <span className="text-accent">9:00 AM - 6:00 PM GMT</span>
          </div>
          <p className="text-sm text-sidebar-foreground">
            Currently available for full-time opportunities in the UK.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
