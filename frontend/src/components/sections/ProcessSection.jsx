import { motion } from 'framer-motion'
import { processSteps } from '../../data/siteData'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function ProcessSection() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A clear 4-step path from counseling to visa preparation."
          text="The process is designed to keep students and families informed at every important decision point."
          align="center"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:mt-12 xl:grid-cols-4"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.article
                key={step.title}
                variants={{
                  hidden: { opacity: 0, y: 34, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative rounded-lg border border-slate-200 bg-[var(--color-page)] p-5 shadow-sm hover:shadow-xl sm:p-6"
              >
                <span className="absolute right-5 top-5 text-4xl font-extrabold text-slate-200 sm:text-5xl">
                  0{index + 1}
                </span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-primary)] text-white">
                  <Icon size={23} />
                </div>
                <h3 className="relative mt-5 text-lg font-extrabold text-slate-950 sm:text-xl">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600 sm:text-base">{step.text}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

export default ProcessSection
