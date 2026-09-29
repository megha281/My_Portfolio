import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/portfolio'

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'max-w-4xl glass rounded-full px-6' : 'max-w-6xl px-6'
          }`}
        >
          <button
            onClick={() => goTo('home')}
            className="font-display text-lg font-semibold tracking-tight text-paper"
            aria-label="Back to top"
          >
            ML<span className="text-violet-soft">.</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === item.id ? 'text-paper' : 'text-mute hover:text-paper'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/5"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden text-paper p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/98 backdrop-blur-xl flex flex-col lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-paper p-2" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-col items-start gap-2 px-8 mt-4">
              {nav.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => goTo(item.id)}
                  className={`font-display text-3xl py-3 ${
                    active === item.id ? 'text-gradient' : 'text-paper'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
