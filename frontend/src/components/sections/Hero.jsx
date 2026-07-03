import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { company, stats } from '../../data/siteData'
import AnimatedStat from '../ui/AnimatedStat'
import Container from '../ui/Container'

function Hero() {
  const heroRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 64])
  const headingWords = 'Dream Big. Study Abroad with Trusted Guidance.'.split(' ')

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[var(--color-dark)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            'url(/images/gmc-image-25.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)] via-[var(--color-dark-soft)] to-[var(--color-primary)]/70" />

      <Container className="relative py-12 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-5 inline-flex max-w-full items-start gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold leading-5 text-blue-50 backdrop-blur sm:mb-6 sm:items-center sm:gap-3 sm:px-4 sm:text-sm"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-soft)] sm:mt-0" />
              <span>Student Recruitment and Study Visa Experts</span>
            </motion.div>
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
              {headingWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 26, rotateX: -35 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.58,
                    delay: 0.24 + index * 0.075,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-2 inline-block origin-bottom sm:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
              {company.name} helps students choose the right country, secure
              admissions, prepare for interviews, and organize visa filing with
              a professional step-by-step process.
            </p>
            <div className="mt-8 grid gap-3 min-[420px]:inline-flex min-[420px]:flex-wrap sm:mt-9">
              <Link
                to="/services"
                className="btn-accent inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-bold"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/countries"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-bold"
              >
                View Countries
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
              {stats.map((item, index) => (
                <AnimatedStat
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  delay={0.45 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            style={{ y: shouldReduceMotion ? 0 : imageY }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur will-change-transform sm:p-4"
          >
            <div className="relative">
              <img
                src="/images/gmc-image-22.jpg"
                alt="Education consultants guiding international students"
                className="aspect-[4/3] w-full rounded-md object-cover sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-[var(--color-dark)]/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 rounded-md border border-white/20 bg-white/95 p-3 text-slate-950 shadow-xl backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)]">
                  Personal counseling
                </p>
                <h2 className="mt-1 text-lg font-extrabold leading-tight text-[var(--color-primary)] sm:text-2xl">
                  From admission plan to visa file readiness.
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {['Admissions', 'Visa Filing', 'Interviews'].map((item) => (
                <div
                  key={item}
                  className="rounded-md bg-white px-3 py-4 text-center text-sm font-bold text-[var(--color-primary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
