
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setFormErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setFormErrors(errors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I will get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const getFieldError = (fieldName: string) => {
    return formErrors[fieldName] ? (
      <p className="text-red-500 text-xs mt-1">{formErrors[fieldName]}</p>
    ) : null;
  };

  return (
    <div className="py-8">
      {/* VS Code-like file header */}
      <div className="flex items-center bg-sidebar/70 text-sidebar-foreground text-xs px-3 py-1 border-b border-border mb-4 rounded-t-md">
        <span className="mr-2">Contact.tsx</span>
        <span className="ml-auto">TypeScript</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">async function</span> <span className="code-function">contactMe</span>() {'{'}
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column with contact info */}
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
        
        {/* Right column with form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-5 bg-sidebar/20 p-6 rounded-md border border-border">
            <h2 className="text-xl font-medium mb-4">Send me a message</h2>
            
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-sidebar border ${formErrors.name ? 'border-red-500' : 'border-border'} rounded focus:outline-none focus:border-accent text-foreground`}
              />
              {getFieldError('name')}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-sidebar border ${formErrors.email ? 'border-red-500' : 'border-border'} rounded focus:outline-none focus:border-accent text-foreground`}
              />
              {getFieldError('email')}
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-sidebar border ${formErrors.subject ? 'border-red-500' : 'border-border'} rounded focus:outline-none focus:border-accent text-foreground`}
              />
              {getFieldError('subject')}
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-3 py-2 bg-sidebar border ${formErrors.message ? 'border-red-500' : 'border-border'} rounded focus:outline-none focus:border-accent text-foreground resize-none`}
              />
              {getFieldError('message')}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-5 py-3 bg-accent hover:bg-accent/80 text-white rounded transition-colors disabled:opacity-70 w-full"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8">
        <span className="code-keyword">{'}'}</span>;
      </div>
      
      <div className="active-line pl-2 mt-6">
        <span className="code-comment">// I look forward to connecting with you!</span>
      </div>
    </div>
  );
};

export default Contact;
