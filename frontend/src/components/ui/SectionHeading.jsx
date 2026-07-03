import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{text}</p>}
    </Reveal>
  )
}

export default SectionHeading
