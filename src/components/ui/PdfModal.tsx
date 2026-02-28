import * as React from 'react'

type Props = {
  open: boolean
  onClose: () => void
  url?: string
  title?: string
}

const PdfModal: React.FC<Props> = ({ open, onClose, url, title }) => {
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white ring-1 ring-black/5" role="dialog" aria-modal="true">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="text-sm font-semibold text-gray-800">{title ?? 'Ficha Técnica'}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Cerrar ficha técnica"
              className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 text-gray-700"
            >
              ×
            </button>
          </div>
        </div>

        <div className="h-[70vh] sm:h-[75vh] bg-white">
          {url ? (
            <div className="w-full h-full overflow-auto">
              <iframe
                src={url}
                title={title}
                className="w-full h-full"
                frameBorder={0}
              />
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-gray-600">No hay ficha disponible.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PdfModal
