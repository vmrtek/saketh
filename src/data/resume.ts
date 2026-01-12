import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personal: {
    name: 'Saketh Gittaveni',
    title: 'Senior Data Engineer',
    tagline: 'Designing scalable, cloud-native data platforms for enterprise analytics',
    email: 'saketh.gittaveni@email.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/sakethgittaveni',
    location: 'United States',
    openToRelocate: true,
    yearsOfExperience: 9,
  },

  about: {
    summary: `With over 9 years of experience in data engineering, I specialize in architecting and implementing cloud-native data platforms that power enterprise-scale analytics. My expertise spans healthcare and insurance domains, where I've successfully delivered HIPAA-compliant data solutions that process billions of records daily.`,
    highlights: [
      'Cloud-native data engineering specialist',
      'Healthcare & Insurance domain expertise',
      'Enterprise-scale delivery with remote teams',
      'End-to-end data platform architecture',
    ],
  },

  highlights: [
    {
      icon: 'Cloud',
      title: 'Cloud Data Platforms',
      description: 'Azure & AWS enterprise architectures',
    },
    {
      icon: 'Workflow',
      title: 'Batch & Streaming Pipelines',
      description: 'Spark, Kafka, real-time processing',
    },
    {
      icon: 'Shield',
      title: 'Governance & Compliance',
      description: 'HIPAA, data quality, security',
    },
  ],

  skills: [
    {
      category: 'Programming & Querying',
      icon: 'Code2',
      tools: ['Python', 'SQL', 'PySpark', 'Scala', 'Shell Scripting'],
    },
    {
      category: 'Big Data & Processing',
      icon: 'Database',
      tools: ['Apache Spark', 'Databricks', 'Delta Lake', 'Hadoop', 'Hive', 'Presto'],
    },
    {
      category: 'Cloud Platforms',
      icon: 'Cloud',
      tools: ['Azure Data Factory', 'Azure Synapse', 'AWS Glue', 'Redshift', 'S3', 'ADLS Gen2', 'EMR', 'Lake Formation'],
    },
    {
      category: 'Streaming & Real-Time',
      icon: 'Zap',
      tools: ['Apache Kafka', 'Spark Streaming', 'Databricks Structured Streaming', 'Event Hubs', 'Kinesis'],
    },
    {
      category: 'Orchestration & DevOps',
      icon: 'GitBranch',
      tools: ['Apache Airflow', 'Azure DevOps', 'AWS Step Functions', 'Git', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      category: 'Data Governance & Security',
      icon: 'Lock',
      tools: ['Unity Catalog', 'Azure Purview', 'Great Expectations', 'HIPAA Compliance', 'RBAC', 'Data Masking'],
    },
    {
      category: 'Analytics & BI',
      icon: 'BarChart3',
      tools: ['Power BI', 'Snowflake', 'dbt', 'Data Modeling', 'MLflow'],
    },
  ],

  experience: [
    {
      company: 'Molina Healthcare',
      role: 'Senior Data Engineer',
      duration: 'Aug 2023 - Present',
      location: 'Long Beach, California · Remote',
      description: 'Developing and securing a compliant data foundation for critical healthcare operations at one of the nation\'s largest Medicaid managed care organizations.',
      achievements: [
        'Architected and operated a HIPAA-compliant data lakehouse platform on Azure (ADLS Gen2, Databricks, Delta Lake) supporting claims processing, clinical analytics, member risk scoring, and provider quality reporting',
        'Designed high-performance ELT pipelines using Spark 3.x, PySpark, and Delta Live Tables (DLT) orchestrated via Azure Data Factory, ingesting complex healthcare feeds like EDI 837/835 claims and EMR data, improving claims data availability by 55%',
        'Engineered real-time ingestion and enrichment flows leveraging Kafka and Databricks Structured Streaming to process clinical events (HL7/FHIR) from provider systems, enabling near-real-time care alerts',
        'Implemented enterprise data governance using Azure Purview and Databricks Unity Catalog with strict PHI/PII protection through RBAC, ABAC, data masking, VNET integration, and encryption (KMS/Azure Key Vault)',
        'Built robust orchestration in ADF and Airflow with strict SLAs, data quality gates (Great Expectations + PySpark), and schema drift detection, reducing downstream reporting defects by 40%',
        'Operationalized ML workloads for readmission risk prediction in partnership with Data Science teams using Databricks MLflow',
        'Optimized storage and compute using Delta Lake time-travel, photon runtimes, and auto-optimize, reducing monthly compute spend by 25-30%',
      ],
      technologies: ['Azure', 'Databricks', 'Delta Lake', 'Kafka', 'PySpark', 'Spark Streaming', 'Azure Data Factory', 'Unity Catalog', 'MLflow'],
    },
    {
      company: 'Allstate',
      role: 'Senior Data Engineer',
      duration: 'Jan 2019 - Aug 2023',
      location: 'Northbrook, Illinois · Remote',
      description: 'Built scalable cloud-based data platforms supporting enterprise stakeholders in actuarial modeling, policy analytics, FNOL processing, and pricing insights.',
      achievements: [
        'Architected scalable AWS lakehouse platforms (S3, EMR, Redshift, Glue, Lake Formation) supporting actuarial modeling, policy analytics, FNOL processing, and pricing insights',
        'Deployed high-volume ETL/ELT pipelines using Spark 2.x-3.x, PySpark, and AWS Glue to integrate policy, claims, and telematics sensor data, improving data availability for underwriting analytics by 40%',
        'Created domain-specific curated data marts in Snowflake and Redshift with semantic models and transformations using dbt, achieving 50% improvement in data trust across BI and modeling teams',
        'Implemented secure data zone architectures with IAM, KMS encryption, PrivateLink, and row-/column-level security to safeguard PII/PHI, adhering to NAIC Model Audit Rule and GDPR',
        'Led migrations from legacy Teradata/Hadoop to AWS lakehouse, modernizing 200+ legacy ETL jobs using Airflow, dbt, and Glue orchestration',
        'Optimized Spark DAGs, adopted Delta Lake/Z-ordering for time-series telematics data, and implemented intelligent workload autoscaling on EMR, reducing cloud compute costs by 25-35%',
      ],
      technologies: ['AWS', 'Spark', 'Redshift', 'Snowflake', 'Airflow', 'dbt', 'Glue', 'EMR', 'Lake Formation', 'Delta Lake'],
    },
    {
      company: 'Infosys',
      role: 'Data Engineer',
      duration: 'May 2015 - Oct 2018',
      location: 'Hyderabad, India · On-site',
      description: 'Designed and implemented distributed data processing solutions and ETL workflows for enterprise clients.',
      achievements: [
        'Designed and implemented distributed data ingestion pipelines using Apache Spark 1.6-2.x on Hadoop/HDFS to process usage logs and application telemetry',
        'Developed ETL workflows in Hive (QL + Tez engine) and Spark SQL, reducing query latency for analytics stakeholders by ~30%',
        'Created reusable ETL components in SSIS and Informatica PowerCenter with incremental loading and partition pruning strategies, reducing daily pipeline runtimes by several hours',
        'Implemented real-time event ingestion pipelines using Apache Kafka and Spark Streaming for near real-time monitoring of application events and user behavior metrics',
        'Modeled consumable data structures (fact tables, dimension tables, aggregated views) in Amazon Redshift with optimized distribution and sort keys',
        'Automated multi-step ingestion and transformation workflows using Apache Airflow (v1.x) with SLAs, retry policies, and DAG dependencies',
        'Achieved 20-40% improvement in job execution time by tuning Spark and Hive workloads (shuffle partitions, caching strategies, file formats)',
      ],
      technologies: ['Spark', 'Hadoop', 'Hive', 'Kafka', 'Python', 'SQL', 'Redshift', 'Airflow', 'SSIS', 'Informatica'],
    },
  ],

  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    location: 'India',
    graduationYear: '2015',
  },

  certifications: [
    'Azure Data Engineer Associate',
    'Databricks Certified Data Engineer',
    'AWS Certified Solutions Architect',
  ],
};
