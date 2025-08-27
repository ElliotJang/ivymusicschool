import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="shadow-card gradient-card border-0 overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/50 transition-smooth"
              >
                <h3 className="font-semibold text-primary text-base md:text-lg pr-4">
                  {item.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="text-accent flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-accent flex-shrink-0" size={24} />
                )}
              </button>
              
              {openItem === index && (
                <CardContent className="px-4 md:px-6 pb-4 md:pb-6 pt-0 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;