import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/portfolio'

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(isNaN(parseFloat(value)) ? value : '0')

  useEffect(() => {
    if (!inView) return
    const numeric = parseFloat(value)
    if (isNaN(numeric)) {
      setDisplay(value)
      return
    }
    const decimals = value.includes('.') ? value.split('.')[1].length : 0
    const suffix = value.replace(/[0-9.]/g, '')
    let frame = 0
    const total = 40
    const timer = setInterval(() => {
      frame++
      const progress = frame / total
      const current = (numeric * Math.min(progress, 1)).toFixed(decimals)
      setDisplay(`${current}${suffix}`)
      if (frame >= total) clearInterval(timer)
    }, 25)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-gradient">
      {display}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-14 md:gap-20 items-start">
        {/* Left: profile photo */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className="relative aspect-[4/5] rounded-3xl overflow-hidden glass"
>
  <img
    src="/profile.jpg"
    alt="Meghashri Lakshmi"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Subtle overlay to match the portfolio theme */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

</motion.div>

        {/* Right: intro + stats */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mono-tag text-sm text-violet-soft/80 mb-4"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight"
          >
            A final-year CS student who'd rather ship a working prototype than talk about one.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-mute text-lg leading-relaxed max-w-xl"
          >
            I move between machine learning and full-stack web development — from
            building a recommendation engine in Python to a property booking platform
            on the MERN stack. Across three internships, I've learned that the
            interesting part isn't the tech stack, it's turning a rough idea into
            something people can actually use.
          </motion.p>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Counter value={stat.value} />
                <p className="mt-1 text-sm text-mute">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
