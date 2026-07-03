import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CtaSection from '../components/sections/CtaSection'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { successStoryImages } from '../data/siteData'

const featuredImages = successStoryImages.slice(0, 5)
const galleryImages = successStoryImages.slice(5)

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
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
                  Student achievements
                </p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
                  Proud moments from our students and their study abroad journey.
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  These success moments reflect the confidence students gain when
                  admissions planning, interview preparation, and visa filing
                  guidance are handled with clarity.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {['Admissions', 'Visa filing', 'Interview prep'].map((item) => (
                    <div key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-center text-sm font-extrabold text-[var(--color-primary-dark)] shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-6 gap-3"
            >
              {featuredImages.map((image, index) => (
                <motion.figure
                  key={image}
                  variants={{
                    hidden: { opacity: 0, y: 28, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                  className={`group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm ${
                    index === 0
                      ? 'col-span-6 row-span-2'
                      : index === 1 || index === 2
                        ? 'col-span-3'
                        : 'col-span-3 sm:col-span-2'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Grow More Consultants student success ${index + 1}`}
                    className={`w-full object-cover transition duration-700 group-hover:scale-[1.06] ${
                      index === 0 ? 'aspect-[16/10]' : 'aspect-square'
                    }`}
                  />
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="More student success moments."
            text="A polished collection of success highlights from Grow More Consultants students."
            align="center"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.045 } },
            }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {galleryImages.map((image, index) => (
              <motion.article
                key={image}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -7, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={`Grow More Consultants success gallery ${index + 1}`}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                />
              </motion.article>
            ))}
          </motion.div>
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
