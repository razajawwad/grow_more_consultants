import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountryGrid from '../components/sections/CountryGrid'
import CtaSection from '../components/sections/CtaSection'
import Hero from '../components/sections/Hero'
import ProcessSection from '../components/sections/ProcessSection'
import ServiceGrid from '../components/sections/ServiceGrid'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { highlights } from '../data/siteData'

function Home() {
  return (
    <main>
      <Hero />

      <section className="py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why choose GMC"
            title="A professional process for serious study abroad plans."
            text="Students and families get clear counseling, transparent documentation steps, and destination-focused guidance before making important decisions."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title}>
                  <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <Icon className="text-[var(--color-primary)]" size={28} />
                    <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <ProcessSection />

      <section className="py-12 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Everything students need from admission to visa filing."
              text="Our core support includes Student Recruitment, study visa guidance, admissions planning, interview preparation, and visa filing help."
            />
            <Link
              to="/services"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-bold sm:w-fit"
            >
              All Services
              <ArrowRight size={18} />
            </Link>
          </div>
          <ServiceGrid limit={3} imageKey="cardImage" />
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Destinations"
              title="Popular study destinations for global education."
              text="Explore professional guidance for the UK, Malaysia, Australia, Canada, USA, and France."
            />
            <Link
              to="/countries"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--color-primary)]/25 bg-white px-5 py-3 font-bold text-[var(--color-primary-dark)] transition hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-page)] sm:w-fit"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>
          <CountryGrid imageKey="homeImage" />
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <Reveal className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            <img
              src="/images/gmc-image-36.jpg"
              alt="International students studying together"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[360px]"
            />
            <div className="p-5 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
                Study Abroad Consultants in Multan
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
                Professional support for students who want a confident start.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Grow More Consultants supports students with Student
                Recruitment, admissions guidance, study visa planning, interview
                preparation, and visa filing help. The website experience is
                built to make families feel informed before they visit or call.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Course and country comparison',
                  'Admission file preparation',
                  'Visa document checklist',
                  'Interview confidence practice',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-slate-200 bg-[var(--color-page)] px-4 py-3 text-sm font-bold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}

export default Home
