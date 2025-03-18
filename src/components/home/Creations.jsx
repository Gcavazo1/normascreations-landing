import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';
import image01 from '../../assets/01.jpg';
import image02 from '../../assets/02.jpg';
import image03 from '../../assets/03.jpg';
import image04 from '../../assets/04.jpg';
import image05 from '../../assets/05.jpg';
import image06 from '../../assets/06.jpg';
import image23 from '../../assets/23.jpg';
import image24 from '../../assets/24.jpg';
import image25 from '../../assets/25.jpg';
import image26 from '../../assets/26.jpg';
import image27 from '../../assets/27.jpg';
import image28 from '../../assets/28.jpg';
import ShaderBackground from '../common/ShaderBackground';

// Sample data - Replace with actual data and images
const creationsData = [
  {
    id: 1,
    title: "Spring Elegance Wreath",
    category: "wreaths",
    description: "A beautiful spring-themed wreath with pastel flowers and greenery.",
    image: image01
  },
  {
    id: 2,
    title: 'Autumn Doorway Delight',
    description: 'A warm and inviting garland with autumn hues and rustic charm, perfect for welcoming guests.',
    image: image02,
    category: 'garlands'
  },
  {
    id: 3,
    title: 'Harvest Scarecrow Wreath',
    description: 'A festive wreath featuring a cheerful scarecrow and vibrant fall foliage, ideal for celebrating the harvest season.',
    image: image03,
    category: 'wreaths'
  },
  {
    id: 4,
    title: 'Springtime Bunny Arrangement',
    description: 'A delightful centerpiece featuring a charming bunny surrounded by vibrant spring flowers and decorative eggs. Perfect for adding a touch of whimsy to your Easter celebrations.',
    image: image04,
    category: 'decor'
  },
  {
    id: 5,
    title: 'Lemon Fresh Welcome',
    description: 'A vibrant wreath featuring bright lemons and cheerful blue and yellow blooms, perfect for a sunny welcome.',
    image: image05,
    category: 'wreaths'
  },
  {
    id: 6,
    title: 'Candy Cane Christmas',
    description: 'A festive garland with red and white candy cane stripes, perfect for adding holiday cheer to your home.',
    image: image06,
    category: 'garlands'
  },
  {
    id: 7,
    title: 'Witchy Halloween Garland',
    description: 'A spooky garland with witchy elements and vibrant colors, perfect for a hauntingly fun Halloween.',
    image: image23,
    category: 'garlands'
  },
  {
    id: 8,
    title: 'Home Sweet Home Floral',
    description: 'A charming floral arrangement with a welcoming sign, ideal for adding a touch of warmth to your home.',
    image: image24,
    category: 'decor'
  },
  {
    id: 9,
    title: 'Graceful Spring Blooms',
    description: 'A delicate wreath with soft pink and white flowers, perfect for celebrating the grace of spring.',
    image: image25,
    category: 'wreaths'
  },
  {
    id: 10,
    title: 'Easter Bunny Blooms',
    description: 'A cheerful cemetery arrangement with colorful flowers and playful bunnies, perfect for honoring loved ones during Easter.',
    image: image26,
    category: 'decor'
  },
  {
    id: 11,
    title: 'Festive Gnome Wreath',
    description: 'A whimsical wreath featuring a cozy gnome and vibrant holiday decorations, ideal for spreading festive cheer.',
    image: image27,
    category: 'wreaths'
  },
  {
    id: 12,
    title: "Jack's Halloween Delight",
    description: 'A spooky wreath inspired by Halloween, featuring Jack and a mix of black and orange accents.',
    image: image28,
    category: 'wreaths'
  }
];

