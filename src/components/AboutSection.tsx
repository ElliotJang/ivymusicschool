import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-20 gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card gradient-card border-0 mb-8 animate-fade-in hover:shadow-elegant transition-all duration-500">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                  {t('about.name')}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {t('about.education')}
                </p>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <GraduationCap className="text-accent mt-1 flex-shrink-0 group-hover:text-accent transition-colors duration-300" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {t('about.experience')}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>{t('about.exp1')}</li>
                        <li>{t('about.exp2')}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <MapPin className="text-accent mt-1 flex-shrink-0 group-hover:text-accent transition-colors duration-300" size={24} />
                    <div>
                      <p className="text-muted-foreground">
                        {t('about.current')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <Award className="text-accent mt-1 flex-shrink-0 group-hover:text-accent transition-colors duration-300" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {t('about.certifications')}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>{t('about.cert1')}</li>
                        <li>{t('about.cert2')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;