import { motion, useReducedMotion } from 'framer-motion'
import { company } from '../../data/siteData'
import WhatsAppIcon from './WhatsAppIcon'

function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={company.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      animate={
        shouldReduceMotion
          ? undefined
          : {
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 14px 28px rgb(6 78 59 / 0.22)',
                '0 18px 40px rgb(22 163 74 / 0.34)',
                '0 14px 28px rgb(6 78 59 / 0.22)',
              ],
            }
      }
      transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.8 }}
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-xl shadow-emerald-900/25 transition hover:-translate-y-1 hover:bg-[var(--color-whatsapp-dark)] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  )
}

export default FloatingWhatsApp
