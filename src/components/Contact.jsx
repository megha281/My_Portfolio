import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mono-tag text-sm text-violet-soft/80 mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold leading-[0.95] tracking-tight text-paper text-[13vw] md:text-[6.5vw] lg:text-6xl"
        >
          LET'S BUILD
          <br />
          <span className="text-gradient">SOMETHING USEFUL.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-lg text-mute max-w-md"
        >
          Have a project, opportunity, or idea? I'd like to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.25 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo to-violet text-white font-medium text-lg"
          >
            {profile.email}
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.35 }}
          className="mt-14 flex items-center gap-6"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-mute hover:text-paper transition-colors text-sm"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-mute hover:text-paper transition-colors text-sm"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
