import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cloud, Workflow, Shield, ArrowRight, Download, Mail } from 'lucide-react'
import { resumeData } from '../data/resume'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cloud,
  Workflow,
  Shield,
}

export default function HomePage() {
  const { personal, highlights } = resumeData

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-0">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                {personal.yearsOfExperience}+ Years of Experience
              </span>
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
              >
                {personal.name}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text"
              >
                {personal.title}
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/experience" className="btn-primary">
                View Experience
                <ArrowRight size={18} />
              </Link>
              <a href="#" className="btn-secondary">
                <Download size={18} />
                Download Resume
              </a>
              <Link to="/contact" className="btn-ghost">
                <Mail size={18} />
                Contact
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { value: '9+', label: 'Years Exp.' },
                { value: '50M+', label: 'Records/Day' },
                { value: '3', label: 'Domains' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 glass-card">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo & Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-teal-500/20 rounded-3xl blur-3xl opacity-30" />
            
            <div className="relative space-y-6">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-teal-500 rounded-2xl blur-xl opacity-30 scale-105" />
                  <img 
                    src="/Saketh.png" 
                    alt="Saketh Gittaveni"
                    className="relative w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-2xl border-2 border-slate-700/50 shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Highlights Cards */}
              {highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon] || Cloud
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="glass-card p-5 flex items-center gap-4 group hover:border-accent-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-0.5">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
