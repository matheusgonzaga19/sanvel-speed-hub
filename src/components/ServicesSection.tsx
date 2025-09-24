import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gauge, Wrench, Zap, Settings, Monitor, Palette } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Gauge,
      title: "Reparo de Velocímetro Analógico",
      description: "Restauração completa de ponteiros, faces e mecanismos internos com precisão de fábrica.",
    },
    {
      icon: Monitor,
      title: "Velocímetro Digital / Cluster",
      description: "Diagnóstico e reparo de painéis digitais, displays LCD/OLED e sistemas eletrônicos.",
    },
    {
      icon: Zap,
      title: "Iluminação e Display",
      description: "Recuperação de backlight, LEDs queimados e displays com falhas de exibição.",
    },
    {
      icon: Settings,
      title: "Sensores e Cabos",
      description: "Substituição e calibração de sensores de velocidade, cabos e engrenagens.",
    },
    {
      icon: Wrench,
      title: "Diagnóstico Eletrônico",
      description: "Análise completa de clusters CAN/LIN com equipamentos de bancada profissionais.",
    },
    {
      icon: Palette,
      title: "Customizações",
      description: "Personalização de ponteiros, faces, cores de backlight e acabamentos especiais.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            O QUE FAZEMOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todos os tipos de velocímetros e painéis automotivos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-background border-border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato para soluções personalizadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;