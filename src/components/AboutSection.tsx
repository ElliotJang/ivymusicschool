import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card gradient-card border-0 mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-bold text-primary mb-2">
                  {t('about.name')}
                </h3>
                <p className="text-xl text-muted-foreground">
                  {t('about.education')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {t('about.experience')}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>{t('about.exp1')}</li>
                        <li>{t('about.exp2')}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-muted-foreground">
                        {t('about.current')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Award className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
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