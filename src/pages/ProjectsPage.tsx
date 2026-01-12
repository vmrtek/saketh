import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Database, 
  Cloud, 
  Zap, 
  Shield,
  BarChart3,
  Workflow
} from 'lucide-react'
import PageHeader from '../components/PageHeader'

interface Project {
  id: string
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
  icon: string
}

const projects: Project[] = [
  {
    id: 'healthcare-lakehouse',
    title: 'HIPAA-Compliant Healthcare Data Lakehouse',
    category: 'Healthcare Analytics',
    description: 'End-to-end data lakehouse platform for a major healthcare organization processing millions of clinical and claims records daily.',
    challenge: 'Build a scalable, HIPAA-compliant data platform to unify siloed healthcare data from claims processing, clinical analytics, member risk scoring, and provider quality reporting systems.',
    solution: 'Architected a medallion architecture (Bronze/Silver/Gold) on Azure using ADLS Gen2, Databricks, and Delta Lake. Implemented strict data governance with Unity Catalog and Azure Purview for PHI/PII protection.',
    impact: [
      '55% improvement in claims data availability',
      '40% reduction in downstream reporting defects',
      '25-30% reduction in monthly compute costs',
      'Near-real-time care alerts for patient outreach',
    ],
    technologies: ['Azure', 'Databricks', 'Delta Lake', 'Kafka', 'PySpark', 'Unity Catalog', 'Azure Purview', 'MLflow'],
    icon: 'Shield',
  },
  {
    id: 'insurance-lakehouse',
    title: 'AWS Insurance Analytics Platform',
    category: 'Insurance & Actuarial',
    description: 'Cloud-native data platform supporting actuarial modeling, policy analytics, FNOL processing, and pricing insights for a Fortune 100 insurer.',
    challenge: 'Migrate 200+ legacy Teradata/Hadoop ETL jobs to a modern cloud architecture while maintaining data quality and reducing operational costs.',
    solution: 'Designed AWS lakehouse using S3, EMR, Redshift, and Lake Formation. Implemented dbt for semantic modeling and Snowflake for curated data marts serving BI and ML teams.',
    impact: [
      '40% improvement in underwriting analytics availability',
      '50% improvement in data trust across teams',
      '25-35% reduction in cloud compute costs',
      '200+ legacy jobs modernized',
    ],
    technologies: ['AWS', 'Spark', 'Redshift', 'Snowflake', 'dbt', 'Airflow', 'Lake Formation', 'Glue'],
    icon: 'BarChart3',
  },
  {
    id: 'azure-synapse-platform',
    title: 'Azure Synapse Analytics Platform',
    category: 'Azure Cloud',
    description: 'Enterprise-scale analytics platform on Azure for unified data warehousing, big data analytics, and machine learning workloads.',
    challenge: 'Consolidate multiple disparate data warehouses and reporting systems into a unified analytics platform while enabling self-service analytics for business users.',
    solution: 'Implemented Azure Synapse Analytics with dedicated SQL pools for data warehousing, Spark pools for big data processing, and Power BI integration for self-service reporting. Used Azure Data Factory for orchestration and Azure Purview for data governance.',
    impact: [
      '60% reduction in report generation time',
      'Unified analytics for 500+ business users',
      '45% cost savings vs legacy infrastructure',
      'Real-time dashboards for executive leadership',
    ],
    technologies: ['Azure Synapse', 'Azure Data Factory', 'Power BI', 'Azure Purview', 'Spark Pools', 'SQL Pools', 'Azure Key Vault', 'ADLS Gen2'],
    icon: 'Cloud',
  },
  {
    id: 'gcp-bigquery-platform',
    title: 'GCP BigQuery Data Warehouse',
    category: 'GCP Cloud',
    description: 'Serverless data warehouse on Google Cloud Platform for petabyte-scale analytics and machine learning with real-time data ingestion.',
    challenge: 'Build a cost-effective, serverless analytics platform capable of handling petabyte-scale data with real-time streaming ingestion and ML model serving.',
    solution: 'Architected a modern data stack on GCP using BigQuery for analytics, Dataflow for stream/batch processing, Pub/Sub for event streaming, and Vertex AI for ML workloads. Implemented dbt for transformations and Looker for BI.',
    impact: [
      'Petabyte-scale analytics with sub-second queries',
      '70% reduction in infrastructure management',
      'Real-time streaming ingestion at 1M+ events/sec',
      'Integrated ML predictions in production',
    ],
    technologies: ['BigQuery', 'Dataflow', 'Pub/Sub', 'Cloud Composer', 'Vertex AI', 'Looker', 'dbt', 'Cloud Functions'],
    icon: 'Database',
  },
  {
    id: 'realtime-streaming',
    title: 'Real-Time Clinical Event Processing',
    category: 'Streaming & Real-Time',
    description: 'Real-time data ingestion and enrichment pipeline for processing clinical events from healthcare provider systems.',
    challenge: 'Process HL7/FHIR clinical events from multiple provider systems in near-real-time to enable timely care alerts and improve patient outcomes.',
    solution: 'Built streaming pipelines using Kafka and Databricks Structured Streaming with schema registry for data validation and Delta Lake for exactly-once semantics.',
    impact: [
      'Sub-minute latency for clinical alerts',
      'Improved patient outreach effectiveness',
      'Unified view of patient events',
      'Scalable to millions of events per hour',
    ],
    technologies: ['Kafka', 'Spark Streaming', 'Databricks', 'Delta Lake', 'HL7/FHIR', 'Schema Registry'],
    icon: 'Zap',
  },
  {
    id: 'data-governance',
    title: 'Enterprise Data Governance Framework',
    category: 'Governance & Compliance',
    description: 'Comprehensive data governance solution ensuring regulatory compliance across healthcare and insurance data platforms.',
    challenge: 'Implement enterprise-wide data governance to meet HIPAA, CMS, NAIC, and GDPR requirements while enabling self-service analytics.',
    solution: 'Deployed Unity Catalog and Azure Purview for data cataloging, lineage tracking, and access control. Implemented RBAC, ABAC, column-level security, and automated data quality checks.',
    impact: [
      'Full HIPAA and CMS compliance achieved',
      'Automated data lineage tracking',
      'Self-service analytics enabled securely',
      'Reduced audit preparation time by 60%',
    ],
    technologies: ['Unity Catalog', 'Azure Purview', 'Great Expectations', 'RBAC/ABAC', 'Data Masking', 'KMS'],
    icon: 'Shield',
  },
  {
    id: 'telematics-pipeline',
    title: 'Telematics Data Pipeline',
    category: 'IoT & Telematics',
    description: 'High-volume data pipeline processing telematics sensor data from connected vehicles for insurance risk modeling.',
    challenge: 'Ingest and process massive volumes of time-series telematics data from millions of connected devices for real-time risk assessment.',
    solution: 'Designed streaming ingestion with Kinesis and batch processing with Spark on EMR. Optimized storage with Delta Lake Z-ordering for time-series queries.',
    impact: [
      'Processing millions of events per day',
      'Real-time driver behavior scoring',
      'Enhanced risk prediction models',
      '30% improvement in query performance',
    ],
    technologies: ['AWS Kinesis', 'Spark', 'EMR', 'Delta Lake', 'Redshift', 'Python'],
    icon: 'Workflow',
  },
  {
    id: 'ml-ops',
    title: 'MLOps for Healthcare Predictions',
    category: 'Machine Learning',
    description: 'Operationalized machine learning pipelines for healthcare predictions including readmission risk and member risk scoring.',
    challenge: 'Enable data science teams to deploy and monitor ML models at scale while ensuring model governance and reproducibility.',
    solution: 'Implemented MLOps using Databricks MLflow for experiment tracking, model registry, and automated deployment. Integrated with feature store and monitoring dashboards.',
    impact: [
      'Reduced model deployment time by 70%',
      'Automated model retraining pipelines',
      'Real-time prediction serving',
      'Improved readmission predictions',
    ],
    technologies: ['MLflow', 'Databricks', 'Python', 'Feature Store', 'Delta Lake', 'Power BI'],
    icon: 'Database',
  },
]

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Database,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  Workflow,
}

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="section-padding">
      <div className="section-container">
        <PageHeader 
          title="Projects" 
          subtitle="Enterprise data engineering solutions I've architected and delivered"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = iconMap[project.icon] || Database

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="glass-card overflow-hidden transition-all duration-300 hover:border-accent-500/40 block group"
                >
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-teal-500/20 flex items-center justify-center shrink-0 group-hover:from-accent-500/30 group-hover:to-teal-500/30 transition-all">
                        <Icon size={24} className="text-accent-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-accent-500/10 text-accent-400 text-xs rounded-md">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Impact Preview */}
                  <div className="px-6 pb-4">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.impact.slice(0, 2).map((item, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 text-slate-300 text-xs"
                        >
                          <span className="w-1.5 h-1.5 bg-accent-400 rounded-full shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Preview & CTA */}
                  <div className="px-6 pb-6 border-t border-slate-700/30 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-md border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-slate-500 text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-accent-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
