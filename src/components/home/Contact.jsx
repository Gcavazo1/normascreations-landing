import { useState } from 'react';
import image17 from '../../assets/17.jpg';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'general',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle');
  const { language } = useLanguage();
  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, we would send the form data to a server here
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      // Reset form data
      setFormData({
        name: '',
        email: '',
        interest: 'general',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-accent-400 to-accent-300 relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-10"
        style={{ backgroundImage: `url(${image17})` }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-rockbilly text-2xl text-primary-100 block mb-2 text-shadow-sm">{t.contact.connect}</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 text-shadow-sm">{t.contact.getInTouch}</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white leading-relaxed">
            {t.contact.question}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 border border-primary-300 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-lg">
              <h3 className="text-2xl font-serif text-neutral-500 mb-6">{t.contact.connectWithMe}</h3>
              
              {/* Social media */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-neutral-400 mb-4">{t.contact.socialMedia}</h4>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/normascreat/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent-400 hover:text-accent-500 transition-colors duration-300 transform hover:translate-x-1"
                    aria-label="Facebook"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    <span>Norma's Creations</span>
                  </a>
                </div>
                <div className="mt-4">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/normiscavazos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-accent-400 hover:text-accent-500 transition-colors duration-300 transform hover:translate-x-1"
                    aria-label="Instagram"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@normiscavazos</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h4 className="text-lg font-medium text-neutral-400 mb-4">{t.contact.email}</h4>
                <a 
                  href="mailto:norma_cavazos52@hotmail.com" 
                  className="flex items-center text-accent-400 hover:text-accent-500 transition-colors duration-300 transform hover:translate-x-1"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>norma_cavazos52@hotmail.com</span>
                </a>
              </div>

              {/* Location */}
              <div>
                <h4 className="text-lg font-medium text-neutral-400 mb-4">{t.contact.location}</h4>
                <p className="flex items-center text-neutral-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-2 text-accent-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Laredo, Texas</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-primary-300 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-lg">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 text-accent-300 mx-auto mb-4 animate-pulse" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-serif text-neutral-500 mb-4">{t.contact.form.thanks}</h3>
                <p className="text-neutral-400">
                  {t.contact.form.confirmation}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-neutral-500 mb-6">{t.contact.sendMessage}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 group">
                    <label htmlFor="name" className="block text-neutral-400 mb-2 group-focus-within:text-accent-400 transition-colors duration-300">{t.contact.form.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="mb-4 group">
                    <label htmlFor="email" className="block text-neutral-400 mb-2 group-focus-within:text-accent-400 transition-colors duration-300">{t.contact.form.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="mb-4 group">
                    <label htmlFor="interest" className="block text-neutral-400 mb-2 group-focus-within:text-accent-400 transition-colors duration-300">{t.contact.form.interest}</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all duration-300"
                    >
                      <option value="general">{t.contact.interests.general}</option>
                      <option value="custom">{t.contact.interests.custom}</option>
                      <option value="wreaths">{t.contact.interests.wreaths}</option>
                      <option value="garlands">{t.contact.interests.garlands}</option>
                      <option value="decor">{t.contact.interests.decor}</option>
                    </select>
                  </div>
                  
                  <div className="mb-6 group">
                    <label htmlFor="message" className="block text-neutral-400 mb-2 group-focus-within:text-accent-400 transition-colors duration-300">{t.contact.form.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="group w-full btn btn-glow bg-accent-300 text-white hover:bg-accent-400 transform hover:scale-[1.02] transition-all duration-500 shadow-lg relative overflow-hidden py-3 rounded-md">
                    <span className="relative z-10">{t.contact.form.submit}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 