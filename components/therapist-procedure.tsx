import { Reveal } from './reveal'
import { withBasePath } from '@/lib/asset-path'

export function TherapistProcedure() {
  return (
    <section
      id="terapeuta"
      className="relative overflow-hidden bg-charcoal py-28 text-cream lg:py-40"
    >
      {/* Candlelit backdrop */}
      <div className="absolute inset-0">
        <img
          src={withBasePath('/images/candlelit-hands.png')}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 78% 30%, rgba(201,154,106,0.22) 0%, rgba(28,25,21,0.65) 45%, rgba(24,22,18,0.94) 80%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-clay-light">
            <span className="h-px w-8 bg-clay" />
            Punkt widzenia terapeuty
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Wchodzi,
            <br />
            <em className="text-clay-light">wiedząc czego oczekuje gość.</em>
          </h2>
          <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-cream/75">
            Zanim terapeuta otworzy drzwi, wybory gościa zamieniają się w
            podsumowanie do przeczytania jednym spojrzeniem. Imię, olejek, strefy,
            cisza — powitanie godne concierge, za każdym razem, bez uczenia się
            na pamięć.
          </p>
        </Reveal>

        {/* Procedure card mockup */}
        <Reveal delay={140}>
          <figure className="aspect-[4/5] overflow-hidden rounded-3xl border border-cream/12 shadow-lift">
            <img
              src={withBasePath('/images/therapist.png')}
              alt="Podsumowanie preferencji gościa w aplikacji BespokeTouch, które terapeuta widzi przed wejściem do gabinetu"
              className="h-full w-full object-cover object-top"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
