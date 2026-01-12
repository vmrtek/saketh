import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Target, 
  Zap, 
  Users, 
  TrendingUp,
  Globe,
  Clock,
  Award,
  Heart,
  Code2,
  Database,
  Cloud,
  Shield
} from 'lucide-react'
import { resumeData } from '../data/resume'
import PageHeader from '../components/PageHeader'

const milestones = [
  {
    year: '2015',
    title: 'Started Career at Infosys',
    description: 'Began journey as a Data Engineer, learning Hadoop ecosystem and ETL fundamentals',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600'
  },
  {
    year: '2019',
    title: 'Joined Allstate',
    description: 'Transitioned to Senior Data Engineer, leading AWS cloud migrations and lakehouse architectures',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '2023',
    title: 'Current: Molina Healthcare',
    description: 'Architecting HIPAA-compliant data platforms processing billions of healthcare records',
    icon: Award,
    color: 'from-teal-500 to-teal-600'
  }
]

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Focus on delivering measurable business impact through data solutions'
  },
  {
    icon: Zap,
    title: 'Performance-Obsessed',
    description: 'Continuously optimizing for speed, cost-efficiency, and scalability'
  },
  {
    icon: Shield,
    title: 'Security-First',
    description: 'Building with compliance and data protection as core principles'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Bridging gaps between data engineering, analytics, and business teams'
  }
]

const achievements = [
  { value: '55%', label: 'Improved Claims Data Availability', icon: Database },
  { value: '40%', label: 'Reduced Reporting Defects', icon: CheckCircle2 },
  { value: '30%', label: 'Cloud Cost Reduction', icon: Cloud },
  { value: '200+', label: 'Legacy Jobs Modernized', icon: Code2 },
]

const whatIBring = [
  {
    title: 'Enterprise Architecture',
    description: 'Designing scalable, fault-tolerant data platforms that handle billions of records daily',
    highlights: ['Lakehouse Architecture', 'Multi-cloud Strategy', 'High Availability']
  },
  {
    title: 'Domain Expertise',
    description: 'Deep understanding of healthcare and insurance data landscapes and compliance requirements',
    highlights: ['HIPAA Compliance', 'Claims Processing', 'Risk Analytics']
  },
  {
    title: 'Technical Leadership',
    description: 'Leading technical initiatives and mentoring teams on modern data engineering practices',
    highlights: ['Best Practices', 'Code Reviews', 'Documentation']
  },
  {
    title: 'Delivery Excellence',
    description: 'Track record of delivering complex projects on time with measurable business outcomes',
    highlights: ['Agile Methodology', 'CI/CD Pipelines', 'Quality Gates']
  }
]

