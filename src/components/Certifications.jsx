import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mono-tag text-sm text-violet-soft/80 mb-4"
      >
        Certifications
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl font-medium text-paper mb-16 md:mb-20"
      >
        Credentials along the way.
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ rotate: -0.6, y: -4 }}
            className="group relative glass rounded-2xl p-7 overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-violet/10 blur-2xl group-hover:bg-violet/25 transition-colors duration-500" />
            <Award
              size={22}
              className="text-violet-soft/60 group-hover:text-violet-soft group-hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.6)] transition-all duration-500"
            />
            <h3 className="font-display text-lg text-paper mt-5 leading-snug">{cert.name}</h3>
            <p className="mono-tag text-xs text-mute mt-2">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
