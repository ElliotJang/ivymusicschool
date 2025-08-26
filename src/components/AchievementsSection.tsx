import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Users, Award, GraduationCap } from 'lucide-react';
import UniversityCarousel from './UniversityCarousel';

const AchievementsSection = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Users,
      number: '7',
      title: t('achievements.recitals'),
      color: 'text-accent'
    },
    {
      icon: Trophy,
      number: '10',
      title: t('achievements.competition'),
      color: 'text-primary'
    },
    {
      icon: Award,
      number: '15',
      title: t('achievements.merit'),
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('achievements.title')}
          </h2>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border text-center">
              <CardContent className="p-8">
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
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="text-accent mr-4" size={48} />
            <h3 className="font-display text-3xl font-semibold text-primary">
              {t('achievements.university.title')}
            </h3>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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