export default function AboutPage() {
  const { about, personal } = resumeData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="section-container">
          <PageHeader 
            title="About Me" 
            subtitle="Building enterprise-scale data platforms with cloud-native technologies"
          />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
            {/* Left - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 text-center lg:text-left">
                {/* Profile Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center lg:justify-start mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-teal-500 rounded-2xl blur-xl opacity-40 scale-110" />
                    <img 
                      src="/Saketh.png" 
                      alt="Saketh Gittaveni"
                      className="relative w-36 h-36 lg:w-44 lg:h-44 object-cover rounded-2xl border-2 border-slate-700/50 shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  </div>
                </motion.div>

                <h2 className="text-2xl font-bold text-white mb-1">{personal.name}</h2>
                <p className="text-accent-400 font-medium mb-4">{personal.title}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                    <MapPin size={16} />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                    <Briefcase size={16} />
                    <span>{personal.yearsOfExperience}+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                    <Clock size={16} />
                    <span>Available for Remote Work</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-green-400">
                    <Globe size={16} />
                    <span>Open to Opportunities</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/60 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{personal.yearsOfExperience}+</div>
                    <div className="text-slate-500 text-xs">Years Exp.</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-slate-500 text-xs">Certifications</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-slate-500 text-xs">Projects</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-slate-500 text-xs">Companies</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Summary & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-red-400" />
                  My Story
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  {about.summary}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I'm passionate about transforming complex data challenges into elegant, scalable solutions. 
                  My journey from traditional ETL to modern cloud-native architectures has given me a unique 
                  perspective on building data platforms that truly serve business needs while maintaining 
                  the highest standards of security and compliance.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="glass-card p-8">
                <h3 className="text-lg font-bold text-white mb-6">What Sets Me Apart</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {about.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-slate-800/40 rounded-xl"
                    >
                      <CheckCircle2 size={20} className="text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Career Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon
                  const isLeft = index % 2 === 0
                  return (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                    >
                      {/* Content */}
                      <div className={`md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center`}>
                        <div className="glass-card p-6 inline-block">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-2`}>
                            {milestone.year}
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                          <p className="text-slate-400 text-sm">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="relative z-10 my-4 md:my-0">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>
                      
                      {/* Spacer */}
                      <div className="md:w-5/12 hidden md:block" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-6 text-center group hover:border-accent-500/40 transition-all"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={28} className="text-accent-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                    <div className="text-slate-400 text-sm">{achievement.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">What I Bring to the Table</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whatIBring.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-accent-500/40 transition-all"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-lg"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">My Work Philosophy</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center border border-slate-700/50">
                      <Icon size={28} className="text-accent-400" />
                    </div>
                    <h4 className="text-white font-bold mb-2">{value.title}</h4>
                    <p className="text-slate-400 text-sm">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Ecosystem</h3>
            
            <svg viewBox="0 0 800 400" className="w-full h-auto">
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                </radialGradient>
              </defs>
              
              {/* Center glow */}
              <circle cx="400" cy="200" r="150" fill="url(#centerGlow)"/>
              
              {/* Center - Me */}
              <circle cx="400" cy="200" r="50" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
              <text x="400" y="195" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Saketh</text>
              <text x="400" y="212" textAnchor="middle" fill="#94a3b8" fontSize="10">Data Engineer</text>
              
              {/* Orbits */}
              <circle cx="400" cy="200" r="100" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="5,5"/>
              <circle cx="400" cy="200" r="160" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="5,5"/>
              
              {/* Inner orbit - Core skills */}
              {[
                { name: 'Spark', angle: 0, color: '#f59e0b' },
                { name: 'Python', angle: 72, color: '#3b82f6' },
                { name: 'SQL', angle: 144, color: '#22c55e' },
                { name: 'Kafka', angle: 216, color: '#8b5cf6' },
                { name: 'Delta', angle: 288, color: '#ef4444' },
              ].map((skill) => {
                const x = 400 + 100 * Math.cos((skill.angle - 90) * Math.PI / 180)
                const y = 200 + 100 * Math.sin((skill.angle - 90) * Math.PI / 180)
                return (
                  <g key={skill.name}>
                    <circle cx={x} cy={y} r="28" fill="#1e293b" stroke={skill.color} strokeWidth="2"/>
                    <text x={x} y={y + 4} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="500">
                      {skill.name}
                    </text>
                  </g>
                )
              })}
              
              {/* Outer orbit - Platforms */}
              {[
                { name: 'Azure', angle: 30, color: '#0078d4' },
                { name: 'AWS', angle: 90, color: '#ff9900' },
                { name: 'Databricks', angle: 150, color: '#ff3621' },
                { name: 'Airflow', angle: 210, color: '#00c7b7' },
                { name: 'Snowflake', angle: 270, color: '#29b5e8' },
                { name: 'Docker', angle: 330, color: '#2496ed' },
              ].map((platform) => {
                const x = 400 + 160 * Math.cos((platform.angle - 90) * Math.PI / 180)
                const y = 200 + 160 * Math.sin((platform.angle - 90) * Math.PI / 180)
                return (
                  <g key={platform.name}>
                    <circle cx={x} cy={y} r="32" fill="#1e293b" stroke={platform.color} strokeWidth="2"/>
                    <text x={x} y={y + 4} textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="500">
                      {platform.name}
                    </text>
                  </g>
                )
              })}
              
              {/* Connecting lines with animation */}
              {[0, 72, 144, 216, 288].map((angle, i) => {
                const x = 400 + 100 * Math.cos((angle - 90) * Math.PI / 180)
                const y = 200 + 100 * Math.sin((angle - 90) * Math.PI / 180)
                return (
                  <line key={i} x1="400" y1="200" x2={x} y2={y} stroke="#475569" strokeWidth="1" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" from="0" to="12" dur="2s" repeatCount="indefinite"/>
                  </line>
                )
              })}
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
