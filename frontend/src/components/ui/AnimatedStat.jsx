import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedStat({ value, label, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const numericValue = Number.parseInt(String(value), 10)
  const hasNumber = Number.isFinite(numericValue)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (!isInView || !hasNumber) return

    const controls = animate(motionValue, numericValue, {
      duration: 1.1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => controls.stop()
  }, [delay, hasNumber, isInView, motionValue, numericValue])

  const suffix = hasNumber ? String(value).replace(String(numericValue), '') : ''

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-md border border-white/15 bg-white/10 p-4 backdrop-blur"
    >
      <p className="text-xl font-extrabold leading-tight text-[var(--color-accent-soft)] sm:text-2xl">
        {hasNumber ? <motion.span>{rounded}</motion.span> : value}
        {hasNumber && suffix}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
        {label}
      </p>
    </motion.div>
  )
}

export default AnimatedStat
