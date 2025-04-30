import Image from 'next/image'; // Importar el componente Image
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, SendHorizonal } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 text-white text-center overflow-hidden">
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ecology.avif" // Ruta de tu imagen local en /public/images/ecology.avif
            alt="Contacto FoodCycle"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority // Para carga rápida
          />
          {/* Overlay oscuro semitransparente */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Contáctanos
          </h1>
          <p className="text-2xl max-w-2xl mx-auto text-white/90 drop-shadow-md">
            ¿Tienes dudas, sugerencias o deseas colaborar con nosotros? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail className="h-8 w-8" />,
                title: 'Email',
                description: 'contacto@foodcycle.com',
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: 'Teléfono',
                description: '+52 55 1234 5678',
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: 'Ubicación',
                description: 'CDMX, México',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-all border-2 border-primary/10"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="p-8 max-w-3xl mx-auto shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Escríbenos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full border rounded-lg px-4 py-3 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full border rounded-lg px-4 py-3 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Mensaje</label>
                <textarea
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full border rounded-lg px-4 py-3 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <Button size="lg" className="group">
                  Enviar Mensaje
                  <SendHorizonal className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center text-muted-foreground">
            <p>© 2025 FoodCycle. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
