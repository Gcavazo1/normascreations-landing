import { useState, useRef } from 'react';
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
    title: "Holiday Joy Garland",
    category: "garlands",
    description: "Festive garland perfect for mantles and staircases during the holiday season.",
    image: image02
  },
  {
    id: 3,
    title: "Autumn Harvest Wreath",
    category: "wreaths",
    description: "Warm fall colors with wheat and pumpkin accents for a cozy autumn feel.",
    image: image03
  },
  {
    id: 4,
    title: "Rustic Center Piece",
    category: "decor",
    description: "Elegant table centerpiece with rustic elements and soft candlelight.",
    image: image04
  },
  {
    id: 5,
    title: "Summer Citrus Wreath",
    category: "wreaths",
    description: "Bright and cheerful wreath with citrus accents and summer blooms.",
    image: image05
  },
  {
    id: 6,
    title: "Evergreen Window Garland",
    category: "garlands",
    description: "Lush evergreen garland with pine cones and berries for window decor.",
    image: image06
  },
  {
    id: 7,
    title: "Lavender Dreams Wreath",
    category: "wreaths",
    description: "Soothing lavender wreath with ribbon accents and natural elements.",
    image: image23
  },
  {
    id: 8,
    title: "Easter Celebration",
    category: "wreaths",
    description: "Cheerful Easter-themed wreath with pastel colors and festive elements.",
    image: image24
  },
  {
    id: 9,
    title: "Winter Wonderland Decor",
    category: "decor",
    description: "Magical winter-themed decor with silver and white accents.",
    image: image25
  }
];

const CreationCard = ({ creation }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="group bg-white bg-opacity-90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2">
      <div className="relative overflow-hidden zoom-img">
        <img 
          src={creation.image} 
          alt={creation.title} 
          className="w-full h-64 object-cover transition-all duration-700 filter group-hover:brightness-90"
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
      </div>
      <div className="p-6 shimmer">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-neutral-500 group-hover:text-accent-500 transition-colors duration-300">{creation.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-500 rounded-full capitalize transform group-hover:scale-105 transition-transform duration-300">
            {creation.category}
          </span>
        </div>
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