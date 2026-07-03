import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data/siteData'
import Container from '../ui/Container'
import WhatsAppIcon from '../ui/WhatsAppIcon'

function CtaSection() {
  return (
    <section className="bg-[image:var(--cta-bg)] py-12 text-white sm:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-soft)] sm:text-sm sm:tracking-[0.2em]">
              Start your study abroad journey
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">
              Get professional guidance before you apply.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Speak with Grow More Consultants for admissions guidance, Student
              Recruitment, interview preparation, and visa filing help.
            </p>
          </div>
          <div className="grid gap-3 min-[430px]:flex min-[430px]:flex-wrap lg:justify-end">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-bold"
            >
              <WhatsAppIcon size={19} />
              WhatsApp
            </a>
            <a
              href={`tel:${company.phoneDial}`}
              className="btn-accent inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-bold"
            >
              <Phone size={18} />
              {company.phone}
            </a>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-bold"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection
