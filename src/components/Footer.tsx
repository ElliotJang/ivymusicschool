import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-primary text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4 animate-fade-in">
            <img src="/lovable-uploads/fac41a56-9bf4-4b94-a08e-158db005d606.png" alt="IVY Music School Logo" className="mr-3 w-8 h-8 object-contain" />
            <span className="font-display text-xl md:text-2xl font-bold">IVY Music School</span>
          </div>
          
          <p className="text-primary-foreground/80 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
            모든 연령을 위한 전문적이고 개인 맞춤형 피아노 레슨
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8 text-sm">
            <div className="flex items-center">
              <span>📞 213-505-7335</span>
            </div>
            <div className="flex items-center">
              <span>✉️ jennyspianoacademy@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span>📍 Lawrenceville, GA</span>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex items-center justify-center text-sm text-primary-foreground/70">
              <span>Made with</span>
              <Heart className="mx-2 text-accent" size={16} />
              <span>for music education</span>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-2">
              © 2024 IVY Music School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;