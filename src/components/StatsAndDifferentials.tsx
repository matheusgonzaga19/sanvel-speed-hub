import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, ShieldCheck, Target } from 'lucide-react';

const StatsAndDifferentials: React.FC = () => {
  const stats = [
    {
      number: "24+",
      label: "Anos de Experiência",
      description: "Desde 2001 no mercado"
    },
    {
      number: "5000+",
      label: "Velocímetros Restaurados",
      description: "Precisão comprovada"
    },
    {
      number: "98%",
      label: "Satisfação dos Clientes",
      description: "Qualidade garantida"
    },
    {
      number: "100%",
      label: "Transparência",
      description: "Orçamentos claros"
    }
  ];

  const differentials = [
    {
      icon: Target,
      title: "Diagnóstico Eletrônico Avançado",
      description: "Equipamentos de última geração para identificação precisa de problemas"
    },
    {
      icon: Award,
      title: "Peças e Precisão de Fábrica",
      description: "Componentes originais e especificações técnicas rigorosas"
    },
    {
      icon: Clock,
      title: "Entrega Ágil e Garantia",
      description: "Prazos respeitados com garantia de qualidade em todos os serviços"
    },
    {
      icon: ShieldCheck,
      title: "Atendimento Técnico Especializado",
      description: "Equipe qualificada com conhecimento em carros nacionais e importados"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Big Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-4xl md:text-6xl text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Differentials */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            NOSSOS DIFERENCIAIS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Por que escolher a SANVEL para cuidar do seu velocímetro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <differential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-3">
                      {differential.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndDifferentials;