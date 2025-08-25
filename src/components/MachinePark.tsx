import { 
  Zap, 
  Settings, 
  Cog, 
  Wrench, 
  Zap as Welding, 
  ArrowRight 
} from 'lucide-react'

export default function MachinePark() {
  const machines = [
    {
      icon: Zap,
      title: 'Wycinarka laserowa MAZAK Fiber',
      description: 'Nowoczesna wycinarka laserowa do precyzyjnego cięcia blach',
      image: '/images/mazak-laser.jpg'
    },
    {
      icon: Settings,
      title: 'Prasa serwomechaniczna SAFAN DARLEY',
      description: 'Zaawansowana prasa do gięcia blach z kontrolą serwomechaniczną',
      image: '/images/safan-press.jpg'
    },
    {
      icon: Cog,
      title: 'Pionowe centrum obróbcze DOOSAN',
      description: 'Wysokiej jakości centrum obróbcze do frezowania pionowego',
      image: '/images/doosan-vertical.jpg'
    },
    {
      icon: Cog,
      title: 'Poziome centrum obróbcze DOOSAN',
      description: 'Precyzyjne centrum obróbcze do frezowania poziomego',
      image: '/images/doosan-horizontal.jpg'
    },
    {
      icon: Cog,
      title: 'Pionowe centrum obróbcze AVIA',
      description: 'Zaawansowane centrum obróbcze do obróbki skrawaniem',
      image: '/images/avia-machining.jpg'
    },
    {
      icon: Wrench,
      title: 'Numeryczna przecinarka z automatycznym ukosowaniem',
      description: 'Automatyczna przecinarka z funkcją ukosowania krawędzi',
      image: '/images/cutting-machine.jpg'
    },
    {
      icon: Wrench,
      title: 'Numeryczna giętarka rur i profili',
      description: 'Precyzyjna giętarka do rur i profili metalowych',
      image: '/images/tube-bender.jpg'
    },
    {
      icon: Welding,
      title: 'Robot spawalniczy OTC Daihen',
      description: 'Zaawansowany robot spawalniczy do automatyzacji procesów',
      image: '/images/otc-robot.jpg'
    },
    {
      icon: Zap,
      title: 'Wycinarka laserowa z obrotową głowicą Prima Industrie',
      description: 'Wycinarka laserowa z obrotową głowicą do cięć 3D',
      image: '/images/prima-laser.jpg'
    },
    {
      icon: Cog,
      title: 'Poziome centrum obróbcze ROMI',
      description: 'Profesjonalne centrum obróbcze do obróbki skrawaniem',
      image: '/images/romi-machining.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasz park maszynowy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wykorzystujemy najnowocześniejsze maszyny renomowanych producentów
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-primary-300 overflow-hidden"
            >
              <div className="mb-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <machine.icon className="h-16 w-16 text-primary-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Zdjęcie maszyny</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <machine.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">
                  {machine.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {machine.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Nowoczesne technologie w Twojej dyspozycji
          </h3>
          <p className="text-primary-100 text-lg mb-6">
            Nasz park maszynowy jest stale modernizowany, aby zapewnić 
            najwyższą jakość i wydajność produkcji
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Zapytaj o ofertę
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
