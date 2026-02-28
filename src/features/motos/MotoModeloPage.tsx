import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../components/ui/carousel'
import PdfModal from '../../components/ui/PdfModal'

export type MotoSpec = {
  label: string
  value?: string | number | null
}

export type MotoSpecSection = {
  title: string
  items: MotoSpec[]
}

export type MotoModeloPageData = {
  brand: string
  model: string
  version?: string
  images: string[]
  specSections: MotoSpecSection[]
  whatsappHref?: string
  pdfLink?: string
  background?: string
}

export type MotoModeloPageProps = {
  data: MotoModeloPageData
}

const SpecRow: React.FC<MotoSpec> = ({ label, value }) => (
  <div className="flex items-center justify-between text-sm py-1 leading-[1.05]">
    <span className="text-gray-600 leading-[1.05]">{label}:</span>
    <span className="text-gray-900 font-medium ml-2 leading-[1.05]">
      {value ?? 'N/A'}
    </span>
  </div>
)

const MotoModeloPage: React.FC<MotoModeloPageProps> = ({ data }) => {
  const images = (data.images ?? []).filter(Boolean)
  const [current, setCurrent] = React.useState(0)

  const handleSetApi = (api: CarouselApi) => {
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }

  const fallbackImg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='20' font-family='Arial'%3EImagen%3C/text%3E%3C/svg%3E"

  const title = [data.brand, data.model].filter(Boolean).join(' ')
  const whatsappHref = data.whatsappHref ?? 'https://wa.me/'

  const [pdfOpen, setPdfOpen] = React.useState(false)
  const [pdfUrl, setPdfUrl] = React.useState<string | undefined>(undefined)

  const openFicha = async () => {
    if (!data.pdfLink) return
    try {
      const parts = data.pdfLink.split('/')
      const basename = parts[parts.length - 1]
      const localPath = `/files/${basename}`
      const res = await fetch(localPath, { method: 'HEAD' })
      setPdfUrl(res.ok ? localPath : data.pdfLink)
    } catch (e) {
      setPdfUrl(data.pdfLink)
    }
    setPdfOpen(true)
  }

  const pageStyle: React.CSSProperties | undefined = data.background
    ? {
        backgroundImage: `url(${data.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined

  return (
    <main style={pageStyle} className="pt-[72px] md:pt-[86px] min-h-screen relative bg-fixed">
      {/* Overlay para mejorar legibilidad sobre el background */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 py-10 relative z-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver al inicio</span>
          </Link>

          <div className="text-left sm:text-right">
            <h1 className="text-lg md:text-xl font-extrabold text-white">{title}</h1>
            {data.version && <p className="text-xs text-white/90 mt-1">{data.version}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border border-gray-200 bg-white/80">
          {/* Izquierda: imagen (fondo blanco, ocupa la mitad) */}
          <div className="flex flex-col p-3 md:p-5 bg-white h-full">
            <div className="flex flex-col justify-start mb-4">
              <div className="relative overflow-hidden bg-white h-full">
                <Carousel className="w-full" setApi={handleSetApi} opts={{ loop: true }}>
                  <CarouselContent>
                    {images.map((src, idx) => (
                      <CarouselItem key={idx} className="basis-full">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-white h-full">
                          <img
                            src={src}
                            alt={`${title} ${idx + 1}`}
                            className="h-full w-full object-contain p-2"
                            loading="lazy"
                            onError={(e) => {
                              ;(e.currentTarget as HTMLImageElement).src = fallbackImg
                            }}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
                    </>
                  )}
                </Carousel>
              </div>

              {images.length > 1 && (
                <div className="flex justify-center gap-1 mt-3">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${current === idx ? 'bg-red-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              )}
              {/* Small WhatsApp and PDF buttons under the slider */}
              <div className="mt-3 flex w-full justify-center md:justify-start gap-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#7AB834] hover:bg-[#20BA5A] text-white flex-1 h-10 flex items-center justify-center text-center text-sm font-semibold shadow-sm uppercase rounded-none"
                  aria-label="Consultar por WhatsApp"
                >
                  CONSULTAR POR WHATSAPP
                </a>
                {data.pdfLink && (
                  <button
                    onClick={openFicha}
                    className="bg-[#0047BB] hover:bg-[#004ba1] text-white flex-1 h-10 flex items-center justify-center text-sm font-semibold shadow-sm uppercase rounded-none"
                  >
                    VER FICHA TECNICA
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Derecha: especificaciones */}
          <div className="relative overflow-hidden bg-transparent">
            <div className="overflow-y-auto h-full p-4 md:p-5">
              <div className="space-y-4">
                <div>
                  <div className="text-xs mb-4 text-[#1F1F1F]">Especificaciones Técnicas</div>

                  {data.specSections.map((section) => (
                    <div key={section.title} className="mb-4">
                      <h4 className="text-sm font-semibold text-[#005ec2] mb-3 uppercase tracking-wide">
                        {section.title}
                      </h4>
                      <div className="border border-gray-200 p-6 bg-transparent">
                        <div className="grid grid-cols-2 gap-6">
                          {section.items.map((item) => (
                            <div key={item.label} className="flex flex-col">
                              <p className="text-base md:text-lg font-bold text-gray-900">{item.value ?? 'N/A'}</p>
                              <p className="text-xs text-gray-500 mt-1 uppercase">{item.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* PDF button below all specifications */}
                  {/** PDF button moved to left panel */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Removed bottom WhatsApp button (now using the smaller buttons under the slider) */}

        <PdfModal
          open={pdfOpen}
          onClose={() => setPdfOpen(false)}
          url={pdfUrl}
          title={`${title} Ficha Técnica`}
        />
      </div>
    </main>
  )
}

export default MotoModeloPage
