import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Music, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/piano-hero.jpg';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Piano Academy"
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40"></div>
      </div>

      {/* Interactive Floating Musical Notes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Mouse-following music note */}
        <Music 
          className="absolute text-accent opacity-30 animate-float transition-all duration-300" 
          size={28}
          style={{
            left: mousePosition.x - 14,
            top: mousePosition.y - 14,
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 10px rgba(255, 165, 0, 0.3))'
          }}
        />
        
        {/* Static floating notes with enhanced animations */}
        <Music className="absolute top-20 left-10 text-accent opacity-25 animate-float" size={32} style={{ filter: 'drop-shadow(0 0 8px rgba(255, 165, 0, 0.2))' }} />
        <Music className="absolute top-40 right-20 text-accent opacity-20 animate-float" size={24} style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 6px rgba(255, 165, 0, 0.2))' }} />
        <Music className="absolute bottom-40 left-20 text-accent opacity-30 animate-float" size={28} style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 8px rgba(255, 165, 0, 0.2))' }} />
        <Music className="absolute bottom-20 right-10 text-accent opacity-20 animate-float" size={20} style={{ animationDelay: '1.5s', filter: 'drop-shadow(0 0 6px rgba(255, 165, 0, 0.2))' }} />
        
        {/* Additional decorative elements */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-48 right-1/3 w-1 h-1 bg-accent rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-35 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* Content with Enhanced Typography */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <div className="animate-fade-in">
          {/* Enhanced Title with Typing Effect */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl px-4 leading-tight">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 drop-shadow-lg font-light px-4 leading-relaxed opacity-95">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {t('hero.subtitle')}
            </span>
          </p>
          
          {/* Enhanced CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow hover:scale-105 transition-all duration-300 px-10 py-5 text-lg font-semibold rounded-full border-2 border-accent/30 hover:border-accent/50 shadow-2xl"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="group cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center group-hover:border-accent transition-colors duration-300">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse group-hover:bg-accent transition-colors duration-300"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-white/80 group-hover:text-accent mx-auto mt-2 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;