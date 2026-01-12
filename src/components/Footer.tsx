import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <div>
              <div className="text-white font-semibold group-hover:text-accent-400 transition-colors">Saketh Gittaveni</div>
              <div className="text-slate-500 text-sm">Senior Data Engineer</div>
            </div>
          </Link>

          {/* Right - Navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-slate-400 hover:text-accent-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
