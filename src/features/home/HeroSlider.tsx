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
  image: string
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
    
    // Autoplay nativo simple
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
              {/* Ajuste de altura: 
                  - Mobile: h-[60vh] para que no ocupe todo y se vea contenido abajo.
                  - Desktop: calc(100vh - 80px) asumiendo que tu navbar mide 80px.
              */}
              <div className="relative w-full h-[60vh] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-180px)] transition-all duration-500">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Overlay sutil para legibilidad si agregas texto luego */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Indicadores: Líneas Rectas Modernas */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="relative h-1 flex-1 max-w-[60px] overflow-hidden bg-white/30 transition-all"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-white transition-transform duration-300",
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

        {/* Flechas Navegación */}
          <CarouselPrevious
            className={cn(
              'hidden md:!flex !size-10 rounded-full bg-black/30 text-white border-none transition-opacity duration-200 pointer-events-none opacity-0',
              'group-hover:opacity-100 group-hover:pointer-events-auto',
              '!left-6 top-1/2 -translate-y-1/2',
            )}
          />
          <CarouselNext
            className={cn(
              'hidden md:!flex !size-10 rounded-full bg-black/30 text-white border-none transition-opacity duration-200 pointer-events-none opacity-0',
              'group-hover:opacity-100 group-hover:pointer-events-auto',
              '!right-6 top-1/2 -translate-y-1/2',
            )}
          />
      </Carousel>
    </div>
  )
}

export default HeroSlider