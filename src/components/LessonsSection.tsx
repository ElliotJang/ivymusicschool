import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Music, Heart, Users, Brain, Zap, Smile } from 'lucide-react';

const LessonsSection = () => {
  const { t } = useLanguage();

  const lessonTypes = [
    {
      icon: Music,
      title: t('lessons.classical'),
      description: t('lessons.classical.desc'),
      color: 'text-primary'
    },
    {
      icon: Heart,
      title: t('lessons.pop'),
      description: t('lessons.pop.desc'),
      color: 'text-accent'
    },
    {
      icon: Zap,
      title: t('lessons.chord'),
      description: t('lessons.chord.desc'),
      color: 'text-primary-light'
    },
    {
      icon: Brain,
      title: t('lessons.beginner'),
      description: t('lessons.beginner.desc'),
      color: 'text-accent'
    },
    {
      icon: Users,
      title: t('lessons.intermediate'),
      description: t('lessons.intermediate.desc'),
      color: 'text-primary'
    },
    {
      icon: Smile,
      title: t('lessons.kids'),
      description: t('lessons.kids.desc'),
      color: 'text-accent'
    }
  ];

  return (
    <section id="lessons" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('lessons.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('lessons.subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <h3 className="font-display text-3xl font-semibold text-primary text-center mb-8">
            {t('lessons.options')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonTypes.map((lesson, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 gradient-card"
              >
                <CardHeader className="text-center pb-4">
                  <lesson.icon className={`mx-auto mb-4 ${lesson.color}`} size={48} />
                  <CardTitle className="font-display text-xl text-primary">
                    {lesson.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {lesson.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Lesson Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-card gradient-card border-0">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-primary text-center">
                {t('lessons.adults')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                {t('lessons.adults.desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card gradient-card border-0">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-primary text-center">
                {t('lessons.kids')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                {t('lessons.kids.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;