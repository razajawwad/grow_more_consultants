import CtaSection from '../components/sections/CtaSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { company, highlights } from '../data/siteData'

function About() {
  return (
    <main>
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <Reveal className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <img
              src="/images/gmc-image-37.jpg"
              alt="Education consultants discussing study abroad plans"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl sm:aspect-[16/10] lg:aspect-auto lg:h-[420px]"
            />
            <div>
              <SectionHeading
                eyebrow="About us"
                title={`${company.name} helps students move with clarity.`}
                text="We are an education consultancy focused on practical, student-friendly guidance for international education. Our approach is simple: understand the student's profile, recommend realistic options, and keep the admissions and visa process organized."
              />
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                From Student Recruitment and admissions guidance to interview
                preparation and visa filing help, our team supports students with
                a professional consultation experience built around trust,
                clarity, and timely communication.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Our mission',
                text: 'To give students practical, transparent, and destination-focused guidance for international education.',
              },
              {
                title: 'Our vision',
                text: 'To become a trusted study abroad consultancy in Multan for students planning global academic futures.',
              },
              {
                title: 'Our promise',
                text: 'To keep every student informed with clear requirements, honest options, and organized file preparation.',
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <h2 className="text-xl font-extrabold text-slate-950 sm:text-2xl">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="Guidance that respects the student's future."
            text="We focus on honest recommendations, organized documentation, and confidence-building support."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title}>
                  <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <Icon className="text-[var(--color-accent-dark)]" size={28} />
                    <h3 className="mt-4 text-lg font-bold text-slate-950 sm:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              '/images/gmc-image-24.jpg',
              '/images/gmc-image-18.jpg',
              '/images/gmc-image-38.jpg',
            ].map((image, index) => (
              <Reveal key={image}>
                <img
                  src={image}
                  alt={`Grow More Consultants counseling moment ${index + 1}`}
                  className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm transition duration-500 hover:scale-[1.02] sm:h-72 sm:aspect-auto"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}

export default About
