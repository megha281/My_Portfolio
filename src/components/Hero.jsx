import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolio'

const codeFragments = [
  'def recommend(movie):',
  'const [state, setState] = useState()',
  'model.fit(X_train, y_train)',
  'git commit -m "ship it"',
  'SELECT * FROM users',
  'app.use(express.json())',
]

export default function Hero() {
  const fieldRef = useRef(null)

  useEffect(() => {
    const field = fieldRef.current
    if (!field || window.matchMedia('(hover: hover) and (pointer: fine)').matches === false) return

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      field.style.setProperty('--px', x.toFixed(3))
      field.style.setProperty('--py', y.toFixed(3))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  }
  const line = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="home"
      ref={fieldRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-void"
      style={{ '--px': 0, '--py': 0 }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-aurora opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          transform: 'translate(calc(var(--px) * -8px), calc(var(--py) * -8px))',
        }}
      />

      {/* Floating code fragments */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {codeFragments.map((frag, i) => (
          <span
            key={frag}
            className="absolute mono-tag text-xs text-violet-soft/25 animate-drift"
            style={{
              top: `${12 + i * 14}%`,
              left: i % 2 === 0 ? `${6 + i * 3}%` : undefined,
              right: i % 2 !== 0 ? `${6 + i * 2}%` : undefined,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${10 + i}s`,
            }}
          >
            {frag}
          </span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto w-full pt-28 pb-16"
      >
        <motion.p variants={line} className="mono-tag text-sm text-violet-soft/80 mb-6">
          Hi, I'm
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-paper">
          <motion.span variants={line} className="block text-[13vw] md:text-[7.2vw] lg:text-[6.2rem]">
            Meghashri
          </motion.span>
          <motion.span
            variants={line}
            className="block text-[13vw] md:text-[7.2vw] lg:text-[6.2rem] text-gradient"
          >
            Lakshmi S
          </motion.span>
        </h1>

        <motion.p variants={line} className="mt-8 max-w-xl text-lg md:text-xl text-mute leading-relaxed">
          {profile.role}
          <br />
          {profile.tagline}
        </motion.p>

        <motion.p variants={line} className="mt-3 font-display text-xl text-violet-soft/90">
          {profile.statement}
        </motion.p>

        <motion.div variants={line} className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo to-violet text-white font-medium overflow-hidden"
          >
            <span className="relative">Explore My Work</span>
          </button>
          <a
            href="/resume.pdf"
            download="Meghashri_Lakshmi_Resume.pdf"
            className="px-7 py-3.5 rounded-full border border-line text-paper font-medium hover:border-violet-soft/60 hover:text-violet-soft transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={line} className="mt-12 flex items-center gap-5 text-mute">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-paper transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-paper transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-paper transition-colors">
            <Mail size={20} />
          </a>
          
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mute hover:text-paper transition-colors z-10"
      >
        <span className="mono-tag text-[11px] tracking-widest">SCROLL TO EXPLORE</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
