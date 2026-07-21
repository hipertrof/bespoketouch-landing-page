'use client'

// Interactive kiosk demo: the guest tablet (left) and the therapist's live
// briefing (right) share one state — every tap on the kiosk is instantly
// reflected on the therapist panel, exactly like the real product.

import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Ban,
  Check,
  Droplet,
  Flame,
  Gauge,
  MessageCircle,
  Music,
  RotateCcw,
  Sparkles,
  Star,
  VolumeX,
} from 'lucide-react'
import { Reveal } from '../reveal'
import {
  BodySilhouette,
  StaticBodyMap,
  ZoneMarker,
  ZonePopover,
  figureAspectRatio,
} from './body-map'
import {
  communicationLabels,
  markersForView,
  musicLabels,
  oils,
  pressureLevels,
  treatments,
  zoneLabel,
  type BodyView,
  type CommunicationStyle,
  type MusicPreference,
  type PressureLevel,
  type ZoneId,
  type ZoneMark,
} from './data'

type Step = 'treatment' | 'bodymap' | 'preferences' | 'done'

const stepNumber: Record<Step, number> = {
  treatment: 1,
  bodymap: 2,
  preferences: 3,
  done: 3,
}

const stepTitle: Record<Step, string> = {
  treatment: 'Zabieg i czas trwania',
  bodymap: 'Mapa ciała',
  preferences: 'Preferencje',
  done: 'Gotowe',
}

const initialZones: Partial<Record<ZoneId, ZoneMark>> = {
  nape: 'priority',
  shoulders: 'priority',
  feetSole: 'blocked',
}

