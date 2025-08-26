import { useEffect, useState } from 'react';

const UniversityCarousel = () => {
  const universities = [
    'Cornell University',
    'UC Berkeley',
    'UCLA',
    'USC',
    'Pepperdine University',
    'UT Austin',
    'Boston College',
    'Emory University',
    'UC San Diego'
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedUniversities = [...universities, ...universities];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-card">
      <div className="relative">
        <div 
          className={`flex transition-all duration-500 ${
            hoveredIndex !== null ? '' : 'animate-scroll-left'
          }`}
          style={{
            transform: hoveredIndex !== null ? `translateX(-${hoveredIndex * 240}px)` : undefined,
            animationPlayState: hoveredIndex !== null ? 'paused' : 'running'
          }}
        >
          {duplicatedUniversities.map((university, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 sm:px-8 py-3 sm:py-4 mx-2 sm:mx-4 rounded-lg border text-center min-w-[200px] sm:min-w-[250px] transition-all duration-500 bg-white text-primary border-accent shadow-card cursor-pointer ${
                hoveredIndex === index ? 'scale-105 shadow-lg bg-accent/10 border-primary' : 'hover:shadow-md'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="font-semibold text-base sm:text-lg">{university}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityCarousel;