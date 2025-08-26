import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages, Menu, X } from 'lucide-react';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-card border-b border-border shadow-elegant backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 font-display font-bold text-2xl text-primary cursor-pointer transition-smooth hover:text-primary-light"
            onClick={() => scrollToSection('home')}
          >
            <img src="/lovable-uploads/fac41a56-9bf4-4b94-a08e-158db005d606.png" alt="IVY Music School" className="h-10 w-10" />
            <span>IVY Music</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('lessons')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.lessons')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.faq')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Languages className="h-4 w-4 mr-2" />
              {language === 'ko' ? '한국어' : 'English'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {language === 'ko' ? '한' : 'EN'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('lessons')}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                {t('nav.lessons')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                {t('nav.faq')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;