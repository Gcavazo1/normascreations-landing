import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-gradient-to-r from-accent-400/90 to-accent-300/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className={`text-3xl font-rockbilly font-medium transition-colors ${
              scrolled ? 'text-accent-500' : 'text-white'
            }`} style={!scrolled ? {textShadow: '0 0 4px #ff87b7, 0 0 8px #ff87b7'} : {}}>
              {language === 'en' ? "Norma's Creations" : "Creaciones de Norma"}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className={`font-medium transition-colors text-lg ${
                scrolled 
                  ? 'text-neutral-500 hover:text-accent-500' 
                  : 'text-white hover:text-primary-100 text-shadow-sm'
              }`}
              style={!scrolled ? {textShadow: '0 0 2px #ff87b7, 0 0 4px #ff87b7'} : {}}
            >
              {t.nav.home}
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-colors text-lg ${
                scrolled 
                  ? 'text-neutral-500 hover:text-accent-500' 
                  : 'text-white hover:text-primary-100 text-shadow-sm'
              }`}
              style={!scrolled ? {textShadow: '0 0 2px #ff87b7, 0 0 4px #ff87b7'} : {}}
            >
              {t.nav.about}
            </a>
            <a 
              href="#creations" 
              className={`font-medium transition-colors text-lg ${
                scrolled 
                  ? 'text-neutral-500 hover:text-accent-500' 
                  : 'text-white hover:text-primary-100 text-shadow-sm'
              }`}
              style={!scrolled ? {textShadow: '0 0 2px #ff87b7, 0 0 4px #ff87b7'} : {}}
            >
              {t.nav.creations}
            </a>
            <a 
              href="#contact" 
              className={`font-medium transition-colors text-lg ${
                scrolled 
                  ? 'text-neutral-500 hover:text-accent-500' 
                  : 'text-white hover:text-primary-100 text-shadow-sm'
              }`}
              style={!scrolled ? {textShadow: '0 0 2px #ff87b7, 0 0 4px #ff87b7'} : {}}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Desktop Right Section: Language Switch and Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              aria-label={t.language.toggle}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                scrolled 
                  ? 'text-accent-400 border-accent-300 hover:bg-accent-100' 
                  : 'text-white border-white hover:bg-white/20'
              }`}
            >
              <span className="font-medium">{language === 'en' ? t.language.es : t.language.en}</span>
            </button>
            
            {/* Social Links */}
            <a 
              href="https://www.facebook.com/normascreat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 transform hover:scale-110 ${
                scrolled 
                  ? 'text-accent-400 hover:text-accent-500' 
                  : 'text-white hover:text-primary-100'
              }`}
              aria-label="Facebook"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/normiscavazos" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors duration-300 transform hover:scale-110 ${
                scrolled 
                  ? 'text-accent-400 hover:text-accent-500' 
                  : 'text-white hover:text-primary-100'
              }`}
              aria-label="Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            
            {/* Contact button */}
            <a 
              href="#contact" 
              className={`group px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 shadow-md relative overflow-hidden ${
                scrolled 
                  ? 'bg-accent-400 text-white hover:bg-accent-500' 
                  : 'bg-white text-accent-500 hover:text-accent-400 hover:bg-primary-100 border-2 border-accent-300'
              }`}
            >
              <span className="relative z-10">{t.nav.getInTouch}</span>
              {!scrolled && (
                <div className="absolute inset-0 bg-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
            </a>
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <button 
              onClick={toggleLanguage}
              aria-label={t.language.toggle}
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
                scrolled 
                  ? 'text-accent-400 border-accent-300 hover:bg-accent-100' 
                  : 'text-white border-white hover:bg-white/20'
              }`}
            >
              <span className="font-medium text-sm">{language === 'en' ? t.language.es : t.language.en}</span>
            </button>
            
            {/* Menu button */}
            <button 
              className={`transition-colors ${
                scrolled ? 'text-accent-500' : 'text-white'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4 bg-white mt-2 rounded-lg shadow-lg px-4 space-y-3">
              <a 
                href="#home" 
                className="block text-neutral-500 hover:text-accent-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </a>
              <a 
                href="#about" 
                className="block text-neutral-500 hover:text-accent-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="#creations" 
                className="block text-neutral-500 hover:text-accent-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.creations}
              </a>
              <a 
                href="#contact" 
                className="block text-neutral-500 hover:text-accent-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
              
              {/* Social Media in Mobile Menu */}
              <div className="flex space-x-4 pt-2 border-t border-primary-100">
                <a 
                  href="https://www.facebook.com/normascreat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/normiscavazos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                
                {/* Mobile contact button */}
                <a 
                  href="#contact"
                  className="ml-auto text-accent-400 bg-accent-100 hover:bg-accent-200 px-4 py-1 rounded-full text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.getInTouch}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 