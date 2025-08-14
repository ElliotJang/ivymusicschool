import { useState, useEffect } from "react";

const UniversityCarousel = () => {
  const [currentUniversity, setCurrentUniversity] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Your list of universities
  const universities = [
    "Cornell University",
    "UC Berkeley", 
    "UCLA",
    "USC",
    "Pepperdine University",
    "UT Austin",
    "Boston College",
    "Emory University",
    "UC San Diego"
  ];

  // Create extended array with first item duplicated at the end for infinite scroll
  const extendedUniversities = [...universities, universities[0]];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUniversity((prev) => {
        if (prev === universities.length - 1) {
          // We're at the last real university, go to the duplicate
          return universities.length;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [universities.length]);

  // Handle infinite scroll transition
  useEffect(() => {
    if (currentUniversity === universities.length) {
      // We're showing the duplicate first university
      // After transition completes, instantly jump back to real first university
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentUniversity(0);
        // Re-enable transition after a brief moment
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000); // Wait for transition to complete

      return () => clearTimeout(timeout);
    }
  }, [currentUniversity, universities.length]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-sm rounded-lg p-6">
      <div className="text-center mb-6">
        <p className="text-foreground font-medium">Students have been accepted to top universities!</p>
      </div>

      {/* Main carousel container */}
      <div className="relative overflow-hidden h-20 mb-6">
        <div 
          className={`flex absolute top-0 left-0 h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${currentUniversity * 100}%)`,
            width: `${extendedUniversities.length * 100}%`
          }}
        >
          {extendedUniversities.map((university, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-full bg-white text-primary border border-accent shadow-card rounded-lg mx-2"
              style={{ width: `${100 / extendedUniversities.length}%` }}
            >
              <div className="font-semibold text-lg px-4">{university}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2">
        {universities.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentUniversity(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              (index === currentUniversity || (currentUniversity === universities.length && index === 0)) 
                ? "bg-primary" 
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityCarousel;