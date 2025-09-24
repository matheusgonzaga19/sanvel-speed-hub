import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';
import heroSpeedometer from '@/assets/hero-speedometer.jpg';

const HeroSection: React.FC = () => {
  const whatsappNumber = "+5511999999999"; // Placeholder
  const whatsappMessage = "Olá! Gostaria de um orçamento para reparo de velocímetro.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSpeedometer} 
          alt="Speedometer Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            ESPECIALISTAS EM
            <span className="block text-primary">VELOCÍMETROS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light">
            Para carros nacionais e importados desde 2001
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Diagnóstico, reparo e calibração com precisão, rapidez e garantia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="w-full sm:w-auto min-w-[240px]"
            >
              <Phone className="w-5 h-5" />
              Chamar no WhatsApp
            </Button>
            
            <Button
              variant="outline-light"
              size="xl"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-w-[240px]"
            >
              <MapPin className="w-5 h-5" />
              Ver Localização
            </Button>
          </div>

          {/* Years Badge */}
          <div className="inline-flex items-center bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl text-primary">24+</div>
              <div className="text-sm text-white/80 -mt-1">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Speedometer Needle */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-primary rounded-full origin-bottom transform -translate-x-1/2 -translate-y-full animate-speedometer"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;