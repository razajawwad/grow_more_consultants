import { motion } from 'framer-motion'
import { services } from '../../data/siteData'

function ServiceGrid({ limit, imageKey = 'cardImage' }) {
  const visibleServices = limit ? services.slice(0, limit) : services

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {visibleServices.map((service) => {
        const Icon = service.icon

        return (
          <motion.article
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 34, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -10, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl"
          >
            <img
              src={service[imageKey]}
              alt={service.title}
              className="h-40 w-full object-cover transition duration-700 group-hover:scale-[1.08] sm:h-44"
            />
            <div className="p-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-primary)] text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950 sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{service.summary}</p>
              <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        )
      })}
    </motion.div>
  )
}

export default ServiceGrid
