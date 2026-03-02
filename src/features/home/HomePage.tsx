import HeroSlider from './HeroSlider'
import { postContacto } from '../../services/service'
import { useEffect, useState } from 'react'

const slides = [
  {
    title: '',
    description: '',
    imageDesktop: '/images/home/desktop/MOTOZUNI -(1920 x 700 px).webp',
    imageMobile: '/images/home/mobile/430 x 660 px.webp',
    link: '#',
  },
  {
    title: '',
    description: '',
    imageDesktop: '/images/home/desktop/MOTOZUNI -(1920 x 700 px) (2).webp',
    imageMobile: '/images/home/mobile/(430 x 660 px) (2).webp',
    link: '#',
  },
  {
    title: '',
    description: '',
    imageDesktop: '/images/home/desktop/MOTOZUNI -(1920 x 700 px) (3).webp',
    imageMobile: '/images/home/mobile/(430 x 660 px) (3).webp',
    link: '#',
  },
]

const HomePage = () => {
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    localidad: '',
  })

  const [motoLightsOn, setMotoLightsOn] = useState(false)

  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({})
  const [status, setStatus] = useState<
    | { type: 'idle' }
    | { type: 'submitting' }
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
  >({ type: 'idle' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload = {
      nombre: values.nombre.trim(),
      apellido: values.apellido.trim(),
      dni: values.dni.trim(),
      telefono: values.telefono.trim(),
      localidad: values.localidad.trim(),
    }

    const nextErrors: Partial<Record<keyof typeof values, string>> = {}
    ;(Object.keys(payload) as Array<keyof typeof payload>).forEach((key) => {
      if (!payload[key]) nextErrors[key] = 'Este campo es obligatorio.'
    })

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'error', message: 'Revisá los campos marcados.' })
      return
    }

    try {
      setStatus({ type: 'submitting' })
      await postContacto({ ...payload, origen: 'home' })
      setErrors({})
      setValues({ nombre: '', apellido: '', dni: '', telefono: '', localidad: '' })
      setStatus({ type: 'success', message: 'Enviado correctamente. Te vamos a contactar.' })
    } catch (err) {
      console.error('Error enviando formulario', err)
      setStatus({ type: 'error', message: 'No se pudo enviar. Intentá nuevamente.' })
    }
  }

  const onChange = (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.currentTarget.value
      setValues((prev) => ({ ...prev, [field]: nextValue }))
      setErrors((prev) => {
        if (!prev[field]) return prev
        const { [field]: _removed, ...rest } = prev
        return rest
      })
      if (status.type !== 'idle') setStatus({ type: 'idle' })
    }

  useEffect(() => {
    const title = 'Motozuni Bajaj | Motos Bajaj y Financiación'
    const description =
      'Concesionario Motozuni Bajaj. Conocé modelos Bajaj, consultá por financiación y recibí asesoramiento. Contactanos para disponibilidad y planes.'

    document.title = title

    const ensureMetaByName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    ensureMetaByName('description', description)

    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const homeUrl = origin ? `${origin}/` : '/'

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          '@id': `${homeUrl}#product`,
          name: 'Moto Bajaj - Motozuni',
          description:
            'Moto Bajaj disponible en Motozuni. Consultá por financiación, disponibilidad y asesoramiento.',
          brand: { '@type': 'Brand', name: 'Bajaj' },
          image: origin
            ? [`${origin}/images/home/motoLight/motoLuces.webp`]
            : ['/images/home/motoLight/motoLuces.webp'],
          url: homeUrl,
        },
        {
          '@type': 'MotorcycleDealer',
          '@id': `${homeUrl}#localbusiness`,
          name: 'Motozuni',
          url: homeUrl,
          logo: origin ? `${origin}/images/bajaj_logo_navbar.webp` : '/images/bajaj_logo_navbar.webp',
          image: origin
            ? [`${origin}/images/bajaj_logo_navbar.webp`]
            : ['/images/bajaj_logo_navbar.webp'],
        },
      ],
    }

    const scriptId = 'seo-schema-home'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.text = JSON.stringify(schema)

    return () => {
      const existing = document.getElementById(scriptId)
      existing?.parentNode?.removeChild(existing)
    }
  }, [])

  return (
    <main className="pt-[72px] md:pt-[86px] bg-white">
      <h1 className="sr-only">Motozuni Bajaj - Motos Bajaj, Financiación y Contacto</h1>
      <HeroSlider slides={slides} />

      <section id="contacto" className="bg-black py-10 md:py-14">
        <style>{`
          @keyframes key-pulse {
            0%, 100% { transform: rotate(0deg) translateX(0); }
            10% { transform: rotate(-8deg) translateX(-1px); }
            20% { transform: rotate(8deg) translateX(1px); }
            30% { transform: rotate(-8deg) translateX(-1px); }
            40% { transform: rotate(8deg) translateX(1px); }
            50% { transform: rotate(-6deg) translateX(-1px); }
            60% { transform: rotate(6deg) translateX(1px); }
            70% { transform: rotate(-4deg) translateX(-1px); }
            80% { transform: rotate(4deg) translateX(1px); }
            90% { transform: rotate(0deg) translateX(0); }
          }

          .key-pulse {
            animation: key-pulse 1.2s ease-in-out infinite;
            will-change: transform;
            transform-origin: 70% 30%;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_480px] gap-10 md:gap-12 items-start">
            <div className="flex flex-col items-start text-left gap-6">
              <div className="w-full flex flex-col items-start text-left gap-3">
                <img
                  src="/images/bajaj_logo_navbar.webp"
                  alt="Bajaj Motozuni - Concesionario de motos Bajaj"
                  className="h-16 md:h-24 w-auto object-contain"
                  loading="lazy"
                />
                <h2 className="text-white italic text-4xl md:text-6xl leading-[1.05]">
                  Subite a tu proxima{' '}
                  <span className="text-[#005ec2] font-black">AVENTURA</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-start justify-start gap-6 w-full">
                <div className="relative w-full max-w-[1000px] aspect-[16/10]">
                  <img
                    src="/images/home/motoLight/motoOscura.webp"
                    alt="Moto Bajaj en Motozuni con luces apagadas"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                      motoLightsOn ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <img
                    src="/images/home/motoLight/motoLuces.webp"
                    alt="Moto Bajaj en Motozuni con luces encendidas"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                      motoLightsOn ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>

                <div className="shrink-0 w-full sm:w-auto flex flex-col items-center text-center gap-2">
                  <p className="text-white uppercase text-xs md:text-sm font-semibold tracking-wide text-center">
                    toca la llave!
                  </p>
                  <button
                    type="button"
                    onClick={() => setMotoLightsOn((prev) => !prev)}
                    aria-pressed={motoLightsOn}
                    aria-label={
                      motoLightsOn
                        ? 'Apagar luces de la moto y ocultar formulario de contacto'
                        : 'Encender luces de la moto y mostrar formulario de contacto'
                    }
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    <img
                      src="/images/home/motoLight/llaves.png"
                      alt="Llave de encendido Bajaj en Motozuni"
                      className={`w-32 sm:w-36 md:w-44 lg:w-48 h-auto cursor-pointer select-none ${
                        motoLightsOn ? '' : 'key-pulse'
                      }`}
                      draggable={false}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`w-full lg:w-[480px] lg:justify-self-end transition-[opacity,transform] duration-700 ease-out transform-gpu ${
                motoLightsOn
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 translate-y-10 invisible pointer-events-none'
              }`}
              aria-hidden={!motoLightsOn}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 text-left">
                CONTACTANOS
              </h3>
              <div className="w-full bg-white shadow-lg rounded-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800 uppercase">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={onChange('nombre')}
                  aria-invalid={Boolean(errors.nombre)}
                  className={`w-full border px-3 py-2 text-sm md:text-base outline-none focus:border-[#005ec2] ${
                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.nombre && <p className="text-xs text-red-600">{errors.nombre}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800 uppercase">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={values.apellido}
                  onChange={onChange('apellido')}
                  aria-invalid={Boolean(errors.apellido)}
                  className={`w-full border px-3 py-2 text-sm md:text-base outline-none focus:border-[#005ec2] ${
                    errors.apellido ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.apellido && <p className="text-xs text-red-600">{errors.apellido}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800 uppercase">DNI</label>
                <input
                  type="text"
                  name="dni"
                  value={values.dni}
                  onChange={onChange('dni')}
                  aria-invalid={Boolean(errors.dni)}
                  className={`w-full border px-3 py-2 text-sm md:text-base outline-none focus:border-[#005ec2] ${
                    errors.dni ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.dni && <p className="text-xs text-red-600">{errors.dni}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800 uppercase">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={values.telefono}
                  onChange={onChange('telefono')}
                  aria-invalid={Boolean(errors.telefono)}
                  className={`w-full border px-3 py-2 text-sm md:text-base outline-none focus:border-[#005ec2] ${
                    errors.telefono ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.telefono && <p className="text-xs text-red-600">{errors.telefono}</p>}
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-800 uppercase">Localidad</label>
                <input
                  type="text"
                  name="localidad"
                  value={values.localidad}
                  onChange={onChange('localidad')}
                  aria-invalid={Boolean(errors.localidad)}
                  className={`w-full border px-3 py-2 text-sm md:text-base outline-none focus:border-[#005ec2] ${
                    errors.localidad ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.localidad && <p className="text-xs text-red-600">{errors.localidad}</p>}
              </div>

              {status.type !== 'idle' && status.type !== 'submitting' && (
                <div
                  className={`md:col-span-2 text-sm font-semibold ${
                    status.type === 'success' ? 'text-green-700' : 'text-red-600'
                  }`}
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}
              {status.type === 'submitting' && (
                <div className="md:col-span-2 text-sm text-gray-600" aria-live="polite">
                  Enviando...
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'submitting'}
                className={`md:col-span-2 mt-2 bg-[#005ec2] hover:bg-[#004ba1] text-white h-12 flex items-center justify-center text-base font-semibold uppercase transition-colors ${
                  status.type === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status.type === 'submitting' ? 'ENVIANDO...' : 'QUIERO INFORMACION'}
              </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
