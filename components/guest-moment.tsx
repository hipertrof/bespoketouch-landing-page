import { Reveal } from './reveal'

export function GuestMoment() {
  return (
    <section id="gosc" className="relative bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="lg:flex lg:items-center lg:gap-12">
          <Reveal className="max-w-xl lg:max-w-md lg:flex-1">
            <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-clay-dark">
              <span className="h-px w-8 bg-clay" />
              Personalizacja preferencji gościa
            </p>
            <h2 className="text-balance font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Bez aplikacji,
              <br />
              <em className="text-clay-dark">bez zakładania konta.</em>
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              Gość dotyka mapy ciała tam, gdzie chce więcej uwagi, i tam, gdzie
              prosi, by nie dotykać. Wybiera dodatkowe preferencje jak zapach
              olejków, nacisk i to, czy chce rozmawiać, czy milczeć.
            </p>
          </Reveal>

          {/* Body map card, framed as the tablet the guest actually holds */}
          <Reveal delay={80} className="mt-10 lg:mt-0 lg:w-3/5 lg:shrink-0">
            <div className="mx-auto max-w-sm rounded-[2rem] border border-sand/70 bg-cream-dark p-3 shadow-soft sm:max-w-md sm:p-4">
              <div className="mb-2.5 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-light/40" />
              </div>
              <figure className="overflow-hidden rounded-2xl border border-sand/50 shadow-soft">
                <img
                  src="/images/map.png"
                  alt="Mapa ciała w aplikacji BespokeTouch, na której gość zaznacza strefy priorytetowe i wykluczone"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="mx-auto mt-2.5 h-3.5 w-3.5 rounded-full border border-sand/70 bg-cream" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
