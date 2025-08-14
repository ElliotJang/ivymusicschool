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

  return (
    <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="relative">
        <div className="flex university-scroll">
          {/* First set of universities */}
          {universities.map((university, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-8 py-4 mx-4 rounded-lg border text-center min-w-[250px] bg-white text-primary border-accent shadow-card"
            >
              <div className="font-semibold text-lg whitespace-nowrap">{university}</div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {universities.map((university, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-8 py-4 mx-4 rounded-lg border text-center min-w-[250px] bg-white text-primary border-accent shadow-card"
            >
              <div className="font-semibold text-lg whitespace-nowrap">{university}</div>
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {universities.map((university, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 px-8 py-4 mx-4 rounded-lg border text-center min-w-[250px] bg-white text-primary border-accent shadow-card"
            >
              <div className="font-semibold text-lg whitespace-nowrap">{university}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityCarousel;