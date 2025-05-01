
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" })
});

const ContactForm = () => {
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
    
    // EmailJS integration - fixed to ensure recipient is set correctly
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    emailjs.send(
      'service_f9xx5by', // Your EmailJS service ID
      'template_zk8c7xr', // Your EmailJS template ID
      templateParams,
      'NLel7a6EoMEzUxFzE' // Your EmailJS public key
    )
    .then((response) => {
      if (response.status === 200) {
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
      }
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('Email error:', error);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  const getFieldError = (fieldName: string) => {
    return formErrors[fieldName] ? (
      <p className="text-red-500 text-xs mt-1">{formErrors[fieldName]}</p>
    ) : null;
  };

  return (
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
  );
};

export default ContactForm;
