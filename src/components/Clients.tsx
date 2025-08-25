export default function Clients() {
  const clients = [
    'Zemat Technology Group',
    'S.Z.T.K. TAPS',
    'INTAP',
    'HUTCHINSON',
    'COOPER',
    'NEONICA',
    'INPOST',
    'LINKAP',
    'ABB',
    'AMII',
    'MAPAL',
    'LIFTTECHNIK',
    'WINDPOL',
    'DŹWIG SERVICE',
    'HAPAM',
    'LIW CARE',
    'SCHINDLER',
    'AQ WIRING',
    'BEST WELD',
    'BSH',
    'COMPIN',
    'ENKEV',
    'GERDA',
    'MAKROMED'
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zaufali nam między innymi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Współpracujemy z renomowanymi firmami z różnych branż
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-50 transition-colors duration-200 border border-gray-200 hover:border-primary-300"
            >
              <div className="text-sm font-medium text-gray-700 leading-tight">
                {client}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Dołącz do grona zadowolonych klientów PRECIMET H.C.E.
          </p>
        </div>
      </div>
    </section>
  )
}
