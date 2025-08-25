import { 
  Cog, 
  Users, 
  Shield, 
  Lightbulb,
  CheckCircle 
} from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Cog,
      title: 'Nowoczesny park maszynowy',
      description: 'Posiadamy nowoczesny park maszynowy renomowanych producentów: DOOSAN, MAZAK, OTC, KEMPPI, SAFAN i wiele innych.'
    },
    {
      icon: Users,
      title: 'Na zamówienie',
      description: 'Z naszymi Klientami działamy w sposób elastyczny dostosowując się do indywidualnych potrzeb. Pracujemy zarówno jednostkowo, jak i w oparciu o duże wolumeny i harmonogramy.'
    },
    {
      icon: Shield,
      title: 'Wysokiej jakości materiały i surowce',
      description: 'Stosujemy materiały i surowce wyłącznie od sprawdzonych i wiarygodnych dostawców.'
    },
    {
      icon: Lightbulb,
      title: 'Profesjonalne doradztwo',
      description: 'Nasi wykfalifikowani współpracownicy kładą szczególny nacisk na zadowolenie naszych Klientów. Dzielimy się wiedzą, doświadczeniem, aby nasi Klienci osiągali założone cele.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dlaczego warto z nami współpracować?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy kompleksowe rozwiązania produkcyjne z najwyższą jakością wykonania
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
            >
              <div className="flex items-start mb-6">
                <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                  <reason.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Obsługujemy zlecenia z całego terenu RP
          </h3>
          <p className="text-primary-100 text-lg mb-6">
            Nasz wykfalifikowany zespół jest gotowy do realizacji projektów 
            w każdym zakątku Polski
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span>Terminowość</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span>Jakość</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span>Doświadczenie</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span>Wsparcie techniczne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
