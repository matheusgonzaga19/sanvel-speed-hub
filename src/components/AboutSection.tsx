import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const whatsappNumber = "55011944450696";
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre a SANVEL.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground">
            Desde 2001, somos referência em reparo de velocímetros
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-heading text-3xl text-foreground mb-4">
              Mais de 20 Anos de Experiência
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 2001, a SANVEL Velocímetros nasceu da paixão pela precisão automotiva. 
              Ao longo de mais de duas décadas, nos especializamos no reparo, calibração e 
              diagnóstico de velocímetros para veículos nacionais e importados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe técnica altamente qualificada utiliza equipamentos de última geração 
              para garantir que cada serviço seja executado com máxima precisão e qualidade, 
              mantendo sempre o compromisso com a excelência que nos tornou referência no mercado.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="font-inter"
            >
              Fale Conosco
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-heading text-3xl text-foreground mb-2">24+</div>
              <div className="text-sm text-muted-foreground">Anos no Mercado</div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-heading text-3xl text-foreground mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-heading text-3xl text-foreground mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Prazo Médio</div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-heading text-3xl text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Com Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;