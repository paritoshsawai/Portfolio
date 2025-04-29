
import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Building 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const [expandedJobIndex, setExpandedJobIndex] = useState(0);

  const experiences = [
    {
      title: "Software Developer",
      company: "Birlasoft",
      location: "Pune, Maharashtra, India",
      period: "October 2021 - June 2022",
      responsibilities: [
        "Developed scalable RESTful APIs and microservices using Node.js and Express.js, improving maintainability and deployment efficiency",
        "Integrated MongoDB for optimized data handling, enhancing read/write performance",
        "Secured endpoints with JWT-based authentication and robust session management",
        "Performed code reviews and enforced Git best practices to ensure clean, version-controlled code",
        "Collaborated cross-functionally in an Agile setup to align development with business goals",
        "Applied SOLID and DRY principles to write structured, testable, and maintainable code"
      ]
    },
    {
      title: "Business Analyst Intern",
      company: "Central Growth",
      location: "Bengaluru, Karnataka, India",
      period: "July 2022 - November 2022",
      responsibilities: [
        "Cleaned and structured large datasets using Python and SQL for analytical use",
        "Built predictive models and conducted statistical analyses to support data-driven decisions",
        "Translated business goals into data requirements in coordination with strategy and product teams",
        "Created interactive Tableau dashboards to visualize KPIs for stakeholders",
        "Identified process inefficiencies and recommended data-driven improvements"
      ]
    },
    {
      title: "Crew Associate (Part-time)",
      company: "Roosters Piri Piri",
      location: "London, UK",
      period: "March 2024 - Present",
      responsibilities: [
        "Delivered excellent customer service while managing orders and team coordination",
        "Assisted with the maintenance and troubleshooting of till software, swiftly identifying and resolving technical glitches to minimize downtime",
        "Supported basic hardware fixes for store systems and devices, enhancing efficiency in day-to-day operations",
        "Enhanced multitasking skills and gained insight into cross-functional roles, demonstrating resilience in adapting to diverse work settings"
      ]
    },
    {
      title: "Crew Associate (Part-time)",
      company: "Domino's Pizza",
      location: "London, UK",
      period: "April 2023 - January 2024",
      responsibilities: [
        "Managed daily operations and collaborated effectively within a team in a fast-paced environment to ensure seamless customer service",
        "Handled technical troubleshooting of till software, ensuring transactions were processed without delays",
        "Resolved minor hardware issues with POS (point-of-sale) systems, maintaining operational continuity during peak hours",
        "Developed adaptability and time-management skills by balancing part-time work alongside a rigorous Master's program"
      ]
    }
  ];

  const toggleJob = (index: number) => {
    setExpandedJobIndex(index === expandedJobIndex ? -1 : index);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <Briefcase className="mr-2 text-accent" size={28} />
        <span className="code-keyword">const</span> <span className="code-variable">workExperience</span> <span className="code-keyword">=</span> [
      </h1>
      
      <div className="space-y-6">
        <Accordion type="single" defaultValue="item-0" collapsible className="w-full">
          {experiences.map((exp, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className={`border border-border rounded-md mb-4 ${index === 0 ? 'bg-sidebar/40' : 'bg-sidebar/20'} overflow-hidden transition-all duration-300 hover:shadow-md`}
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex-1">
                  <div className="flex items-center">
                    <Building className="mr-2 text-accent" size={18} />
                    <h2 className={`text-xl font-semibold ${index === 0 ? 'text-accent' : 'text-primary'}`}>
                      {exp.title}
                    </h2>
                  </div>
                  
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center text-sidebar-foreground">
                      <Building className="mr-2 opacity-70" size={14} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-sidebar-foreground">
                      <Calendar className="mr-2 opacity-70" size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-sidebar-foreground">
                      <MapPin className="mr-2 opacity-70" size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <ul className="mt-2 space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start hover:bg-sidebar/30 p-2 rounded-md transition-colors">
                      <span className="text-accent mr-2 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-6">
        <span className="code-keyword">]</span>;
      </div>
      
      <div className="code-block mt-8 bg-sidebar/30 border border-border rounded-md p-4">
        <pre>
          <span className="code-comment">/**
 * 3+ years of professional experience in software development
 * Expertise in back-end development, data analysis, and cloud solutions
 * Skilled in Node.js, Express.js, MongoDB, and RESTful API design
 */</span>
        </pre>
      </div>
    </div>
  );
};

export default Experience;
