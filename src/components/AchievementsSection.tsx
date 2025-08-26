import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Users, Award, GraduationCap } from 'lucide-react';
import UniversityCarousel from './UniversityCarousel';

const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Users,
      number: '7+',
      title: t('achievements.recitals'),
      color: 'text-primary'
    },
    {
      icon: Trophy,
      number: '10+',
      title: t('achievements.competition'),
      color: 'text-primary'
    },
    {
      icon: Award,
      number: '15+',
      title: t('achievements.merit'),
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('achievements.title')}
          </h2>
        </div>

        {/* Achievement Stats */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 bg-card border text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 md:p-8">
                <achievement.icon className={`mx-auto mb-4 ${achievement.color}`} size={48} />
                <div className="font-display text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* University Section */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 md:mb-6">
            <GraduationCap className="text-accent mb-2 sm:mb-0 sm:mr-4" size={48} />
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary text-center">
              {t('achievements.university.title')}
            </h3>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            {t('achievements.universities')}
          </p>
        </div>

        {/* University Carousel */}
        <UniversityCarousel />
      </div>
    </section>
  );
};

export default AchievementsSection;