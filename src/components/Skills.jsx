import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  const [selected, setSelected] = useState({ group: skillGroups[0].id, skill: skillGroups[0].skills[0] })

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mono-tag text-sm text-violet-soft/80 mb-4"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl font-medium text-paper mb-4"
      >
        What I build with.
      </motion.h2>
      <p className="text-mute mb-14 max-w-lg">Select a technology to see where it's actually been used.</p>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <div className="flex flex-col gap-9">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <p className="mono-tag text-xs text-mute mb-3 tracking-wide">{group.title}</p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const isActive = selected.skill.name === skill.name
                  return (
                    <button
                      key={skill.name}
                      onMouseEnter={() => setSelected({ group: group.id, skill })}
                      onClick={() => setSelected({ group: group.id, skill })}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                        isActive
                          ? 'border-violet-soft text-paper bg-violet/15 shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                          : 'border-line text-mute hover:border-violet-soft/50 hover:text-paper'
                      }`}
                    >
                      {skill.name}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 h-fit lg:sticky lg:top-32"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mono-tag text-xs text-violet-soft/70 mb-2">
                {skillGroups.find((g) => g.id === selected.group)?.title}
              </p>
              <h3 className="font-display text-2xl text-paper mb-6">{selected.skill.name}</h3>

              {selected.skill.projects.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-mute mono-tag mb-1">USED IN</p>
                  {selected.skill.projects.map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap-3 text-paper text-sm py-2 border-b border-line/60 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-soft" />
                      {p}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-mute text-sm">Core skill, applied across coursework and projects.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
