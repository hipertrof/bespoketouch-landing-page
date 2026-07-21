// Body-map building blocks for the kiosk demo — ports of the real app's
// BodySilhouette / ZoneMarker / ZonePopover / StaticBodyMap, trimmed for the
// landing page (Polish only, no zone notes, local state).

import { Ban, Check, CheckCircle2, Star } from 'lucide-react'
import { MALE_FRONT, MALE_BACK } from './figure-paths'
import {
  markersForView,
  zoneLabel,
  type BodyView,
  type MarkerPosition,
  type ZoneId,
  type ZoneMark,
} from './data'

const FIGURES = { front: MALE_FRONT, back: MALE_BACK } as const

export const figureAspectRatio = `${MALE_FRONT.w} / ${MALE_FRONT.h}`

export function BodySilhouette({ view }: { view: BodyView }) {
  const fig = FIGURES[view]
  return (
    <svg
      viewBox={`0 0 ${fig.w} ${fig.h}`}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <path d={fig.d} fillRule="evenodd" className="fill-slate/75" />
    </svg>
  )
}

const markStyles: Record<ZoneMark, string> = {
  standard:
    'bg-white/70 border-slate-light/50 hover:border-clay hover:bg-clay-tint/60',
  priority: 'bg-clay border-clay-dark shadow-[0_0_0_5px_rgba(201,154,106,0.25)]',
  blocked: 'bg-rose border-rose-dark shadow-[0_0_0_5px_rgba(182,84,79,0.25)]',
}

export function ZoneMarker({
  position,
  mark,
  isActive,
  onToggle,
}: {
  position: MarkerPosition
  mark: ZoneMark
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={zoneLabel(position.zoneId)}
      aria-expanded={isActive}
      style={{ left: `${position.left}%`, top: `${position.top}%` }}
      className="absolute z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          markStyles[mark]
        } ${isActive ? 'ring-4 ring-sage/30' : ''}`}
      >
        {mark === 'priority' && <Star size={12} className="fill-white text-white" />}
        {mark === 'blocked' && <Ban size={12} className="text-white" />}
      </span>
    </button>
  )
}

const popoverOptions: {
  mark: ZoneMark
  title: string
  icon: React.ReactNode
  tint: string
  border: string
}[] = [
  {
    mark: 'priority',
    title: 'Popracuj tu mocniej',
    icon: <Star size={16} className="fill-clay-dark text-clay-dark" />,
    tint: 'bg-clay-tint',
    border: 'border-clay',
  },
  {
    mark: 'standard',
    title: 'Standardowo',
    icon: <CheckCircle2 size={16} className="text-sage-dark" />,
    tint: 'bg-sage-tint',
    border: 'border-sage',
  },
  {
    mark: 'blocked',
    title: 'Nie masować',
    icon: <Ban size={16} className="text-rose-dark" />,
    tint: 'bg-rose-tint',
    border: 'border-rose',
  },
]

export function ZonePopover({
  position,
  current,
  onSelect,
  onClose,
}: {
  position: MarkerPosition
  current: ZoneMark
  onSelect: (mark: ZoneMark) => void
  onClose: () => void
}) {
  const showAbove = position.top > 55
  const alignRight = position.left > 65
  const alignLeft = position.left < 35

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{ left: `${position.left}%`, top: `${position.top}%` }}
      className={`absolute z-30 w-60 -translate-x-1/2 ${
        showAbove ? '-translate-y-[calc(100%+1.25rem)]' : 'translate-y-4'
      } ${alignRight ? '!left-auto !right-0 !translate-x-0' : ''} ${
        alignLeft ? '!left-0 !translate-x-0' : ''
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-sand bg-white shadow-lift">
        <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-charcoal">
            {zoneLabel(position.zoneId)}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-slate-light transition-colors duration-200 hover:text-charcoal"
          >
            Zamknij
          </button>
        </div>
        <div className="flex flex-col gap-2 px-3 pb-3">
          {popoverOptions.map((opt) => {
            const isSelected = current === opt.mark
            return (
              <button
                key={opt.mark}
                type="button"
                onClick={() => {
                  onSelect(opt.mark)
                  onClose()
                }}
                aria-pressed={isSelected}
                className={`flex min-h-11 items-center gap-3 rounded-xl border-2 px-3 py-2 text-left transition-all duration-200 active:scale-[0.98] ${opt.tint} ${
                  isSelected ? `${opt.border} shadow-soft` : 'border-transparent hover:brightness-[0.97]'
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-soft">
                  {opt.icon}
                </span>
                <span className="flex-1 text-xs font-semibold uppercase tracking-wide text-charcoal">
                  {opt.title}
                </span>
                {isSelected && (
                  <Check size={15} strokeWidth={2.5} className="shrink-0 text-charcoal/70" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const dotClasses: Record<Exclude<ZoneMark, 'standard'>, string> = {
  priority: 'bg-clay/70 ring-4 ring-clay/25',
  blocked: 'bg-rose/70 ring-4 ring-rose/25',
}

export function StaticBodyMap({
  view,
  zones,
}: {
  view: BodyView
  zones: Partial<Record<ZoneId, ZoneMark>>
}) {
  const markers = markersForView(view).filter((m) => {
    const mark = zones[m.zoneId]
    return mark === 'priority' || mark === 'blocked'
  })

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-light">
        {view === 'front' ? 'Przód' : 'Tył'}
      </span>
      <div style={{ aspectRatio: figureAspectRatio }} className="relative w-full max-w-28">
        <BodySilhouette view={view} />
        {markers.map((marker, index) => {
          const mark = zones[marker.zoneId] as Exclude<ZoneMark, 'standard'>
          return (
            <span
              key={`${marker.zoneId}-${index}`}
              title={zoneLabel(marker.zoneId)}
              style={{ left: `${marker.left}%`, top: `${marker.top}%` }}
              className={`absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full ${dotClasses[mark]}`}
            />
          )
        })}
      </div>
    </div>
  )
}
