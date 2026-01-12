import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Award,
  GraduationCap,
  TrendingUp,
  Building2,
  Clock,
  CheckCircle2,
  Star,
  Target
} from 'lucide-react'
import { resumeData } from '../data/resume'
import PageHeader from '../components/PageHeader'

const careerStats = [
  { label: 'Years of Experience', value: '9+', icon: Clock, color: 'from-blue-500 to-blue-600' },
  { label: 'Companies', value: '3', icon: Building2, color: 'from-purple-500 to-purple-600' },
  { label: 'Projects Delivered', value: '15+', icon: Target, color: 'from-teal-500 to-teal-600' },
  { label: 'Certifications', value: '3', icon: Award, color: 'from-orange-500 to-orange-600' },
]

const companyBranding: Record<string, { color: string; gradient: string; industry: string }> = {
  'Molina Healthcare': { 
    color: '#00a651', 
    gradient: 'from-green-500 to-emerald-600',
    industry: 'Healthcare'
  },
  'Allstate': { 
    color: '#0033a0', 
    gradient: 'from-blue-600 to-indigo-700',
    industry: 'Insurance'
  },
  'Infosys': { 
    color: '#007cc3', 
    gradient: 'from-cyan-500 to-blue-600',
    industry: 'Technology'
  },
}

const certificationDetails = [
  { 
    name: 'Azure Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2023',
    color: 'from-blue-500 to-blue-600',
    credentialId: 'DP-203'
  },
  { 
    name: 'Databricks Certified Data Engineer',
    issuer: 'Databricks',
    year: '2022',
    color: 'from-red-500 to-orange-500',
    credentialId: 'Professional'
  },
  { 
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2021',
    color: 'from-orange-500 to-yellow-500',
    credentialId: 'SAA-C02'
  },
]

const impactMetrics = [
  { metric: '55%', description: 'Improved data availability at Molina Healthcare', company: 'Molina Healthcare' },
  { metric: '40%', description: 'Reduced reporting defects through quality gates', company: 'Molina Healthcare' },
  { metric: '200+', description: 'Legacy ETL jobs modernized at Allstate', company: 'Allstate' },
  { metric: '30%', description: 'Cloud compute cost reduction achieved', company: 'Allstate' },
]

