import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import { Scan, Coins, Gift, Leaf, BarChart3, Award } from 'lucide-react';

export default function Features() {
  return (
    <main className="flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Características */}
<section className="py-24 px-6 text-center bg-gradient-to-r from-green-100 via-white to-emerald-50 dark:from-green-900 dark:via-gray-900 dark:to-emerald-950 text-gray-800 dark:text-white transition-colors duration-500">
  <h1 className="text-5xl font-extrabold mb-6 text-green-600 dark:text-green-400">
    Características
  </h1>
  <p className="text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
    Descubre cómo puedes transformar tus residuos en oportunidades reales y sostenibles. 
    Conviértete en parte del cambio ecológico y obtén recompensas por tus acciones.
  </p>
</section>

      {/* Cómo Funciona */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Scan className="h-16 w-16 text-green-500 mb-5" />,
              title: 'Escanea y Deposita',
              description: [
                'Con FoodCycle, el reciclaje de desechos orgánicos es sencillo y accesible para todos.',
                'Escanea el código QR en nuestros puntos inteligentes y deposita residuos como restos de comida, frutas y verduras.',
                'El sistema calcula y registra automáticamente la cantidad, haciendo el proceso rápido, seguro y sin complicaciones.'
              ],
            },
            {
              icon: <Coins className="h-16 w-16 text-yellow-500 mb-5" />,
              title: 'Gana Tokens',
              description: [
                'Por cada kilo de desechos orgánicos que deposites, obtienes 4.9 EcoBits, nuestra moneda ecológica.',
                'Los EcoBits te permiten obtener descuentos en productos y servicios sostenibles.',
                'Cuanto más recicles, más tokens ganas, fomentando así un compromiso constante con el medio ambiente.'
              ],
            },
            {
              icon: <Gift className="h-16 w-16 text-blue-500 mb-5" />,
              title: 'Canjea Beneficios',
              description: [
                'Usa tus EcoBits para obtener descuentos en supermercados, restaurantes ecológicos y productos sostenibles.',
                'También puedes donar tus EcoBits a proyectos comunitarios o ambientales.',
                'Nuestra red de aliados crece día a día, ampliando tus oportunidades de aprovechar tus tokens.'
              ],
            },
          ].map((item, index) => (
            <Card key={index} className="p-10 flex flex-col items-center text-center bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              {item.icon}
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              {item.description.map((para, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{para}</p>
              ))}
            </Card>
          ))}
        </div>
      </section>

      {/* Sección ¿Por qué elegir FoodCycle? */}
      <section className="py-24 px-6 bg-white dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          ¿Por qué elegir FoodCycle?
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Impacto Ecológico */}
          <Card className="p-8 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-xl transition-all rounded-xl">
            <Leaf className="h-16 w-16 text-green-500 mb-5" />
            <h3 className="text-2xl font-bold mb-4">Impacto Ecológico</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              Cada kilo de residuos reciclados evita la emisión de gases de efecto invernadero como el metano.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              En CDMX se generan más de 13,000 toneladas diarias de residuos orgánicos, y menos del 30% se reciclan.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Con FoodCycle contribuyes a un planeta más limpio, fomentando la creación de compost y biogás.
            </p>
            <img src="/images/grafica_desechos_cdmx.png" alt="Gráfica de desechos CDMX" className="rounded-lg max-w-xs mx-auto" />
          </Card>

          {/* Seguimiento Inteligente */}
          <Card className="p-8 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-xl transition-all rounded-xl">
            <BarChart3 className="h-16 w-16 text-purple-500 mb-5" />
            <h3 className="text-2xl font-bold mb-4">Seguimiento Inteligente</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              Consulta en tiempo real los kilos reciclados y EcoBits acumulados.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              Recibe recomendaciones personalizadas para mejorar tu impacto ambiental.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Comparte tus logros en redes sociales y motiva a más personas a unirse al cambio.
            </p>
          </Card>

          {/* Programa de Recompensas */}
          <Card className="p-8 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-700 shadow-md hover:shadow-xl transition-all rounded-xl">
            <Award className="h-16 w-16 text-yellow-500 mb-5" />
            <h3 className="text-2xl font-bold mb-4">Programa de Recompensas</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              Cada acción sostenible suma tokens EcoBits que puedes usar como dinero verde.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              Obtén descuentos, participa en sorteos exclusivos y accede a experiencias únicas.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Reconocemos a nuestros mejores usuarios con premios y distinciones como "Embajador FoodCycle".
            </p>
          </Card>

        </div>
      </section>

    </main>
  );
}