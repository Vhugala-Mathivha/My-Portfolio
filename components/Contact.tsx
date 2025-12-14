import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';

interface ContactProps {
  onShowModal: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowModal }) => {
  const [formData, setFormData] = useState({
    names: '',
    surname: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request/email sending delay
    // In a real application, you would use fetch() here to send to Formspree, EmailJS, or your backend.
    await new Promise(resolve => setTimeout(resolve, 1500));

    const message = `Thank you, ${formData.names}! \n\nI have received your message and will get back to you at ${formData.email} as soon as possible.`;
    
    onShowModal(message);
    setFormData({ names: '', surname: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="contact-container bg-prussian border-t border-borderBlue text-center py-10 px-8 md:px-16 scroll-mt-24" id="contact">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl font-bold text-lightBlue mb-2">GET IN TOUCH</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Have a project in mind or want to discuss a job opportunity? I'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto p-6 md:p-8 border border-borderBlue rounded-xl bg-contentBox text-left shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label htmlFor="names" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
              <input 
                type="text" 
                id="names" 
                name="names" 
                placeholder="John"
                required 
                disabled={isSubmitting}
                value={formData.names}
                onChange={handleChange}
                className="w-full p-3 border border-borderBlue rounded bg-prussian/50 text-white placeholder-gray-600 focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue transition-all disabled:opacity-50"
              />
            </div>

            <div className="form-group">
              <label htmlFor="surname" className="block text-gray-300 text-sm font-bold mb-2">Surname</label>
              <input 
                type="text" 
                id="surname" 
                name="surname" 
                placeholder="Doe"
                required 
                disabled={isSubmitting}
                value={formData.surname}
                onChange={handleChange}
                className="w-full p-3 border border-borderBlue rounded bg-prussian/50 text-white placeholder-gray-600 focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="john.doe@example.com"
              required 
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-borderBlue rounded bg-prussian/50 text-white placeholder-gray-600 focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue transition-all disabled:opacity-50"
            />
          </div>

          <div className="form-group mb-8">
            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              placeholder="How can I help you?"
              required 
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-borderBlue rounded bg-prussian/50 text-white placeholder-gray-600 focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue resize-y transition-all disabled:opacity-50"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-lightBlue text-white font-bold py-3 px-6 rounded-lg hover:bg-darkerBlue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:bg-lightBlue disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        <div className="contact-details mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2 p-4 rounded hover:bg-white/5 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-lightBlue/20 flex items-center justify-center text-lightBlue mb-1">
                    <Mail size={20} />
                 </div>
                 <span className="text-gray-400 text-sm">Email</span>
                 <a href="mailto:vhugalamathivha@gmail.com" className="text-white font-medium hover:text-lightBlue transition-colors">vhugalamathivha@gmail.com</a>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded hover:bg-white/5 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-lightBlue/20 flex items-center justify-center text-lightBlue mb-1">
                    <Linkedin size={20} />
                 </div>
                 <span className="text-gray-400 text-sm">LinkedIn</span>
                 <a href="https://www.linkedin.com/in/vhugala-mathivha-5b705b22b/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-lightBlue transition-colors">Connect on LinkedIn</a>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded hover:bg-white/5 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-lightBlue/20 flex items-center justify-center text-lightBlue mb-1">
                    <Github size={20} />
                 </div>
                 <span className="text-gray-400 text-sm">GitHub</span>
                 <a href="https://github.com/Vhugala-Mathivha" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-lightBlue transition-colors">View Projects</a>
            </div>
        </div>
      </div>
    </section>
  );
};