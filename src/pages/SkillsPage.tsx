import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Cloud, 
  Zap, 
  GitBranch, 
  Lock, 
  BarChart3,
  TrendingUp,
  Award,
  Layers,
  Server,
  Shield,
  CheckCircle2,
  Star
} from 'lucide-react'
import { resumeData } from '../data/resume'
import PageHeader from '../components/PageHeader'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2,
  Database,
  Cloud,
  Zap,
  GitBranch,
  Lock,
  BarChart3,
}

const skillStats = [
  { label: 'Years Experience', value: '9+', icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
  { label: 'Technologies Mastered', value: '40+', icon: Layers, color: 'from-purple-500 to-purple-600' },
  { label: 'Enterprise Projects', value: '15+', icon: Server, color: 'from-teal-500 to-teal-600' },
  { label: 'Certifications', value: '3', icon: Award, color: 'from-orange-500 to-orange-600' },
]

const featuredTechnologies = [
  { 
    name: 'Apache Spark', 
    category: 'Processing', 
    experience: '8+ years',
    level: 95,
    description: 'Expert in distributed data processing, performance tuning, and Spark SQL optimization'
  },
  { 
    name: 'Databricks', 
    category: 'Platform', 
    experience: '5+ years',
    level: 95,
    description: 'Unity Catalog, Delta Live Tables, MLflow, Structured Streaming, Workflows'
  },
  { 
    name: 'Apache Kafka', 
    category: 'Streaming', 
    experience: '6+ years',
    level: 90,
    description: 'Real-time event streaming, consumer groups, exactly-once semantics'
  },
  { 
    name: 'Azure Data Factory', 
    category: 'Orchestration', 
    experience: '5+ years',
    level: 95,
    description: 'Complex pipeline orchestration, triggers, data flows, integration runtimes'
  },
  { 
    name: 'Python', 
    category: 'Language', 
    experience: '9+ years',
    level: 95,
    description: 'PySpark, Pandas, NumPy, automation scripts, API development'
  },
  { 
    name: 'Delta Lake', 
    category: 'Storage', 
    experience: '4+ years',
    level: 95,
    description: 'ACID transactions, time-travel, schema evolution, optimization'
  },
]

const proficiencyLevels = [
  {
    level: 'Expert',
    description: 'Deep expertise with 5+ years of hands-on experience',
    color: 'from-accent-500 to-teal-500',
    borderColor: 'border-accent-500/40',
    technologies: [
      'Apache Spark', 'PySpark', 'Databricks', 'Delta Lake', 'Python', 'SQL',
      'Azure Data Factory', 'Apache Airflow', 'AWS S3', 'ADLS Gen2'
    ]
  },
  {
    level: 'Advanced',
    description: 'Strong proficiency with 3-5 years of experience',
    color: 'from-teal-500 to-green-500',
    borderColor: 'border-teal-500/40',
    technologies: [
      'Apache Kafka', 'Spark Streaming', 'Snowflake', 'Redshift', 'dbt',
      'AWS Glue', 'EMR', 'Docker', 'Kubernetes', 'Terraform'
    ]
  },
  {
    level: 'Proficient',
    description: 'Solid working knowledge with 1-3 years of experience',
    color: 'from-slate-400 to-slate-500',
    borderColor: 'border-slate-500/40',
    technologies: [
      'Scala', 'Apache Flink', 'Presto', 'Azure Synapse', 'BigQuery',
      'Dataflow', 'Pub/Sub', 'MLflow', 'Great Expectations'
    ]
  },
]

const domainExpertise = [
  {
    domain: 'Healthcare',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'from-red-500/20 to-red-600/10',
    years: '3+ years',
    highlights: ['HIPAA Compliance', 'EDI 837/835 Claims', 'HL7/FHIR', 'Clinical Analytics', 'PHI/PII Protection']
  },
  {
    domain: 'Insurance',
    icon: Shield,
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-blue-600/10',
    years: '5+ years',
    highlights: ['Actuarial Analytics', 'Claims Processing', 'Telematics Data', 'Risk Modeling', 'NAIC Compliance']
  },
  {
    domain: 'Financial Services',
    icon: BarChart3,
    color: 'text-green-400',
    bgColor: 'from-green-500/20 to-green-600/10',
    years: '2+ years',
    highlights: ['Data Warehousing', 'Reporting Analytics', 'ETL Optimization', 'Data Quality']
  },
]

const certifications = [
  { name: 'Azure Data Engineer Associate', issuer: 'Microsoft', year: '2023', color: 'from-blue-500 to-blue-600' },
  { name: 'Databricks Certified Data Engineer', issuer: 'Databricks', year: '2022', color: 'from-red-500 to-orange-500' },
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', year: '2021', color: 'from-orange-500 to-yellow-500' },
]

type TabType = 'categories' | 'proficiency' | 'featured'

export default function SkillsPage() {
  const { skills } = resumeData
  const [activeTab, setActiveTab] = useState<TabType>('categories')

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="section-container">
          <PageHeader 
            title="Technical Skills" 
            subtitle="Comprehensive expertise across the modern data engineering stack"
          />

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {skillStats.map((stat, index) => {
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

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-2 mb-12"
          >
            {[
              { id: 'categories', label: 'By Category' },
              { id: 'proficiency', label: 'By Proficiency' },
              { id: 'featured', label: 'Featured Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-accent-500 to-teal-500 text-white shadow-lg'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'categories' && (
              <motion.div
                key="categories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {skills.map((skill, index) => {
                    const Icon = iconMap[skill.icon] || Code2
                    return (
                      <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="glass-card p-6 group hover:border-accent-500/40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon size={24} className="text-accent-400" />
                          </div>
                          <h3 className="text-white font-semibold text-lg leading-tight">
                            {skill.category}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-sm rounded-lg border border-slate-700/50 hover:border-accent-500/40 hover:text-accent-400 transition-all duration-200"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'proficiency' && (
              <motion.div
                key="proficiency"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {proficiencyLevels.map((level, levelIndex) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: levelIndex * 0.15 }}
                    className={`glass-card p-6 ${level.borderColor} border-l-4`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${level.color} text-white font-bold text-sm`}>
                        {level.level}
                      </div>
                      <p className="text-slate-400 text-sm">{level.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {level.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.05 }}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-lg border border-slate-700/50 hover:border-accent-500/40 transition-all"
                        >
                          <CheckCircle2 size={14} className={
                            level.level === 'Expert' ? 'text-accent-400' :
                            level.level === 'Advanced' ? 'text-teal-400' : 'text-slate-400'
                          } />
                          <span className="text-slate-300 text-sm font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'featured' && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredTechnologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="glass-card p-6 group hover:border-accent-500/40 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-accent-500/20 text-accent-400 text-xs rounded">
                              {tech.category}
                            </span>
                            <span className="text-slate-500 text-xs">{tech.experience}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < Math.floor(tech.level / 20) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">Proficiency</span>
                          <span className="text-white font-medium">{tech.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className="h-full bg-gradient-to-r from-accent-500 to-teal-500 rounded-full"
                          />
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-sm">{tech.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Domain Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Domain Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {domainExpertise.map((domain, index) => {
                const Icon = domain.icon
                return (
                  <motion.div
                    key={domain.domain}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-6 hover:border-accent-500/40 transition-all"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${domain.bgColor} flex items-center justify-center mb-4`}>
                      <Icon size={28} className={domain.color} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{domain.domain}</h4>
                    <p className="text-slate-500 text-sm mb-4">{domain.years} experience</p>
                    <div className="flex flex-wrap gap-2">
                      {domain.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-lg"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 text-center group hover:border-accent-500/40 transition-all"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                    <Award size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-1">{cert.name}</h4>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mt-2">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Radar Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Skills Overview
            </h3>
            
            <div className="glass-card p-8">
              <svg viewBox="0 0 500 350" className="w-full max-w-3xl mx-auto">
                <defs>
                  <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="barGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#60a5fa"/>
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6"/>
                    <stop offset="100%" stopColor="#a78bfa"/>
                  </linearGradient>
                  <linearGradient id="barGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6"/>
                    <stop offset="100%" stopColor="#2dd4bf"/>
                  </linearGradient>
                  <linearGradient id="barGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b"/>
                    <stop offset="100%" stopColor="#fbbf24"/>
                  </linearGradient>
                  <linearGradient id="barGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#f472b6"/>
                  </linearGradient>
                  <linearGradient id="barGradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e"/>
                    <stop offset="100%" stopColor="#4ade80"/>
                  </linearGradient>
                </defs>
                
                {/* Background grid lines */}
                {[0, 25, 50, 75, 100].map((pct, i) => (
                  <line key={i} x1={150 + (pct * 3)} y1="30" x2={150 + (pct * 3)} y2="320" stroke="#1e293b" strokeWidth="1"/>
                ))}
                
                {/* Skill bars */}
                {[
                  { label: 'Data Processing', value: 95, gradient: 'url(#barGradient1)' },
                  { label: 'Cloud Platforms', value: 92, gradient: 'url(#barGradient2)' },
                  { label: 'Streaming/Real-time', value: 88, gradient: 'url(#barGradient3)' },
                  { label: 'Data Governance', value: 90, gradient: 'url(#barGradient4)' },
                  { label: 'DevOps/IaC', value: 85, gradient: 'url(#barGradient5)' },
                  { label: 'Analytics/ML', value: 80, gradient: 'url(#barGradient6)' },
                ].map((skill, index) => {
                  const y = 50 + index * 48
                  return (
                    <g key={skill.label}>
                      <text x="140" y={y + 15} textAnchor="end" fill="#94a3b8" fontSize="13" fontWeight="500">
                        {skill.label}
                      </text>
                      <rect x="150" y={y} width="300" height="28" rx="6" fill="#1e293b"/>
                      <motion.rect
                        x="150"
                        y={y}
                        height="28"
                        rx="6"
                        fill={skill.gradient}
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value * 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                      <text x={155 + skill.value * 3 + 8} y={y + 18} fill="#ffffff" fontSize="12" fontWeight="bold">
                        {skill.value}%
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
