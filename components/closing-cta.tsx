import { Reveal } from './reveal'

export function ClosingCta() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-charcoal py-32 text-cream lg:py-44"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(100% 100% at 50% 0%, rgba(201,154,106,0.18) 0%, rgba(51,49,44,0) 55%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-clay-light">
            Porozmawiajmy o Twoim Spa
          </p>
          <h2 className="text-balance font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Pokażemy to
            <br />
            <em className="text-clay-light">w Twoim gabinecie.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cream/75">
            Trzydzieści minut, jeden tablet, katalog wgrany z Twojego menu.
            Zobaczysz cały przepływ na przykładzie własnej oferty. Bez
            zobowiązań, bez wgrywania czegokolwiek.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:kontakt@bespoketouch.pl"
              className="inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-base font-medium text-charcoal shadow-lift transition-colors hover:bg-clay-light"
            >
              Umów pokaz
            </a>
            <a
              href="mailto:kontakt@bespoketouch.pl"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-8 py-4 text-base font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Napisz do nas
            </a>
          </div>
          <p className="mt-8 text-sm text-cream/50">
            Wdrożenie tabletu zajmuje chwilę — sześciocyfrowy kod parujący, bez
            działu IT.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
