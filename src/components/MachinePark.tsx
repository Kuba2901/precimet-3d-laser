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
      description: 'Nowoczesna wycinarka laserowa do precyzyjnego cięcia blach'
    },
    {
      icon: Settings,
      title: 'Prasa serwomechaniczna SAFAN DARLEY',
      description: 'Zaawansowana prasa do gięcia blach z kontrolą serwomechaniczną'
    },
    {
      icon: Cog,
      title: 'Pionowe centrum obróbcze DOOSAN',
      description: 'Wysokiej jakości centrum obróbcze do frezowania pionowego'
    },
    {
      icon: Cog,
      title: 'Poziome centrum obróbcze DOOSAN',
      description: 'Precyzyjne centrum obróbcze do frezowania poziomego'
    },
    {
      icon: Cog,
      title: 'Pionowe centrum obróbcze AVIA',
      description: 'Zaawansowane centrum obróbcze do obróbki skrawaniem'
    },
    {
      icon: Wrench,
      title: 'Numeryczna przecinarka z automatycznym ukosowaniem',
      description: 'Automatyczna przecinarka z funkcją ukosowania krawędzi'
    },
    {
      icon: Wrench,
      title: 'Numeryczna giętarka rur i profili',
      description: 'Precyzyjna giętarka do rur i profili metalowych'
    },
    {
      icon: Welding,
      title: 'Robot spawalniczy OTC Daihen',
      description: 'Zaawansowany robot spawalniczy do automatyzacji procesów'
    },
    {
      icon: Zap,
      title: 'Wycinarka laserowa z obrotową głowicą Prima Industrie',
      description: 'Wycinarka laserowa z obrotową głowicą do cięć 3D'
    },
    {
      icon: Cog,
      title: 'Poziome centrum obróbcze ROMI',
      description: 'Profesjonalne centrum obróbcze do obróbki skrawaniem'
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
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <machine.icon className="h-6 w-6 text-blue-600" />
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

        <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Nowoczesne technologie w Twojej dyspozycji
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            Nasz park maszynowy jest stale modernizowany, aby zapewnić 
            najwyższą jakość i wydajność produkcji
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Zapytaj o ofertę
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
