
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    visible: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        visible: true,
        isError: false,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({
          ...submitMessage,
          visible: false
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">async function</span> <span className="code-function">contactMe</span>() {'{'}
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="code-block mb-6">
            <pre>
              <span className="code-comment">/**
 * Get in touch with me through
 * this contact form or using the
 * contact information provided
 */</span>
            </pre>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail size={20} className="text-accent mr-3" />
              <span>paritosh.sawai@example.com</span>
            </div>
            
            <div className="flex items-center">
              <Phone size={20} className="text-accent mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center">
              <MapPin size={20} className="text-accent mr-3" />
              <span>San Francisco, CA, USA</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-medium mb-4">Availability</h2>
            <div className="bg-sidebar/30 border border-border rounded-md p-4">
              <div className="flex justify-between mb-2">
                <span>Monday - Friday</span>
                <span className="text-accent">9:00 AM - 6:00 PM PST</span>
              </div>
              <p className="text-sm text-sidebar-foreground">
                Currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-sidebar border border-border rounded focus:outline-none focus:border-accent text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-sidebar border border-border rounded focus:outline-none focus:border-accent text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-sidebar border border-border rounded focus:outline-none focus:border-accent text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-sidebar border border-border rounded focus:outline-none focus:border-accent text-foreground resize-none"
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-5 py-2 bg-accent hover:bg-accent-highlight text-white rounded transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
            
            {submitMessage.visible && (
              <div className={`p-3 rounded ${submitMessage.isError ? 'bg-red-900/50 border border-red-700' : 'bg-green-900/50 border border-green-700'}`}>
                {submitMessage.message}
              </div>
            )}
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
