import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-10"
      >
        <div>
          <p className="mono-tag text-sm text-violet-soft/80 mb-4">Education</p>
          <h3 className="font-display text-2xl md:text-3xl text-paper font-medium">{profile.university}</h3>
          <p className="text-mute mt-2">Computer Science Engineering · Final Year</p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-display text-5xl md:text-6xl font-semibold text-gradient">{profile.cgpa}</p>
          <p className="mono-tag text-xs text-mute mt-2 tracking-wide">CGPA</p>
        </div>
      </motion.div>
    </section>
  )
}
