import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  const handlePhoneCall = () => {
    window.open('tel:213-505-7335', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:jennyspianoacademy@gmail.com', '_self');
  };

  const handleSMS = () => {
    window.open('sms:213-505-7335', '_self');
  };

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant gradient-card border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                  <div className="space-y-6">
                   <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/50">
                     <Phone className="text-accent flex-shrink-0" size={24} />
                     <div>
                       <div className="font-semibold text-primary">{t('contact.phone')}</div>
                       <div className="text-muted-foreground">213-505-7335</div>
                     </div>
                   </div>

                   <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/50">
                     <Mail className="text-accent flex-shrink-0" size={24} />
                     <div>
                       <div className="font-semibold text-primary">{t('contact.email')}</div>
                       <div className="text-muted-foreground">jennyspianoacademy@gmail.com</div>
                     </div>
                   </div>

                   <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/50">
                     <MapPin className="text-accent flex-shrink-0" size={24} />
                     <div>
                       <div className="font-semibold text-primary">{t('contact.address')}</div>
                       <div className="text-muted-foreground">{t('contact.location')}</div>
                     </div>
                   </div>
                 </div>

                 {/* Contact Buttons */}
                 <div className="space-y-4">
                   <Button
                     onClick={handlePhoneCall}
                     size="lg"
                     className="w-full gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                   >
                     <Phone className="mr-2" size={20} />
                     {t('contact.callButton')}
                   </Button>

                   <Button
                     onClick={handleSMS}
                     size="lg"
                     variant="outline"
                     className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                   >
                     <MessageCircle className="mr-2" size={20} />
                     {t('contact.smsButton')}
                   </Button>

                   <Button
                     onClick={handleEmail}
                     size="lg"
                     variant="outline"
                     className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                   >
                     <Mail className="mr-2" size={20} />
                     {t('contact.emailButton')}
                   </Button>

                   <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                     <p className="text-sm text-muted-foreground text-center">
                       {t('contact.welcomeText')}<br />
                       {t('contact.infoText')}
                     </p>
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

export default ContactSection;