import { motion } from 'framer-motion'
import { building } from '../data/portfolio'

export default function Building() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mono-tag text-sm text-violet-soft/80 mb-4"
      >
        What's next
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl font-medium text-paper mb-16 md:mb-20"
      >
        What I'm building next.
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {building.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-line p-6 hover:border-violet-soft/40 transition-colors duration-400"
          >
            <span className="block w-2 h-2 rounded-full bg-violet-soft/60" />
            <h3 className="font-display text-lg text-paper mt-4 mb-2">{item.title}</h3>
            <p className="text-mute text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
