"use client";

import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import { Star, Quote, Droplet, Recycle, Leaf, Award, HelpCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Emilia Torres',
    role: 'Dueña de restaurante',
    quote:
      'FoodCycle ha transformado la manera en que gestionamos los residuos en mi restaurante. ¡El programa de recompensas es increíble!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    name: 'David Contreras',
    role: 'Gerente de Sostenibilidad (CEDA)',
    quote:
      'Hemos reducido el desperdicio de alimentos en un 40% gracias a FoodCycle. Una solución innovadora y sostenible.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Sarah Miller',
    role: 'Activista ambiental',
    quote:
      'Nuestra comunidad ha adoptado FoodCycle y ha logrado reducir la basura orgánica significativamente. ¡Totalmente recomendado!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section - Ondas */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-blue-400 to-green-500 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="white" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="container mx-auto relative z-10 px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Opiniones de usuarios felices</h1>
          <p className="text-lg md:text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Conoce cómo FoodCycle está ayudando a personas, negocios y comunidades a ser más sostenibles.
          </p>
          <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
            Únete a nosotros hoy
          </button>
        </div>
      </section>

      {/* ¿Por qué usar FoodCycle? */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué usar FoodCycle?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <BenefitCard icon={<Droplet />} title="Reducción de residuos" />
            <BenefitCard icon={<Recycle />} title="Reutilización efectiva" />
            <BenefitCard icon={<Leaf />} title="Impacto ecológico positivo" />
            <BenefitCard icon={<Award />} title="Recompensas por tus acciones" />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-green-500"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-green-200 dark:ring-green-700 mb-4"
                />
                <Quote className="h-8 w-8 text-green-500 dark:text-green-400 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                <div className="flex mt-4 space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto Ambiental */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-12">Impacto medioambiental</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <StatCard number="1.2T" label="Toneladas de residuos reciclados" />
            <StatCard number="3.4M" label="Usuarios activos" />
            <StatCard number="1.8M" label="EcoBits acumulados" />
          </div>
        </div>
      </section>

      {/* FAQ / Preguntas Frecuentes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas frecuentes</h2>
          <FaqItem question="¿Cómo funciona FoodCycle?" answer="Deposita residuos orgánicos en puntos inteligentes y gana EcoBits." />
          <FaqItem question="¿Qué puedo hacer con mis EcoBits?" answer="Canjéalos por descuentos, donaciones o premios." />
          <FaqItem question="¿Es gratis?" answer="Sí, el registro y uso son completamente gratuitos." />
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ayuda al planeta desde donde estés</h2>
          <p className="text-lg opacity-95 mb-8">Únete a miles de personas que ya están contribuyendo a un futuro sostenible.</p>
          <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
            Regístrate ahora
          </button>
        </div>
      </section>
    </main>
  );
}

// Componentes Auxiliares

function BenefitCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition-all">
      <div className="text-green-500 dark:text-green-400 text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">{number}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{label}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="mb-4 group bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm cursor-pointer">
      <summary className="flex justify-between items-center font-medium list-none">
        <span>{question}</span>
        <HelpCircle className="opacity-40 group-open:rotate-90 transition-transform" />
      </summary>
      <p className="mt-3 text-left text-gray-600 dark:text-gray-300">{answer}</p>
    </details>
  );
}