import { Award, Users, Clock, Target } from 'lucide-react'

export default function AboutUs() {
  const highlights = [
    {
      icon: Clock,
      title: '15 lat doświadczenia',
      description: 'Od 2015 roku dbamy i utrzymujemy certyfikowany system zarządzania jakością zgodny z ISO 9000:2015.'
    },
    {
      icon: Users,
      title: 'Wykfalifikowany zespół',
      description: 'Nasi specjaliści posiadają wieloletnie doświadczenie w branży produkcyjnej i są gotowi sprostać najtrudniejszym wyzwaniom.'
    },
    {
      icon: Target,
      title: 'Jakość i terminowość',
      description: 'Gwarantujemy najwyższą jakość wykonania oraz dotrzymanie wszystkich terminów realizacji zleceń.'
    },
    {
      icon: Award,
      title: 'Certyfikaty jakości',
      description: 'Posiadamy wszystkie niezbędne certyfikaty i spełniamy najwyższe standardy branżowe.'
    }
  ]

  return (
    <section id="o-nas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O nas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PRECIMET H.C.E. - lider w dziedzinie usług kooperacyjnych i outsourcing produkcji
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nasza historia i misja
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Od 2015 roku specjalizujemy się w dostarczaniu kompleksowych rozwiązań produkcyjnych 
              dla firm z różnych branż. Nasza misja to zapewnienie najwyższej jakości usług 
              przy jednoczesnym zachowaniu konkurencyjnych cen i terminowości realizacji.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jako Państwa dostawca oferujemy usługi kooperacyjne oraz outsourcing produkcji. 
              W naszym portfolio usług oferujemy współpracę R&D, tworzenie technologii, 
              usługi produkcyjne oraz usługi związane z montażem mechanicznym i elektrycznym Państwa zamówień.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Zajmujemy się również pakowaniem i przygotowaniem do wysyłki, zapewniając 
              kompleksową obsługę całego procesu produkcyjnego.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <p className="text-gray-600 text-sm">Lat doświadczenia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3.5M+</div>
                <p className="text-gray-600 text-sm">Wyprodukowanych części</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <p className="text-gray-600 text-sm">Gatunków blach</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <p className="text-gray-600 text-sm">Zadowolonych klientów</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <highlight.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 ml-3">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
