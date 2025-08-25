import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Od 15 lat dostarczamy naszym Klientom{' '}
            <span className="text-blue-600">swoje usługi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Profesjonalne usługi kooperacyjne i outsourcing produkcji.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Współpraca R&D
              </h3>
              <p className="text-gray-600">
                Tworzenie technologii i innowacyjne rozwiązania
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Szybkie prototypowanie
              </h3>
              <p className="text-gray-600">
                Szybkie wytwarzanie prototypów i testowanie
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Profesjonalne usługi
              </h3>
              <p className="text-gray-600">
                Wysokiej jakości wykonanie i terminowość
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#kontakt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-2"
            >
              Skontaktuj się z nami!
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                3.5M+
              </div>
              <p className="text-gray-600">
                Wyprodukowaliśmy już ponad 3,5 miliona części dla naszych Klientów.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <p className="text-gray-600">
                Gatunków blach w naszym magazynie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
