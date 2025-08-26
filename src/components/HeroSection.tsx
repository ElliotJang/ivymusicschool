import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Music } from 'lucide-react';
import heroImage from '@/assets/piano-hero.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Piano Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Music className="absolute top-20 left-10 text-accent opacity-20 animate-float" size={32} />
        <Music className="absolute top-40 right-20 text-accent opacity-15 animate-float" size={24} style={{ animationDelay: '1s' }} />
        <Music className="absolute bottom-40 left-20 text-accent opacity-25 animate-float" size={28} style={{ animationDelay: '2s' }} />
        <Music className="absolute bottom-20 right-10 text-accent opacity-20 animate-float" size={20} style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md font-light">
            {t('hero.subtitle')}
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;