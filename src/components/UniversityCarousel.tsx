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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-card">
      <div className="relative">
        <div 
          className={`flex transition-all duration-500 ${
            isHovered ? 'animate-none' : 'animate-scroll-left'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        >
          {duplicatedUniversities.map((university, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 sm:px-8 py-3 sm:py-4 mx-2 sm:mx-4 rounded-lg border text-center min-w-[200px] sm:min-w-[250px] transition-all duration-300 bg-white text-primary border-accent shadow-card hover:shadow-lg hover:scale-105 active:scale-95 cursor-default"
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