const CreationCard = ({ creation }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showPreview, setShowPreview] = useState(false);
  
  // Auto-close timer for the preview
  useEffect(() => {
    let timer;
    if (showPreview) {
      timer = setTimeout(() => {
        setShowPreview(false);
      }, 3000); // 3 seconds
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showPreview]);
  
  return (
    <div className="group bg-white bg-opacity-90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 relative">
      <div className="relative overflow-hidden zoom-img">
        <img 
          src={creation.image} 
          alt={creation.title} 
          className="w-full h-64 object-cover transition-all duration-700 filter group-hover:brightness-90 cursor-pointer"
          onClick={() => setShowPreview(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end">
          <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            <p className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">{creation.description}</p>
            <a 
              href="#contact" 
              className="inline-flex items-center font-medium hover:text-accent-300 transition-colors opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500"
            >
              {t.creations.inquiry}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Full-size image preview overlay */}
        {showPreview && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
          >
            <div className="relative w-auto h-auto max-w-[90vw] max-h-[90vh]">
              <div className="absolute top-0 right-0 left-0 h-1 bg-accent-300 animate-timer"></div>
              <img 
                src={creation.image} 
                alt={creation.title} 
                className="max-w-full max-h-[90vh] object-contain animate-scale-in rounded shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
      <div className="p-6 shimmer">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-neutral-500 group-hover:text-accent-500 transition-colors duration-300">{creation.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-500 rounded-full capitalize transform group-hover:scale-105 transition-transform duration-300">
            {creation.category}
          </span>
        </div>
        
        {/* View Full Image Button */}
        <button 
          onClick={() => setShowPreview(true)}
          className="mt-2 w-full py-2 text-sm font-medium text-accent-400 hover:text-white hover:bg-accent-400 border border-accent-300 rounded-md transition-all duration-300"
        >
          View Full Image
        </button>
      </div>
    </div>
  );
};

const Creations = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];
  
  const filteredCreations = filter === 'all' 
    ? creationsData 
    : creationsData.filter(creation => creation.category === filter);

  return (
    <section id="creations" ref={sectionRef} className="py-20 relative overflow-hidden min-h-screen">
      {/* Shader Background */}
      <ShaderBackground sectionRef={sectionRef} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-rockbilly text-2xl text-white block mb-2 text-shadow-xl">{t.creations.title}</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 text-shadow-xl">{t.creations.subtitle}</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white leading-relaxed text-shadow-md">
            {t.creations.description}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-white text-accent-500 shadow-md' 
                : 'bg-black/30 backdrop-blur-sm text-white hover:bg-white/20'
            }`}
          >
            {t.creations.filters.all}
          </button>
          <button 
            onClick={() => setFilter('wreaths')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'wreaths' 
                ? 'bg-white text-accent-500 shadow-md' 
                : 'bg-black/30 backdrop-blur-sm text-white hover:bg-white/20'
            }`}
          >
            {t.creations.filters.wreaths}
          </button>
          <button 
            onClick={() => setFilter('garlands')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'garlands' 
                ? 'bg-white text-accent-500 shadow-md' 
                : 'bg-black/30 backdrop-blur-sm text-white hover:bg-white/20'
            }`}
          >
            {t.creations.filters.garlands}
          </button>
          <button 
            onClick={() => setFilter('decor')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'decor' 
                ? 'bg-white text-accent-500 shadow-md' 
                : 'bg-black/30 backdrop-blur-sm text-white hover:bg-white/20'
            }`}
          >
            {t.creations.filters.decor}
          </button>
        </div>

        {/* Grid of creations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreations.map(creation => (
            <CreationCard key={creation.id} creation={creation} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 bg-white bg-opacity-90 backdrop-blur-sm py-10 px-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-neutral-500 mb-4">{t.creations.specialRequest}</h3>
          <p className="text-neutral-400 mb-6">
            {t.creations.customMessage}
          </p>
          <a href="#contact" className="btn bg-accent-300 text-white hover:bg-accent-400 transform hover:scale-105 transition-all shadow-lg px-8 py-3 rounded-full">
            {t.creations.requestCustom}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Creations; 