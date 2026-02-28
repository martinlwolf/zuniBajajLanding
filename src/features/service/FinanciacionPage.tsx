import React from 'react'
import ServiceForm from './ServiceForm'

const FinanciacionPage: React.FC = () => {
  const bg = '/images/motos/background/Bajaj-Dominar-400-2025-1.webp'

  return (
    <main
      className="h-screen bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Center content vertically and horizontally; keep everything in one screen */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow">TE FIJAMOS EL PRECIO!</h1>
            <p className="mt-2 text-white/90 text-sm sm:text-base">Dejanos tus datos y te contactamos</p>
          </div>

          <div className="w-full flex justify-center">
            <div className="max-h-[75vh] overflow-auto">
              <ServiceForm title="COMUNICATE CON NOSOTROS" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FinanciacionPage
