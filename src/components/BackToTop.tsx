import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:shadow-glow hover:scale-110 hover:bg-primary/90 transition-all duration-300 animate-fade-in group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:text-accent transition-colors duration-300" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
