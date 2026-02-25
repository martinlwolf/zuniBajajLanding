import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../../components/ui/carousel'
import { Button } from '../../components/ui/button'
import { cn } from '../../lib/utils'

export type HeroSlide = {
  title: string
  description: string
  image: string
  badge?: string
  link: string
  secondaryLink?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export type HeroSliderProps = {
  slides: HeroSlide[]
  className?: string
  heightClass?: string
  primaryLabel?: string
  secondaryLabel?: string
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  className,
  heightClass = 'h-[70vh] md:h-[70vh]',
  primaryLabel = 'Ver más',
  secondaryLabel = 'Conocer más',
  autoplay = true,
  autoplayDelay = 5000,
  pauseOnHover = true,
}) => {
  const memoSlides = React.useMemo(() => slides, [slides])
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi || !autoplay) return
    let timer: number | undefined

    const start = () => {
      stop()
      timer = window.setInterval(() => {
        emblaApi.scrollNext()
      }, autoplayDelay)
    }

    const stop = () => {
      if (timer) {
        clearInterval(timer)
        timer = undefined
      }
    }

    if (!(pauseOnHover && isHovered)) {
      start()
    }

    const onPointerDown = () => stop()
    emblaApi.on('pointerDown', onPointerDown)

    return () => {
      stop()
      emblaApi.off('pointerDown', onPointerDown)
    }
  }, [emblaApi, autoplay, autoplayDelay, pauseOnHover, isHovered, selectedIndex])

  return (
    <div
      className={cn('group w-full relative', className)}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setEmblaApi}
        opts={{ loop: true, dragFree: false, align: 'start', duration: 25 }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {memoSlides.map((slide, idx) => (
            <CarouselItem key={idx} className="pl-0">
              <div className={cn('relative w-full', heightClass)}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 h-full">
                  <div className="container mx-auto h-full px-6">
                    <div className="flex h-full items-center">
                      <div className="max-w-3xl text-left text-white">
                        {slide.badge && (
                          <span className="inline-block mb-4 border border-white/30 bg-white/10 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
                            {slide.badge}
                          </span>
                        )}

                        <motion.div
                          key={selectedIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: idx === selectedIndex ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: 'linear' }}
                        >
                          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            {slide.title}
                          </h1>

                          <p className="mt-5 text-base md:text-lg text-white/90">
                            {slide.description}
                          </p>

                          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
                            <a href={slide.link} className="w-full sm:w-auto">
                              <Button
                                size="lg"
                                variant="destructive"
                                className="w-full sm:w-auto shadow-md font-extrabold h-12 px-7 text-base md:text-lg"
                              >
                                {slide.primaryLabel ?? primaryLabel}
                              </Button>
                            </a>
                            {slide.secondaryLink && (
                              <a href={slide.secondaryLink} className="w-full sm:w-auto">
                                <Button
                                  size="lg"
                                  variant="outline-light"
                                  className="w-full sm:w-auto font-extrabold h-12 px-7 text-base md:text-lg"
                                >
                                  {slide.secondaryLabel ?? secondaryLabel}
                                </Button>
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="pointer-events-auto absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              aria-label={`Ir al slide ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'size-2 rounded-full transition-colors',
                index === selectedIndex
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60',
              )}
            />
          ))}
        </div>

        <CarouselPrevious
          className={cn(
            '!size-10 rounded-full bg-black/30 text-white border-none transition-opacity duration-200 pointer-events-none opacity-0',
            'group-hover:opacity-100 group-hover:pointer-events-auto',
            '!left-6 top-1/2 -translate-y-1/2',
          )}
        />
        <CarouselNext
          className={cn(
            '!size-10 rounded-full bg-black/30 text-white border-none transition-opacity duration-200 pointer-events-none opacity-0',
            'group-hover:opacity-100 group-hover:pointer-events-auto',
            '!right-6 top-1/2 -translate-y-1/2',
          )}
        />
      </Carousel>
    </div>
  )
}

export default HeroSlider
