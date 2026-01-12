import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  BarChart3, 
  Workflow,
  CheckCircle2,
  AlertTriangle,
  Lightbulb
} from 'lucide-react'
import { projectDetails } from '../data/projectDetails'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Database,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Workflow,
}

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectId ? projectDetails[projectId] : null

  if (!project) {
    return (
      <div className="section-padding">
        <div className="section-container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-teal-500/10" />
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-accent-500/10 text-accent-400 text-sm rounded-lg border border-accent-500/20">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl">
              {project.tagline}
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {project.metrics.map((metric, index) => (
              <div key={index} className="glass-card p-5 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-accent-400 font-medium text-sm mb-1">{metric.label}</div>
                <div className="text-slate-500 text-xs">{metric.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-slate-900/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {project.overview}
              </p>
              <div className="glass-card p-6 border-l-4 border-l-red-500">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-red-400" />
                  Problem Statement
                </h3>
                <p className="text-slate-400">{project.problemStatement}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-6 border-l-4 border-l-teal-500 mb-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb size={20} className="text-teal-400" />
                  Solution
                </h3>
                <p className="text-slate-400">{project.solution}</p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                {project.keyFeatures.map((feature, index) => {
                  const Icon = iconMap[feature.icon] || Database
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-accent-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{feature.title}</h4>
                        <p className="text-slate-400 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {project.architecture.title}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {project.architecture.description}
            </p>
          </motion.div>

          {/* Architecture Layers */}
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.architecture.layers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`h-2 rounded-full bg-gradient-to-r ${layer.color} mb-4`} />
                  <h3 className="text-white font-bold text-lg mb-2">{layer.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{layer.description}</p>
                  <div className="space-y-2">
                    {layer.components.map((component, i) => (
                      <div 
                        key={i}
                        className="px-3 py-2 bg-slate-800/60 rounded-lg text-slate-300 text-sm"
                      >
                        {component}
                      </div>
                    ))}
                  </div>
                  {index < project.architecture.layers.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-slate-600">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-slate-900/30">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          >
            Technology Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.techStack.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-accent-400 font-semibold mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.tools.map((tool, i) => (
                    <div key={i}>
                      <div className="text-white font-medium">{tool.name}</div>
                      <div className="text-slate-500 text-sm">{tool.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          >
            Implementation Phases
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-teal-500 to-slate-700" />

            <div className="space-y-8">
              {project.implementation.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                    {phase.phase}
                  </div>

                  <div className="glass-card p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-slate-400 mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800/60 text-slate-300 text-sm rounded-lg"
                        >
                          <CheckCircle2 size={14} className="text-teal-400" />
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots / Visuals */}
      <section className="section-padding bg-slate-900/30">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          >
            Project Visuals
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                  {/* Architecture Diagram Visual */}
                  {screenshot.type === 'architecture' && (
                    <div className="absolute inset-0 p-6">
                      <svg viewBox="0 0 400 200" className="w-full h-full">
                        {/* Data Sources */}
                        <rect x="10" y="70" width="60" height="60" rx="8" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                        <text x="40" y="105" textAnchor="middle" fill="#60a5fa" fontSize="10">Sources</text>
                        
                        {/* Ingestion */}
                        <rect x="90" y="70" width="60" height="60" rx="8" fill="#1e3a5f" stroke="#8b5cf6" strokeWidth="2"/>
                        <text x="120" y="105" textAnchor="middle" fill="#a78bfa" fontSize="10">Ingest</text>
                        
                        {/* Processing */}
                        <rect x="170" y="70" width="60" height="60" rx="8" fill="#1e3a5f" stroke="#14b8a6" strokeWidth="2"/>
                        <text x="200" y="105" textAnchor="middle" fill="#2dd4bf" fontSize="10">Process</text>
                        
                        {/* Storage */}
                        <rect x="250" y="70" width="60" height="60" rx="8" fill="#1e3a5f" stroke="#f59e0b" strokeWidth="2"/>
                        <text x="280" y="105" textAnchor="middle" fill="#fbbf24" fontSize="10">Storage</text>
                        
                        {/* Analytics */}
                        <rect x="330" y="70" width="60" height="60" rx="8" fill="#1e3a5f" stroke="#22d3ee" strokeWidth="2"/>
                        <text x="360" y="105" textAnchor="middle" fill="#67e8f9" fontSize="10">Analytics</text>
                        
                        {/* Arrows */}
                        <path d="M70 100 L90 100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)"/>
                        <path d="M150 100 L170 100" stroke="#475569" strokeWidth="2"/>
                        <path d="M230 100 L250 100" stroke="#475569" strokeWidth="2"/>
                        <path d="M310 100 L330 100" stroke="#475569" strokeWidth="2"/>
                        
                        {/* Governance Layer */}
                        <rect x="90" y="150" width="220" height="35" rx="6" fill="transparent" stroke="#ef4444" strokeWidth="1" strokeDasharray="4"/>
                        <text x="200" y="172" textAnchor="middle" fill="#f87171" fontSize="9">Security & Governance Layer</text>
                        
                        {/* Monitoring */}
                        <rect x="90" y="15" width="220" height="35" rx="6" fill="transparent" stroke="#22c55e" strokeWidth="1" strokeDasharray="4"/>
                        <text x="200" y="37" textAnchor="middle" fill="#4ade80" fontSize="9">Monitoring & Observability</text>
                      </svg>
                    </div>
                  )}

                  {/* Dashboard Visual */}
                  {screenshot.type === 'dashboard' && (
                    <div className="absolute inset-0 p-4">
                      <div className="h-full bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"/>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                            <div className="w-3 h-3 rounded-full bg-green-500"/>
                          </div>
                          <div className="text-slate-500 text-xs">Analytics Dashboard</div>
                        </div>
                        {/* Metrics Row */}
                        <div className="grid grid-cols-4 gap-2 mb-3">
                          {[
                            { value: '2.4M', label: 'Records', color: 'text-accent-400' },
                            { value: '99.9%', label: 'Uptime', color: 'text-green-400' },
                            { value: '45ms', label: 'Latency', color: 'text-teal-400' },
                            { value: '12TB', label: 'Processed', color: 'text-purple-400' },
                          ].map((m, i) => (
                            <div key={i} className="bg-slate-800/60 rounded p-2 text-center">
                              <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
                              <div className="text-slate-500 text-[8px]">{m.label}</div>
                            </div>
                          ))}
                        </div>
                        {/* Charts Row */}
                        <div className="grid grid-cols-2 gap-2 flex-1">
                          <div className="bg-slate-800/40 rounded p-2">
                            <div className="text-slate-400 text-[8px] mb-1">Throughput</div>
                            <div className="flex items-end gap-1 h-12">
                              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-accent-500 to-teal-500 rounded-t" style={{ height: `${h}%` }}/>
                              ))}
                            </div>
                          </div>
                          <div className="bg-slate-800/40 rounded p-2">
                            <div className="text-slate-400 text-[8px] mb-1">Data Quality</div>
                            <div className="flex items-center justify-center h-12">
                              <div className="relative w-12 h-12">
                                <svg className="w-12 h-12 -rotate-90">
                                  <circle cx="24" cy="24" r="20" fill="none" stroke="#334155" strokeWidth="4"/>
                                  <circle cx="24" cy="24" r="20" fill="none" stroke="#14b8a6" strokeWidth="4" strokeDasharray="113" strokeDashoffset="11"/>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-teal-400 text-[10px] font-bold">90%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pipeline Visual */}
                  {screenshot.type === 'pipeline' && (
                    <div className="absolute inset-0 p-6">
                      <svg viewBox="0 0 400 180" className="w-full h-full">
                        {/* Pipeline nodes */}
                        <g>
                          {/* Extract */}
                          <circle cx="50" cy="90" r="30" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2"/>
                          <text x="50" y="85" textAnchor="middle" fill="#a78bfa" fontSize="10">Extract</text>
                          <text x="50" y="98" textAnchor="middle" fill="#64748b" fontSize="8">Sources</text>
                          
                          {/* Transform */}
                          <circle cx="150" cy="90" r="30" fill="#1e293b" stroke="#14b8a6" strokeWidth="2"/>
                          <text x="150" y="85" textAnchor="middle" fill="#2dd4bf" fontSize="10">Transform</text>
                          <text x="150" y="98" textAnchor="middle" fill="#64748b" fontSize="8">Spark/dbt</text>
                          
                          {/* Load */}
                          <circle cx="250" cy="90" r="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="2"/>
                          <text x="250" y="85" textAnchor="middle" fill="#fbbf24" fontSize="10">Load</text>
                          <text x="250" y="98" textAnchor="middle" fill="#64748b" fontSize="8">Delta Lake</text>
                          
                          {/* Serve */}
                          <circle cx="350" cy="90" r="30" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
                          <text x="350" y="85" textAnchor="middle" fill="#60a5fa" fontSize="10">Serve</text>
                          <text x="350" y="98" textAnchor="middle" fill="#64748b" fontSize="8">BI/ML</text>
                        </g>
                        
                        {/* Connecting lines with animation */}
                        <path d="M80 90 L120 90" stroke="#475569" strokeWidth="2" strokeDasharray="6,3">
                          <animate attributeName="stroke-dashoffset" from="9" to="0" dur="1s" repeatCount="indefinite"/>
                        </path>
                        <path d="M180 90 L220 90" stroke="#475569" strokeWidth="2" strokeDasharray="6,3">
                          <animate attributeName="stroke-dashoffset" from="9" to="0" dur="1s" repeatCount="indefinite"/>
                        </path>
                        <path d="M280 90 L320 90" stroke="#475569" strokeWidth="2" strokeDasharray="6,3">
                          <animate attributeName="stroke-dashoffset" from="9" to="0" dur="1s" repeatCount="indefinite"/>
                        </path>
                        
                        {/* Data quality checks */}
                        <rect x="100" y="140" width="80" height="25" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="1"/>
                        <text x="140" y="157" textAnchor="middle" fill="#4ade80" fontSize="8">Quality Gate</text>
                        
                        <rect x="200" y="140" width="80" height="25" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="1"/>
                        <text x="240" y="157" textAnchor="middle" fill="#4ade80" fontSize="8">Schema Check</text>
                        
                        {/* Orchestrator label */}
                        <text x="200" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10">Airflow / ADF Orchestration</text>
                      </svg>
                    </div>
                  )}

                  {/* Code/Governance Visual */}
                  {screenshot.type === 'code' && (
                    <div className="absolute inset-0 p-4">
                      <div className="h-full bg-slate-900/80 rounded-lg border border-slate-700/50 p-3 font-mono text-xs overflow-hidden">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700/50">
                          <div className="w-2 h-2 rounded-full bg-red-500"/>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"/>
                          <div className="w-2 h-2 rounded-full bg-green-500"/>
                          <span className="text-slate-500 text-[10px] ml-2">governance_config.py</span>
                        </div>
                        <div className="space-y-1 text-[10px]">
                          <div><span className="text-purple-400">from</span> <span className="text-teal-400">unity_catalog</span> <span className="text-purple-400">import</span> Catalog</div>
                          <div><span className="text-purple-400">from</span> <span className="text-teal-400">purview</span> <span className="text-purple-400">import</span> DataGovernance</div>
                          <div className="text-slate-600"># Configure access controls</div>
                          <div><span className="text-yellow-400">@secure_access</span><span className="text-slate-500">(</span><span className="text-green-400">"PHI"</span><span className="text-slate-500">)</span></div>
                          <div><span className="text-purple-400">def</span> <span className="text-accent-400">apply_masking</span><span className="text-slate-500">(</span>df<span className="text-slate-500">):</span></div>
                          <div className="pl-4"><span className="text-slate-400">rules</span> <span className="text-slate-500">=</span> <span className="text-slate-500">{'{'}</span></div>
                          <div className="pl-8"><span className="text-green-400">"ssn"</span><span className="text-slate-500">:</span> <span className="text-green-400">"mask_all"</span><span className="text-slate-500">,</span></div>
                          <div className="pl-8"><span className="text-green-400">"dob"</span><span className="text-slate-500">:</span> <span className="text-green-400">"hash_sha256"</span></div>
                          <div className="pl-4"><span className="text-slate-500">{'}'}</span></div>
                          <div className="pl-4"><span className="text-purple-400">return</span> mask<span className="text-slate-500">(</span>df<span className="text-slate-500">,</span> rules<span className="text-slate-500">)</span></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{screenshot.title}</h3>
                  <p className="text-slate-400 text-sm">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      {project.technicalProcess && project.technicalProcess.length > 0 && (
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Technical Implementation
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Detailed code, queries, and step-by-step technical process
              </p>
            </motion.div>

            <div className="space-y-12">
              {project.technicalProcess.map((process, processIndex) => (
                <motion.div
                  key={processIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: processIndex * 0.1 }}
                  className="glass-card p-6 lg:p-8"
                >
                  {/* Process Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {process.title}
                      </h3>
                      <p className="text-slate-400">{process.description}</p>
                    </div>
                  </div>

                  {/* Process Details */}
                  <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-1">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-teal-400" />
                        Key Steps
                      </h4>
                      <ul className="space-y-2">
                        {process.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Code Snippets */}
                    {process.codeSnippets && process.codeSnippets.length > 0 && (
                      <div className="lg:col-span-2 space-y-4">
                        {process.codeSnippets.map((snippet, snippetIndex) => (
                          <div key={snippetIndex} className="bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700/50">
                            {/* Code Header */}
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/60 border-b border-slate-700/50">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-slate-300 font-medium text-sm">{snippet.title}</span>
                              </div>
                              <span className="px-2 py-0.5 bg-slate-700/60 text-slate-400 text-xs rounded">
                                {snippet.language}
                              </span>
                            </div>
                            {/* Code Description */}
                            <div className="px-4 py-2 bg-slate-800/30 border-b border-slate-700/30">
                              <p className="text-slate-500 text-xs">{snippet.description}</p>
                            </div>
                            {/* Code Content */}
                            <div className="p-4 overflow-x-auto">
                              <pre className="text-xs lg:text-sm font-mono text-slate-300 whitespace-pre-wrap break-words">
                                <code>{snippet.code}</code>
                              </pre>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      <section className="section-padding bg-slate-900/30">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
          >
            Challenges & Solutions
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {project.challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertTriangle size={18} />
                      <span className="font-semibold">Challenge</span>
                    </div>
                    <p className="text-slate-300">{item.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-teal-400 mb-2">
                      <Lightbulb size={18} />
                      <span className="font-semibold">Solution</span>
                    </div>
                    <p className="text-slate-300">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding bg-slate-900/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/60 text-slate-300 rounded-lg border border-slate-700/50 hover:border-accent-500/40 hover:text-accent-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-12"
          >
            <Link to="/projects" className="btn-secondary">
              <ArrowLeft size={18} />
              All Projects
            </Link>
            <Link to="/contact" className="btn-primary">
              Discuss This Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
