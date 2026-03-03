import React from 'react'
import ServiceForm from './ServiceForm'

const FinanciacionPage: React.FC = () => {
  const bg = '/images/motos/background/Bajaj-Dominar-400-2025-1.webp'

  return (
    <main
      className="h-screen bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      {/* Center content vertically and horizontally; keep everything in one screen */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="text-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-16">TE FIJAMOS EL PRECIO!</h1>
              <p className="mt-2 text-white/90 text-sm sm:text-base">Dejanos tus datos y te contactamos</p>
          </div>

          <div className="w-full flex justify-center">
              <div className="w-full max-w-[380px] md:max-w-[520px]">
                <ServiceForm title="COMUNICATE CON NOSOTROS" compact buttonText="SOLICITAR ASESORAMIENTO" />
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FinanciacionPage
