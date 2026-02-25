import BranchCard from './BranchCard'
import { BRANCHES } from './branchData'

const AboutPage = () => {
  const mainBranch = BRANCHES.find((branch) => branch.id === 17)
  const mainBranchWhatsappHref = mainBranch ? `https://wa.me/${mainBranch.whatsapp}` : 'https://wa.me/'
  const xlColumns = 5
  const xlRemainder = BRANCHES.length % xlColumns
  const xlLastRowStart = BRANCHES.length - xlRemainder

  const getBranchGridClassName = (index: number) => {
    const classes = [
      index % 2 === 1 ? 'sm:translate-y-6' : 'sm:translate-y-0',
      index % 3 === 1 ? 'md:translate-y-7' : 'md:translate-y-0',
      index % 4 === 1 || index % 4 === 3 ? 'lg:translate-y-8' : 'lg:translate-y-0',
      index % 5 === 1 || index % 5 === 3 ? 'xl:translate-y-10' : 'xl:translate-y-0',
    ]

    if (xlRemainder === 3 && index === xlLastRowStart) {
      classes.push('xl:col-start-2')
    }

    return classes.join(' ')
  }

  return (
    <main className="pt-[72px] md:pt-[86px] bg-white min-h-screen">
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/branches/about_main_photo.webp"
          alt="Motozuni Bajaj"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide">
            NOSOTROS
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-white/90 font-semibold">
            Comprometidos con la pasión por las motos y la atención de calidad.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-4xl md:text-5xl font-black text-[#005ec2]">Sucursales</p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#1f1f1f] uppercase leading-tight">
            Motozuni Bajaj Luis Guillón
          </h2>

          <div className="mt-8 mx-auto max-w-4xl">
            <div className="w-full bg-white border border-gray-200 shadow-lg p-4 md:p-6">
              <img
                src="/images/branches/LG2.webp"
                alt="Motozuni Bajaj Luis Guillón"
                className="mx-auto w-full max-w-3xl h-auto object-contain"
              />
              <p className="mt-4 text-xl md:text-2xl font-bold text-[#005ec2] ">
                Concesionario y Service Oficial
              </p>

              {mainBranch && (
                <div className="mt-3 flex items-center justify-center gap-2 text-[#1f1f1f]">
                  <p className="text-sm md:text-base font-semibold">{mainBranch.address}</p>
                  <a
                    href={mainBranchWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp sucursal principal"
                    className="bg-[#25d366] hover:bg-[#20ba5a] text-white p-1.5 rounded-full shadow transition-colors"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          <p className="mt-10 text-2xl md:text-3xl font-bold text-[#1f1f1f] uppercase">
            Todas nuestras sucursales
          </p>

          <div className="mt-8 mx-auto max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-7 lg:gap-x-6 lg:gap-y-8 xl:gap-x-7 xl:gap-y-10 pb-10 text-left">
            {BRANCHES.map((branch, index) => (
              <BranchCard
                key={branch.id}
                branch={branch}
                className={getBranchGridClassName(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
