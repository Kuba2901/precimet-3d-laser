import { Facebook, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              PRECIMET H.C.E.
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Profesjonalne usługi kooperacyjne i outsourcing produkcji. 
              Od 15 lat dostarczamy naszym Klientom najwyższej jakości usługi.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:biuro@precimet.pl"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#oferta" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Nasza oferta
                </a>
              </li>
              <li>
                <a href="#o-nas" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  O nas
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <p>ul. Pomorska 555</p>
              <p>92-735 Łódź</p>
              <p>NIP: 728-280-49-18</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} by PRECIMET H.C.E. Sp. z o.o. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                RODO
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                OWS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
