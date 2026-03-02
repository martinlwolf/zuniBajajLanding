const CatalogSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#005ec2] mb-6 text-center">
          Conocé nuestro catálogo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* DOMINAR */}
          <a href="/dominar" className="group block">
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50">
              <img
                src="/images/home/motos/dominar-racing-red-Photoroom.webp"
                alt="Dominar"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">DOMINAR</h3>
            </div>
          </a>

          {/* PULSAR */}
          <a href="/pulsar-ns" className="group block">
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50">
              <img
                src="/images/home/motos/NS-200-1024x655.webp"
                alt="Pulsar"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">PULSAR</h3>
            </div>
          </a>

          {/* STREET */}
          <a href="/street" className="group block">
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50">
              <img
                src="/images/home/motos/Boxer-CT100-Negro_azul-lateral-768x512.webp"
                alt="Street"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">STREET</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CatalogSection
