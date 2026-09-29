import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mono-tag text-sm text-violet-soft/80 mb-4"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl font-medium text-paper mb-16 md:mb-20"
      >
        Where I've worked.
      </motion.h2>

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-[1fr_2.4fr] gap-4 md:gap-10 py-9 border-b border-line last:border-0"
          >
            <div>
              <p className="mono-tag text-xs text-mute">{job.period}</p>
              {job.location && <p className="mono-tag text-xs text-mute mt-1">{job.location}</p>}
              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-[11px] mono-tag ${
                  job.status === 'current'
                    ? 'bg-violet/15 text-violet-soft border border-violet-soft/40'
                    : 'text-mute border border-line'
                }`}
              >
                {job.status === 'current' ? 'CURRENT' : 'COMPLETED'}
              </span>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl text-paper font-medium">{job.role}</h3>
              <p className="text-violet-soft/80 text-sm mt-1">{job.company}</p>
              <p className="mt-4 text-mute leading-relaxed max-w-xl">{job.work}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.stack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-[11px] mono-tag text-mute border border-line">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
