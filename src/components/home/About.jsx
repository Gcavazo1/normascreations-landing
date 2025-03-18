import profilePicAbout from '../../assets/profilePic_aboutMe.jpg';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const About = () => {
  const ribbonRef = useRef(null);
  const imageFrameRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Subtle animation for decorative elements
    const animateElements = () => {
      if (ribbonRef.current) {
        ribbonRef.current.animate(
          [
            { transform: 'rotate(45deg) translateX(6px) translateY(-1px)' },
            { transform: 'rotate(45deg) translateX(8px) translateY(-3px)' },
            { transform: 'rotate(45deg) translateX(6px) translateY(-1px)' },
          ],
          {
            duration: 7000,
            iterations: Infinity,
            easing: 'ease-in-out'
          }
        );
      }

      if (imageFrameRef.current) {
        imageFrameRef.current.animate(
          [
            { transform: 'translate(-6px, -6px)' },
            { transform: 'translate(-4px, -8px)' },
            { transform: 'translate(-6px, -6px)' },
          ],
          {
            duration: 9000,
            iterations: Infinity,
            easing: 'ease-in-out'
          }
        );
      }
    };

    animateElements();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-primary-300 to-primary-200 relative">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-rockbilly text-2xl text-accent-300 block mb-2 text-shadow-sm">{t.about.aboutMe}</span>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-500 mb-6 text-shadow-sm">{t.about.meetNorma}</h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-400 leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden bg-white p-3 shadow-xl transform hover:rotate-2 hover:scale-105 transition-all duration-700 group">
              <img 
                src={profilePicAbout} 
                alt="Norma Linda Cavazos" 
                className="w-full h-full object-cover rounded-lg transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Decorative diagonal ribbon */}
              <div ref={ribbonRef} className="absolute top-0 right-0 bg-accent-300 text-white py-1 px-6 transform rotate-45 translate-x-6 -translate-y-1 shadow-md hover:bg-accent-400 transition-colors duration-300">
                <span className="font-rockbilly text-sm">Artisan</span>
              </div>
            </div>
            {/* Decorative element */}
            <div ref={imageFrameRef} className="absolute -bottom-6 -right-6 w-full h-full border-4 border-accent-400 rounded-lg -z-10"></div>
          </div>

          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-8 shadow-lg border-t-4 border-accent-300 relative transform hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-2xl font-rockbilly text-accent-400 mb-4">Norma Linda Cavazos</h3>
            <p className="text-neutral-500 mb-6 leading-relaxed">
              {t.about.bio1}
            </p>
            <p className="text-neutral-500 mb-6 leading-relaxed">
              {t.about.bio2}
            </p>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              {t.about.bio3}
            </p>
            
            {/* Feature list */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-accent-300 mr-2 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-neutral-500 group-hover:text-accent-500 transition-colors duration-300">{t.about.features.customDesigns}</span>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-accent-300 mr-2 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-neutral-500 group-hover:text-accent-500 transition-colors duration-300">{t.about.features.qualityMaterials}</span>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-accent-300 mr-2 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-neutral-500 group-hover:text-accent-500 transition-colors duration-300">{t.about.features.seasonalSpecialties}</span>
              </div>
              <div className="flex items-center group">
                <svg className="w-5 h-5 text-accent-300 mr-2 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-neutral-500 group-hover:text-accent-500 transition-colors duration-300">{t.about.features.personalTouch}</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a href="#contact" className="group btn bg-accent-300 text-white hover:bg-accent-400 transform hover:scale-105 transition-all shadow-lg px-8 py-3 rounded-full relative overflow-hidden">
                <span className="relative z-10">{t.hero.getInTouch}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-primary-100">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,130.19A450.49,450.49,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
};

export default About; 