export default function ExperiencePage() {
  const { experience, education } = resumeData
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="section-container">
          <PageHeader 
            title="Professional Experience" 
            subtitle="9+ years building enterprise data platforms at scale"
          />

          {/* Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {careerStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-accent-500/40 transition-all"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Career Progression Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 mb-16"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">Career Progression</h3>
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {experience.slice().reverse().map((exp, index) => {
                const branding = companyBranding[exp.company]
                return (
                  <div key={exp.company} className="flex items-center flex-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${branding?.gradient || 'from-slate-500 to-slate-600'} flex items-center justify-center shadow-lg mb-3`}>
                        <Building2 size={24} className="text-white" />
                      </div>
                      <div className="text-white font-semibold text-sm">{exp.company.split(' ')[0]}</div>
                      <div className="text-slate-500 text-xs mt-1">{exp.duration.split(' - ')[0]}</div>
                      <div className="text-accent-400 text-xs mt-1">{exp.role.split(' ').slice(-2).join(' ')}</div>
                    </motion.div>
                    {index < experience.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                        className="flex-1 h-1 bg-gradient-to-r from-slate-700 to-accent-500/50 mx-4 rounded-full origin-left"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Work History</h3>
            
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-teal-500 to-slate-700" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experience.map((exp, index) => {
                const branding = companyBranding[exp.company]
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div 
                      className="absolute left-0 md:left-8 top-8 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-slate-950 z-10"
                      style={{ backgroundColor: branding?.color || '#3b82f6' }}
                    />

                    {/* Card */}
                    <div
                      className={`glass-card overflow-hidden transition-all duration-300 ${
                        expandedIndex === index ? 'border-accent-500/40 shadow-lg shadow-accent-500/5' : ''
                      }`}
                    >
                      {/* Header - Always Visible */}
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="flex gap-5">
                          {/* Company Icon */}
                          <div 
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${branding?.gradient || 'from-slate-500 to-slate-600'} flex items-center justify-center shadow-lg shrink-0`}
                          >
                            <Building2 size={24} className="text-white" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl lg:text-2xl font-bold text-white">
                                {exp.company}
                              </h3>
                              <span className={`px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${branding?.gradient || 'from-slate-500 to-slate-600'} text-white`}>
                                {branding?.industry}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-accent-400 font-medium">
                              <Briefcase size={14} />
                              {exp.role}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
                              <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {exp.duration}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin size={14} />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center"
                        >
                          <ChevronDown size={20} className="text-slate-400" />
                        </motion.div>
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 space-y-6 border-t border-slate-700/50 pt-6">
                              {/* Description */}
                              <p className="text-slate-300 text-lg">{exp.description}</p>

                              {/* Key Achievements */}
                              <div className="space-y-4">
                                <h4 className="text-white font-bold flex items-center gap-2">
                                  <Star size={16} className="text-yellow-400" />
                                  Key Achievements
                                </h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                      className="flex items-start gap-3 p-3 bg-slate-800/40 rounded-lg"
                                    >
                                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                                      <span className="text-slate-300 text-sm">{achievement}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Technologies */}
                              <div className="space-y-3">
                                <h4 className="text-white font-bold">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1.5 bg-accent-500/10 text-accent-400 text-sm rounded-lg border border-accent-500/20 hover:bg-accent-500/20 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Measurable Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {impactMetrics.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 text-center hover:border-accent-500/40 transition-all"
                >
                  <div className="text-4xl font-bold text-white mb-2">{item.metric}</div>
                  <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                  <span className="text-accent-400 text-xs font-medium">{item.company}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap size={28} className="text-accent-400" />
                Education
              </h2>
              <div className="glass-card p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shrink-0">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-slate-300 text-lg mb-1">{education.institution}</p>
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {education.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {education.graduationYear}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award size={28} className="text-accent-400" />
                Certifications
              </h2>
              <div className="space-y-4">
                {certificationDetails.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-5 flex items-center gap-4 hover:border-accent-500/40 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold">{cert.name}</h4>
                      <div className="flex items-center gap-3 text-slate-400 text-sm">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span>{cert.year}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                        <span className="text-accent-400">{cert.credentialId}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Growth Timeline - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Skills Evolution</h3>
            <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              A decade of continuous learning and skill acquisition across the data engineering landscape
            </p>
            
            {/* Skills Counter */}
            <div className="flex justify-center gap-8 mb-10">
              {[
                { label: 'Technologies', value: '40+', color: 'text-blue-400' },
                { label: 'Cloud Platforms', value: '3', color: 'text-purple-400' },
                { label: 'Certifications', value: '3', color: 'text-teal-400' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 overflow-x-auto">
              <svg viewBox="0 0 1000 320" className="w-full h-auto min-w-[800px]">
                <defs>
                  <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="33%" stopColor="#8b5cf6"/>
                    <stop offset="66%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#14b8a6"/>
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                  </linearGradient>
                  <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background grid */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="80" y1={60 + i * 50} x2="920" y2={60 + i * 50} stroke="#1e293b" strokeWidth="1"/>
                ))}
                
                {/* Timeline base with glow */}
                <line x1="80" y1="260" x2="920" y2="260" stroke="#334155" strokeWidth="3"/>
                
                {/* Growth area fill */}
                <path 
                  d="M 80 240 Q 180 230 260 210 T 440 160 T 620 110 T 800 70 T 920 40 L 920 260 L 80 260 Z" 
                  fill="url(#areaGradient)"
                />
                
                {/* Growth curve with animation */}
                <path 
                  d="M 80 240 Q 180 230 260 210 T 440 160 T 620 110 T 800 70 T 920 40" 
                  fill="none" 
                  stroke="url(#growthGradient)" 
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#glowFilter)"
                >
                  <animate attributeName="stroke-dasharray" from="0,2000" to="2000,0" dur="2s" fill="freeze"/>
                </path>

                {/* Timeline periods with enhanced visuals */}
                {[
                  { 
                    year: '2015-2018', 
                    company: 'Infosys',
                    skills: [
                      { name: 'Hadoop/HDFS', color: '#f59e0b' },
                      { name: 'Hive/Spark', color: '#f59e0b' },
                      { name: 'SQL/Python', color: '#22c55e' },
                      { name: 'Kafka', color: '#8b5cf6' },
                    ],
                    x: 120,
                    dotColor: '#22d3ee'
                  },
                  { 
                    year: '2019-2021', 
                    company: 'Allstate',
                    skills: [
                      { name: 'AWS (S3/EMR)', color: '#f97316' },
                      { name: 'Redshift', color: '#f97316' },
                      { name: 'Airflow', color: '#06b6d4' },
                      { name: 'dbt', color: '#ef4444' },
                    ],
                    x: 340,
                    dotColor: '#a78bfa'
                  },
                  { 
                    year: '2021-2023', 
                    company: 'Allstate',
                    skills: [
                      { name: 'Databricks', color: '#ef4444' },
                      { name: 'Delta Lake', color: '#ef4444' },
                      { name: 'Snowflake', color: '#38bdf8' },
                      { name: 'Terraform', color: '#8b5cf6' },
                    ],
                    x: 560,
                    dotColor: '#f472b6'
                  },
                  { 
                    year: '2023-Now', 
                    company: 'Molina',
                    skills: [
                      { name: 'Azure/ADLS', color: '#3b82f6' },
                      { name: 'Unity Catalog', color: '#ef4444' },
                      { name: 'MLflow', color: '#22c55e' },
                      { name: 'Synapse', color: '#3b82f6' },
                    ],
                    x: 780,
                    dotColor: '#2dd4bf'
                  },
                ].map((period, periodIndex) => (
                  <g key={period.year}>
                    {/* Vertical connector line */}
                    <line 
                      x1={period.x} 
                      y1={260} 
                      x2={period.x} 
                      y2={70 + periodIndex * 5} 
                      stroke={period.dotColor} 
                      strokeWidth="2" 
                      strokeDasharray="4,4"
                      opacity="0.5"
                    />
                    
                    {/* Timeline dot with pulse effect */}
                    <circle cx={period.x} cy={260} r="12" fill={period.dotColor} opacity="0.2">
                      <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx={period.x} cy={260} r="8" fill={period.dotColor}/>
                    <circle cx={period.x} cy={260} r="4" fill="#0f172a"/>
                    
                    {/* Year and company label */}
                    <text x={period.x} y={285} textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">
                      {period.year}
                    </text>
                    <text x={period.x} y={302} textAnchor="middle" fill="#64748b" fontSize="10">
                      {period.company}
                    </text>
                    
                    {/* Skills cards */}
                    {period.skills.map((skill, skillIndex) => (
                      <g key={skill.name}>
                        <rect 
                          x={period.x - 45} 
                          y={50 + skillIndex * 28} 
                          width="90" 
                          height="24" 
                          rx="6" 
                          fill="#0f172a" 
                          stroke={skill.color} 
                          strokeWidth="1.5"
                        />
                        <text 
                          x={period.x} 
                          y={66 + skillIndex * 28} 
                          textAnchor="middle" 
                          fill={skill.color} 
                          fontSize="10"
                          fontWeight="500"
                        >
                          {skill.name}
                        </text>
                      </g>
                    ))}
                  </g>
                ))}
                
                {/* Expertise indicator */}
                <g>
                  <rect x="920" y="20" width="70" height="30" rx="6" fill="#14b8a6" fillOpacity="0.2"/>
                  <text x="955" y="40" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="bold">
                    Expert
                  </text>
                </g>
                
                {/* Y-axis labels */}
                <text x="60" y="265" textAnchor="end" fill="#64748b" fontSize="10">Beginner</text>
                <text x="60" y="160" textAnchor="end" fill="#64748b" fontSize="10">Advanced</text>
                <text x="60" y="55" textAnchor="end" fill="#64748b" fontSize="10">Expert</text>
                
                {/* Skill count indicators */}
                {[
                  { x: 120, count: '4', label: 'skills' },
                  { x: 340, count: '+4', label: 'new' },
                  { x: 560, count: '+4', label: 'new' },
                  { x: 780, count: '+4', label: 'new' },
                ].map((indicator) => (
                  <g key={indicator.x}>
                    <circle cx={indicator.x} cy={185} r="16" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
                    <text x={indicator.x} y={189} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                      {indicator.count}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {[
                { label: 'Big Data', color: 'bg-amber-500' },
                { label: 'Cloud', color: 'bg-orange-500' },
                { label: 'Languages', color: 'bg-green-500' },
                { label: 'Streaming', color: 'bg-purple-500' },
                { label: 'DevOps', color: 'bg-cyan-500' },
                { label: 'ML/Analytics', color: 'bg-blue-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-slate-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
