import React, { useState, useEffect } from 'react';
import { ShaderCanvas } from './CreationsShader';

const ShaderBackground = ({ sectionRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to calculate normalized scroll position within the section
    const calculateScrollPosition = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is scrolled (normalized from 0 to 1)
      // 0 = section just entered view at bottom
      // 0.5 = section is centered in viewport
      // 1 = section has scrolled up and is leaving viewport at top
      let normalizedPosition = 0;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        normalizedPosition = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
      } else if (sectionTop <= -sectionHeight) {
        normalizedPosition = 1;
      }
      
      setScrollPosition(normalizedPosition);
    };

    // Initial calculation
    calculateScrollPosition();

    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollPosition);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', calculateScrollPosition);
    };
  }, [sectionRef]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <ShaderCanvas scrollPosition={scrollPosition} />
    </div>
  );
};

export default ShaderBackground; 