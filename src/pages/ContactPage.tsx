import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react'
import { resumeData } from '../data/resume'
import PageHeader from '../components/PageHeader'

export default function ContactPage() {
  const { personal } = resumeData
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend-only - would connect to backend in production
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormState({ name: '', email: '', company: '', message: '' })
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: personal.linkedin, href: `https://${personal.linkedin}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ]

  return (
    <section className="section-padding">
      <div className="section-container">
        <PageHeader 
          title="Get in Touch" 
          subtitle="Let's discuss how I can contribute to your data engineering initiatives"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Open to Relocate Badge */}
            {personal.openToRelocate && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                Open to Relocate
              </div>
            )}

            <h3 className="text-2xl font-bold text-white">
              Ready for your next data engineering challenge
            </h3>

            <p className="text-slate-400 leading-relaxed">
              I'm always interested in hearing about new opportunities in data engineering, 
              cloud architecture, and building scalable data platforms. Whether you're looking 
              for a senior individual contributor or a technical lead, let's connect.
            </p>

            {/* Contact Items */}
            <div className="space-y-4 pt-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`glass-card p-4 flex items-center gap-4 group ${
                      item.href ? 'hover:border-accent-500/40 cursor-pointer' : ''
                    } transition-all duration-300`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 lg:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 transition-all resize-none"
                  placeholder="Tell me about your opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full btn-primary justify-center disabled:opacity-50"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
