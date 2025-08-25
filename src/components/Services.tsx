import { 
  Zap, 
  Settings, 
  Wrench, 
  Zap as Welding, 
  Package, 
  Award,
  ArrowRight 
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Laserowe cięcie blach',
      description: 'Precyzyjne cięcie laserowe z wykorzystaniem najnowocześniejszych maszyn MAZAK Fiber.'
    },
    {
      icon: Settings,
      title: 'Gięcie blach na prasach krawędziowych',
      description: 'Profesjonalne gięcie z wykorzystaniem pras serwomechanicznych SAFAN DARLEY.'
    },
    {
      icon: Wrench,
      title: 'Obróbka mechaniczna CNC',
      description: 'Toczenie i frezowanie na centrach obróbczych DOOSAN i AVIA.'
    },
    {
      icon: Welding,
      title: 'Spawanie ręczne i zrobotyzowane',
      description: 'Spawanie z wykorzystaniem robotów OTC Daihen i wykwalifikowanych spawaczy.'
    },
    {
      icon: Package,
      title: 'Montaż mechaniczny i elektryczny',
      description: 'Kompleksowy montaż zgodny z najwyższymi standardami jakości.'
    },
    {
      icon: Award,
      title: 'Pakowanie i przygotowanie do wysyłki',
      description: 'Bezpieczne pakowanie i logistyka dostaw.'
    }
  ]

  return (
    <section id="oferta" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasza oferta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PRECIMET H.C.E. - usługi kooperacyjne, outsourcing produkcji
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Jako Państwa dostawca oferujemy usługi kooperacyjne oraz outsourcing produkcji. 
            W naszym portfolio usług oferujemy współpracę R&D, tworzenie technologii, 
            usługi produkcyjne oraz usługi związane z montażem mechanicznym i elektrycznym Państwa zamówień.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">
              Certyfikowany system zarządzania jakością
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Od 2015 roku dbamy i utrzymujemy certyfikowany system zarządzania jakością 
            zgodny z ISO 9000:2015.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Dowiedz się więcej
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
