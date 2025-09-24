import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import sanvelLogo from '@/assets/sanvel-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    phone: "(11) 9999-9999", // Placeholder
    whatsapp: "+5511999999999", // Placeholder
    email: "contato@sanvel.com.br", // Placeholder
    address: "Rua Example, 123 - Bairro - São Paulo/SP - CEP 00000-000", // Placeholder
    hours: "Seg–Sex 8h–18h | Sáb 8h–12h"
  };

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
    { label: 'Avaliações', href: '#avaliacoes' },
  ];

  const whatsappMessage = "Olá! Gostaria de informações sobre os serviços da SANVEL.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={sanvelLogo} 
                alt="SANVEL Velocímetros" 
                className="h-10 w-auto"
              />
              <div>
                <div className="font-heading text-2xl text-foreground">SANVEL</div>
                <div className="text-sm text-muted-foreground -mt-1">Velocímetros</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Especialistas em reparo, calibração e diagnóstico de velocímetros para carros nacionais e importados desde 2001.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Contato</h3>
            <div className="flex flex-col space-y-4">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="justify-start font-inter"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </Button>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>

              <a
                href="#" // Placeholder for Google Maps URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">Ver no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} SANVEL Velocímetros. Todos os direitos reservados.
            </div>
            
            {/* Google Reviews Badge */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span>4.9 (100+ avaliações)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Star: React.FC<{ className: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Footer;