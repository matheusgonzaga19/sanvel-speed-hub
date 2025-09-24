import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsAndDifferentials from '@/components/StatsAndDifferentials';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowUp } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp floating button
  const whatsappNumber = "55011944450696";
  const whatsappMessage = "Olá! Gostaria de informações sobre reparo de velocímetro.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsAndDifferentials />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          variant="whatsapp"
          size="icon"
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["AutoRepair", "LocalBusiness"],
            "name": "SANVEL Velocímetros",
            "description": "Especialistas em reparo, calibração e diagnóstico de velocímetros para carros nacionais e importados desde 2001.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Manduri, 525 - Vila Scarpelli",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "telephone": "+55-11-94445-0696",
            "email": "contato@sanvel.com.br",
            "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
            "foundingDate": "2001",
            "slogan": "Precisão que acelera confiança",
            "serviceArea": {
              "@type": "State",
              "name": "São Paulo"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Velocímetro",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reparo de Velocímetro Analógico"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reparo de Velocímetro Digital"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  );
};

export default Index;