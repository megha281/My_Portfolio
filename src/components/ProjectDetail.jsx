import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectDetail({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-void/90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full md:max-w-3xl max-h-[92vh] overflow-y-auto glass md:rounded-3xl p-8 md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-mute hover:text-paper p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close project detail"
            >
              <X size={22} />
            </button>

            <p className="mono-tag text-violet-soft/70 text-sm mb-3">{project.number} · {project.tag}</p>
            <h2 className="font-display text-4xl md:text-5xl text-paper font-semibold mb-2">{project.name}</h2>
            {project.status && (
              <span className="inline-block mt-3 mb-2 px-3 py-1 rounded-full text-xs mono-tag border border-violet-soft/40 text-violet-soft">
                {project.status}
              </span>
            )}

            <div className="flex flex-wrap gap-2 mt-5 mb-8">
              {project.stack.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs mono-tag text-mute border border-line">
                  {t}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-display text-paper text-lg mb-2">Overview</h4>
                <p className="text-mute text-sm leading-relaxed">{project.overview}</p>
              </div>
              <div>
                <h4 className="font-display text-paper text-lg mb-2">Problem</h4>
                <p className="text-mute text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-display text-paper text-lg mb-2">Approach</h4>
                <p className="text-mute text-sm leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <h4 className="font-display text-paper text-lg mb-2">My Contribution</h4>
                <p className="text-mute text-sm leading-relaxed">{project.contribution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-line">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-paper text-sm hover:border-violet-soft/60 hover:text-violet-soft transition-colors"
                >
                  <Github size={16} /> View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo to-violet text-white text-sm"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
