import CtaSection from '../components/sections/CtaSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { services } from '../data/siteData'

function Services() {
  return (
    <main>
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Complete education consultancy support."
            text="Grow More Consultants provides end-to-end study abroad guidance, including Student Recruitment, study visa guidance, admissions guidance, interview preparation, and visa filing help."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className="p-5 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
                Student Recruitment
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                The right start matters before any application.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                We help students understand their academic profile, compare
                suitable destinations, choose realistic programs, and prepare a
                strong admission file. This gives every student a clearer path
                before moving toward visa documentation.
              </p>
            </div>
            <img
              src="/images/gmc-image-15.jpg"
              alt="Students on a university campus"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[320px]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Service details"
            title="Focused support at every important step."
            text="Each service below explains how Grow More Consultants helps students move from profile review to application readiness."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const reversed = index % 2 === 1

              return (
                <Reveal key={service.title} className="grid overflow-hidden rounded-lg border border-slate-200 bg-[var(--color-page)] shadow-sm lg:grid-cols-2">
                  <img
                    src={service.detailImage}
                    alt={service.title}
                    className={`aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-[300px] ${
                      reversed ? 'lg:order-2' : ''
                    }`}
                  />
                  <div className="p-5 sm:p-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-primary)] text-white">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-slate-950 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{service.detail}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-md bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm sm:text-sm"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}

export default Services
