
import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Education = () => {
  const educationHistory = [
    {
      degree: "Master of Science (MSc) – International Business Management",
      institution: "University of Salford",
      period: "2023 - 2024",
      details: [
        "Advanced business strategy and international management principles",
        "Cross-cultural business practices and global market analysis",
        "Business analytics and data-driven decision making"
      ]
    },
    {
      degree: "Bachelor of Engineering (BEng) – Computer Science & Programming",
      institution: "Sinhgad Institutes",
      period: "2016 - 2021",
      details: [
        "Core computer science fundamentals and programming paradigms",
        "Software engineering and application development",
        "Database systems and data structures"
      ]
    }
  ];

  const certifications = [
    "Developing Back-End Apps with Node.js and Express – IBM (Nov 2024)",
    "Python Bootcamp – Udemy (Dec 2024)",
    "Google Data Analytics Specialization – Google (May 2024)",
    "Business Analysis and Process Management – Coursera (Sep 2023)",
    "Microsoft Azure Fundamentals (AZ-900) – Microsoft (May 2023)",
    "Excel Essential Training (Microsoft 365) – LinkedIn (May 2023)",
    "Data Visualization: Empowering Business with Effective Insights – Tata Group (Sep 2023)",
    "Data Analytics Virtual Experience Program – Quantium (Aug 2023)",
    "Agile Methodology Virtual Experience – Cognizant (Apr 2024)",
    "Certified Business Management Program – Indian Council for Technical Research and Development (Jul 2023)",
    "Data Science Virtual Experience Programme – British Airways (Aug 2023)",
    "Digital Skills: Social Media – Accenture (Sep 2022)"
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <GraduationCap className="mr-2 text-accent" size={28} />
        <span className="code-keyword">const</span> <span className="code-variable">education</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="space-y-8">
        {educationHistory.map((edu, index) => (
          <div key={index} className="bg-sidebar/30 border border-border rounded-md p-6 transition-all duration-300 hover:shadow-md">
            <div className="flex items-start">
              <div className="mr-4 bg-sidebar-active p-2 rounded-full">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <div className="w-full">
                <h2 className={`text-xl font-semibold ${index === 0 ? 'text-accent' : 'text-primary'}`}>
                  {index === 0 ? (
                    <div className="active-line pl-2">{edu.degree}</div>
                  ) : (
                    edu.degree
                  )}
                </h2>
                
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                  <p className="font-medium">{edu.institution}</p>
                  <div className="flex items-center text-sidebar-foreground mt-1 sm:mt-0">
                    <Calendar className="mr-1" size={16} />
                    <p>{edu.period}</p>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start hover:bg-sidebar/40 p-2 rounded-md transition-colors">
                      <span className="text-accent mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <span className="code-keyword">]</span>;
      </div>
      
      <div className="mt-8 flex items-center">
        <div className="h-px bg-border flex-1"></div>
        <div className="px-4 py-2 bg-sidebar-active rounded-md flex items-center">
          <Award className="mr-2 text-accent" size={18} />
          <p className="text-sidebar-foreground font-medium">Professional Certifications</p>
        </div>
        <div className="h-px bg-border flex-1"></div>
      </div>
      
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="certifications" className="border-border bg-sidebar/20 rounded-md">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <div className="flex items-center">
                <Award className="mr-2 text-accent" size={18} />
                <h3 className="font-medium">Certifications & Professional Development</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-3 bg-sidebar/30 border border-border rounded-md hover:bg-sidebar/40 transition-colors"
                  >
                    <Award className="mr-2 text-accent flex-shrink-0 mt-0.5" size={16} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="code-block mt-8 bg-sidebar/30 border border-border rounded-md p-4">
        <pre>
          <span className="code-comment">/**
 * Continuous learning and professional development
 * Focused on expanding technical and business skills
 * Combined engineering background with business acumen
 */</span>
        </pre>
      </div>
    </div>
  );
};

export default Education;
