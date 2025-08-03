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

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="relative">
        <div className="flex animate-scroll-left">
          {duplicatedUniversities.map((university, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-8 py-4 mx-4 rounded-lg border text-center min-w-[250px] transition-all duration-300 ${
                index % 2 === 0 
                  ? 'bg-white text-primary border-accent shadow-card transform scale-105' 
                  : 'bg-white/80 text-primary-light border-border shadow-sm'
              }`}
            >
              <div className="font-semibold text-lg">{university}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityCarousel;