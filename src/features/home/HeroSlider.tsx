import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../components/ui/carousel'
import { cn } from '../../lib/utils'

export type HeroSlide = {
  title: string
  description: string
  imageDesktop: string
  imageMobile: string
  link: string
}

export type HeroSliderProps = {
  slides: HeroSlide[]
  className?: string
  autoplayDelay?: number
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  className,
  autoplayDelay = 5000,
}) => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, autoplayDelay)

    return () => {
      clearInterval(interval)
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, autoplayDelay])

  return (
    <div className={cn('group w-full relative overflow-hidden', className)}>
      <Carousel
        setApi={setEmblaApi}
        opts={{ loop: true, duration: 30 }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="pl-0">
              {/* Contenedor flexible: la imagen es fluida (w-full h-auto) para mantener la relación de aspecto
                  y reducir la altura al achicar la pantalla evitando el recorte lateral. Se limita la altura
                  máxima en desktop con `md:max-h-...` para no exceder tamaños grandes.
              */}
              <div className="relative w-full transition-all duration-500 bg-gray-100 md:max-h-[600px] lg:max-h-[700px]">
                {/* Desktop image (shown on md and up) - fluid */}
                <img
                  src={slide.imageDesktop}
                  alt={slide.title}
                  loading="eager"
                  className="hidden md:block w-full h-auto object-center"
                />
                {/* Mobile image (shown on small screens) - fluid */}
                <img
                  src={slide.imageMobile}
                  alt={slide.title}
                  loading="eager"
                  className="block md:hidden w-full h-auto object-center"
                />

                {/* Overlay para suavizar la transición y mejorar contraste */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Indicadores: Líneas Rectas */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="relative h-1 flex-1 max-w-[50px] overflow-hidden bg-white/30 transition-all"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-white transition-transform",
                  index === selectedIndex ? "translate-x-0" : "-translate-x-full"
                )}
                style={{
                  transitionDuration: index === selectedIndex ? `${autoplayDelay}ms` : '300ms',
                  transitionTimingFunction: 'linear'
                }}
              />
            </button>
          ))}
        </div>

        {/* Flechas Navegación (Solo en Desktop) */}
        <CarouselPrevious
          className="hidden md:flex !size-12 rounded-none bg-black/20 text-white border-none hover:bg-[#005ec2] transition-all !left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
        />
        <CarouselNext
          className="hidden md:flex !size-12 rounded-none bg-black/20 text-white border-none hover:bg-[#005ec2] transition-all !right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
        />
      </Carousel>
    </div>
  )
}

export default HeroSlider