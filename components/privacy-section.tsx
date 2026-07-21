import { Reveal } from './reveal'
import { withBasePath } from '@/lib/asset-path'

export function PrivacySection() {
  return (
    <section id="bezpieczenstwo" className="bg-oatmeal-dark py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-sage-dark">
            <span className="h-px w-8 bg-sage" />
            Pamięć bez śladu
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            Pamiętamy gościa.
            <br />
            <em className="text-sage-dark">Nie jego numer.</em>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-slate">
            Przy kolejnej wizycie preferencje wracają jednym dotknięciem — ale
            numer telefonu nigdy nie jest zapisywany w czytelnej postaci, a
            odręcznych notatek o zdrowiu po prostu nie ma. Zostają tylko
            uporządkowane wybory, które gość sam zaznaczył.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-slate">
            {[
              'Numer telefonu jako klucz-skrót, nigdy w oryginale',
              'Zapis preferencji tylko za wyraźną zgodą gościa',
              'Jedno dotknięcie „zapomnij mnie” usuwa wszystko',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <figure className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={withBasePath('/images/tablet-linen.png')}
              alt="Tablet leżący na naturalnym lnie obok miseczki olejku i gałązki suszonej lawendy w miękkim dziennym świetle"
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
