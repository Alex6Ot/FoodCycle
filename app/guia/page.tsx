"use client";

import { Navbar } from '@/components/navbar';
import { useState } from 'react';
import { CheckCircle, Leaf, Flame, XCircle } from 'lucide-react';

// Datos organizados por categorías
const wasteCategories = [
  {
    title: 'Reciclables',
    description:
      'Los materiales reciclables pueden ser reutilizados para fabricar nuevos productos, reduciendo la contaminación ambiental.',
    examples: ['Cáscaras de frutas y verduras', 'Granos y semillas', 'Cáscaras de huevo', 'Residuos de pan no procesados'],
    icon: <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400 mx-auto" />,
    colorClass: "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500",
    stats: true,
  },
  {
    title: 'Para Fertilizantes',
    description:
      'Algunos desechos de alimentos pueden convertirse en compost que mejora la calidad del suelo y fomenta una agricultura sostenible.',
    examples: ['Restos de café y té', 'Hojas secas', 'Pasto cortado', 'Cáscaras de nueces'],
    icon: <Leaf className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto" />,
    colorClass: "bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500",
    stats: true,
  },
  {
    title: 'Para Biogás',
    description:
      'Residuos orgánicos pueden transformarse en energía renovable mediante digestión anaeróbica, reduciendo el uso de combustibles fósiles.',
    examples: ['Aceites vegetales', 'Restos de pan y cereales', 'Desechos de lácteos'],
    icon: <Flame className="h-10 w-10 text-yellow-600 dark:text-yellow-400 mx-auto" />,
    colorClass: "bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500",
    stats: true,
  },
  {
    title: 'No Aptos',
    description:
      'Algunos residuos no son aptos para reciclaje ni compostaje debido a su naturaleza química o biológica.',
    examples: ['Plásticos contaminados', 'Carnes y huesos', 'Comida procesada con conservantes'],
    icon: <XCircle className="h-10 w-10 text-red-600 dark:text-red-400 mx-auto" />,
    colorClass: "bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500",
    stats: false, // Sin estadísticas
  },
];

export default function RecyclingGuide() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reusedItems, setReusedItems] = useState(0);

  const co2Saved = (reusedItems * 0.3).toFixed(1); // Cada item reusado = 0.3 kg CO2 ahorrado

  const filteredCategories = wasteCategories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

     {/* Hero Section */}
<section className="py-24 px-6 bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-lg relative overflow-hidden">
  {/* Fondo decorativo con íconos ecológicos (opcional) */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
      <defs>
        <pattern id="leafPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0C30 0 15 15 15 35C15 55 30 70 50 70C70 70 85 55 85 35C85 15 70 0 50 0Z" fill="white" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#leafPattern)" />
    </svg>
  </div>

  {/* Contenido principal */}
  <div className="container mx-auto max-w-3xl text-center relative z-10 px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
      Guía de Reciclaje
    </h1>
    <p className="text-lg md:text-xl opacity-95 leading-relaxed max-w-2xl mx-auto">
      Descubre cómo tus decisiones cambian el planeta. Clasifica, reduce y reutiliza con nuestra guía clara y educativa.
    </p>
  </div>
</section>

      {/* Stats Summary - Interactivo */}
      <section className="py-8 px-4 bg-teal-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <CardStat title="Objetos Reutilizados" value={
            <div className="flex items-center justify-center space-x-3 mt-2">
              <button onClick={() => setReusedItems(prev => Math.max(0, prev - 1))} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">-</button>
              <span className="font-bold text-lg">{reusedItems}</span>
              <button onClick={() => setReusedItems(prev => prev + 1)} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">+</button>
            </div>
          } />
          <CardStat title="CO₂ Ahorrado" value={`${co2Saved} kg`} />
          <CardStat title="Energía Generada" value="1 kWh aprox." />
        </div>
      </section>

      {/* Categories Section (Static Cards) */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 gap-6 max-w-2xl">
          {filteredCategories.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400 text-xl">No se encontraron categorías.</p>
          ) : (
            filteredCategories.map((category, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ease-in-out rounded-xl overflow-hidden shadow-md ${category.colorClass}`}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {category.icon}
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <ul className="mb-4 text-left pl-5 list-disc text-gray-700 dark:text-gray-300 space-y-1">
                    {category.examples.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {category.stats && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                      <span>CO₂ ahorrado: {(0.3 * category.examples.length).toFixed(1)} kg</span>
                      <span>Reutilizado: {category.examples.length} objetos</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

// Componente de estadísticas pequeñas
function CardStat({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center">
      <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{title}</h4>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}