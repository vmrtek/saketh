import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Database, 
  ArrowRight, 
  Server, 
  Shield, 
  BarChart3, 
  Workflow, 
  Cloud, 
  Zap,
  Layers,
  Lock,
  GitBranch,
  Activity,
  CheckCircle2,
  Code2
} from 'lucide-react'
import PageHeader from '../components/PageHeader'

const cloudPlatforms = [
  {
    name: 'Azure',
    color: 'from-blue-500 to-blue-600',
    expertise: 95,
    services: [
      'Azure Data Factory',
      'Databricks',
      'Synapse Analytics',
      'ADLS Gen2',
      'Event Hubs',
      'Azure Purview',
      'Key Vault',
      'Logic Apps'
    ],
    projects: '5+ Enterprise Projects'
  },
  {
    name: 'AWS',
    color: 'from-orange-500 to-orange-600',
    expertise: 90,
    services: [
      'S3 / Glacier',
      'EMR',
      'Redshift',
      'Glue',
      'Kinesis',
      'Lake Formation',
      'Step Functions',
      'SageMaker'
    ],
    projects: '4+ Enterprise Projects'
  },
  {
    name: 'GCP',
    color: 'from-green-500 to-green-600',
    expertise: 85,
    services: [
      'BigQuery',
      'Dataflow',
      'Pub/Sub',
      'Cloud Composer',
      'Vertex AI',
      'Dataproc',
      'Cloud Functions',
      'Looker'
    ],
    projects: '2+ Enterprise Projects'
  }
]

const architecturePatterns = [
  {
    id: 'medallion',
    title: 'Medallion Lakehouse Architecture',
    description: 'Multi-layer data architecture ensuring progressive data quality from raw to business-ready',
    icon: Layers,
    layers: [
      { name: 'Bronze', description: 'Raw data landing zone', color: '#d97706', tools: ['Autoloader', 'ADF', 'Kafka'] },
      { name: 'Silver', description: 'Cleansed & validated', color: '#94a3b8', tools: ['DLT', 'dbt', 'Spark'] },
      { name: 'Gold', description: 'Business aggregates', color: '#eab308', tools: ['Views', 'ML', 'APIs'] },
    ],
    useCases: ['Healthcare Analytics', 'Insurance Data Platform', 'Financial Reporting']
  },
  {
    id: 'streaming',
    title: 'Real-Time Streaming Architecture',
    description: 'Event-driven architecture for sub-second data processing and real-time insights',
    icon: Zap,
    layers: [
      { name: 'Producers', description: 'Event sources', color: '#22c55e', tools: ['IoT', 'Apps', 'APIs'] },
      { name: 'Broker', description: 'Message queue', color: '#8b5cf6', tools: ['Kafka', 'Event Hubs'] },
      { name: 'Consumers', description: 'Stream processing', color: '#3b82f6', tools: ['Spark Streaming', 'Flink'] },
    ],
    useCases: ['Clinical Alerts', 'Fraud Detection', 'Telematics Processing']
  },
  {
    id: 'governance',
    title: 'Data Governance Architecture',
    description: 'Enterprise governance framework for security, compliance, and data quality',
    icon: Shield,
    layers: [
      { name: 'Catalog', description: 'Metadata management', color: '#06b6d4', tools: ['Unity Catalog', 'Purview'] },
      { name: 'Security', description: 'Access control', color: '#ef4444', tools: ['RBAC', 'Masking', 'RLS'] },
      { name: 'Quality', description: 'Data validation', color: '#10b981', tools: ['Great Expectations', 'dbt tests'] },
    ],
    useCases: ['HIPAA Compliance', 'GDPR Requirements', 'SOX Auditing']
  }
]

