import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { journey } from '../data/portfolio'

export default function Journey() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" className="relative py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mono-tag text-sm text-violet-soft/80 mb-4"
      >
        Journey
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl font-medium text-paper mb-16 md:mb-20"
      >
        How I got here.
      </motion.h2>

      <div ref={containerRef} className="relative pl-10 md:pl-14">
        <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-line" />
        <motion.div
          className="absolute left-[7px] md:left-[11px] top-0 w-px bg-gradient-to-b from-violet-soft via-indigo to-azure origin-top"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-14 md:gap-16">
          {journey.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span
                className={`absolute -left-10 md:-left-14 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                  item.id === 'now'
                    ? 'bg-violet-soft border-violet-soft shadow-[0_0_16px_rgba(167,139,250,0.7)]'
                    : 'bg-void border-violet-soft/70'
                }`}
              />
              <p className="mono-tag text-xs text-mute mb-1.5">{item.period}</p>
              <h3 className="font-display text-xl md:text-2xl text-paper font-medium">{item.title}</h3>
              <p className="text-violet-soft/80 text-sm mt-1">{item.org}</p>
              <p className="mt-3 text-mute leading-relaxed max-w-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
