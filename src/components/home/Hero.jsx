import profilePicHero from '../../assets/profilePic_hero.png';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const Hero = () => {
  const decorativeCircle1Ref = useRef(null);
  const decorativeCircle2Ref = useRef(null);
  const profileFrameRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Subtle floating animation for decorative elements
    const floatAnimation = () => {
      if (decorativeCircle1Ref.current && decorativeCircle2Ref.current) {
        // Gentle floating effect with different timing for each element
        decorativeCircle1Ref.current.animate(
          [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0)' }
          ],
          {
            duration: 6000,
            iterations: Infinity,
            easing: 'ease-in-out'
          }
        );
        
        decorativeCircle2Ref.current.animate(
          [
            { transform: 'translateY(0)' },
            { transform: 'translateY(10px)' },
            { transform: 'translateY(0)' }
          ],
          {
            duration: 8000,
            iterations: Infinity,
            easing: 'ease-in-out'
          }
        );
        
        profileFrameRef.current.animate(
          [
            { transform: 'rotate(1deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(1deg)' }
          ],
          {
            duration: 10000,
            iterations: Infinity,
            easing: 'ease-in-out'
          }
        );
      }
    };

    floatAnimation();
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-r from-primary-200 to-primary-100 overflow-hidden py-12 md:py-20">
      {/* Layered pattern overlays for artistic effect */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-grid-pattern"></div>
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-dots-pattern"></div>
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-diagonal-pattern"></div>
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-artsy-pattern"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-gradient-to-br from-accent-300/30 via-primary-300/30 to-accent-400/30"></div>
      
      <div className="container-custom min-h-[85vh] flex flex-col md:flex-row items-center justify-between relative z-10 py-10 gap-8">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="font-rockbilly text-3xl text-accent-400 mb-3 block text-shadow-lg">{t.hero.welcome}</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-neutral-500 leading-tight text-shadow-xl">
              {t.hero.title}
            </h1>
          </div>
          
          <div className="w-40 h-1 bg-accent-300 mb-6"></div>
          
          <p className="text-xl md:text-2xl text-neutral-500 mb-8 leading-relaxed text-shadow-md">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#creations" className="group btn btn-glow bg-accent-300 text-white hover:bg-accent-400 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-accent-300/50 px-8 py-4 text-lg rounded-full relative overflow-hidden">
              <span className="relative z-10">{t.hero.viewCreations}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-300 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a href="#contact" className="group btn btn-glow border-2 border-accent-400 text-accent-400 hover:text-white transform hover:scale-105 transition-all duration-500 px-8 py-4 text-lg rounded-full relative overflow-hidden">
              <span className="relative z-10">{t.hero.getInTouch}</span>
              <div className="absolute inset-0 bg-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>

        {/* Profile Image with decorative frame */}
        <div className="relative mt-12 md:mt-0 w-full md:w-auto">
          <div className="relative max-w-sm mx-auto">
            {/* Modern decorative frame */}
            <div className="absolute inset-0 -m-6 bg-gradient-to-br from-accent-300 to-accent-400 rounded-lg transform -rotate-3"></div>
            <div ref={profileFrameRef} className="absolute inset-0 -m-3 bg-white rounded-lg transform rotate-1 transition-transform duration-500"></div>
            
            {/* Profile image with transparent background */}
            <div className="relative rounded-lg overflow-hidden bg-white p-5 z-10 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <img 
                src={profilePicHero} 
                alt="Norma Cavazos" 
                className="w-full h-auto object-contain relative z-10 transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div ref={decorativeCircle1Ref} className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-300 rounded-full opacity-50"></div>
            <div ref={decorativeCircle2Ref} className="absolute -top-4 -left-4 w-12 h-12 bg-accent-300 rounded-full opacity-50"></div>
            
            {/* Caption */}
            <div className="absolute -bottom-12 left-0 right-0 bg-white py-3 px-4 rounded-full shadow-lg text-center transform translate-y-2 hover:shadow-xl transition-shadow duration-300">
              <p className="text-accent-500 font-medium">{t.hero.handcrafted}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-primary-300">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,130.19A450.49,450.49,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 