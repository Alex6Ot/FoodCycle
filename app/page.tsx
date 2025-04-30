"use client";

import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Leaf,
  Scan,
  Coins,
  Gift,
  BarChart3,
  Award,
  Droplet,
  Recycle,
  Zap,
  Users,
  Globe,
  Star,
  CheckCircle,
  Image as ImageIcon,
} from 'lucide-react';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Hook para animación al scroll
const useScrollReveal = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return controls;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 text-center bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="white" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="container mx-auto relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up">
            Transforma tus residuos en recompensas con FoodCycle
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95 animate-fade-in-up delay-200">
            Únete a la revolución de la sostenibilidad alimentaria: transforma los residuos en energía y vida, gana recompensas y genera un impacto positivo en nuestro planeta.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <Button size="lg" variant="secondary" className="group text-green-900 font-semibold shadow-md hover:shadow-lg">
              Únete ahora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-semibold backdrop-blur-sm">
              Más información
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            ¿Cómo funciona?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: <Scan className="h-10 w-10 text-green-600 dark:text-green-400" />, title: 'Escanea y Deposita', description: 'Escanee y deposite fácilmente sus desperdicios de alimentos en nuestros puntos de recolección inteligentes.' },
              { icon: <Coins className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />, title: 'Gana Tokens', description: 'Obtén recompensas con tokens FoodCycle por tus acciones sostenibles.' },
              { icon: <Gift className="h-10 w-10 text-blue-600 dark:text-blue-400" />, title: 'Canjea Beneficios', description: 'Canjea Tokens por descuentos o dona a causas medioambientales.' },
            ].map((step, index) => (
              <Card key={index} className="p-8 rounded-xl hover:shadow-xl transition-all border-l-4 border-green-500 dark:border-green-400 bg-white dark:bg-gray-800 transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Nuestra Tecnología Inteligente
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Sistema automático de clasificación</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Usamos IA y sensores avanzados para identificar y procesar cada tipo de residuo orgánico.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <CheckCircle /> <span>Identificación precisa de residuos</span>
                </li>
                <li className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <Zap /> <span>Procesamiento rápido y seguro</span>
                </li>
                <li className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <Recycle /> <span>Conversión automática a recursos reutilizables</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/images/bin.jpg" alt="Tecnología Smart" className="rounded-lg shadow-md max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            ¿Por qué elegir FoodCycle?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: <Leaf className="h-10 w-10 text-green-600 dark:text-green-400" />, title: 'Impacto Ecológico', description: 'Reduce la huella de carbono y contribuye a un futuro sostenible.' },
              { icon: <BarChart3 className="h-10 w-10 text-purple-600 dark:text-purple-400" />, title: 'Seguimiento Inteligente', description: 'Monitorea tu contribución e impacto ambiental en tiempo real.' },
              { icon: <Award className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />, title: 'Recompensas Sostenibles', description: 'Gana valiosos Tokens y beneficios por tus acciones responsables.' },
            ].map((feature, index) => (
              <Card key={index} className="p-8 rounded-xl hover:shadow-lg transition-all border-l-4 border-primary-500 bg-gray-50 dark:bg-gray-800">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16"
          >
            Nuestro Impacto
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard number="1.2T" label="Toneladas de residuos reciclados" />
            <StatCard number="3.4M" label="Usuarios activos" />
            <StatCard number="1.8M" label="EcoBits acumulados" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Casos de Éxito
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: 'Emilia Torres', role: 'Dueña de restaurante', content: 'FoodCycle ha transformado la forma en que gestionamos el desperdicio de alimentos. ¡El programa de recompensas es un incentivo fantástico!', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
              { name: 'David Contreras', role: 'Gerente de Sostenibilidad (CEDA)', content: 'Las funciones de seguimiento nos ayudan a monitorear y mejorar significativamente nuestro impacto ambiental.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
              { name: 'Sarah Miller', role: 'Activista ambiental', content: 'Nuestra comunidad ha reducido el desperdicio de alimentos en un 60 % desde que se unió a FoodCycle. ¡Resultados sorprendentes!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-xl hover:shadow-xl transition-all bg-white dark:bg-gray-800">
                <div className="flex items-start mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            Nuestra Comunidad en Acción
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`/images/img${i}.jpg`} alt={`Imagen ${i}`} className="rounded-lg shadow-md hover:scale-105 transform transition duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para hacer la diferencia?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Únase a miles de personas que ya están generando un impacto con FoodCycle.
          </p>
          <Button size="lg" variant="secondary" className="group text-green-900 font-semibold shadow-md hover:shadow-lg">
            Empieza Ahora
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">FoodCycle</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Transformar el desperdicio de alimentos en valor sostenible.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="#features" className="hover:underline">Cómo funciona</Link></li>
              <li><Link href="#benefits" className="hover:underline">Beneficios</Link></li>
              <li><Link href="#testimonials" className="hover:underline">Casos de Éxito</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:underline">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:underline">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:underline">Términos y Condiciones</Link></li>
              <li><Link href="#" className="hover:underline">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 text-center text-gray-500 dark:text-gray-600">
          <p>© 2025 FoodCycle. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">{number}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
}