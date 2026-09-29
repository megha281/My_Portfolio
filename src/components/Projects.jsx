import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import ProjectDetail from './ProjectDetail'

const gradients = [
  'from-violet/30 via-indigo/20 to-transparent',
  'from-azure/25 via-indigo/25 to-transparent',
  'from-indigo/30 via-violet/15 to-transparent',
  'from-violet-soft/25 via-azure/15 to-transparent',
  'from-indigo/25 via-violet/20 to-transparent',
]

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mono-tag text-sm text-violet-soft/80 mb-4"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl font-medium text-paper mb-16 md:mb-20"
      >
        Five things I've actually built.
      </motion.h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpenProject(project)}
            data-cursor="hover"
            className={`group relative overflow-hidden rounded-3xl border border-line bg-panel cursor-pointer transition-transform duration-500 hover:-translate-y-1`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} opacity-60 group-hover:opacity-90 transition-opacity duration-500`}
            />
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
              <span className="font-display text-6xl md:text-7xl font-light text-white/10 group-hover:text-white/20 transition-colors duration-500 shrink-0">
                {project.number}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl md:text-3xl text-paper font-medium">{project.name}</h3>
                  {project.status && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] mono-tag border border-violet-soft/40 text-violet-soft">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-mute text-sm mb-3">{project.tag}</p>
                <p className="text-paper/80 max-w-xl leading-relaxed hidden md:block">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[11px] mono-tag text-mute border border-line">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-line text-paper text-xs hover:border-violet-soft/60 hover:text-violet-soft transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 text-paper text-xs hover:bg-white/15 transition-colors"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
