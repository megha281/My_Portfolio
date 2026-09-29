import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line">
      <div>
        <p className="font-display text-paper">{profile.name}</p>
        <p className="text-mute text-sm mt-1">Built with curiosity + code.</p>
      </div>
      <div className="flex items-center gap-5 text-mute">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-paper transition-colors">
          <Github size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-paper transition-colors">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-paper transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  )
}
