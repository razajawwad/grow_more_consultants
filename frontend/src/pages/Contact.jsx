import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { company } from '../data/siteData'

const apiBaseUrl = import.meta.env.VITE_API_URL || 'https://growmoreconsultants.org/api/v1'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  interestedCountry: '',
  lastQualification: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus({ type: 'loading', message: 'Sending your inquiry...' })

    try {
      const response = await fetch(`${apiBaseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send inquiry right now.')
      }

      setFormData(initialForm)
      setFormStatus({
        type: 'success',
        message: 'Your inquiry has been sent successfully. Our team will contact you soon.',
      })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error.message || 'Unable to send inquiry right now.',
      })
    }
  }

  const contactItems = [
    {
      label: 'Call',
      value: company.phone,
      href: `tel:${company.phoneDial}`,
      icon: Phone,
    },
    {
      label: 'Email',
      value: company.email,
      href: `mailto:${company.email}`,
      icon: Mail,
    },
    {
      label: 'Office',
      value: company.address,
      href: company.mapUrl,
      icon: MapPin,
    },
  ]

  return (
    <main>
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact us"
                title="Visit or contact Grow More Consultants."
                text="Share your study goals and our team will guide you with admissions, Student Recruitment, interview preparation, and visa filing help."
              />
              <div className="mt-8 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === 'Office' ? '_blank' : undefined}
                      rel={item.label === 'Office' ? 'noreferrer' : undefined}
                      className="flex min-w-0 gap-3 rounded-lg border border-slate-200 bg-[var(--color-page)] p-4 transition hover:border-[var(--color-primary)] hover:bg-white sm:gap-4 sm:p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--color-primary)] text-white">
                        <Icon size={21} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.14em]">
                          {item.label}
                        </span>
                        <span className="mt-1 block overflow-wrap-anywhere text-sm font-semibold leading-7 text-slate-800 sm:text-base">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <img
                src="/images/gmc-image-09.jpg"
                alt="Professional consultation office"
                className="aspect-[4/3] w-full object-cover sm:h-80 sm:aspect-auto"
              />
              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">Office Location</h2>
                <p className="mt-3 overflow-wrap-anywhere text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{company.address}</p>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent mt-5 inline-flex w-full justify-center rounded-md px-5 py-3 font-bold sm:w-auto"
                >
                  Open Google Map
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
                Website inquiry
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl">
                Send your study abroad inquiry by email.
              </h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {[
                  { label: 'Full name', name: 'fullName', type: 'text', placeholder: 'Your name', required: true },
                  { label: 'Phone number', name: 'phone', type: 'tel', placeholder: '+92 3XX XXXXXXX', required: true },
                  { label: 'Email address', name: 'email', type: 'email', placeholder: 'you@example.com' },
                  { label: 'Interested country', name: 'interestedCountry', type: 'text', placeholder: 'UK, Canada, Australia' },
                  { label: 'Last qualification', name: 'lastQualification', type: 'text', placeholder: 'FSc, Bachelor, Master' },
                ].map((field) => (
                  <label key={field.label} className="grid gap-2">
                    <span className="text-sm font-bold text-slate-800">{field.label}</span>
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="rounded-md border border-slate-200 bg-[var(--color-page)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
                    />
                  </label>
                ))}
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-sm font-bold text-slate-800">Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Share your preferred course, country, or visa question."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none rounded-md border border-slate-200 bg-[var(--color-page)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)] focus:bg-white"
                  />
                </label>
              </div>
              {formStatus.message && (
                <p
                  className={`mt-4 rounded-md px-4 py-3 text-sm font-bold leading-6 ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700'
                      : formStatus.type === 'error'
                        ? 'bg-red-50 text-red-700'
                        : 'bg-[var(--color-page)] text-slate-700'
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-md px-5 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {formStatus.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}

export default Contact
