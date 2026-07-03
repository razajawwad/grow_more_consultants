import { motion } from 'framer-motion'
import { countries } from '../../data/siteData'

function CountryGrid({ imageKey = 'image' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {countries.map((country) => (
        <motion.article
          key={country.name}
          variants={{
            hidden: { opacity: 0, y: 34, scale: 0.96 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ y: -10, scale: 1.015 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl"
        >
          <img
            src={country[imageKey]}
            alt={country.name}
            className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.08] sm:h-56"
          />
          <div className="p-5 sm:p-6">
            <h3 className="text-lg font-extrabold text-slate-950 sm:text-xl">{country.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{country.description}</p>
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              {country.details.map((detail) => (
                <li key={detail} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

export default CountryGrid
