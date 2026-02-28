import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HamburguerMenu = () => {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const handleNavigate = (to: string) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <div className="md:hidden ml-auto flex items-center">
      {/* Toggle button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="w-10 h-10 flex items-center justify-center text-white border border-white/60 bg-[#005ec2]"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6l-12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-[#005ec2] text-white">
          <div className="flex items-center justify-center py-4 border-b border-white/20">
            <img
              src="/images/bajaj_logo.webp"
              alt="Bajaj"
              className="h-7 w-auto object-contain"
              loading="eager"
            />
          </div>
          <nav className="flex flex-col">
            <button
              type="button"
              onClick={() => handleNavigate('/dominar')}
              className="px-4 py-3 border-b border-white/20 text-sm font-semibold uppercase text-left"
            >
              DOMINAR
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('/pulsar-ns')}
              className="px-4 py-3 border-b border-white/20 text-sm font-semibold uppercase text-left"
            >
              PULSAR NS
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('/street')}
              className="px-4 py-3 border-b border-white/20 text-sm font-semibold uppercase text-left"
            >
              STREET
            </button>

            {/* Simple links */}
            <button
              type="button"
              onClick={() => handleNavigate('/financiacion')}
              className="px-4 py-3 border-b border-white/20 text-sm font-semibold uppercase text-left"
            >
              FINANCIACION
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('/service-oficial')}
              className="px-4 py-3 border-b border-white/20 text-sm font-semibold uppercase text-left"
            >
              SERVICE OFICIAL
            </button>
            <button
              type="button"
              onClick={() => handleNavigate('/nosotros')}
              className="px-4 py-3 border-b border-white/20 text-sm font-semibold uppercase text-left"
            >
              NOSOTROS
            </button>

            {/* CONTACTO destacado */}
            <button
              type="button"
              onClick={() => handleNavigate('/#contacto')}
              className="m-4 mt-3 bg-white text-[#005ec2] px-4 py-3 text-base font-bold uppercase shadow-md hover:shadow-lg hover:bg-gray-100 transition-colors w-auto text-center"
            >
              CONTACTO
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default HamburguerMenu
