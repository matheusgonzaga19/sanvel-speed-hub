import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Phone, Camera } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  // Placeholder testimonials - would be imported from Google Reviews
  const testimonials = [
    {
      name: "João S.",
      rating: 5,
      date: "set/2024",
      text: "Resolvi meu painel em um dia. Atendimento nota 10!",
      photo: null
    },
    {
      name: "Maria C.",
      rating: 5,
      date: "ago/2024",
      text: "Velocímetro do meu Civic ficou perfeito. Recomendo muito!",
      photo: null
    },
    {
      name: "Carlos R.",
      rating: 5,
      date: "jul/2024",
      text: "Preço justo e serviço de qualidade. Equipe muito competente.",
      photo: null
    }
  ];

  const whatsappNumber = "+5511999999999"; // Placeholder
  const whatsappMessage = "Olá! Gostaria de enviar uma foto do meu painel para diagnóstico.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 100 avaliações positivas no Google
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mb-16">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('#', '_blank')} // Placeholder URL
            className="font-inter"
          >
            Ver Todas no Google
          </Button>
        </div>

        {/* Photo Diagnosis CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Camera className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="font-heading text-3xl md:text-4xl mb-4">
              DIAGNÓSTICO RÁPIDO
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Envie uma foto do seu painel no WhatsApp e receba um diagnóstico inicial gratuito
            </p>
            <Button
              variant="outline-light"
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="font-inter"
            >
              <Phone className="w-5 h-5" />
              Enviar Foto pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;