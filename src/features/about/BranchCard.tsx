import { useState } from 'react'
import { cn } from '../../lib/utils'
import type { Branch } from './branchData'

type BranchCardProps = {
  branch: Branch
  className?: string
}

const BranchCard = ({ branch, className }: BranchCardProps) => {
  const [open, setOpen] = useState(false)
  const whatsappHref = `https://wa.me/${branch.whatsapp}`

  return (
    <article
      className={cn(
        'bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full rounded-lg',
        className,
      )}
    >
      <button
        type="button"
        className="w-full sm:hidden p-4 flex items-start justify-between gap-3 text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#1f1f1f] leading-tight">{branch.name}</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{branch.address}</p>
        </div>
        <svg
          className={`h-5 w-5 mt-1 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="sm:hidden border-t border-gray-200 p-4 pt-3">
          <div className="aspect-square w-full bg-gray-100">
            <img
              src={branch.image}
              alt={branch.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${branch.name}`}
              className="block w-full bg-[#25d366] hover:bg-[#20ba5a] text-white py-3 px-4 text-center text-sm font-bold uppercase tracking-wide shadow transition-colors"
            >
              Consultar
            </a>
          </div>
        </div>
      )}

      <div className="hidden sm:block">
        <div className="aspect-[4/3] w-full bg-gray-100">
          <img
            src={branch.image}
            alt={branch.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-3.5 flex items-start justify-between gap-2.5">
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#1f1f1f] leading-tight">{branch.name}</h3>
            <p className="mt-1.5 text-xs text-gray-700 leading-relaxed">{branch.address}</p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${branch.name}`}
            className="shrink-0 bg-[#25d366] hover:bg-[#20ba5a] text-white p-2.5 rounded-full shadow transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default BranchCard
