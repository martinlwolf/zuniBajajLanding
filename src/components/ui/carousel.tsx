import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import { cn } from '../../lib/utils'

export type CarouselApi = EmblaCarouselType

type CarouselProps = {
  className?: string
  children: React.ReactNode
  opts?: EmblaOptionsType
  setApi?: (api: CarouselApi) => void
}

type CarouselContextType = {
  api: CarouselApi | null
}

const CarouselContext = React.createContext<CarouselContextType>({ api: null })

export function useCarousel() {
  return React.useContext(CarouselContext)
}

export function Carousel({ className, children, opts, setApi }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts)

  React.useEffect(() => {
    if (emblaApi && setApi) {
      setApi(emblaApi)
    }
  }, [emblaApi, setApi])

  return (
    <CarouselContext.Provider value={{ api: emblaApi ?? null }}>
      <div className={cn('relative', className)}>
        <div ref={emblaRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex', className)} {...props} />
}

export function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('min-w-0 flex-[0_0_100%]', className)}
      {...props}
    />
  )
}

type CarouselButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function CarouselPrevious({ className, ...props }: CarouselButtonProps) {
  const { api } = useCarousel()

  return (
    <button
      type="button"
      onClick={() => api?.scrollPrev()}
      className={cn(
        'absolute left-2 top-1/2 z-20 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white focus:outline-none',
        className,
      )}
      {...props}
    >
      <span className="sr-only">Anterior</span>
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  )
}

export function CarouselNext({ className, ...props }: CarouselButtonProps) {
  const { api } = useCarousel()

  return (
    <button
      type="button"
      onClick={() => api?.scrollNext()}
      className={cn(
        'absolute right-2 top-1/2 z-20 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white focus:outline-none',
        className,
      )}
      {...props}
    >
      <span className="sr-only">Siguiente</span>
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  )
}
