import { useLanguage } from '@/contexts/LanguageContext';
import { Piano, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Piano className="mr-3" size={32} />
            <span className="font-display text-2xl font-bold">IVY Music School</span>
          </div>
          
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            모든 연령을 위한 전문적이고 개인 맞춤형 피아노 레슨
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm">
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