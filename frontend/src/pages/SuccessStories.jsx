import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/sections/CtaSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { successStories } from '../data/siteData'

function SuccessStories() {
  return (
    <main>
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Success stories"
            title="Real progress starts with the right guidance."
            text="A few examples of how Grow More Consultants supports students with planning, admissions, interview preparation, and visa filing readiness."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {successStories.map((story) => (
              <Reveal key={story.name}>
                <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={story.image}
                    alt={`${story.country} success story`}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-primary)] text-white">
                        <Quote size={22} />
                      </span>
                      <span className="rounded-md bg-[var(--color-page)] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
                        {story.country}
                      </span>
                    </div>
                    <h2 className="mt-5 text-xl font-extrabold text-slate-950">{story.name}</h2>
                    <p className="mt-3 text-sm font-bold leading-7 text-[var(--color-accent-dark)]">
                      {story.result}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {story.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <Container>
          <Reveal className="grid overflow-hidden rounded-lg border border-slate-200 bg-[var(--color-page)] shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
            <img
              src="/images/gmc-image-24.jpg"
              alt="Students planning a successful study abroad journey"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
            />
            <div className="p-5 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
                Student success pathway
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
                From first consultation to confident file preparation.
              </h2>
              <div className="mt-6 grid gap-3">
                {[
                  'Profile review and realistic destination planning',
                  'Admissions guidance with organized documentation',
                  'Interview preparation and visa filing help',
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--color-primary)]" size={20} />
                    <span className="text-sm font-bold leading-6 text-slate-800 sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="btn-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-bold sm:w-auto"
              >
                Start Your Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}

export default SuccessStories
