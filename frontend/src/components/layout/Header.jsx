import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/brand/gmc-logo.jpeg'
import { company, navigation } from '../../data/siteData'
import Container from '../ui/Container'

function Header({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-display relative rounded-md px-2.5 py-2 text-sm font-bold tracking-wide transition after:absolute after:bottom-1 after:left-2.5 after:h-0.5 after:rounded-full after:bg-[var(--color-accent)] after:transition-all xl:px-3 xl:text-base ${
      isActive
        ? 'text-[var(--color-primary-dark)] after:w-[calc(100%-1.25rem)]'
        : 'text-slate-800 after:w-0 hover:bg-white/65 hover:text-[var(--color-primary)] hover:after:w-[calc(100%-1.25rem)]'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-primary)]/15 bg-[image:var(--nav-bg)] shadow-sm backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-3 lg:min-h-24">
          <NavLink
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logo}
              alt={`${company.name} logo`}
              className="h-14 w-20 shrink-0 rounded-md border border-[var(--color-primary)]/20 bg-white object-contain p-1 shadow-sm"
            />
            <div className="min-w-0 xl:max-w-none">
              <p className="max-w-[175px] truncate text-base font-extrabold leading-tight text-[var(--color-primary)] min-[380px]:max-w-[220px] xl:max-w-none xl:text-lg">
                {company.name}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-dark)] xl:tracking-[0.18em]">
                Study Abroad
              </p>
            </div>
          </NavLink>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle dark and light mode"
            onClick={onToggleTheme}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--color-primary)]/20 bg-white/80 text-[var(--color-primary-dark)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-white lg:inline-flex"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--color-primary)]/20 bg-white text-[var(--color-primary)] shadow-sm lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-[var(--color-primary)]/15 bg-[var(--color-page)] shadow-lg lg:hidden">
          <Container className="py-4">
            <button
              type="button"
              onClick={onToggleTheme}
              className="mb-3 inline-flex items-center gap-2 rounded-md border border-[var(--color-primary)]/20 bg-white px-3 py-2 text-sm font-bold text-[var(--color-primary-dark)]"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Header
