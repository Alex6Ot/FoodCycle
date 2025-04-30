"use client";

import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import { Leaf, Award, Brain, CheckCircle as CheckCircle2, Globe, Rocket, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="min-h-screen font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 dark:from-emerald-700 dark:via-teal-800 dark:to-blue-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Nosotros</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            En <strong className="font-semibold">FoodCycle</strong>, creemos en un mundo más sostenible donde los alimentos sean aprovechados al máximo.
            Nos enfocamos en reducir el desperdicio alimentario a través de tecnología avanzada y soluciones innovadoras.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <Card className="p-10 shadow-lg border-l-8 border-green-500 dark:border-green-400 transition-transform hover:-translate-y-1 duration-300 bg-white dark:bg-gray-800">
            <Rocket className="h-14 w-14 text-green-600 dark:text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Nuestra Misión</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Conectar negocios y consumidores con soluciones tecnológicas que optimicen el uso de alimentos,
              reduzcan el desperdicio y fomenten hábitos responsables.
            </p>
          </Card>
          <Card className="p-10 shadow-lg border-l-8 border-green-500 dark:border-green-400 transition-transform hover:-translate-y-1 duration-300 bg-white dark:bg-gray-800">
            <Globe className="h-14 w-14 text-green-600 dark:text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Nuestra Visión</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ser líderes en gestión inteligente de alimentos, impulsando un futuro donde nada se desperdicie y cada recurso tenga un propósito claro.
            </p>
          </Card>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 flex items-center justify-center gap-3">
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
            Nuestros Valores
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            En FoodCycle nos guiamos por principios que impulsan nuestro compromiso con la sostenibilidad y la innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <Leaf className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />,
              title: 'Sostenibilidad',
              description: 'Comprometidos con la reducción del desperdicio y el uso eficiente de los recursos.',
            },
            {
              icon: <Brain className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />,
              title: 'Innovación',
              description: 'Implementamos tecnología avanzada para un impacto positivo en la sociedad.',
            },
            {
              icon: <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />,
              title: 'Responsabilidad Social',
              description: 'Trabajamos en generar cambios significativos en la comunidad.',
            },
            {
              icon: <Users className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />,
              title: 'Colaboración',
              description: 'Creemos en la fuerza del trabajo en equipo para lograr un cambio real.',
            },
            {
              icon: <Award className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />,
              title: 'Transparencia',
              description: 'Actuamos con ética y apertura en cada paso de nuestro camino.',
            },
          ].map((value, index) => (
            <Card key={index} className="p-8 rounded-xl shadow-md hover:shadow-xl border border-green-100 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-700 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
              <div className="mb-5">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Únete a Nosotros */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-700 dark:to-teal-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
            <Rocket className="h-8 w-8" /> Únete a nosotros y sé parte del cambio!
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            FoodCycle es más que una plataforma; es un movimiento hacia un mundo más consciente y eficiente. 
            Transformemos juntos el futuro del desperdicio alimentario.
          </p>
          <button className="bg-white text-emerald-600 dark:bg-gray-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Quiero unirme
          </button>
        </div>
      </section>
    </main>
  );
}