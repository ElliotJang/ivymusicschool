import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Music, Heart, Users, Brain, Zap, Smile, UserCheck } from 'lucide-react';

const LessonsSection = () => {
  const { t } = useLanguage();

  const topRowLessons = [
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
      color: 'text-primary'
    }
  ];

  const middleRowLesson = {
    icon: Zap,
    title: t('lessons.chord'),
    description: t('lessons.chord.desc'),
    color: 'text-primary'
  };

  const bottomRowLessons = [
    {
      icon: Brain,
      title: t('lessons.beginner'),
      description: t('lessons.beginner.desc'),
      color: 'text-primary'
    },
    {
      icon: Users,
      title: t('lessons.intermediate'),
      description: t('lessons.intermediate.desc'),
      color: 'text-primary'
    }
  ];

  return (
    <section id="lessons" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('lessons.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t('lessons.subtitle')}
          </p>
        </div>

        <div className="mb-8 md:mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary text-center mb-6 md:mb-8 animate-fade-in">
            {t('lessons.options')}
          </h3>
          
          {/* Top Row - Classical and Pop */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {topRowLessons.map((lesson, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <lesson.icon className={`mx-auto mb-4 ${lesson.color} group-hover:text-accent transition-colors duration-300`} size={48} />
                  <CardTitle className="font-display text-xl text-primary group-hover:text-accent transition-colors duration-300">
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

          {/* Middle Row - Chord & Lead Sheet (Centered) */}
          <div className="mb-4 md:mb-6 md:flex md:justify-center">
            <div className="w-full md:w-96 px-4 md:px-0">
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border bg-card animate-fade-in group" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="text-center pb-4">
                  <middleRowLesson.icon className={`mx-auto mb-4 ${middleRowLesson.color} group-hover:text-accent transition-colors duration-300`} size={48} />
                  <CardTitle className="font-display text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {middleRowLesson.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {middleRowLesson.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Row - Beginner and Intermediate */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {bottomRowLessons.map((lesson, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border bg-card animate-fade-in group"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <lesson.icon className={`mx-auto mb-4 ${lesson.color} group-hover:text-accent transition-colors duration-300`} size={48} />
                  <CardTitle className="font-display text-xl text-primary group-hover:text-accent transition-colors duration-300">
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

        {/* Age Group Categories */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border bg-card animate-fade-in group" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="text-center pb-4">
              <UserCheck className="mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" size={48} />
              <CardTitle className="font-display text-xl text-primary group-hover:text-accent transition-colors duration-300">
                {t('lessons.adults')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                {t('lessons.adults.desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border bg-card animate-fade-in group" style={{ animationDelay: '0.6s' }}>
            <CardHeader className="text-center pb-4">
              <Smile className="mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" size={48} />
              <CardTitle className="font-display text-xl text-primary group-hover:text-accent transition-colors duration-300">
                {t('lessons.kids')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
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