const techStackCategories = [
  {
    category: 'Data Processing',
    icon: Server,
    color: 'text-purple-400',
    technologies: [
      { name: 'Apache Spark', level: 95 },
      { name: 'PySpark', level: 95 },
      { name: 'Databricks', level: 95 },
      { name: 'dbt', level: 90 },
      { name: 'Apache Flink', level: 75 },
    ]
  },
  {
    category: 'Data Storage',
    icon: Database,
    color: 'text-teal-400',
    technologies: [
      { name: 'Delta Lake', level: 95 },
      { name: 'Snowflake', level: 90 },
      { name: 'Redshift', level: 85 },
      { name: 'BigQuery', level: 85 },
      { name: 'PostgreSQL', level: 85 },
    ]
  },
  {
    category: 'Streaming',
    icon: Activity,
    color: 'text-orange-400',
    technologies: [
      { name: 'Apache Kafka', level: 90 },
      { name: 'Spark Streaming', level: 90 },
      { name: 'AWS Kinesis', level: 85 },
      { name: 'Azure Event Hubs', level: 85 },
      { name: 'Pub/Sub', level: 80 },
    ]
  },
  {
    category: 'Orchestration',
    icon: Workflow,
    color: 'text-blue-400',
    technologies: [
      { name: 'Apache Airflow', level: 95 },
      { name: 'Azure Data Factory', level: 95 },
      { name: 'AWS Step Functions', level: 85 },
      { name: 'Prefect', level: 75 },
      { name: 'Dagster', level: 70 },
    ]
  },
  {
    category: 'Languages',
    icon: Code2,
    color: 'text-green-400',
    technologies: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 95 },
      { name: 'Scala', level: 75 },
      { name: 'Bash/Shell', level: 85 },
      { name: 'Terraform (HCL)', level: 85 },
    ]
  },
  {
    category: 'DevOps & CI/CD',
    icon: GitBranch,
    color: 'text-pink-400',
    technologies: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Azure DevOps', level: 90 },
      { name: 'GitHub Actions', level: 85 },
    ]
  }
]

const designPrinciples = [
  {
    title: 'Scalability First',
    description: 'Design systems that scale horizontally with data volume growth',
    icon: BarChart3
  },
  {
    title: 'Security by Design',
    description: 'Implement defense-in-depth with encryption, access controls, and audit logging',
    icon: Lock
  },
  {
    title: 'Data Quality Gates',
    description: 'Validate data at every layer with automated quality checks',
    icon: CheckCircle2
  },
  {
    title: 'Infrastructure as Code',
    description: 'Version-controlled, repeatable deployments using Terraform and ARM templates',
    icon: Code2
  }
]

