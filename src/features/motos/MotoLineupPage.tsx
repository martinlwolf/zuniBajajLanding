import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { MotoLineupData } from './motoLineupData'

type MotoLineupPageProps = {
  data: MotoLineupData
}

const MotoLineupPage = ({ data }: MotoLineupPageProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={data.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <section className="relative z-10 flex h-full items-center px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full max-w-md md:max-w-lg rounded-xl bg-black/30 p-4 sm:p-6 backdrop-blur-[2px]">
          <p
            className={`text-white/80 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-semibold transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {data.subtitle ?? 'Modelos'}
          </p>

          <h1
            className={`mt-2 text-3xl sm:text-4xl md:text-5xl text-white font-bold uppercase transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {data.title}
          </h1>

          <nav className="mt-6 flex flex-col gap-2 sm:gap-3" aria-label={`Modelos ${data.title}`}>
            {data.models.map((model, index) => (
              <Link
                key={model.to}
                to={model.to}
                className={`inline-flex max-w-full items-center border border-white/40 bg-white/10 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold uppercase text-white hover:bg-white hover:text-[#1f1f1f] transition-all duration-500 ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 120 + 220}ms` }}
              >
                <span className="break-words">{model.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}

export default MotoLineupPage
