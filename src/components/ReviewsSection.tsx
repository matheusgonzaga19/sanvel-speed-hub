import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, ExternalLink } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: "Carlos M.",
      rating: 5,
      date: "nov/2024",
      text: "Excelente atendimento! Resolveram o problema do meu velocímetro em apenas um dia. Serviço de qualidade e preço justo.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      author: "Maria S.",
      rating: 5,
      date: "out/2024",
      text: "Profissionais muito competentes. Meu painel estava completamente parado e eles conseguiram recuperar perfeitamente. Recomendo!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      author: "João P.",
      rating: 5,
      date: "set/2024",
      text: "Atendimento nota 10! Explicaram todo o processo e entregaram no prazo combinado. Velocímetro funcionando perfeitamente.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      author: "Ana L.",
      rating: 5,
      date: "ago/2024",
      text: "Serviço impecável! Meu carro importado teve problema no cluster e eles resolveram com maestria. Muito satisfeita!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      author: "Roberto F.",
      rating: 5,
      date: "jul/2024",
      text: "Há anos confio meus carros na SANVEL. Sempre um atendimento de excelência e serviços de primeira qualidade.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 6,
      author: "Patricia R.",
      rating: 5,
      date: "jun/2024",
      text: "Equipe muito técnica e atenciosa. Problema complexo no painel resolvido com garantia. Super recomendo a SANVEL!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const googleReviewsUrl = "https://www.google.com/maps/place/R.+Manduri,+525+-+Vila+Scarpelli,+São+Paulo+-+SP";

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Avaliações reais de clientes satisfeitos com nossos serviços
          </p>
          
          {/* Google Reviews Summary */}
          <div className="inline-flex items-center bg-card border border-border rounded-full px-6 py-3 mb-8">
            <div className="flex items-center space-x-3">
              <StarRating rating={5} />
              <span className="font-heading text-lg text-foreground">4.9</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">100+ avaliações</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 h-full flex flex-col">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-foreground">{review.author}</h4>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <blockquote className="text-muted-foreground flex-1">
                "{review.text}"
              </blockquote>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(googleReviewsUrl, '_blank')}
            className="font-inter"
          >
            <ExternalLink className="w-5 h-5" />
            Ver Todas no Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;