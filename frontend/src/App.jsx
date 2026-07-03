import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import ScrollProgress from './components/ui/ScrollProgress'
import About from './pages/About'
import Contact from './pages/Contact'
import Countries from './pages/Countries'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--color-page)] text-slate-900">
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}

export default App
