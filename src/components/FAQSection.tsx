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
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="shadow-card gradient-card border-0 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-smooth"
              >
                <h3 className="font-semibold text-primary text-lg pr-4">
                  {item.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="text-accent flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-accent flex-shrink-0" size={24} />
                )}
              </button>
              
              {openItem === index && (
                <CardContent className="px-6 pb-6 pt-0 animate-fade-in">
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