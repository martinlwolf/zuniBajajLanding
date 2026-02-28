import HeroSlider from './HeroSlider'
import { postContacto } from '../../services/service'
import { useState } from 'react'

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
      await postContacto(payload)
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

  return (
    <main className="pt-[72px] md:pt-[86px] bg-white">
      <HeroSlider slides={slides} />

      {/* Catalog section: between slider and contact */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005ec2] mb-6 text-center">Conocé nuestro catálogo</h2>

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

      <section id="contacto" className="bg-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#005ec2] mb-6 text-center">
            CONTACTANOS
          </h2>
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-none p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
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
      </section>
    </main>
  )
}

export default HomePage
