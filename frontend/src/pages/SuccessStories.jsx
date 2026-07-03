import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import CtaSection from '../components/sections/CtaSection'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { successStoryImages } from '../data/siteData'

const pageSize = 6

function SuccessStories() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(successStoryImages.length / pageSize)
  const visibleImages = useMemo(
    () => successStoryImages.slice(page * pageSize, page * pageSize + pageSize),
    [page],
  )

  const goToPrevious = () => {
    setPage((current) => (current === 0 ? totalPages - 1 : current - 1))
  }

  const goToNext = () => {
    setPage((current) => (current === totalPages - 1 ? 0 : current + 1))
  }

  return (
    <main>
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Success stories"
            title="Student success moments from Grow More Consultants."
            text="A professional gallery of real student success highlights, shown in a clean paginated layout."
            align="center"
          />
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
                Gallery
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl">
                View success highlights.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Show previous success stories"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-[var(--color-primary-dark)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
              >
                <ChevronLeft size={21} />
              </button>
              <span className="min-w-16 text-center text-sm font-extrabold text-slate-700">
                {page + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Show next success stories"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-[var(--color-primary-dark)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -18 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleImages.map((image, index) => (
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
                    alt={`Grow More Consultants success gallery ${page * pageSize + index + 1}`}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                  />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <CtaSection />
    </main>
  )
}

export default SuccessStories
