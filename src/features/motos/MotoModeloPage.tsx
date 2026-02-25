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

  return (
    <main className="pt-[72px] md:pt-[86px] bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver al inicio</span>
          </Link>

          <div className="text-left sm:text-right">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">{title}</h1>
            {data.version && <p className="text-sm text-gray-600 mt-1">{data.version}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
          {/* Izquierda: imagen */}
          <div className="flex flex-col p-3 md:p-5 bg-white">
            <div className="flex flex-col justify-start mb-4">
              <div className="relative overflow-hidden bg-white">
                <Carousel className="w-full" setApi={handleSetApi} opts={{ loop: true }}>
                  <CarouselContent>
                    {images.map((src, idx) => (
                      <CarouselItem key={idx} className="basis-full">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-white">
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
            </div>
          </div>

          {/* Derecha: especificaciones */}
          <div className="relative overflow-hidden bg-white">
            <div className="overflow-y-auto h-full p-4 md:p-5">
              <div className="space-y-4">
                <div>
                  <div className="text-lg mb-4 text-[#1F1F1F]">Especificaciones Técnicas</div>

                  {data.specSections.map((section) => (
                    <div key={section.title} className="mb-4">
                      <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
                        {section.title}
                      </h4>
                      <div className="bg-gray-50 border border-gray-200 p-3 space-y-[2px]">
                        {section.items.map((item) => (
                          <SpecRow key={item.label} label={item.label} value={item.value} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón WhatsApp abajo centrado */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white h-12 flex items-center justify-center text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            aria-label="Consultar por WhatsApp"
          >
            Consultar por WhatsApp
          </a>
          <p className="text-xs text-center text-gray-500 mt-2">Respondemos en minutos</p>
        </div>
      </div>
    </main>
  )
}

export default MotoModeloPage
