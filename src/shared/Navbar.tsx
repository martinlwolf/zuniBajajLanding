import { Link } from 'react-router-dom'
import HamburguerMenu from './HamburguerMenu'

const Navbar = () => {
  const navLinkClass =
    "relative flex-1 flex items-center justify-center uppercase text-white hover:bg-[#004ba1] transition-all text-base lg:text-lg font-semibold after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-2 after:h-[2px] after:bg-[#e30613] after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#005ec2] text-white shadow-md">
      {/* Contenedor principal: items-stretch permite que los hijos ocupen todo el alto */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex items-stretch min-h-[72px] lg:min-h-[86px]">
        
        {/* Logo: Alineado a la izquierda */}
        <div className="flex-shrink-0 flex items-center mr-4">
          <Link to="/">
            <img
              className="h-8 lg:h-10 w-auto object-contain transition-all"
              src="/images/bajaj_logo_navbar.webp"
              alt="Bajaj Logo"
              loading="eager"
            />
          </Link>
        </div>

        {/* Menu de Navegación desktop: flex-1 para ocupar todo el espacio restante */}
        <div className="hidden md:flex flex-1 items-stretch">
          
          <Link
            to="/dominar"
            className={navLinkClass}
          >
            DOMINAR
          </Link>

          <Link
            to="/pulsar-ns"
            className={`${navLinkClass} whitespace-nowrap`}
          >
            PULSAR NS
          </Link>

          <Link
            to="/street"
            className={navLinkClass}
          >
            STREET
          </Link>

          {/* Links Simples */}
          <Link
            to="/financiacion"
            className={`${navLinkClass} text-center`}
          >
            FINANCIACIÓN
          </Link>

          <Link
            to="/service-oficial"
            className={`${navLinkClass} text-center leading-tight`}
          >
            SERVICE OFICIAL
          </Link>

          <Link
            to="/eventos"
            className={`${navLinkClass} text-center leading-tight`}
          >
            EVENTOS
          </Link>

          <Link
            to="/nosotros"
            className={`${navLinkClass} text-center`}
          >
            NOSOTROS
          </Link>

          {/* CONTACTO: Al final y destacado */}
          <div className="flex items-center ml-4">
            <Link
              to="/contacto"
              className="px-5 lg:px-7 py-2.5 bg-white text-[#005ec2] uppercase font-bold shadow-md hover:shadow-lg hover:bg-gray-100 transition-all whitespace-nowrap text-sm lg:text-base"
            >
              CONTACTO
            </Link>
          </div>

        </div>

        {/* Menú móvil (solo visible en pantallas pequeñas) */}
        <HamburguerMenu />
      </div>
    </nav>
  )
}

export default Navbar