export default function ArchitecturePage() {
  const [selectedPlatform, setSelectedPlatform] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="section-container">
          <PageHeader 
            title="Architecture & Tech Stack" 
            subtitle="Enterprise-grade data architectures designed for scale, security, and performance"
          />

          {/* Cloud Platforms Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Multi-Cloud Expertise
            </h3>

            {/* Platform Tabs */}
            <div className="flex justify-center gap-4 mb-8">
              {cloudPlatforms.map((platform, index) => (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPlatform === index
                      ? `bg-gradient-to-r ${platform.color} text-white shadow-lg`
                      : 'bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {platform.name}
                </button>
              ))}
            </div>

            {/* Platform Details */}
            <motion.div
              key={selectedPlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Expertise Meter */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">
                      {cloudPlatforms[selectedPlatform].name} Expertise
                    </h4>
                    <span className="text-2xl font-bold text-accent-400">
                      {cloudPlatforms[selectedPlatform].expertise}%
                    </span>
                  </div>
                  <div className="h-4 bg-slate-800 rounded-full overflow-hidden mb-6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${cloudPlatforms[selectedPlatform].expertise}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${cloudPlatforms[selectedPlatform].color} rounded-full`}
                    />
                  </div>
                  <p className="text-slate-400 mb-4">
                    {cloudPlatforms[selectedPlatform].projects}
                  </p>

                  {/* Interactive Cloud Architecture SVG */}
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                    <svg viewBox="0 0 300 200" className="w-full h-auto">
                      {/* Central Cloud */}
                      <ellipse cx="150" cy="100" rx="80" ry="50" fill="none" stroke="url(#cloudGradient)" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite"/>
                      </ellipse>
                      <text x="150" y="105" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold">
                        {cloudPlatforms[selectedPlatform].name}
                      </text>
                      
                      {/* Data Sources */}
                      <rect x="20" y="30" width="50" height="30" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
                      <text x="45" y="50" textAnchor="middle" fill="#93c5fd" fontSize="8">Sources</text>
                      <path d="M70 45 L80 65" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3"/>
                      
                      {/* Processing */}
                      <rect x="230" y="30" width="50" height="30" rx="4" fill="#1e3a5f" stroke="#8b5cf6" strokeWidth="1.5"/>
                      <text x="255" y="50" textAnchor="middle" fill="#c4b5fd" fontSize="8">Process</text>
                      <path d="M230 45 L220 65" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3"/>
                      
                      {/* Storage */}
                      <rect x="20" y="140" width="50" height="30" rx="4" fill="#1e3a5f" stroke="#14b8a6" strokeWidth="1.5"/>
                      <text x="45" y="160" textAnchor="middle" fill="#5eead4" fontSize="8">Storage</text>
                      <path d="M70 155 L80 135" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3"/>
                      
                      {/* Analytics */}
                      <rect x="230" y="140" width="50" height="30" rx="4" fill="#1e3a5f" stroke="#f59e0b" strokeWidth="1.5"/>
                      <text x="255" y="160" textAnchor="middle" fill="#fcd34d" fontSize="8">Analytics</text>
                      <path d="M230 155 L220 135" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3"/>
                      
                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6"/>
                          <stop offset="100%" stopColor="#14b8a6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Services Grid */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Core Services</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {cloudPlatforms[selectedPlatform].services.map((service, i) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="px-4 py-3 bg-slate-800/60 rounded-lg border border-slate-700/50 hover:border-accent-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-teal-400" />
                          <span className="text-slate-300 text-sm">{service}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Architecture Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Architecture Patterns
            </h3>

            <div className="grid lg:grid-cols-3 gap-6">
              {architecturePatterns.map((pattern, index) => {
                const Icon = pattern.icon
                return (
                  <motion.div
                    key={pattern.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-6 hover:border-accent-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center">
                        <Icon size={24} className="text-accent-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white">{pattern.title}</h4>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-6">{pattern.description}</p>

                    {/* Visual Layer Representation */}
                    <div className="space-y-3 mb-6">
                      {pattern.layers.map((layer, i) => (
                        <div key={layer.name} className="relative">
                          <div 
                            className="h-12 rounded-lg flex items-center px-4 border"
                            style={{ 
                              backgroundColor: `${layer.color}15`,
                              borderColor: `${layer.color}40`
                            }}
                          >
                            <div className="flex-1">
                              <div className="text-white font-medium text-sm">{layer.name}</div>
                              <div className="text-slate-500 text-xs">{layer.description}</div>
                            </div>
                            <div className="flex gap-1">
                              {layer.tools.slice(0, 2).map(tool => (
                                <span key={tool} className="px-2 py-0.5 bg-slate-800/80 text-slate-400 text-xs rounded">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          {i < pattern.layers.length - 1 && (
                            <div className="absolute left-1/2 -translate-x-1/2 h-3 border-l-2 border-dashed border-slate-700" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Use Cases */}
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wide mb-2">Use Cases</div>
                      <div className="flex flex-wrap gap-2">
                        {pattern.useCases.map(useCase => (
                          <span key={useCase} className="px-2 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-lg">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Tech Stack with Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technology Proficiency
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStackCategories.map((category, catIndex) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                    className="glass-card p-6"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <Icon size={22} className={category.color} />
                      <h4 className="text-white font-bold">{category.category}</h4>
                    </div>

                    <div className="space-y-4">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={tech.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-300">{tech.name}</span>
                            <span className="text-slate-500">{tech.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 + techIndex * 0.1 }}
                              className={`h-full rounded-full ${
                                tech.level >= 90 ? 'bg-gradient-to-r from-accent-500 to-teal-500' :
                                tech.level >= 80 ? 'bg-gradient-to-r from-teal-500 to-green-500' :
                                'bg-gradient-to-r from-slate-500 to-slate-400'
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Design Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Architecture Design Principles
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle, index) => {
                const Icon = principle.icon
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center border border-slate-700/50">
                      <Icon size={28} className="text-accent-400" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{principle.title}</h4>
                    <p className="text-slate-400 text-sm">{principle.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Interactive Data Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              End-to-End Data Pipeline
            </h3>

            <div className="relative">
              <svg viewBox="0 0 1000 300" className="w-full h-auto">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                  </pattern>
                  <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="50%" stopColor="#14b8a6"/>
                    <stop offset="100%" stopColor="#22c55e"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>

                {/* Main pipeline flow */}
                <path d="M 100 150 Q 250 150 300 150 T 500 150 T 700 150 T 900 150" 
                      fill="none" stroke="url(#pipelineGrad)" strokeWidth="3" strokeDasharray="10,5" filter="url(#glow)">
                  <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
                </path>

                {/* Stage 1: Sources */}
                <g transform="translate(50, 100)">
                  <rect width="100" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
                  <text x="50" y="45" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">SOURCES</text>
                  <text x="50" y="65" textAnchor="middle" fill="#94a3b8" fontSize="10">EHR • Claims</text>
                  <text x="50" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">APIs • Files</text>
                </g>

                {/* Stage 2: Ingestion */}
                <g transform="translate(225, 100)">
                  <rect width="100" height="100" rx="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2"/>
                  <text x="50" y="45" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="bold">INGEST</text>
                  <text x="50" y="65" textAnchor="middle" fill="#94a3b8" fontSize="10">Kafka • ADF</text>
                  <text x="50" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Event Hubs</text>
                </g>

                {/* Stage 3: Processing */}
                <g transform="translate(400, 100)">
                  <rect width="120" height="100" rx="12" fill="#1e293b" stroke="#14b8a6" strokeWidth="2"/>
                  <text x="60" y="45" textAnchor="middle" fill="#2dd4bf" fontSize="12" fontWeight="bold">TRANSFORM</text>
                  <text x="60" y="65" textAnchor="middle" fill="#94a3b8" fontSize="10">Spark • dbt</text>
                  <text x="60" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Delta Live Tables</text>
                </g>

                {/* Stage 4: Storage */}
                <g transform="translate(600, 100)">
                  <rect width="100" height="100" rx="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="2"/>
                  <text x="50" y="45" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">STORAGE</text>
                  <text x="50" y="65" textAnchor="middle" fill="#94a3b8" fontSize="10">Delta Lake</text>
                  <text x="50" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Snowflake</text>
                </g>

                {/* Stage 5: Analytics */}
                <g transform="translate(775, 100)">
                  <rect width="120" height="100" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="2"/>
                  <text x="60" y="45" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="bold">ANALYTICS</text>
                  <text x="60" y="65" textAnchor="middle" fill="#94a3b8" fontSize="10">Power BI • ML</text>
                  <text x="60" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">APIs • Dashboards</text>
                </g>

                {/* Governance layer */}
                <rect x="200" y="230" width="600" height="50" rx="8" fill="transparent" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6,4"/>
                <text x="500" y="260" textAnchor="middle" fill="#f87171" fontSize="12">
                  🔒 Unity Catalog • Data Governance • Security • Lineage • Quality Gates
                </text>

                {/* Orchestration layer */}
                <rect x="200" y="20" width="600" height="50" rx="8" fill="transparent" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6,4"/>
                <text x="500" y="50" textAnchor="middle" fill="#22d3ee" fontSize="12">
                  ⚙️ Airflow • Azure Data Factory • Databricks Workflows • Monitoring
                </text>

                {/* Arrows */}
                <polygon points="175,150 160,145 160,155" fill="#3b82f6"/>
                <polygon points="350,150 335,145 335,155" fill="#8b5cf6"/>
                <polygon points="545,150 530,145 530,155" fill="#14b8a6"/>
                <polygon points="725,150 710,145 710,155" fill="#f59e0b"/>
              </svg>
            </div>

            <div className="flex justify-center gap-6 mt-8 flex-wrap">
              {[
                { label: 'Batch Processing', color: 'bg-blue-500' },
                { label: 'Stream Processing', color: 'bg-purple-500' },
                { label: 'ML Pipelines', color: 'bg-teal-500' },
                { label: 'Data Quality', color: 'bg-green-500' },
              ].map(item => (
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
