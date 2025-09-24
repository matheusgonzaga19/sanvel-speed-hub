import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Youtube, Facebook, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = {
    phone: "(11) 94445-0696",
    whatsapp: "55011944450696",
    email: "contato@sanvel.com.br",
    address: "R. Manduri, 525 - Vila Scarpelli - São Paulo/SP",
    hours: "Seg–Sex 8h30–17h30 (Almoço 12h–13h30) | Sáb/Dom Fechado"
  };

  const socialLinks = {
    youtube: "https://www.youtube.com/@sanvelcluster",
    facebook: "https://www.facebook.com/sanvelvelocimetros?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/sanvel.velocimetros?igsh=bmd1c3VnaXh3bTM5"
  };

  const whatsappMessage = "Olá! Gostaria de informações sobre reparo de velocímetro.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactInfo.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;
  const mapsUrl = "https://www.google.com/maps/place/R.+Manduri,+525+-+Vila+Scarpelli,+São+Paulo+-+SP";

  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para atender você da melhor forma
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-heading text-xl text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">Atendimento rápido e direto</p>
                </div>
              </div>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full font-inter"
              >
                <MessageCircle className="w-5 h-5" />
                {contactInfo.phone}
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-heading text-xl text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">Envie sua dúvida por e-mail</p>
                </div>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {contactInfo.email}
              </a>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-heading text-xl text-foreground">Endereço</h3>
                  <p className="text-muted-foreground">Venha nos visitar</p>
                </div>
              </div>
              <p className="text-foreground mb-4">{contactInfo.address}</p>
              <Button
                variant="outline"
                onClick={() => window.open(mapsUrl, '_blank')}
                className="w-full"
              >
                <MapPin className="w-4 h-4" />
                Ver no Google Maps
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-heading text-xl text-foreground">Horário</h3>
                  <p className="text-muted-foreground">Funcionamento</p>
                </div>
              </div>
              <p className="text-foreground">{contactInfo.hours}</p>
            </Card>
          </div>

          {/* Map and Social */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-heading text-xl text-foreground mb-4">Nossa Localização</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0962139219583!2d-46.59848092587434!3d-23.56885596794892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f1f2e7d8f7b%3A0x8b7d4f4a8c9b7f5e!2sR.%20Manduri%2C%20525%20-%20Vila%20Scarpelli%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1695849821234!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SANVEL Velocímetros - Localização"
                ></iframe>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading text-xl text-foreground mb-4">Redes Sociais</h3>
              <p className="text-muted-foreground mb-6">
                Siga-nos nas redes sociais para acompanhar nossos serviços e novidades
              </p>
              <div className="flex flex-col space-y-3">
                <Button
                  variant="outline"
                  onClick={() => window.open(socialLinks.youtube, '_blank')}
                  className="justify-start"
                >
                  <Youtube className="w-5 h-5 text-red-500" />
                  YouTube - @sanvelcluster
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => window.open(socialLinks.facebook, '_blank')}
                  className="justify-start"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                  Facebook - SANVEL Velocímetros
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => window.open(socialLinks.instagram, '_blank')}
                  className="justify-start"
                >
                  <Instagram className="w-5 h-5 text-pink-500" />
                  Instagram - @sanvel.velocimetros
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;