export function KioskDemo() {
  const [step, setStep] = useState<Step>('treatment')
  const [guestName, setGuestName] = useState('Anna')
  const [treatmentId, setTreatmentId] = useState('balijski')
  const [minutes, setMinutes] = useState(90)
  const [view, setView] = useState<BodyView>('back')
  const [zones, setZones] = useState<Partial<Record<ZoneId, ZoneMark>>>(initialZones)
  const [activeMarker, setActiveMarker] = useState<number | null>(null)
  const [pressure, setPressure] = useState<PressureLevel>('Średni')
  const [oilId, setOilId] = useState('lawenda-rumianek')
  const [music, setMusic] = useState<MusicPreference>('nature')
  const [communication, setCommunication] = useState<CommunicationStyle>('silent')
  const [tableWarming, setTableWarming] = useState(true)

  const treatment = treatments.find((t) => t.id === treatmentId) ?? treatments[0]
  const duration =
    treatment.durations.find((d) => d.minutes === minutes) ?? treatment.durations[0]
  const markers = markersForView(view)
  const oil = oils.find((o) => o.id === oilId) ?? oils[0]

  const zonesByMark = (mark: Exclude<ZoneMark, 'standard'>): ZoneId[] =>
    (Object.entries(zones) as [ZoneId, ZoneMark][])
      .filter(([, m]) => m === mark)
      .map(([id]) => id)

  const priorityZones = zonesByMark('priority')
  const blockedZones = zonesByMark('blocked')

  const selectTreatment = (id: string) => {
    setTreatmentId(id)
    const next = treatments.find((t) => t.id === id)
    if (next && !next.durations.some((d) => d.minutes === minutes)) {
      setMinutes(next.durations[0].minutes)
    }
  }

  const reset = () => {
    setStep('treatment')
    setGuestName('Anna')
    setTreatmentId('balijski')
    setMinutes(90)
    setView('back')
    setZones(initialZones)
    setActiveMarker(null)
    setPressure('Średni')
    setOilId('lawenda-rumianek')
    setMusic('nature')
    setCommunication('silent')
    setTableWarming(true)
  }

  const summaryRows = [
    { icon: <Gauge size={16} />, label: 'Nacisk', value: pressure },
    { icon: <Droplet size={16} />, label: 'Olejek', value: oil.name },
    {
      icon: communication === 'silent' ? <VolumeX size={16} /> : <MessageCircle size={16} />,
      label: 'Komunikacja',
      value: communicationLabels[communication],
    },
    {
      icon: <Flame size={16} />,
      label: 'Podgrzewany stół',
      value: tableWarming ? 'Włączone' : 'Wyłączone',
    },
    { icon: <Music size={16} />, label: 'Muzyka', value: musicLabels[music] },
  ]

  return (
    <section id="demo" className="relative bg-oatmeal/40 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-clay-dark">
            <span className="h-px w-8 bg-clay" />
            Interaktywne demo
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            Dotknij i sprawdź,
            <br />
            <em className="text-clay-dark">jak działa BespokeTouch.</em>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
            Po lewej — tablet gościa w pokoju zabiegowym. Po prawej — podgląd
            terapeuty. Każdy wybór na tablecie od razu pojawia się na pulpicie,
            dokładnie tak, jak w prawdziwym systemie.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* ---- Guest tablet ---- */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-[2rem] border border-sand/70 bg-cream-dark p-4 shadow-soft sm:p-6">
              <div className="mb-4 flex items-center justify-between px-2">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-light">
                  <span className="h-2 w-2 rounded-full bg-slate-light/40" />
                  Tablet gościa
                </span>
                {step !== 'done' && (
                  <span className="text-xs uppercase tracking-[0.18em] text-clay-dark">
                    Krok {stepNumber[step]} z 3 · {stepTitle[step]}
                  </span>
                )}
              </div>

              <div className="min-h-[30rem] rounded-2xl border border-sand/50 bg-cream p-5 shadow-soft sm:p-6">
                {step === 'treatment' && (
                  <div className="flex h-full flex-col">
                    <h3 className="font-serif text-2xl text-charcoal">
                      Spersonalizuj swój masaż
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">
                      Wybierz zabieg i czas trwania. Zajmie to mniej niż minutę.
                    </p>

                    <label className="mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-light">
                      Twoje imię
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Wpisz imię…"
                        className="mt-2 block w-full max-w-xs rounded-xl border border-sand bg-white px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-colors duration-200 placeholder:text-slate-light/70 focus:border-clay focus:ring-2 focus:ring-clay/15"
                      />
                    </label>

                    <div className="mt-5 flex flex-col gap-2.5">
                      {treatments.map((t) => {
                        const isSelected = t.id === treatmentId
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => selectTreatment(t.id)}
                            className={`rounded-xl border p-3.5 text-left transition-all duration-300 active:scale-[0.99] ${
                              isSelected
                                ? 'border-clay bg-clay-tint shadow-soft'
                                : 'border-sand bg-white hover:border-clay/40 hover:bg-oatmeal/60'
                            }`}
                          >
                            <span className="text-sm font-semibold text-charcoal">
                              {t.name}
                            </span>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-light">
                              {t.description}
                            </p>
                          </button>
                        )
                      })}
                    </div>

                    <div className="mt-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                        Czas trwania
                      </span>
                      <div className="mt-2 flex gap-2">
                        {treatment.durations.map((d) => {
                          const isSelected = d.minutes === duration.minutes
                          return (
                            <button
                              key={d.minutes}
                              type="button"
                              onClick={() => setMinutes(d.minutes)}
                              className={`min-h-11 flex-1 rounded-xl border px-4 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                                isSelected
                                  ? 'border-clay bg-clay-tint text-clay-dark shadow-soft'
                                  : 'border-sand bg-white text-slate hover:border-clay/40'
                              }`}
                            >
                              {d.minutes} min
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="mt-auto flex justify-end pt-6">
                      <button
                        type="button"
                        onClick={() => setStep('bodymap')}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sage-dark px-6 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-sage active:scale-[0.98]"
                      >
                        Dalej
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 'bodymap' && (
                  <div className="flex h-full flex-col">
                    <h3 className="font-serif text-2xl text-charcoal">
                      Gdzie mamy popracować?
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">
                      Dotknij punktu na sylwetce i wybierz: mocniej, standardowo
                      albo wcale.
                    </p>

                    <div className="mt-4 inline-flex self-start rounded-full border border-sand bg-white p-1 shadow-soft">
                      {(['front', 'back'] as BodyView[]).map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => {
                            setView(v)
                            setActiveMarker(null)
                          }}
                          className={`min-h-9 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                            view === v
                              ? 'bg-sage-dark text-cream shadow-soft'
                              : 'text-slate hover:bg-oatmeal'
                          }`}
                        >
                          {v === 'front' ? 'Przód' : 'Tył'}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_11rem]">
                      <div
                        style={{ aspectRatio: figureAspectRatio }}
                        className="relative mx-auto w-full max-w-52 select-none rounded-3xl border border-sand/60 bg-white/60 p-4 shadow-soft"
                        onClick={(e) => {
                          if (e.target === e.currentTarget) setActiveMarker(null)
                        }}
                      >
                        <BodySilhouette view={view} />
                        {markers.map((marker, index) => (
                          <ZoneMarker
                            key={`${marker.zoneId}-${index}`}
                            position={marker}
                            mark={zones[marker.zoneId] ?? 'standard'}
                            isActive={activeMarker === index}
                            onToggle={() =>
                              setActiveMarker((prev) => (prev === index ? null : index))
                            }
                          />
                        ))}
                        {activeMarker !== null && (
                          <ZonePopover
                            position={markers[activeMarker]}
                            current={zones[markers[activeMarker].zoneId] ?? 'standard'}
                            onSelect={(mark) =>
                              setZones((prev) => ({
                                ...prev,
                                [markers[activeMarker].zoneId]: mark,
                              }))
                            }
                            onClose={() => setActiveMarker(null)}
                          />
                        )}
                      </div>

                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                          Twoje strefy
                        </span>
                        {priorityZones.length === 0 && blockedZones.length === 0 && (
                          <p className="rounded-xl border border-dashed border-sand bg-white/50 px-3 py-4 text-center text-xs leading-relaxed text-slate-light">
                            Dotknij sylwetki, aby zaznaczyć strefy.
                          </p>
                        )}
                        {priorityZones.length > 0 && (
                          <div className="rounded-xl border border-clay/40 bg-clay-tint/50 p-3">
                            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-clay-dark">
                              <Star size={11} className="fill-clay-dark" />
                              Popracuj mocniej
                            </span>
                            <div className="mt-2 flex flex-col gap-1.5">
                              {priorityZones.map((id) => (
                                <span
                                  key={id}
                                  className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-charcoal shadow-soft"
                                >
                                  {zoneLabel(id)}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {blockedZones.length > 0 && (
                          <div className="rounded-xl border border-rose/40 bg-rose-tint/50 p-3">
                            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-rose-dark">
                              <Ban size={11} />
                              Nie masować
                            </span>
                            <div className="mt-2 flex flex-col gap-1.5">
                              {blockedZones.map((id) => (
                                <span
                                  key={id}
                                  className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-charcoal shadow-soft"
                                >
                                  {zoneLabel(id)}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep('treatment')}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sand bg-white px-5 text-sm font-semibold text-charcoal transition-all duration-300 hover:bg-oatmeal active:scale-[0.98]"
                      >
                        <ArrowLeft size={16} />
                        Wstecz
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMarker(null)
                          setStep('preferences')
                        }}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sage-dark px-6 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-sage active:scale-[0.98]"
                      >
                        Dalej
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 'preferences' && (
                  <div className="flex h-full flex-col">
                    <h3 className="font-serif text-2xl text-charcoal">
                      Dopracuj szczegóły
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate">
                      Nacisk, olejek i atmosfera w gabinecie — wszystko po Twojemu.
                    </p>

                    <div className="mt-5 flex flex-col gap-5">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                          Siła nacisku
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {pressureLevels.map((p) => {
                            const isSelected = pressure === p
                            return (
                              <button
                                key={p}
                                type="button"
                                onClick={() => setPressure(p)}
                                className={`min-h-11 flex-1 rounded-xl border px-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                                  isSelected
                                    ? 'border-clay bg-clay-tint text-clay-dark shadow-soft'
                                    : 'border-sand bg-white text-slate hover:border-clay/40'
                                }`}
                              >
                                {p}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                          Olejek do masażu
                        </span>
                        <div className="mt-2 grid grid-cols-2 gap-2.5">
                          {oils.map((o) => {
                            const isSelected = oilId === o.id
                            return (
                              <button
                                key={o.id}
                                type="button"
                                onClick={() => setOilId(o.id)}
                                className={`relative rounded-xl border p-3 text-left transition-all duration-300 active:scale-[0.98] ${
                                  isSelected
                                    ? 'border-clay bg-clay-tint shadow-soft'
                                    : 'border-sand bg-white hover:border-clay/40 hover:bg-oatmeal/60'
                                }`}
                              >
                                {isSelected && (
                                  <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sage-dark text-cream">
                                    <Check size={12} strokeWidth={3} />
                                  </span>
                                )}
                                <span className="block pr-5 text-sm font-semibold text-charcoal">
                                  {o.name}
                                </span>
                                <span className="text-xs text-slate-light">{o.subtitle}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                            Muzyka w tle
                          </span>
                          <div className="mt-2 flex gap-2">
                            {(Object.keys(musicLabels) as MusicPreference[]).map((m) => {
                              const isSelected = music === m
                              return (
                                <button
                                  key={m}
                                  type="button"
                                  onClick={() => setMusic(m)}
                                  className={`min-h-11 flex-1 rounded-xl border px-2 text-xs font-semibold transition-all duration-300 active:scale-[0.98] ${
                                    isSelected
                                      ? 'border-clay bg-clay-tint text-clay-dark'
                                      : 'border-sand bg-white text-slate hover:border-clay/40'
                                  }`}
                                >
                                  {musicLabels[m]}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                            Rozmowa podczas zabiegu
                          </span>
                          <div className="mt-2 flex gap-2">
                            {(Object.keys(communicationLabels) as CommunicationStyle[]).map(
                              (c) => {
                                const isSelected = communication === c
                                return (
                                  <button
                                    key={c}
                                    type="button"
                                    onClick={() => setCommunication(c)}
                                    className={`flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 text-xs font-semibold transition-all duration-300 active:scale-[0.98] ${
                                      isSelected
                                        ? 'border-clay bg-clay-tint text-clay-dark'
                                        : 'border-sand bg-white text-slate hover:border-clay/40'
                                    }`}
                                  >
                                    {c === 'silent' ? (
                                      <VolumeX size={14} />
                                    ) : (
                                      <MessageCircle size={14} />
                                    )}
                                    {communicationLabels[c]}
                                  </button>
                                )
                              },
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-sand bg-white px-4 py-3">
                        <span className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                          <Flame size={16} className="text-clay-dark" />
                          Podgrzewany stół
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={tableWarming}
                          aria-label="Podgrzewany stół"
                          onClick={() => setTableWarming((v) => !v)}
                          className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-300 ${
                            tableWarming ? 'bg-sage-dark' : 'bg-sand'
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-soft transition-transform duration-300 ${
                              tableWarming ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setStep('bodymap')}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sand bg-white px-5 text-sm font-semibold text-charcoal transition-all duration-300 hover:bg-oatmeal active:scale-[0.98]"
                      >
                        <ArrowLeft size={16} />
                        Wstecz
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep('done')}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sage-dark px-6 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:bg-sage active:scale-[0.98]"
                      >
                        Zatwierdź kartę
                        <Check size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 'done' && (
                  <div className="flex h-full min-h-[26rem] flex-col items-center justify-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sage bg-sage-tint text-sage-dark">
                      <Check size={26} strokeWidth={2.5} />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl text-charcoal">
                      Dziękujemy{guestName.trim() ? `, ${guestName.trim()}` : ''}!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
                      Twoja karta zabiegu trafiła na pulpit terapeuty. Odłóż
                      tablet, usiądź wygodnie — za chwilę zaczynamy.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-sand bg-white px-5 text-sm font-semibold text-charcoal transition-all duration-300 hover:bg-oatmeal active:scale-[0.98]"
                    >
                      <RotateCcw size={15} />
                      Rozpocznij od nowa
                    </button>
                  </div>
                )}
              </div>

              <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-slate-light/25" />
            </div>
          </Reveal>

          {/* ---- Therapist live view ---- */}
          <Reveal delay={80} className="lg:col-span-5">
            <div className="rounded-[2rem] border border-sand/70 bg-white p-5 shadow-soft sm:p-6">
              <div className="border-b border-sand/60 pb-4">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-dark">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sage" />
                  Na żywo · Pulpit terapeuty
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">
                  To widzi terapeuta, zanim wejdzie do gabinetu.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-sand/60 bg-cream px-4 py-3">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-light">
                    Gość
                  </span>
                  <span className="block text-sm font-semibold text-charcoal">
                    {guestName.trim() || 'Gość'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-light">
                    Zabieg
                  </span>
                  <span className="block text-sm font-semibold text-charcoal">
                    {treatment.name} · {duration.minutes} min
                  </span>
                </div>
              </div>

              {step === 'done' && (
                <div className="mt-3 flex items-start gap-2 rounded-xl border border-sage/30 bg-sage-tint/50 px-3.5 py-2.5 text-xs leading-relaxed text-sage-dark">
                  <Sparkles size={14} className="mt-0.5 shrink-0" />
                  Gość zatwierdził kartę. Przygotuj gabinet według poniższych
                  detali.
                </div>
              )}

              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                  Strefy pracy
                </span>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <StaticBodyMap view="front" zones={zones} />
                  <StaticBodyMap view="back" zones={zones} />
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t border-sand/60 pt-3.5">
                  <span className="flex items-center gap-2 text-xs text-slate">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-clay/70 ring-4 ring-clay/25" />
                    <strong className="font-semibold text-charcoal">Priorytet</strong>
                    <span className="text-slate-light">
                      — {priorityZones.length > 0
                        ? priorityZones.map(zoneLabel).join(', ')
                        : 'brak'}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-xs text-slate">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-rose/70 ring-4 ring-rose/25" />
                    <strong className="font-semibold text-charcoal">Omijać</strong>
                    <span className="text-slate-light">
                      — {blockedZones.length > 0
                        ? blockedZones.map(zoneLabel).join(', ')
                        : 'brak'}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-sand/60 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-light">
                  Preferencje gościa
                </span>
                <div className="mt-2 flex flex-col divide-y divide-sand/50">
                  {summaryRows.map((row) => (
                    <div key={row.label} className="flex items-center gap-3 py-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-oatmeal text-sage-dark">
                        {row.icon}
                      </span>
                      <span className="flex-1 text-xs font-medium text-slate">
                        {row.label}
                      </span>
                      <span className="text-sm font-semibold text-charcoal">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
