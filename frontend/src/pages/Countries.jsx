import CtaSection from '../components/sections/CtaSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { countries } from '../data/siteData'

function Countries() {
  return (
    <main>
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Countries"
            title="Choose your destination with confidence."
            text="We guide students for leading study destinations, including the UK, Malaysia, Australia, Canada, USA, and France."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="rounded-lg bg-[var(--color-dark)] p-5 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-soft)] sm:text-sm sm:tracking-[0.2em]">
                  Destination planning
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Compare country, course, cost, and career outcomes.
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  A good study abroad decision is not only about a country name.
                  We help students compare academic requirements, budget, intake
                  timelines, and visa readiness before final selection.
                </p>
              </div>
              <img
                src="/images/gmc-image-01.jpg"
                alt="Airplane wing over clouds"
                className="aspect-[4/3] w-full rounded-md object-cover sm:h-72 sm:aspect-auto"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Destination guidance"
            title="Country-by-country planning without repeated guesswork."
            text="Each destination has different admissions expectations, intake timelines, and visa preparation needs."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-12">
            {countries.map((country) => (
              <Reveal key={country.name} className="grid overflow-hidden rounded-lg border border-slate-200 bg-[var(--color-page)] shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
                <img
                  src={country.detailImage}
                  alt={country.name}
                  className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[240px]"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                    {country.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{country.description}</p>
                  <ul className="mt-5 grid gap-2">
                    {country.details.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-md bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm sm:text-sm"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}

export default Countries
