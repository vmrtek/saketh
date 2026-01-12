export interface CodeSnippet {
  title: string
  language: string
  description: string
  code: string
}

export interface TechnicalProcess {
  step: string
  title: string
  description: string
  details: string[]
  codeSnippets?: CodeSnippet[]
}

export interface ProjectDetail {
  id: string
  title: string
  category: string
  tagline: string
  overview: string
  problemStatement: string
  solution: string
  architecture: {
    title: string
    description: string
    layers: {
      name: string
      description: string
      components: string[]
      color: string
    }[]
  }
  techStack: {
    category: string
    tools: { name: string; description: string }[]
  }[]
  implementation: {
    phase: string
    title: string
    description: string
    deliverables: string[]
  }[]
  keyFeatures: {
    title: string
    description: string
    icon: string
  }[]
  metrics: {
    value: string
    label: string
    description: string
  }[]
  challenges: {
    challenge: string
    solution: string
  }[]
  screenshots: {
    title: string
    description: string
    type: 'dashboard' | 'architecture' | 'pipeline' | 'code'
  }[]
  technicalProcess: TechnicalProcess[]
  videoUrl?: string
  technologies: string[]
}

export const projectDetails: Record<string, ProjectDetail> = {
  'healthcare-lakehouse': {
    id: 'healthcare-lakehouse',
    title: 'HIPAA-Compliant Healthcare Data Lakehouse',
    category: 'Healthcare Analytics',
    tagline: 'Enterprise data lakehouse processing 50M+ healthcare records daily with full HIPAA compliance',
    overview: 'A comprehensive data lakehouse platform built on Azure for a major healthcare organization, enabling unified analytics across claims processing, clinical data, member risk scoring, and provider quality reporting while maintaining strict HIPAA compliance.',
    problemStatement: 'The healthcare organization struggled with siloed data systems, inconsistent data quality, slow reporting cycles, and challenges maintaining HIPAA compliance across multiple data sources. Legacy systems were unable to handle the volume and velocity of modern healthcare data requirements.',
    solution: 'Architected a medallion architecture (Bronze/Silver/Gold) on Azure using ADLS Gen2, Databricks, and Delta Lake. Implemented comprehensive data governance with Unity Catalog and Azure Purview, ensuring PHI/PII protection while enabling self-service analytics.',
    architecture: {
      title: 'Medallion Lakehouse Architecture',
      description: 'Three-layer data architecture ensuring data quality progression from raw to business-ready',
      layers: [
        {
          name: 'Bronze Layer',
          description: 'Raw data ingestion with schema enforcement',
          components: ['ADLS Gen2', 'Azure Data Factory', 'Event Hubs', 'Delta Lake'],
          color: 'from-amber-500 to-amber-600'
        },
        {
          name: 'Silver Layer',
          description: 'Cleansed, conformed, and deduplicated data',
          components: ['Databricks', 'PySpark', 'Delta Live Tables', 'Data Quality Checks'],
          color: 'from-slate-400 to-slate-500'
        },
        {
          name: 'Gold Layer',
          description: 'Business-ready aggregates and data products',
          components: ['Curated Tables', 'Feature Store', 'ML Models', 'Semantic Layer'],
          color: 'from-yellow-500 to-yellow-600'
        },
        {
          name: 'Consumption Layer',
          description: 'Analytics and reporting interfaces',
          components: ['Power BI', 'Azure Synapse', 'REST APIs', 'MLflow'],
          color: 'from-accent-500 to-accent-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Data Storage',
        tools: [
          { name: 'ADLS Gen2', description: 'Hierarchical namespace storage for big data analytics' },
          { name: 'Delta Lake', description: 'ACID transactions and time travel for data lakes' },
          { name: 'Azure SQL', description: 'Relational database for operational data' }
        ]
      },
      {
        category: 'Data Processing',
        tools: [
          { name: 'Databricks', description: 'Unified analytics platform for data engineering and ML' },
          { name: 'PySpark', description: 'Distributed data processing at scale' },
          { name: 'Delta Live Tables', description: 'Declarative ETL framework for reliable pipelines' }
        ]
      },
      {
        category: 'Orchestration',
        tools: [
          { name: 'Azure Data Factory', description: 'Cloud-native ETL/ELT orchestration' },
          { name: 'Airflow', description: 'Workflow automation and scheduling' },
          { name: 'Azure Functions', description: 'Serverless event-driven processing' }
        ]
      },
      {
        category: 'Governance & Security',
        tools: [
          { name: 'Unity Catalog', description: 'Unified governance for data and AI assets' },
          { name: 'Azure Purview', description: 'Data catalog and lineage tracking' },
          { name: 'Azure Key Vault', description: 'Secrets and encryption key management' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'Discovery & Architecture',
        description: 'Assessed existing data landscape, identified data sources, and designed target architecture',
        deliverables: ['Data catalog of 200+ sources', 'Architecture design document', 'Security framework', 'Compliance mapping']
      },
      {
        phase: '02',
        title: 'Infrastructure Setup',
        description: 'Provisioned Azure infrastructure with Terraform, configured networking and security',
        deliverables: ['IaC templates', 'VNET configuration', 'RBAC policies', 'Monitoring setup']
      },
      {
        phase: '03',
        title: 'Data Pipeline Development',
        description: 'Built Bronze/Silver/Gold pipelines with data quality checks and monitoring',
        deliverables: ['50+ Delta Live Tables', 'Data quality rules', 'Schema evolution handling', 'Error handling framework']
      },
      {
        phase: '04',
        title: 'Governance Implementation',
        description: 'Deployed Unity Catalog, configured access controls, and enabled data lineage',
        deliverables: ['Unity Catalog setup', 'Column-level security', 'Data masking rules', 'Audit logging']
      },
      {
        phase: '05',
        title: 'Analytics Enablement',
        description: 'Integrated Power BI, deployed ML models, and enabled self-service analytics',
        deliverables: ['Power BI dashboards', 'MLflow model registry', 'API endpoints', 'User training']
      }
    ],
    keyFeatures: [
      {
        title: 'Real-Time Claims Processing',
        description: 'EDI 837/835 claims ingested and processed within minutes for near-real-time visibility',
        icon: 'Zap'
      },
      {
        title: 'Clinical Data Integration',
        description: 'HL7/FHIR data from providers unified with claims for comprehensive member views',
        icon: 'Database'
      },
      {
        title: 'Risk Scoring Engine',
        description: 'ML-powered member risk stratification enabling proactive care management',
        icon: 'BarChart3'
      },
      {
        title: 'Compliance Automation',
        description: 'Automated PHI/PII detection, masking, and access logging for HIPAA compliance',
        icon: 'Shield'
      }
    ],
    metrics: [
      { value: '55%', label: 'Faster Data Availability', description: 'Claims data available for analytics within hours vs days' },
      { value: '40%', label: 'Fewer Reporting Defects', description: 'Data quality improvements reduced downstream issues' },
      { value: '25-30%', label: 'Cost Reduction', description: 'Optimized compute and storage reduced monthly spend' },
      { value: '50M+', label: 'Daily Records', description: 'Processing capacity for healthcare transaction volume' }
    ],
    challenges: [
      {
        challenge: 'Schema drift in EDI claim feeds causing pipeline failures',
        solution: 'Implemented schema evolution with Delta Lake and automated schema drift detection'
      },
      {
        challenge: 'PHI data scattered across 200+ source tables',
        solution: 'Deployed automated PII scanning with Purview and column-level masking policies'
      },
      {
        challenge: 'Complex SLA requirements for different data consumers',
        solution: 'Built tiered processing with priority queues and SLA monitoring dashboards'
      }
    ],
    screenshots: [
      { title: 'Lakehouse Architecture Diagram', description: 'End-to-end data flow from sources to consumption', type: 'architecture' },
      { title: 'Claims Analytics Dashboard', description: 'Real-time claims processing and denial analytics', type: 'dashboard' },
      { title: 'Data Pipeline Monitoring', description: 'Databricks workflow monitoring and alerting', type: 'pipeline' },
      { title: 'Unity Catalog Governance', description: 'Data governance and access control interface', type: 'dashboard' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'Bronze Layer - Raw Data Ingestion',
        description: 'Ingest raw EDI 837/835 claims and HL7/FHIR clinical data into Delta Lake bronze tables',
        details: [
          'Configure Azure Event Hubs for real-time streaming ingestion',
          'Set up Azure Data Factory pipelines for batch file ingestion',
          'Implement schema-on-read with Delta Lake autoloader',
          'Enable checkpointing for exactly-once processing guarantees'
        ],
        codeSnippets: [
          {
            title: 'Delta Lake Autoloader Configuration',
            language: 'python',
            description: 'PySpark code for streaming ingestion with schema evolution',
            code: `# Bronze Layer - Streaming Ingestion with Autoloader
from pyspark.sql.functions import *
from pyspark.sql.types import *

# Configure Autoloader for EDI claims ingestion
claims_stream = (
    spark.readStream
    .format("cloudFiles")
    .option("cloudFiles.format", "json")
    .option("cloudFiles.schemaLocation", "/mnt/schema/claims")
    .option("cloudFiles.inferColumnTypes", "true")
    .option("cloudFiles.schemaEvolutionMode", "addNewColumns")
    .load("/mnt/landing/edi_claims/")
)

# Add metadata columns
claims_with_metadata = claims_stream.withColumn(
    "ingestion_timestamp", current_timestamp()
).withColumn(
    "source_file", input_file_name()
).withColumn(
    "processing_date", current_date()
)

# Write to Bronze Delta table
(claims_with_metadata.writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/mnt/checkpoints/claims_bronze")
    .option("mergeSchema", "true")
    .trigger(processingTime="1 minute")
    .table("bronze.edi_claims_raw")
)`
          },
          {
            title: 'Azure Data Factory Pipeline',
            language: 'json',
            description: 'ADF pipeline configuration for batch ingestion',
            code: `{
  "name": "PL_Ingest_Claims_Daily",
  "properties": {
    "activities": [
      {
        "name": "Copy_EDI_Files",
        "type": "Copy",
        "inputs": [{ "referenceName": "DS_SFTP_Claims" }],
        "outputs": [{ "referenceName": "DS_ADLS_Bronze" }],
        "typeProperties": {
          "source": {
            "type": "SftpSource",
            "recursive": true,
            "wildcardFileName": "*.edi"
          },
          "sink": {
            "type": "ParquetSink",
            "storeSettings": {
              "type": "AzureBlobFSWriteSettings"
            }
          }
        }
      },
      {
        "name": "Trigger_Databricks_Bronze",
        "type": "DatabricksNotebook",
        "dependsOn": [{ "activity": "Copy_EDI_Files" }],
        "linkedServiceName": { "referenceName": "LS_Databricks" },
        "typeProperties": {
          "notebookPath": "/Pipelines/Bronze/Process_Claims"
        }
      }
    ],
    "parameters": {
      "processing_date": { "type": "String" }
    }
  }
}`
          }
        ]
      },
      {
        step: '02',
        title: 'Silver Layer - Data Cleansing & Transformation',
        description: 'Transform raw data into cleansed, conformed, and deduplicated silver tables',
        details: [
          'Parse EDI 837/835 segments into structured columns',
          'Apply data quality rules with Great Expectations',
          'Deduplicate records using Delta Lake MERGE',
          'Standardize date formats, codes, and identifiers'
        ],
        codeSnippets: [
          {
            title: 'Delta Live Tables Pipeline',
            language: 'python',
            description: 'DLT pipeline for Silver layer transformations',
            code: `import dlt
from pyspark.sql.functions import *

# Define expectations for data quality
@dlt.expect_or_drop("valid_claim_id", "claim_id IS NOT NULL")
@dlt.expect_or_drop("valid_member_id", "member_id IS NOT NULL")
@dlt.expect("valid_amount", "billed_amount >= 0")

@dlt.table(
    name="silver_claims",
    comment="Cleansed and validated claims data",
    table_properties={"quality": "silver"}
)
def silver_claims():
    return (
        dlt.read("bronze_edi_claims_raw")
        .withColumn("claim_id", trim(col("CLM01")))
        .withColumn("member_id", trim(col("NM109")))
        .withColumn("service_date", to_date(col("DTP03"), "yyyyMMdd"))
        .withColumn("billed_amount", col("CLM02").cast("decimal(18,2)"))
        .withColumn("diagnosis_codes", split(col("HI01"), ":"))
        .withColumn("provider_npi", trim(col("NM109_PROV")))
        .dropDuplicates(["claim_id", "service_line"])
        .select(
            "claim_id", "member_id", "service_date",
            "billed_amount", "diagnosis_codes", "provider_npi",
            "ingestion_timestamp"
        )
    )`
          },
          {
            title: 'Great Expectations Data Quality',
            language: 'python',
            description: 'Data quality validation suite',
            code: `from great_expectations.core import ExpectationSuite
from great_expectations.dataset import SparkDFDataset

# Create expectation suite for claims data
suite = ExpectationSuite(
    expectation_suite_name="claims_quality_suite"
)

# Define expectations
def validate_claims(df):
    ge_df = SparkDFDataset(df)
    
    # Column presence checks
    ge_df.expect_column_to_exist("claim_id")
    ge_df.expect_column_to_exist("member_id")
    ge_df.expect_column_to_exist("billed_amount")
    
    # Value validations
    ge_df.expect_column_values_to_not_be_null("claim_id")
    ge_df.expect_column_values_to_be_unique("claim_id")
    ge_df.expect_column_values_to_be_between(
        "billed_amount", min_value=0, max_value=10000000
    )
    
    # Pattern matching for NPI
    ge_df.expect_column_values_to_match_regex(
        "provider_npi", r"^\\d{10}$"
    )
    
    # Referential integrity
    ge_df.expect_column_values_to_be_in_set(
        "claim_status", ["SUBMITTED", "PENDING", "APPROVED", "DENIED"]
    )
    
    return ge_df.validate()`
          }
        ]
      },
      {
        step: '03',
        title: 'Gold Layer - Business Aggregates',
        description: 'Create business-ready aggregated tables and data products',
        details: [
          'Build dimensional models for claims analytics',
          'Create member 360 views with clinical data integration',
          'Generate risk scores using ML models',
          'Implement slowly changing dimensions (SCD Type 2)'
        ],
        codeSnippets: [
          {
            title: 'Gold Layer Aggregations',
            language: 'sql',
            description: 'SQL for creating gold layer analytics tables',
            code: `-- Gold Layer: Claims Analytics Mart
CREATE OR REPLACE TABLE gold.claims_analytics_mart AS
WITH daily_claims AS (
    SELECT 
        service_date,
        provider_npi,
        COUNT(DISTINCT claim_id) as claim_count,
        SUM(billed_amount) as total_billed,
        SUM(paid_amount) as total_paid,
        AVG(processing_days) as avg_processing_time,
        SUM(CASE WHEN status = 'DENIED' THEN 1 ELSE 0 END) as denied_count
    FROM silver.claims_processed
    WHERE service_date >= DATE_SUB(CURRENT_DATE, 365)
    GROUP BY service_date, provider_npi
),
provider_metrics AS (
    SELECT 
        p.provider_npi,
        p.provider_name,
        p.specialty,
        p.network_status,
        AVG(q.quality_score) as avg_quality_score
    FROM silver.providers p
    LEFT JOIN silver.quality_metrics q ON p.provider_npi = q.provider_npi
    GROUP BY p.provider_npi, p.provider_name, p.specialty, p.network_status
)
SELECT 
    dc.*,
    pm.provider_name,
    pm.specialty,
    pm.network_status,
    pm.avg_quality_score,
    dc.denied_count / NULLIF(dc.claim_count, 0) as denial_rate,
    dc.total_paid / NULLIF(dc.total_billed, 0) as payment_ratio
FROM daily_claims dc
JOIN provider_metrics pm ON dc.provider_npi = pm.provider_npi;

-- Create materialized view for real-time dashboards
CREATE MATERIALIZED VIEW gold.claims_realtime_summary AS
SELECT 
    date_trunc('hour', processing_timestamp) as hour,
    COUNT(*) as claims_processed,
    SUM(billed_amount) as total_amount,
    AVG(processing_latency_ms) as avg_latency
FROM silver.claims_processed
WHERE processing_timestamp >= CURRENT_TIMESTAMP - INTERVAL 24 HOURS
GROUP BY date_trunc('hour', processing_timestamp);`
          },
          {
            title: 'Member Risk Scoring Model',
            language: 'python',
            description: 'MLflow model for member risk stratification',
            code: `import mlflow
from pyspark.ml import Pipeline
from pyspark.ml.feature import VectorAssembler, StandardScaler
from pyspark.ml.classification import GradientBoostedTreeClassifier

# Feature engineering for risk scoring
def create_risk_features(claims_df, clinical_df):
    return (
        claims_df
        .join(clinical_df, "member_id")
        .withColumn("claim_frequency", count("claim_id").over(
            Window.partitionBy("member_id").rangeBetween(-365, 0)
        ))
        .withColumn("avg_claim_amount", avg("billed_amount").over(
            Window.partitionBy("member_id")
        ))
        .withColumn("chronic_condition_count", size(col("diagnosis_codes")))
        .withColumn("er_visit_count", sum(
            when(col("place_of_service") == "23", 1).otherwise(0)
        ).over(Window.partitionBy("member_id")))
    )

# Train risk model with MLflow tracking
with mlflow.start_run(run_name="member_risk_model_v2"):
    # Prepare features
    feature_cols = ["claim_frequency", "avg_claim_amount", 
                    "chronic_condition_count", "er_visit_count", "age"]
    
    assembler = VectorAssembler(inputCols=feature_cols, outputCol="features")
    scaler = StandardScaler(inputCol="features", outputCol="scaled_features")
    
    gbt = GradientBoostedTreeClassifier(
        featuresCol="scaled_features",
        labelCol="high_risk_flag",
        maxDepth=5,
        maxIter=100
    )
    
    pipeline = Pipeline(stages=[assembler, scaler, gbt])
    model = pipeline.fit(training_data)
    
    # Log model and metrics
    mlflow.log_param("max_depth", 5)
    mlflow.log_metric("auc", evaluator.evaluate(predictions))
    mlflow.spark.log_model(model, "risk_model")
    
    # Register model
    mlflow.register_model(
        f"runs:/{mlflow.active_run().info.run_id}/risk_model",
        "MemberRiskScoring"
    )`
          }
        ]
      },
      {
        step: '04',
        title: 'Data Governance & Security',
        description: 'Implement Unity Catalog governance with PHI/PII protection',
        details: [
          'Configure Unity Catalog metastore and catalogs',
          'Implement column-level masking for PHI fields',
          'Set up row-level security based on user attributes',
          'Enable data lineage tracking and audit logging'
        ],
        codeSnippets: [
          {
            title: 'Unity Catalog Security Configuration',
            language: 'sql',
            description: 'SQL commands for governance setup',
            code: `-- Create catalog and schemas with Unity Catalog
CREATE CATALOG IF NOT EXISTS healthcare_analytics;
USE CATALOG healthcare_analytics;

CREATE SCHEMA IF NOT EXISTS bronze;
CREATE SCHEMA IF NOT EXISTS silver;
CREATE SCHEMA IF NOT EXISTS gold;

-- Create masking function for SSN
CREATE FUNCTION mask_ssn(ssn STRING)
RETURNS STRING
RETURN CASE 
    WHEN is_member_of('phi_authorized') THEN ssn
    ELSE CONCAT('XXX-XX-', RIGHT(ssn, 4))
END;

-- Create masking function for DOB
CREATE FUNCTION mask_dob(dob DATE)
RETURNS STRING
RETURN CASE 
    WHEN is_member_of('phi_authorized') THEN CAST(dob AS STRING)
    ELSE CONCAT(YEAR(dob), '-XX-XX')
END;

-- Apply column masks to sensitive tables
ALTER TABLE silver.members ALTER COLUMN ssn 
SET MASK mask_ssn;

ALTER TABLE silver.members ALTER COLUMN date_of_birth 
SET MASK mask_dob;

-- Row-level security for multi-tenant access
CREATE FUNCTION region_filter(region STRING)
RETURNS BOOLEAN
RETURN (
    is_member_of('admin_group') OR 
    region = current_user_attribute('assigned_region')
);

ALTER TABLE gold.claims_analytics 
SET ROW FILTER region_filter ON (region);

-- Grant permissions
GRANT USAGE ON CATALOG healthcare_analytics TO analysts;
GRANT SELECT ON SCHEMA gold TO analysts;
GRANT SELECT ON SCHEMA silver TO data_engineers;`
          },
          {
            title: 'Azure Purview Integration',
            language: 'python',
            description: 'Python code for automated data classification',
            code: `from azure.purview.scanning import PurviewScanningClient
from azure.purview.catalog import PurviewCatalogClient
from azure.identity import DefaultAzureCredential

credential = DefaultAzureCredential()

# Initialize Purview clients
scan_client = PurviewScanningClient(
    endpoint="https://healthcare-purview.purview.azure.com",
    credential=credential
)

catalog_client = PurviewCatalogClient(
    endpoint="https://healthcare-purview.purview.azure.com",
    credential=credential
)

# Create custom classification for PHI
phi_classification = {
    "name": "PHI_HEALTHCARE",
    "description": "Protected Health Information",
    "classificationRules": [
        {
            "name": "SSN_Pattern",
            "pattern": r"\\b\\d{3}-\\d{2}-\\d{4}\\b",
            "minimumPercentageMatch": 0.6
        },
        {
            "name": "MRN_Pattern", 
            "pattern": r"\\b[A-Z]{2}\\d{8}\\b",
            "minimumPercentageMatch": 0.7
        }
    ]
}

# Register data sources for scanning
adls_source = {
    "kind": "AdlsGen2",
    "name": "healthcare-datalake",
    "properties": {
        "endpoint": "https://healthcaredl.dfs.core.windows.net/",
        "resourceGroup": "healthcare-rg",
        "subscriptionId": "xxx-xxx-xxx"
    }
}

# Create scan with PHI classification
scan_definition = {
    "name": "weekly-phi-scan",
    "kind": "AdlsGen2Credential",
    "properties": {
        "scanRulesetName": "PHI_Ruleset",
        "collection": { "referenceName": "healthcare" }
    }
}

scan_client.scans.create_or_update(
    data_source_name="healthcare-datalake",
    scan_name="weekly-phi-scan",
    body=scan_definition
)`
          }
        ]
      },
      {
        step: '05',
        title: 'Real-Time Streaming Pipeline',
        description: 'Process HL7/FHIR clinical events for care alerts',
        details: [
          'Configure Kafka topics for clinical event streaming',
          'Implement Structured Streaming for event processing',
          'Build real-time alerting for critical clinical events',
          'Store processed events in Delta Lake with exactly-once semantics'
        ],
        codeSnippets: [
          {
            title: 'Kafka Structured Streaming',
            language: 'python',
            description: 'Real-time clinical event processing',
            code: `from pyspark.sql.functions import *
from pyspark.sql.types import *

# Define HL7 FHIR event schema
fhir_schema = StructType([
    StructField("resourceType", StringType()),
    StructField("id", StringType()),
    StructField("patient", StructType([
        StructField("reference", StringType()),
        StructField("display", StringType())
    ])),
    StructField("code", StructType([
        StructField("coding", ArrayType(StructType([
            StructField("system", StringType()),
            StructField("code", StringType()),
            StructField("display", StringType())
        ])))
    ])),
    StructField("effectiveDateTime", StringType()),
    StructField("valueQuantity", StructType([
        StructField("value", DoubleType()),
        StructField("unit", StringType())
    ]))
])

# Read from Kafka
clinical_events = (
    spark.readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "kafka-broker:9092")
    .option("subscribe", "clinical-events")
    .option("startingOffsets", "latest")
    .option("kafka.security.protocol", "SASL_SSL")
    .load()
    .select(from_json(col("value").cast("string"), fhir_schema).alias("event"))
    .select("event.*")
)

# Process and enrich events
enriched_events = (
    clinical_events
    .withColumn("patient_id", regexp_extract(col("patient.reference"), r"Patient/(.*)", 1))
    .withColumn("event_code", col("code.coding")[0]["code"])
    .withColumn("event_display", col("code.coding")[0]["display"])
    .withColumn("event_time", to_timestamp(col("effectiveDateTime")))
    .withColumn("processing_time", current_timestamp())
)

# Detect critical alerts (e.g., abnormal lab values)
critical_alerts = (
    enriched_events
    .filter(
        ((col("event_code") == "2339-0") & (col("valueQuantity.value") > 200)) |  # High glucose
        ((col("event_code") == "8867-4") & (col("valueQuantity.value") > 100)) |  # High heart rate
        ((col("event_code") == "8480-6") & (col("valueQuantity.value") > 180))    # High BP systolic
    )
    .withColumn("alert_type", lit("CRITICAL"))
    .withColumn("alert_id", expr("uuid()"))
)

# Write alerts to notification topic
(critical_alerts.writeStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "kafka-broker:9092")
    .option("topic", "care-alerts")
    .option("checkpointLocation", "/mnt/checkpoints/alerts")
    .start()
)

# Write all events to Delta Lake
(enriched_events.writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/mnt/checkpoints/clinical_events")
    .partitionBy("processing_date")
    .table("silver.clinical_events")
)`
          }
        ]
      }
    ],
    technologies: ['Azure', 'Databricks', 'Delta Lake', 'Kafka', 'PySpark', 'Unity Catalog', 'Azure Purview', 'MLflow', 'Power BI', 'Terraform']
  },

  'insurance-lakehouse': {
    id: 'insurance-lakehouse',
    title: 'AWS Insurance Analytics Platform',
    category: 'Insurance & Actuarial',
    tagline: 'Cloud-native lakehouse modernizing 200+ legacy ETL jobs for actuarial analytics',
    overview: 'A comprehensive AWS-based data platform for a Fortune 100 insurance company, enabling actuarial modeling, policy analytics, FNOL processing, and pricing insights with modern cloud-native technologies.',
    problemStatement: 'The insurer operated legacy Teradata and Hadoop systems with 200+ ETL jobs, facing high maintenance costs, slow processing times, limited scalability, and inability to support real-time analytics requirements.',
    solution: 'Designed a modern AWS lakehouse using S3, EMR, Redshift, and Lake Formation. Migrated all legacy workloads while implementing dbt for semantic modeling and enabling real-time telematics processing.',
    architecture: {
      title: 'AWS Lakehouse Architecture',
      description: 'Serverless-first architecture with separation of storage and compute',
      layers: [
        {
          name: 'Ingestion Layer',
          description: 'Multi-source data collection and streaming',
          components: ['AWS Glue', 'Kinesis', 'AWS DMS', 'S3'],
          color: 'from-orange-500 to-orange-600'
        },
        {
          name: 'Processing Layer',
          description: 'Scalable batch and stream processing',
          components: ['EMR', 'Spark', 'AWS Glue ETL', 'Step Functions'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Storage Layer',
          description: 'Optimized data lake with governance',
          components: ['S3', 'Delta Lake', 'Lake Formation', 'Glue Catalog'],
          color: 'from-teal-500 to-teal-600'
        },
        {
          name: 'Analytics Layer',
          description: 'Query engines and BI tools',
          components: ['Redshift', 'Athena', 'Snowflake', 'QuickSight'],
          color: 'from-accent-500 to-accent-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Data Lake',
        tools: [
          { name: 'Amazon S3', description: 'Scalable object storage for data lake' },
          { name: 'Delta Lake', description: 'ACID transactions on S3' },
          { name: 'Lake Formation', description: 'Data lake governance and security' }
        ]
      },
      {
        category: 'Processing',
        tools: [
          { name: 'Amazon EMR', description: 'Managed Hadoop/Spark clusters' },
          { name: 'AWS Glue', description: 'Serverless ETL service' },
          { name: 'dbt', description: 'SQL-first transformation framework' }
        ]
      },
      {
        category: 'Data Warehouse',
        tools: [
          { name: 'Amazon Redshift', description: 'Petabyte-scale data warehouse' },
          { name: 'Snowflake', description: 'Multi-cloud data platform' },
          { name: 'Athena', description: 'Serverless query service' }
        ]
      },
      {
        category: 'Orchestration',
        tools: [
          { name: 'Apache Airflow', description: 'Workflow orchestration platform' },
          { name: 'Step Functions', description: 'Serverless workflow orchestration' },
          { name: 'EventBridge', description: 'Event-driven automation' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'Legacy Assessment',
        description: 'Cataloged 200+ Teradata/Hadoop jobs, documented dependencies and SLAs',
        deliverables: ['Job inventory', 'Dependency mapping', 'Migration priority matrix', 'Risk assessment']
      },
      {
        phase: '02',
        title: 'AWS Foundation',
        description: 'Built landing zone with VPC, IAM, and core infrastructure',
        deliverables: ['Landing zone', 'Network architecture', 'Security baseline', 'Cost management']
      },
      {
        phase: '03',
        title: 'Data Lake Setup',
        description: 'Configured S3 buckets, Lake Formation, and Delta Lake',
        deliverables: ['S3 structure', 'Governance policies', 'Catalog setup', 'Access controls']
      },
      {
        phase: '04',
        title: 'Pipeline Migration',
        description: 'Migrated ETL jobs in waves with parallel validation',
        deliverables: ['Migrated pipelines', 'Data validation reports', 'Performance benchmarks', 'Rollback procedures']
      },
      {
        phase: '05',
        title: 'Analytics Modernization',
        description: 'Implemented dbt models and connected BI tools',
        deliverables: ['dbt models', 'Semantic layer', 'BI dashboards', 'Self-service portal']
      }
    ],
    keyFeatures: [
      {
        title: 'Telematics Integration',
        description: 'Real-time processing of connected vehicle sensor data for usage-based insurance',
        icon: 'Workflow'
      },
      {
        title: 'Actuarial Data Marts',
        description: 'Pre-built data products optimized for actuarial modeling and pricing',
        icon: 'BarChart3'
      },
      {
        title: 'FNOL Automation',
        description: 'First Notice of Loss processing with automated fraud detection signals',
        icon: 'Shield'
      },
      {
        title: 'Policy 360 View',
        description: 'Unified customer view across all policy types and interactions',
        icon: 'Database'
      }
    ],
    metrics: [
      { value: '40%', label: 'Faster Analytics', description: 'Underwriting analytics availability improved significantly' },
      { value: '50%', label: 'Data Trust Improvement', description: 'Standardized models increased confidence in data' },
      { value: '25-35%', label: 'Cost Savings', description: 'Cloud optimization reduced compute costs' },
      { value: '200+', label: 'Jobs Modernized', description: 'Legacy ETL jobs migrated to cloud-native' }
    ],
    challenges: [
      {
        challenge: 'Complex Teradata stored procedures with business logic',
        solution: 'Converted to dbt models with extensive testing and stakeholder validation'
      },
      {
        challenge: 'Telematics data volume exceeding batch processing capacity',
        solution: 'Implemented Kinesis streaming with Delta Lake for real-time ingestion'
      },
      {
        challenge: 'Multiple BI tools with inconsistent metrics definitions',
        solution: 'Created semantic layer with dbt exposures and centralized metrics store'
      }
    ],
    screenshots: [
      { title: 'AWS Architecture Diagram', description: 'Complete cloud infrastructure layout', type: 'architecture' },
      { title: 'Policy Analytics Dashboard', description: 'Executive insights on policy performance', type: 'dashboard' },
      { title: 'Airflow DAG Monitoring', description: 'Pipeline orchestration and monitoring', type: 'pipeline' },
      { title: 'dbt Lineage Graph', description: 'Data transformation lineage visualization', type: 'pipeline' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'AWS Infrastructure Setup with Terraform',
        description: 'Provision AWS lakehouse infrastructure using Infrastructure as Code',
        details: [
          'Create S3 buckets with lifecycle policies and versioning',
          'Configure Lake Formation with fine-grained access control',
          'Set up EMR clusters with auto-scaling policies',
          'Implement VPC networking with private subnets'
        ],
        codeSnippets: [
          {
            title: 'Terraform S3 & Lake Formation',
            language: 'hcl',
            description: 'Infrastructure as Code for AWS data lake',
            code: `# S3 Data Lake Buckets
resource "aws_s3_bucket" "data_lake" {
  for_each = toset(["raw", "curated", "analytics"])
  bucket   = "insurance-datalake-\${each.key}-\${var.environment}"
  
  tags = {
    Environment = var.environment
    Layer       = each.key
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "raw_lifecycle" {
  bucket = aws_s3_bucket.data_lake["raw"].id
  
  rule {
    id     = "transition-to-glacier"
    status = "Enabled"
    
    transition {
      days          = 90
      storage_class = "GLACIER"
    }
    
    expiration {
      days = 2555  # 7 years retention for compliance
    }
  }
}

# Lake Formation Data Lake Settings
resource "aws_lakeformation_data_lake_settings" "main" {
  admins = [aws_iam_role.data_lake_admin.arn]
  
  create_database_default_permissions {
    principal   = "IAM_ALLOWED_PRINCIPALS"
    permissions = ["ALL"]
  }
}

# Lake Formation Permissions
resource "aws_lakeformation_permissions" "analytics_access" {
  principal   = aws_iam_role.analytics_role.arn
  permissions = ["SELECT", "DESCRIBE"]
  
  table {
    database_name = aws_glue_catalog_database.curated.name
    wildcard      = true
  }
}

# EMR Cluster for Spark Processing
resource "aws_emr_cluster" "spark_cluster" {
  name          = "insurance-spark-cluster"
  release_label = "emr-6.10.0"
  applications  = ["Spark", "Hive", "Presto"]
  
  master_instance_group {
    instance_type = "m5.2xlarge"
  }
  
  core_instance_group {
    instance_type  = "m5.4xlarge"
    instance_count = 4
    
    autoscaling_policy = jsonencode({
      Rules = [{
        Name = "ScaleOutOnMemory"
        Action = { SimpleScalingPolicyConfiguration = {
          AdjustmentType = "CHANGE_IN_CAPACITY"
          ScalingAdjustment = 2
        }}
        Trigger = { CloudWatchAlarmDefinition = {
          MetricName = "YARNMemoryAvailablePercentage"
          Threshold  = 15
        }}
      }]
    })
  }
}`
          }
        ]
      },
      {
        step: '02',
        title: 'Legacy ETL Migration with AWS Glue',
        description: 'Migrate 200+ Teradata/Hadoop jobs to AWS Glue and Spark',
        details: [
          'Analyze legacy Teradata stored procedures and dependencies',
          'Convert BTEQ scripts to PySpark transformations',
          'Implement AWS Glue crawlers for schema discovery',
          'Build parallel validation framework for data accuracy'
        ],
        codeSnippets: [
          {
            title: 'AWS Glue ETL Job',
            language: 'python',
            description: 'PySpark Glue job for policy data processing',
            code: `import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
from awsglue.dynamicframe import DynamicFrame

args = getResolvedOptions(sys.argv, ['JOB_NAME', 'source_database', 'target_path'])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

# Read from Glue Catalog
policies_dyf = glueContext.create_dynamic_frame.from_catalog(
    database=args['source_database'],
    table_name="raw_policies",
    transformation_ctx="policies_source"
)

claims_dyf = glueContext.create_dynamic_frame.from_catalog(
    database=args['source_database'],
    table_name="raw_claims",
    transformation_ctx="claims_source"
)

# Convert to DataFrame for complex transformations
policies_df = policies_dyf.toDF()
claims_df = claims_dyf.toDF()

# Apply business logic (migrated from Teradata)
from pyspark.sql.functions import *
from pyspark.sql.window import Window

# Calculate policy metrics
policy_metrics = (
    policies_df
    .join(claims_df, "policy_id")
    .withColumn("loss_ratio", 
        sum("claim_amount").over(Window.partitionBy("policy_id")) / 
        col("premium_amount")
    )
    .withColumn("claim_frequency",
        count("claim_id").over(Window.partitionBy("policy_id"))
    )
    .withColumn("risk_tier", 
        when(col("loss_ratio") > 0.8, "HIGH")
        .when(col("loss_ratio") > 0.5, "MEDIUM")
        .otherwise("LOW")
    )
)

# Write to S3 in Delta format
(policy_metrics.write
    .format("delta")
    .mode("overwrite")
    .partitionBy("effective_year", "state")
    .save(f"{args['target_path']}/policy_metrics")
)

job.commit()`
          },
          {
            title: 'Airflow DAG for Orchestration',
            language: 'python',
            description: 'Apache Airflow DAG for pipeline orchestration',
            code: `from airflow import DAG
from airflow.providers.amazon.aws.operators.glue import GlueJobOperator
from airflow.providers.amazon.aws.operators.emr import EmrAddStepsOperator
from airflow.providers.amazon.aws.sensors.glue import GlueJobSensor
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-engineering',
    'depends_on_past': False,
    'email_on_failure': True,
    'email': ['data-alerts@insurance.com'],
    'retries': 2,
    'retry_delay': timedelta(minutes=5),
}

with DAG(
    'insurance_daily_etl',
    default_args=default_args,
    description='Daily ETL pipeline for insurance analytics',
    schedule_interval='0 6 * * *',
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['insurance', 'etl', 'production'],
) as dag:

    # Extract raw policy data
    extract_policies = GlueJobOperator(
        task_id='extract_policies',
        job_name='extract-policies-raw',
        script_args={
            '--source_database': 'insurance_raw',
            '--target_path': 's3://insurance-datalake-curated/policies'
        },
        aws_conn_id='aws_default',
    )

    # Wait for extraction to complete
    wait_extract = GlueJobSensor(
        task_id='wait_extract_policies',
        job_name='extract-policies-raw',
        run_id=extract_policies.output,
    )

    # Transform and enrich data
    transform_policies = GlueJobOperator(
        task_id='transform_policies',
        job_name='transform-policy-metrics',
        script_args={
            '--processing_date': '{{ ds }}'
        },
    )

    # Data quality checks
    def run_quality_checks(**context):
        from great_expectations.data_context import DataContext
        context = DataContext('/opt/airflow/great_expectations')
        result = context.run_checkpoint('policy_quality_checkpoint')
        if not result.success:
            raise ValueError("Data quality checks failed")
    
    quality_checks = PythonOperator(
        task_id='data_quality_checks',
        python_callable=run_quality_checks,
    )

    # Load to Redshift
    load_redshift = GlueJobOperator(
        task_id='load_to_redshift',
        job_name='load-redshift-analytics',
    )

    extract_policies >> wait_extract >> transform_policies >> quality_checks >> load_redshift`
          }
        ]
      },
      {
        step: '03',
        title: 'dbt Semantic Layer Implementation',
        description: 'Build semantic models and curated data marts with dbt',
        details: [
          'Create modular dbt models for actuarial analytics',
          'Implement incremental models for efficient processing',
          'Define tests and documentation for data quality',
          'Build exposures for downstream BI consumption'
        ],
        codeSnippets: [
          {
            title: 'dbt Model - Policy Analytics',
            language: 'sql',
            description: 'dbt model for actuarial policy metrics',
            code: `-- models/marts/policy_analytics.sql
{{
  config(
    materialized='incremental',
    unique_key='policy_id',
    partition_by={
      "field": "effective_date",
      "data_type": "date",
      "granularity": "month"
    },
    cluster_by=['state', 'product_line']
  )
}}

WITH policy_base AS (
    SELECT * FROM {{ ref('stg_policies') }}
    {% if is_incremental() %}
    WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
    {% endif %}
),

claims_agg AS (
    SELECT
        policy_id,
        COUNT(*) as claim_count,
        SUM(claim_amount) as total_claims,
        AVG(claim_amount) as avg_claim,
        MIN(claim_date) as first_claim_date,
        MAX(claim_date) as last_claim_date
    FROM {{ ref('stg_claims') }}
    GROUP BY policy_id
),

telematics_scores AS (
    SELECT
        policy_id,
        AVG(driving_score) as avg_driving_score,
        SUM(miles_driven) as total_miles,
        COUNT(CASE WHEN hard_brake_events > 0 THEN 1 END) as risky_trips
    FROM {{ ref('stg_telematics') }}
    GROUP BY policy_id
)

SELECT
    p.policy_id,
    p.policy_number,
    p.customer_id,
    p.product_line,
    p.state,
    p.effective_date,
    p.expiration_date,
    p.premium_amount,
    p.coverage_limit,
    
    -- Claims metrics
    COALESCE(c.claim_count, 0) as claim_count,
    COALESCE(c.total_claims, 0) as total_claims,
    COALESCE(c.avg_claim, 0) as avg_claim_amount,
    
    -- Loss ratio calculation
    CASE 
        WHEN p.premium_amount > 0 
        THEN COALESCE(c.total_claims, 0) / p.premium_amount 
        ELSE 0 
    END as loss_ratio,
    
    -- Telematics integration
    t.avg_driving_score,
    t.total_miles,
    t.risky_trips,
    
    -- Risk tier assignment
    CASE
        WHEN COALESCE(c.total_claims, 0) / NULLIF(p.premium_amount, 0) > 0.8 THEN 'High'
        WHEN COALESCE(c.total_claims, 0) / NULLIF(p.premium_amount, 0) > 0.5 THEN 'Medium'
        WHEN t.avg_driving_score < 600 THEN 'Medium'
        ELSE 'Low'
    END as risk_tier,
    
    CURRENT_TIMESTAMP as updated_at

FROM policy_base p
LEFT JOIN claims_agg c ON p.policy_id = c.policy_id
LEFT JOIN telematics_scores t ON p.policy_id = t.policy_id`
          },
          {
            title: 'dbt Tests & Documentation',
            language: 'yaml',
            description: 'Schema tests and column documentation',
            code: `# models/marts/schema.yml
version: 2

models:
  - name: policy_analytics
    description: "Core policy analytics mart with claims and telematics integration"
    
    columns:
      - name: policy_id
        description: "Unique identifier for policy"
        tests:
          - unique
          - not_null
          
      - name: policy_number
        description: "Human-readable policy number"
        tests:
          - not_null
          - unique
          
      - name: loss_ratio
        description: "Total claims divided by premium amount"
        tests:
          - dbt_utils.accepted_range:
              min_value: 0
              max_value: 10
              
      - name: risk_tier
        description: "Calculated risk tier based on loss ratio and telematics"
        tests:
          - accepted_values:
              values: ['High', 'Medium', 'Low']
              
      - name: premium_amount
        description: "Annual premium in USD"
        tests:
          - not_null
          - dbt_utils.expression_is_true:
              expression: ">= 0"

exposures:
  - name: actuarial_dashboard
    type: dashboard
    owner:
      name: Actuarial Team
      email: actuarial@insurance.com
    url: https://bi.insurance.com/actuarial
    depends_on:
      - ref('policy_analytics')
      - ref('claims_summary')
    description: "Main actuarial dashboard for loss ratio monitoring"`
          }
        ]
      }
    ],
    technologies: ['AWS', 'Spark', 'Redshift', 'Snowflake', 'dbt', 'Airflow', 'Lake Formation', 'Glue', 'EMR', 'Kinesis']
  },

  'azure-synapse-platform': {
    id: 'azure-synapse-platform',
    title: 'Azure Synapse Analytics Platform',
    category: 'Azure Cloud',
    tagline: 'Unified analytics platform serving 500+ business users with self-service capabilities',
    overview: 'An enterprise-scale Azure Synapse implementation that consolidated multiple data warehouses into a unified analytics platform, enabling both IT-managed and self-service analytics across the organization.',
    problemStatement: 'The organization had fragmented data across 5+ data warehouses, inconsistent reporting, high infrastructure costs, and long lead times for new analytics requests. Business users lacked self-service capabilities.',
    solution: 'Implemented Azure Synapse Analytics as the central analytics platform with dedicated SQL pools for enterprise reporting, Spark pools for data science workloads, and Power BI integration for self-service analytics.',
    architecture: {
      title: 'Azure Synapse Unified Architecture',
      description: 'Single platform for data warehousing, big data, and data integration',
      layers: [
        {
          name: 'Data Sources',
          description: 'Enterprise data from various systems',
          components: ['SAP', 'Salesforce', 'Oracle', 'APIs', 'Files'],
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'Integration Layer',
          description: 'Data movement and transformation',
          components: ['Synapse Pipelines', 'Data Flows', 'Copy Activities', 'Mapping'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Analytics Engine',
          description: 'Multi-engine analytics processing',
          components: ['Dedicated SQL Pools', 'Serverless SQL', 'Spark Pools', 'Data Explorer'],
          color: 'from-teal-500 to-teal-600'
        },
        {
          name: 'Consumption Layer',
          description: 'BI and reporting interfaces',
          components: ['Power BI', 'Azure ML', 'Synapse Studio', 'REST APIs'],
          color: 'from-accent-500 to-accent-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Analytics Platform',
        tools: [
          { name: 'Azure Synapse', description: 'Unified analytics service' },
          { name: 'Dedicated SQL Pools', description: 'Enterprise data warehouse' },
          { name: 'Serverless SQL', description: 'On-demand query service' }
        ]
      },
      {
        category: 'Data Processing',
        tools: [
          { name: 'Synapse Spark', description: 'Apache Spark for big data' },
          { name: 'Data Flows', description: 'Visual data transformation' },
          { name: 'Synapse Pipelines', description: 'Orchestration and scheduling' }
        ]
      },
      {
        category: 'Business Intelligence',
        tools: [
          { name: 'Power BI', description: 'Self-service BI platform' },
          { name: 'Paginated Reports', description: 'Operational reporting' },
          { name: 'Power BI Dataflows', description: 'Self-service data prep' }
        ]
      },
      {
        category: 'Governance',
        tools: [
          { name: 'Azure Purview', description: 'Data governance and catalog' },
          { name: 'Azure AD', description: 'Identity and access management' },
          { name: 'Private Endpoints', description: 'Network security' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'Assessment & Planning',
        description: 'Evaluated existing warehouses and defined consolidation strategy',
        deliverables: ['Current state assessment', 'Migration roadmap', 'Success criteria', 'Stakeholder alignment']
      },
      {
        phase: '02',
        title: 'Synapse Deployment',
        description: 'Provisioned Synapse workspace with SQL and Spark pools',
        deliverables: ['Synapse workspace', 'Pool configurations', 'Security setup', 'Network integration']
      },
      {
        phase: '03',
        title: 'Data Migration',
        description: 'Migrated data from legacy warehouses with schema optimization',
        deliverables: ['Schema designs', 'Migration scripts', 'Data validation', 'Performance tuning']
      },
      {
        phase: '04',
        title: 'BI Integration',
        description: 'Connected Power BI with optimized data models',
        deliverables: ['Power BI datasets', 'Report templates', 'Row-level security', 'Refresh schedules']
      },
      {
        phase: '05',
        title: 'Self-Service Enablement',
        description: 'Trained users and enabled self-service analytics',
        deliverables: ['Training materials', 'Governance guidelines', 'Support model', 'User adoption metrics']
      }
    ],
    keyFeatures: [
      {
        title: 'Unified Workspace',
        description: 'Single environment for SQL, Spark, and pipeline development',
        icon: 'Database'
      },
      {
        title: 'Serverless Queries',
        description: 'Query data lake directly without data movement',
        icon: 'Zap'
      },
      {
        title: 'Integrated Security',
        description: 'Row-level security, column masking, and Azure AD integration',
        icon: 'Shield'
      },
      {
        title: 'Cost Optimization',
        description: 'Pause/resume, auto-scale, and workload management',
        icon: 'BarChart3'
      }
    ],
    metrics: [
      { value: '60%', label: 'Faster Reporting', description: 'Report generation time significantly reduced' },
      { value: '500+', label: 'Business Users', description: 'Self-service analytics enabled across organization' },
      { value: '45%', label: 'Cost Savings', description: 'Infrastructure consolidation reduced costs' },
      { value: '5→1', label: 'Warehouses Consolidated', description: 'Single unified analytics platform' }
    ],
    challenges: [
      {
        challenge: 'Different SQL dialects across legacy warehouses',
        solution: 'Created compatibility layer and automated conversion tools'
      },
      {
        challenge: 'Complex security requirements across business units',
        solution: 'Implemented dynamic row-level security with Azure AD groups'
      },
      {
        challenge: 'Performance requirements for executive dashboards',
        solution: 'Used materialized views and result set caching for sub-second queries'
      }
    ],
    screenshots: [
      { title: 'Synapse Studio Workspace', description: 'Unified development environment', type: 'dashboard' },
      { title: 'Data Integration Pipeline', description: 'Visual pipeline designer', type: 'pipeline' },
      { title: 'Executive Dashboard', description: 'Power BI integrated analytics', type: 'dashboard' },
      { title: 'Architecture Overview', description: 'End-to-end platform architecture', type: 'architecture' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'Synapse Workspace Deployment',
        description: 'Deploy Azure Synapse Analytics workspace with all components',
        details: [
          'Create Synapse workspace with managed VNET',
          'Configure dedicated SQL pool for data warehousing',
          'Set up Spark pools for big data processing',
          'Enable Git integration for version control'
        ],
        codeSnippets: [
          {
            title: 'Azure CLI Deployment',
            language: 'bash',
            description: 'Deploy Synapse workspace with Azure CLI',
            code: `# Create resource group
az group create --name synapse-analytics-rg --location eastus

# Create ADLS Gen2 storage account
az storage account create \\
  --name synapseanalyticsdl \\
  --resource-group synapse-analytics-rg \\
  --location eastus \\
  --sku Standard_LRS \\
  --kind StorageV2 \\
  --hierarchical-namespace true

# Create Synapse workspace
az synapse workspace create \\
  --name enterprise-synapse \\
  --resource-group synapse-analytics-rg \\
  --storage-account synapseanalyticsdl \\
  --file-system synapse-fs \\
  --sql-admin-login-user sqladmin \\
  --sql-admin-login-password $SQL_PASSWORD \\
  --location eastus \\
  --managed-virtual-network true

# Create dedicated SQL pool
az synapse sql pool create \\
  --name dwh_pool \\
  --workspace-name enterprise-synapse \\
  --resource-group synapse-analytics-rg \\
  --performance-level DW1000c

# Create Spark pool
az synapse spark pool create \\
  --name sparkpool \\
  --workspace-name enterprise-synapse \\
  --resource-group synapse-analytics-rg \\
  --spark-version 3.3 \\
  --node-count 5 \\
  --node-size Medium \\
  --enable-auto-scale true \\
  --min-node-count 3 \\
  --max-node-count 10`
          }
        ]
      },
      {
        step: '02',
        title: 'Data Warehouse Schema Design',
        description: 'Create dimensional models in dedicated SQL pool',
        details: [
          'Design star schema for analytics workloads',
          'Implement hash distribution for large fact tables',
          'Create columnstore indexes for query optimization',
          'Set up materialized views for dashboard performance'
        ],
        codeSnippets: [
          {
            title: 'Synapse SQL DDL',
            language: 'sql',
            description: 'Create dimensional model in Synapse',
            code: `-- Create schema for dimensional model
CREATE SCHEMA analytics;
GO

-- Dimension: Customer
CREATE TABLE analytics.dim_customer
WITH (
    DISTRIBUTION = REPLICATE,
    CLUSTERED COLUMNSTORE INDEX
)
AS
SELECT 
    customer_key,
    customer_id,
    customer_name,
    segment,
    region,
    country,
    created_date,
    is_active
FROM staging.customers;

-- Dimension: Date
CREATE TABLE analytics.dim_date
WITH (
    DISTRIBUTION = REPLICATE,
    CLUSTERED COLUMNSTORE INDEX
)
AS
SELECT
    date_key,
    full_date,
    day_of_week,
    day_name,
    month_number,
    month_name,
    quarter,
    year,
    is_weekend,
    is_holiday
FROM staging.calendar;

-- Fact: Sales (Hash distributed on date for time-series queries)
CREATE TABLE analytics.fact_sales
WITH (
    DISTRIBUTION = HASH(date_key),
    CLUSTERED COLUMNSTORE INDEX,
    PARTITION (date_key RANGE RIGHT FOR VALUES (
        20230101, 20230201, 20230301, 20230401,
        20230501, 20230601, 20230701, 20230801,
        20230901, 20231001, 20231101, 20231201
    ))
)
AS
SELECT
    sale_id,
    date_key,
    customer_key,
    product_key,
    store_key,
    quantity,
    unit_price,
    discount_amount,
    total_amount,
    cost_amount,
    profit_amount
FROM staging.sales;

-- Materialized view for executive dashboard
CREATE MATERIALIZED VIEW analytics.mv_daily_sales_summary
WITH (DISTRIBUTION = HASH(date_key))
AS
SELECT 
    f.date_key,
    d.month_name,
    d.quarter,
    d.year,
    COUNT(*) as transaction_count,
    SUM(f.quantity) as total_quantity,
    SUM(f.total_amount) as total_revenue,
    SUM(f.profit_amount) as total_profit,
    AVG(f.total_amount) as avg_transaction_value
FROM analytics.fact_sales f
JOIN analytics.dim_date d ON f.date_key = d.date_key
GROUP BY f.date_key, d.month_name, d.quarter, d.year;`
          }
        ]
      },
      {
        step: '03',
        title: 'Synapse Pipeline Development',
        description: 'Build data integration pipelines in Synapse Studio',
        details: [
          'Create linked services for source systems',
          'Build copy activities for data ingestion',
          'Implement data flows for transformations',
          'Set up triggers for scheduled execution'
        ],
        codeSnippets: [
          {
            title: 'Synapse Pipeline JSON',
            language: 'json',
            description: 'Pipeline definition for ETL process',
            code: `{
  "name": "PL_Daily_ETL",
  "properties": {
    "activities": [
      {
        "name": "Copy_Source_Data",
        "type": "Copy",
        "dependsOn": [],
        "policy": {
          "timeout": "7.00:00:00",
          "retry": 2,
          "retryIntervalInSeconds": 60
        },
        "typeProperties": {
          "source": {
            "type": "AzureSqlSource",
            "sqlReaderQuery": {
              "value": "SELECT * FROM sales WHERE modified_date >= '@{pipeline().parameters.watermark}'",
              "type": "Expression"
            }
          },
          "sink": {
            "type": "ParquetSink",
            "storeSettings": {
              "type": "AzureBlobFSWriteSettings"
            }
          },
          "enableStaging": false
        }
      },
      {
        "name": "Transform_Data_Flow",
        "type": "ExecuteDataFlow",
        "dependsOn": [
          { "activity": "Copy_Source_Data", "dependencyConditions": ["Succeeded"] }
        ],
        "typeProperties": {
          "dataFlow": { "referenceName": "DF_Transform_Sales" },
          "compute": {
            "coreCount": 8,
            "computeType": "General"
          }
        }
      },
      {
        "name": "Load_DWH",
        "type": "SqlPoolStoredProcedure",
        "dependsOn": [
          { "activity": "Transform_Data_Flow", "dependencyConditions": ["Succeeded"] }
        ],
        "typeProperties": {
          "sqlPool": { "referenceName": "dwh_pool" },
          "storedProcedureName": "sp_load_fact_sales",
          "storedProcedureParameters": {
            "processing_date": { "value": "@pipeline().parameters.processing_date" }
          }
        }
      }
    ],
    "parameters": {
      "processing_date": { "type": "String" },
      "watermark": { "type": "String" }
    }
  }
}`
          }
        ]
      }
    ],
    technologies: ['Azure Synapse', 'Azure Data Factory', 'Power BI', 'Azure Purview', 'Spark Pools', 'SQL Pools', 'Azure Key Vault', 'ADLS Gen2']
  },

  'gcp-bigquery-platform': {
    id: 'gcp-bigquery-platform',
    title: 'GCP BigQuery Data Warehouse',
    category: 'GCP Cloud',
    tagline: 'Serverless analytics processing petabytes with ML-powered insights',
    overview: 'A modern data platform on Google Cloud Platform leveraging BigQuery for serverless analytics, Dataflow for stream processing, and Vertex AI for machine learning, enabling real-time insights at petabyte scale.',
    problemStatement: 'The organization needed a cost-effective analytics platform capable of handling petabyte-scale data without infrastructure management overhead, with integrated machine learning capabilities and real-time data processing.',
    solution: 'Built a serverless-first architecture on GCP using BigQuery as the analytics engine, Dataflow for unified batch/stream processing, Pub/Sub for event streaming, and Vertex AI for ML model development and serving.',
    architecture: {
      title: 'GCP Serverless Data Architecture',
      description: 'Fully managed services with automatic scaling and ML integration',
      layers: [
        {
          name: 'Event Streaming',
          description: 'Real-time data ingestion at scale',
          components: ['Pub/Sub', 'Dataflow', 'Cloud Functions', 'IoT Core'],
          color: 'from-green-500 to-green-600'
        },
        {
          name: 'Data Processing',
          description: 'Unified batch and stream processing',
          components: ['Dataflow', 'Dataproc', 'Cloud Composer', 'dbt'],
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'Analytics Engine',
          description: 'Serverless data warehouse',
          components: ['BigQuery', 'BigQuery ML', 'BI Engine', 'Materialized Views'],
          color: 'from-yellow-500 to-yellow-600'
        },
        {
          name: 'ML Platform',
          description: 'End-to-end machine learning',
          components: ['Vertex AI', 'Feature Store', 'Model Registry', 'Predictions API'],
          color: 'from-purple-500 to-purple-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Data Warehouse',
        tools: [
          { name: 'BigQuery', description: 'Serverless enterprise data warehouse' },
          { name: 'BigQuery ML', description: 'ML models using SQL' },
          { name: 'BI Engine', description: 'In-memory analysis service' }
        ]
      },
      {
        category: 'Data Processing',
        tools: [
          { name: 'Dataflow', description: 'Unified stream and batch processing' },
          { name: 'Dataproc', description: 'Managed Spark and Hadoop' },
          { name: 'Cloud Composer', description: 'Managed Apache Airflow' }
        ]
      },
      {
        category: 'Machine Learning',
        tools: [
          { name: 'Vertex AI', description: 'Unified ML platform' },
          { name: 'Feature Store', description: 'Centralized feature management' },
          { name: 'AutoML', description: 'Automated model training' }
        ]
      },
      {
        category: 'Visualization',
        tools: [
          { name: 'Looker', description: 'Enterprise BI platform' },
          { name: 'Data Studio', description: 'Self-service dashboards' },
          { name: 'Connected Sheets', description: 'BigQuery in Google Sheets' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'GCP Foundation',
        description: 'Set up organization, projects, and security baseline',
        deliverables: ['Project hierarchy', 'IAM policies', 'VPC setup', 'Billing alerts']
      },
      {
        phase: '02',
        title: 'BigQuery Setup',
        description: 'Configured datasets, tables, and access controls',
        deliverables: ['Dataset structure', 'Partitioning strategy', 'Clustering keys', 'Slot reservations']
      },
      {
        phase: '03',
        title: 'Streaming Pipeline',
        description: 'Built Pub/Sub to BigQuery streaming pipeline',
        deliverables: ['Pub/Sub topics', 'Dataflow templates', 'Dead letter handling', 'Monitoring']
      },
      {
        phase: '04',
        title: 'Transformation Layer',
        description: 'Implemented dbt models for business logic',
        deliverables: ['dbt project', 'Incremental models', 'Data tests', 'Documentation']
      },
      {
        phase: '05',
        title: 'ML Integration',
        description: 'Deployed Vertex AI models with online serving',
        deliverables: ['Training pipelines', 'Model endpoints', 'Feature engineering', 'Monitoring']
      }
    ],
    keyFeatures: [
      {
        title: 'Serverless Scaling',
        description: 'Automatic scaling from MB to PB with no infrastructure management',
        icon: 'Cloud'
      },
      {
        title: 'Real-Time Analytics',
        description: 'Streaming ingestion with immediate query availability',
        icon: 'Zap'
      },
      {
        title: 'Built-in ML',
        description: 'Train and deploy ML models directly in SQL with BigQuery ML',
        icon: 'BarChart3'
      },
      {
        title: 'Geospatial Analytics',
        description: 'Native support for geographic data and spatial queries',
        icon: 'Database'
      }
    ],
    metrics: [
      { value: 'PB-Scale', label: 'Data Volume', description: 'Petabytes of data with sub-second queries' },
      { value: '70%', label: 'Less Ops Overhead', description: 'Serverless eliminates infrastructure management' },
      { value: '1M+', label: 'Events/Second', description: 'Real-time streaming ingestion capacity' },
      { value: '<1s', label: 'Query Response', description: 'BI Engine enables sub-second dashboards' }
    ],
    challenges: [
      {
        challenge: 'Cost optimization for large analytical queries',
        solution: 'Implemented slot reservations, query optimization, and partitioning strategies'
      },
      {
        challenge: 'Complex streaming requirements with exactly-once semantics',
        solution: 'Used Dataflow with built-in deduplication and BigQuery streaming buffer'
      },
      {
        challenge: 'ML model serving latency requirements',
        solution: 'Deployed Vertex AI endpoints with autoscaling and caching'
      }
    ],
    screenshots: [
      { title: 'BigQuery Console', description: 'Query editor and results explorer', type: 'dashboard' },
      { title: 'Dataflow Pipeline Graph', description: 'Streaming pipeline visualization', type: 'pipeline' },
      { title: 'Looker Dashboard', description: 'Executive analytics dashboard', type: 'dashboard' },
      { title: 'GCP Architecture', description: 'Cloud infrastructure diagram', type: 'architecture' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'BigQuery Dataset & Table Setup',
        description: 'Configure BigQuery datasets with partitioning and clustering',
        details: [
          'Create datasets with appropriate access controls',
          'Design tables with partition and clustering strategies',
          'Configure streaming buffer for real-time ingestion',
          'Set up scheduled queries for data maintenance'
        ],
        codeSnippets: [
          {
            title: 'BigQuery DDL',
            language: 'sql',
            description: 'Create partitioned and clustered tables',
            code: `-- Create dataset with region and labels
CREATE SCHEMA IF NOT EXISTS analytics
OPTIONS (
  location = 'US',
  labels = [('env', 'production'), ('team', 'data-engineering')]
);

-- Create partitioned and clustered events table
CREATE TABLE analytics.events (
  event_id STRING NOT NULL,
  user_id STRING,
  event_type STRING,
  event_timestamp TIMESTAMP,
  event_date DATE,
  properties JSON,
  device_info STRUCT<
    platform STRING,
    os_version STRING,
    app_version STRING,
    device_model STRING
  >,
  geo_info STRUCT<
    country STRING,
    region STRING,
    city STRING,
    latitude FLOAT64,
    longitude FLOAT64
  >,
  session_id STRING,
  page_url STRING,
  referrer STRING,
  processing_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
)
PARTITION BY event_date
CLUSTER BY user_id, event_type
OPTIONS (
  partition_expiration_days = 365,
  require_partition_filter = true,
  description = 'User events table with daily partitions'
);

-- Create materialized view for real-time dashboard
CREATE MATERIALIZED VIEW analytics.events_hourly_summary
PARTITION BY DATE(event_hour)
CLUSTER BY event_type
AS
SELECT
  TIMESTAMP_TRUNC(event_timestamp, HOUR) as event_hour,
  event_type,
  COUNT(*) as event_count,
  COUNT(DISTINCT user_id) as unique_users,
  COUNT(DISTINCT session_id) as sessions
FROM analytics.events
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
GROUP BY 1, 2;

-- Schedule daily aggregation job
CREATE OR REPLACE PROCEDURE analytics.sp_daily_aggregation()
BEGIN
  MERGE analytics.daily_metrics AS target
  USING (
    SELECT
      event_date,
      event_type,
      COUNT(*) as event_count,
      COUNT(DISTINCT user_id) as dau,
      APPROX_QUANTILES(session_duration, 100)[OFFSET(50)] as median_session
    FROM analytics.events
    WHERE event_date = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
    GROUP BY 1, 2
  ) AS source
  ON target.event_date = source.event_date 
     AND target.event_type = source.event_type
  WHEN MATCHED THEN UPDATE SET
    event_count = source.event_count,
    dau = source.dau,
    median_session = source.median_session
  WHEN NOT MATCHED THEN INSERT ROW;
END;`
          }
        ]
      },
      {
        step: '02',
        title: 'Dataflow Streaming Pipeline',
        description: 'Build Apache Beam pipeline for real-time data processing',
        details: [
          'Read events from Pub/Sub subscription',
          'Apply windowing for time-based aggregations',
          'Enrich data with BigQuery lookups',
          'Write to BigQuery streaming buffer'
        ],
        codeSnippets: [
          {
            title: 'Apache Beam Pipeline',
            language: 'python',
            description: 'Dataflow streaming pipeline code',
            code: `import apache_beam as beam
from apache_beam.options.pipeline_options import PipelineOptions
from apache_beam.io.gcp.bigquery import WriteToBigQuery
from apache_beam.transforms.window import FixedWindows, SlidingWindows
import json

class ParseEvent(beam.DoFn):
    def process(self, element):
        try:
            event = json.loads(element.decode('utf-8'))
            yield {
                'event_id': event.get('id'),
                'user_id': event.get('user_id'),
                'event_type': event.get('type'),
                'event_timestamp': event.get('timestamp'),
                'properties': json.dumps(event.get('properties', {})),
                'device_info': event.get('device'),
                'geo_info': event.get('geo'),
            }
        except Exception as e:
            # Send to dead letter queue
            yield beam.pvalue.TaggedOutput('errors', element)

class EnrichWithUserData(beam.DoFn):
    def setup(self):
        from google.cloud import bigquery
        self.client = bigquery.Client()
        
    def process(self, element):
        # Lookup user data from BigQuery
        query = f"""
            SELECT segment, lifetime_value, signup_date
            FROM analytics.users
            WHERE user_id = '{element['user_id']}'
        """
        result = list(self.client.query(query).result())
        if result:
            element['user_segment'] = result[0].segment
            element['user_ltv'] = result[0].lifetime_value
        yield element

def run_pipeline():
    options = PipelineOptions([
        '--project=my-gcp-project',
        '--region=us-central1',
        '--runner=DataflowRunner',
        '--streaming',
        '--enable_streaming_engine',
        '--autoscaling_algorithm=THROUGHPUT_BASED',
        '--max_num_workers=20',
    ])
    
    with beam.Pipeline(options=options) as p:
        # Read from Pub/Sub
        events = (
            p
            | 'ReadPubSub' >> beam.io.ReadFromPubSub(
                subscription='projects/my-project/subscriptions/events-sub'
            )
            | 'ParseEvents' >> beam.ParDo(ParseEvent()).with_outputs('errors', main='events')
        )
        
        # Process main events
        processed = (
            events.events
            | 'Window' >> beam.WindowInto(FixedWindows(60))  # 1-minute windows
            | 'EnrichUser' >> beam.ParDo(EnrichWithUserData())
        )
        
        # Write to BigQuery
        processed | 'WriteBigQuery' >> WriteToBigQuery(
            table='my-project:analytics.events',
            schema='SCHEMA_AUTODETECT',
            write_disposition=beam.io.BigQueryDisposition.WRITE_APPEND,
            create_disposition=beam.io.BigQueryDisposition.CREATE_NEVER,
            method='STREAMING_INSERTS'
        )
        
        # Write errors to dead letter table
        events.errors | 'WriteErrors' >> WriteToBigQuery(
            table='my-project:analytics.dead_letter'
        )

if __name__ == '__main__':
    run_pipeline()`
          }
        ]
      },
      {
        step: '03',
        title: 'BigQuery ML Model Training',
        description: 'Train and deploy ML models directly in BigQuery',
        details: [
          'Create feature engineering views',
          'Train classification model with BQML',
          'Evaluate model performance',
          'Deploy for online predictions'
        ],
        codeSnippets: [
          {
            title: 'BigQuery ML Training',
            language: 'sql',
            description: 'Train churn prediction model in BQML',
            code: `-- Create feature engineering view
CREATE OR REPLACE VIEW analytics.churn_features AS
SELECT
  user_id,
  -- Activity features
  COUNT(DISTINCT event_date) as active_days,
  COUNT(*) as total_events,
  SUM(CASE WHEN event_type = 'purchase' THEN 1 ELSE 0 END) as purchase_count,
  SUM(CASE WHEN event_type = 'support_ticket' THEN 1 ELSE 0 END) as support_tickets,
  
  -- Engagement metrics
  AVG(session_duration) as avg_session_duration,
  STDDEV(session_duration) as session_duration_variance,
  
  -- Recency
  DATE_DIFF(CURRENT_DATE(), MAX(event_date), DAY) as days_since_last_activity,
  DATE_DIFF(CURRENT_DATE(), MIN(event_date), DAY) as account_age_days,
  
  -- Target variable (churned if no activity in 30 days)
  CASE 
    WHEN DATE_DIFF(CURRENT_DATE(), MAX(event_date), DAY) > 30 THEN 1 
    ELSE 0 
  END as churned
FROM analytics.events
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 180 DAY)
GROUP BY user_id;

-- Train XGBoost classification model
CREATE OR REPLACE MODEL analytics.churn_prediction_model
OPTIONS (
  model_type = 'BOOSTED_TREE_CLASSIFIER',
  input_label_cols = ['churned'],
  data_split_method = 'RANDOM',
  data_split_eval_fraction = 0.2,
  num_parallel_tree = 5,
  max_iterations = 50,
  learn_rate = 0.1,
  early_stop = true,
  min_split_loss = 0.1,
  enable_global_explain = true
) AS
SELECT
  active_days,
  total_events,
  purchase_count,
  support_tickets,
  avg_session_duration,
  session_duration_variance,
  days_since_last_activity,
  account_age_days,
  churned
FROM analytics.churn_features
WHERE account_age_days >= 30;

-- Evaluate model performance
SELECT
  *,
  1 - (false_positives / (false_positives + true_negatives)) as specificity
FROM ML.EVALUATE(MODEL analytics.churn_prediction_model);

-- View feature importance
SELECT *
FROM ML.GLOBAL_EXPLAIN(MODEL analytics.churn_prediction_model);

-- Create prediction view for production
CREATE OR REPLACE VIEW analytics.churn_predictions AS
SELECT
  user_id,
  predicted_churned as churn_prediction,
  predicted_churned_probs[OFFSET(1)].prob as churn_probability,
  CASE
    WHEN predicted_churned_probs[OFFSET(1)].prob > 0.8 THEN 'High'
    WHEN predicted_churned_probs[OFFSET(1)].prob > 0.5 THEN 'Medium'
    ELSE 'Low'
  END as churn_risk_tier
FROM ML.PREDICT(
  MODEL analytics.churn_prediction_model,
  (SELECT * FROM analytics.churn_features WHERE account_age_days >= 30)
);`
          }
        ]
      }
    ],
    technologies: ['BigQuery', 'Dataflow', 'Pub/Sub', 'Cloud Composer', 'Vertex AI', 'Looker', 'dbt', 'Cloud Functions']
  },

  'realtime-streaming': {
    id: 'realtime-streaming',
    title: 'Real-Time Clinical Event Processing',
    category: 'Streaming & Real-Time',
    tagline: 'Sub-minute latency for clinical alerts processing millions of events hourly',
    overview: 'A real-time streaming platform for processing clinical events from healthcare provider systems, enabling near-real-time care alerts and improving patient outcomes through timely interventions.',
    problemStatement: 'Healthcare organizations needed to process HL7/FHIR clinical events from multiple provider systems in real-time to enable timely care management interventions, but legacy batch processing introduced unacceptable delays.',
    solution: 'Built streaming pipelines using Kafka and Databricks Structured Streaming with schema registry for data validation and Delta Lake for exactly-once processing semantics.',
    architecture: {
      title: 'Real-Time Streaming Architecture',
      description: 'Event-driven architecture with exactly-once processing guarantees',
      layers: [
        {
          name: 'Event Sources',
          description: 'Clinical systems and provider interfaces',
          components: ['HL7 Feeds', 'FHIR APIs', 'ADT Messages', 'Lab Results'],
          color: 'from-red-500 to-red-600'
        },
        {
          name: 'Event Streaming',
          description: 'High-throughput message broker',
          components: ['Kafka', 'Schema Registry', 'Kafka Connect', 'Event Hubs'],
          color: 'from-orange-500 to-orange-600'
        },
        {
          name: 'Stream Processing',
          description: 'Real-time transformation and enrichment',
          components: ['Spark Streaming', 'Databricks', 'Windowing', 'State Management'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Real-Time Actions',
          description: 'Alerts and downstream integrations',
          components: ['Care Alerts', 'Notifications', 'API Triggers', 'Delta Lake'],
          color: 'from-teal-500 to-teal-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Message Streaming',
        tools: [
          { name: 'Apache Kafka', description: 'Distributed event streaming platform' },
          { name: 'Schema Registry', description: 'Schema management and validation' },
          { name: 'Kafka Connect', description: 'Source and sink connectors' }
        ]
      },
      {
        category: 'Stream Processing',
        tools: [
          { name: 'Spark Streaming', description: 'Micro-batch stream processing' },
          { name: 'Structured Streaming', description: 'Unified batch/streaming API' },
          { name: 'Databricks', description: 'Managed Spark platform' }
        ]
      },
      {
        category: 'Healthcare Standards',
        tools: [
          { name: 'HL7 FHIR', description: 'Healthcare interoperability standard' },
          { name: 'HL7 v2', description: 'Legacy healthcare messaging' },
          { name: 'SMART on FHIR', description: 'Healthcare app framework' }
        ]
      },
      {
        category: 'Storage',
        tools: [
          { name: 'Delta Lake', description: 'ACID transactions for streaming' },
          { name: 'ADLS Gen2', description: 'Scalable data lake storage' },
          { name: 'Cosmos DB', description: 'Low-latency operational store' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'Requirements Analysis',
        description: 'Defined event schemas, SLAs, and integration patterns',
        deliverables: ['Event catalog', 'Schema definitions', 'SLA requirements', 'Integration specs']
      },
      {
        phase: '02',
        title: 'Kafka Infrastructure',
        description: 'Deployed Kafka cluster with schema registry',
        deliverables: ['Kafka cluster', 'Topic configuration', 'Schema registry', 'Monitoring']
      },
      {
        phase: '03',
        title: 'Streaming Pipelines',
        description: 'Built Spark Streaming jobs for event processing',
        deliverables: ['Streaming jobs', 'State management', 'Checkpointing', 'Error handling']
      },
      {
        phase: '04',
        title: 'Alert Integration',
        description: 'Connected to care management systems for alerts',
        deliverables: ['Alert rules engine', 'Notification service', 'Care team routing', 'Escalation logic']
      },
      {
        phase: '05',
        title: 'Monitoring & Ops',
        description: 'Implemented comprehensive monitoring and alerting',
        deliverables: ['Lag monitoring', 'Throughput dashboards', 'On-call runbooks', 'Auto-recovery']
      }
    ],
    keyFeatures: [
      {
        title: 'Schema Evolution',
        description: 'Backward/forward compatible schema changes without downtime',
        icon: 'Database'
      },
      {
        title: 'Exactly-Once Processing',
        description: 'Guaranteed delivery with no duplicates using Delta Lake',
        icon: 'Shield'
      },
      {
        title: 'Clinical Rules Engine',
        description: 'Configurable rules for care alert generation',
        icon: 'Zap'
      },
      {
        title: 'Event Replay',
        description: 'Ability to replay events for debugging and recovery',
        icon: 'Workflow'
      }
    ],
    metrics: [
      { value: '<1min', label: 'End-to-End Latency', description: 'From event generation to care alert' },
      { value: '1M+', label: 'Events per Hour', description: 'Sustained processing throughput' },
      { value: '99.9%', label: 'Availability', description: 'Platform uptime SLA' },
      { value: '0', label: 'Data Loss', description: 'Exactly-once processing guarantees' }
    ],
    challenges: [
      {
        challenge: 'Variable event volumes with 10x spikes during peak hours',
        solution: 'Implemented auto-scaling with Kafka partition rebalancing'
      },
      {
        challenge: 'Complex stateful processing for patient timeline aggregation',
        solution: 'Used Spark Streaming state stores with checkpointing'
      },
      {
        challenge: 'HL7 v2 parsing complexity and vendor variations',
        solution: 'Built configurable parser with vendor-specific adapters'
      }
    ],
    screenshots: [
      { title: 'Streaming Architecture', description: 'Event flow from sources to alerts', type: 'architecture' },
      { title: 'Kafka Monitoring', description: 'Throughput and lag monitoring', type: 'dashboard' },
      { title: 'Spark Streaming UI', description: 'Job monitoring and metrics', type: 'pipeline' },
      { title: 'Care Alerts Dashboard', description: 'Real-time alert monitoring', type: 'dashboard' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'Kafka Topic Configuration',
        description: 'Set up Kafka topics with proper partitioning and retention',
        details: [
          'Create topics for clinical events, alerts, and dead letters',
          'Configure replication factor and partition strategy',
          'Set up Schema Registry for schema validation',
          'Implement consumer groups for parallel processing'
        ],
        codeSnippets: [
          {
            title: 'Kafka Topic Setup',
            language: 'bash',
            description: 'Create Kafka topics with configurations',
            code: `# Create clinical events topic with 12 partitions
kafka-topics.sh --create \\
  --bootstrap-server kafka-broker:9092 \\
  --topic clinical-events \\
  --partitions 12 \\
  --replication-factor 3 \\
  --config retention.ms=604800000 \\
  --config cleanup.policy=delete \\
  --config min.insync.replicas=2

# Create care alerts topic
kafka-topics.sh --create \\
  --bootstrap-server kafka-broker:9092 \\
  --topic care-alerts \\
  --partitions 6 \\
  --replication-factor 3 \\
  --config retention.ms=2592000000

# Register Avro schema for clinical events
curl -X POST http://schema-registry:8081/subjects/clinical-events-value/versions \\
  -H "Content-Type: application/vnd.schemaregistry.v1+json" \\
  -d '{
    "schema": "{
      \\"type\\": \\"record\\",
      \\"name\\": \\"ClinicalEvent\\",
      \\"fields\\": [
        {\\"name\\": \\"event_id\\", \\"type\\": \\"string\\"},
        {\\"name\\": \\"patient_id\\", \\"type\\": \\"string\\"},
        {\\"name\\": \\"event_type\\", \\"type\\": \\"string\\"},
        {\\"name\\": \\"event_time\\", \\"type\\": \\"long\\"},
        {\\"name\\": \\"fhir_resource\\", \\"type\\": \\"string\\"}
      ]
    }"
  }'`
          }
        ]
      },
      {
        step: '02',
        title: 'Spark Structured Streaming',
        description: 'Build streaming pipeline with exactly-once semantics',
        details: [
          'Configure Kafka source with SSL authentication',
          'Implement stateful processing for patient timelines',
          'Add watermarking for late event handling',
          'Write to Delta Lake with checkpointing'
        ],
        codeSnippets: [
          {
            title: 'Structured Streaming Pipeline',
            language: 'python',
            description: 'Spark Streaming with Delta Lake sink',
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import *
from delta.tables import DeltaTable

spark = SparkSession.builder \\
    .appName("ClinicalEventsProcessor") \\
    .config("spark.sql.streaming.checkpointLocation", "/checkpoints") \\
    .getOrCreate()

# Define schema for clinical events
clinical_schema = StructType([
    StructField("event_id", StringType()),
    StructField("patient_id", StringType()),
    StructField("event_type", StringType()),
    StructField("event_time", TimestampType()),
    StructField("fhir_resource", StringType())
])

# Read from Kafka with exactly-once semantics
clinical_events = (
    spark.readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "kafka:9092")
    .option("subscribe", "clinical-events")
    .option("startingOffsets", "latest")
    .option("kafka.security.protocol", "SASL_SSL")
    .option("kafka.sasl.mechanism", "PLAIN")
    .option("failOnDataLoss", "false")
    .load()
    .select(from_json(col("value").cast("string"), clinical_schema).alias("event"))
    .select("event.*")
)

# Add watermark for handling late events
with_watermark = clinical_events.withWatermark("event_time", "5 minutes")

# Stateful aggregation - patient event counts per hour
patient_hourly = (
    with_watermark
    .groupBy(
        window("event_time", "1 hour"),
        "patient_id"
    )
    .agg(
        count("*").alias("event_count"),
        collect_set("event_type").alias("event_types")
    )
)

# Write to Delta Lake
(clinical_events.writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "/checkpoints/clinical_events")
    .trigger(processingTime="30 seconds")
    .table("silver.clinical_events")
)`
          }
        ]
      }
    ],
    technologies: ['Kafka', 'Spark Streaming', 'Databricks', 'Delta Lake', 'HL7/FHIR', 'Schema Registry', 'Azure', 'Event Hubs']
  },

  'data-governance': {
    id: 'data-governance',
    title: 'Enterprise Data Governance Framework',
    category: 'Governance & Compliance',
    tagline: 'Automated compliance for HIPAA, CMS, and GDPR across enterprise data platforms',
    overview: 'A comprehensive data governance solution implementing automated data cataloging, lineage tracking, access control, and compliance monitoring across healthcare and insurance data platforms.',
    problemStatement: 'The organization faced regulatory audit challenges, unclear data ownership, inconsistent access controls, and inability to track data lineage across complex data pipelines.',
    solution: 'Deployed Unity Catalog and Azure Purview for unified governance, implemented automated PII detection, column-level security, and comprehensive audit logging.',
    architecture: {
      title: 'Data Governance Architecture',
      description: 'Centralized governance with distributed enforcement',
      layers: [
        {
          name: 'Discovery Layer',
          description: 'Automated data asset discovery',
          components: ['Auto-scanning', 'Schema Detection', 'PII Classification', 'Tagging'],
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'Catalog Layer',
          description: 'Centralized metadata management',
          components: ['Unity Catalog', 'Azure Purview', 'Business Glossary', 'Data Dictionary'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Policy Layer',
          description: 'Access control and security policies',
          components: ['RBAC', 'ABAC', 'Column Masking', 'Row-Level Security'],
          color: 'from-teal-500 to-teal-600'
        },
        {
          name: 'Monitoring Layer',
          description: 'Audit and compliance tracking',
          components: ['Access Logs', 'Lineage Tracking', 'Compliance Reports', 'Alerts'],
          color: 'from-orange-500 to-orange-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Data Catalog',
        tools: [
          { name: 'Unity Catalog', description: 'Unified governance for Databricks' },
          { name: 'Azure Purview', description: 'Enterprise data governance service' },
          { name: 'Apache Atlas', description: 'Open source metadata management' }
        ]
      },
      {
        category: 'Access Control',
        tools: [
          { name: 'RBAC', description: 'Role-based access control' },
          { name: 'ABAC', description: 'Attribute-based access control' },
          { name: 'Dynamic Masking', description: 'Real-time data masking' }
        ]
      },
      {
        category: 'Data Quality',
        tools: [
          { name: 'Great Expectations', description: 'Data validation framework' },
          { name: 'dbt Tests', description: 'SQL-based data tests' },
          { name: 'Monte Carlo', description: 'Data observability platform' }
        ]
      },
      {
        category: 'Compliance',
        tools: [
          { name: 'HIPAA Controls', description: 'Healthcare compliance framework' },
          { name: 'GDPR Tools', description: 'Privacy compliance automation' },
          { name: 'Audit Logging', description: 'Comprehensive access tracking' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'Data Discovery',
        description: 'Scanned all data sources and cataloged assets',
        deliverables: ['Asset inventory', 'Data classification', 'Owner assignment', 'Sensitivity tagging']
      },
      {
        phase: '02',
        title: 'Catalog Deployment',
        description: 'Implemented Unity Catalog and Azure Purview',
        deliverables: ['Catalog setup', 'Schema registration', 'Business glossary', 'Lineage capture']
      },
      {
        phase: '03',
        title: 'Policy Implementation',
        description: 'Defined and deployed access control policies',
        deliverables: ['Policy framework', 'Role definitions', 'Masking rules', 'Security groups']
      },
      {
        phase: '04',
        title: 'Compliance Automation',
        description: 'Automated compliance checking and reporting',
        deliverables: ['Compliance rules', 'Automated scans', 'Exception workflow', 'Audit reports']
      },
      {
        phase: '05',
        title: 'Operationalization',
        description: 'Integrated governance into development workflows',
        deliverables: ['CI/CD integration', 'Developer training', 'Governance portal', 'SLA monitoring']
      }
    ],
    keyFeatures: [
      {
        title: 'Automated PII Detection',
        description: 'ML-powered scanning identifies sensitive data automatically',
        icon: 'Shield'
      },
      {
        title: 'End-to-End Lineage',
        description: 'Track data from source to consumption across all pipelines',
        icon: 'Workflow'
      },
      {
        title: 'Self-Service Access',
        description: 'Business users request access through governed workflows',
        icon: 'Database'
      },
      {
        title: 'Compliance Dashboards',
        description: 'Real-time visibility into compliance posture',
        icon: 'BarChart3'
      }
    ],
    metrics: [
      { value: '100%', label: 'HIPAA Compliance', description: 'Full regulatory compliance achieved' },
      { value: '60%', label: 'Audit Time Reduction', description: 'Faster audit preparation with automation' },
      { value: '1000+', label: 'Assets Cataloged', description: 'Complete data asset inventory' },
      { value: '<1hr', label: 'Access Provisioning', description: 'Self-service access request fulfillment' }
    ],
    challenges: [
      {
        challenge: 'Legacy systems without metadata integration capabilities',
        solution: 'Built custom connectors and automated metadata extraction'
      },
      {
        challenge: 'Complex cross-system lineage tracking',
        solution: 'Implemented OpenLineage standard across all pipelines'
      },
      {
        challenge: 'Balancing security with data accessibility',
        solution: 'Created tiered access model with just-in-time elevation'
      }
    ],
    screenshots: [
      { title: 'Data Catalog Interface', description: 'Searchable data asset catalog', type: 'dashboard' },
      { title: 'Lineage Visualization', description: 'End-to-end data flow tracking', type: 'pipeline' },
      { title: 'Compliance Dashboard', description: 'Real-time compliance monitoring', type: 'dashboard' },
      { title: 'Access Management', description: 'Self-service access request portal', type: 'dashboard' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'Unity Catalog Configuration',
        description: 'Set up centralized data governance with Unity Catalog',
        details: [
          'Create metastore and assign to workspaces',
          'Configure storage credentials and external locations',
          'Set up catalogs and schemas hierarchy',
          'Implement privilege inheritance'
        ],
        codeSnippets: [
          {
            title: 'Unity Catalog Setup',
            language: 'sql',
            description: 'SQL commands for Unity Catalog configuration',
            code: `-- Create storage credential for ADLS Gen2
CREATE STORAGE CREDENTIAL adls_credential
WITH (
  AZURE_MANAGED_IDENTITY = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
);

-- Create external location
CREATE EXTERNAL LOCATION healthcare_raw
URL 'abfss://raw@healthcaredl.dfs.core.windows.net/'
WITH (STORAGE CREDENTIAL adls_credential);

-- Create catalog
CREATE CATALOG IF NOT EXISTS healthcare_analytics
MANAGED LOCATION 'abfss://managed@healthcaredl.dfs.core.windows.net/';

-- Grant catalog permissions
GRANT USE CATALOG ON CATALOG healthcare_analytics TO data_engineers;
GRANT CREATE SCHEMA ON CATALOG healthcare_analytics TO data_engineers;

-- Create schemas
CREATE SCHEMA IF NOT EXISTS healthcare_analytics.bronze;
CREATE SCHEMA IF NOT EXISTS healthcare_analytics.silver;
CREATE SCHEMA IF NOT EXISTS healthcare_analytics.gold;

-- Set up row filter for multi-tenant access
CREATE FUNCTION healthcare_analytics.region_access(region STRING)
RETURNS BOOLEAN
RETURN (
  is_account_group_member('admin') OR 
  region = session_user_attribute('assigned_region')
);

-- Apply row filter to table
ALTER TABLE healthcare_analytics.gold.claims
SET ROW FILTER healthcare_analytics.region_access ON (region);`
          }
        ]
      },
      {
        step: '02',
        title: 'Data Masking Implementation',
        description: 'Configure column-level masking for PHI/PII protection',
        details: [
          'Define masking functions for different data types',
          'Apply masks based on user group membership',
          'Configure dynamic masking rules',
          'Test masking with different user contexts'
        ],
        codeSnippets: [
          {
            title: 'Column Masking Functions',
            language: 'sql',
            description: 'Create and apply dynamic data masking',
            code: `-- Create masking function for SSN
CREATE FUNCTION healthcare_analytics.mask_ssn(ssn STRING)
RETURNS STRING
RETURN CASE 
  WHEN is_account_group_member('phi_authorized') THEN ssn
  WHEN is_account_group_member('phi_partial') THEN CONCAT('XXX-XX-', RIGHT(ssn, 4))
  ELSE 'XXX-XX-XXXX'
END;

-- Create masking function for names (partial mask)
CREATE FUNCTION healthcare_analytics.mask_name(name STRING)
RETURNS STRING
RETURN CASE 
  WHEN is_account_group_member('phi_authorized') THEN name
  ELSE CONCAT(LEFT(name, 1), REPEAT('*', LENGTH(name) - 1))
END;

-- Create masking function for dates (age band)
CREATE FUNCTION healthcare_analytics.mask_dob(dob DATE)
RETURNS STRING
RETURN CASE 
  WHEN is_account_group_member('phi_authorized') THEN CAST(dob AS STRING)
  ELSE CONCAT(
    CASE 
      WHEN FLOOR(DATEDIFF(CURRENT_DATE(), dob) / 365) < 18 THEN '<18'
      WHEN FLOOR(DATEDIFF(CURRENT_DATE(), dob) / 365) < 30 THEN '18-29'
      WHEN FLOOR(DATEDIFF(CURRENT_DATE(), dob) / 365) < 50 THEN '30-49'
      WHEN FLOOR(DATEDIFF(CURRENT_DATE(), dob) / 365) < 65 THEN '50-64'
      ELSE '65+'
    END
  )
END;

-- Apply masks to member table
ALTER TABLE healthcare_analytics.silver.members
ALTER COLUMN ssn SET MASK healthcare_analytics.mask_ssn;

ALTER TABLE healthcare_analytics.silver.members
ALTER COLUMN full_name SET MASK healthcare_analytics.mask_name;

ALTER TABLE healthcare_analytics.silver.members
ALTER COLUMN date_of_birth SET MASK healthcare_analytics.mask_dob;`
          }
        ]
      }
    ],
    technologies: ['Unity Catalog', 'Azure Purview', 'Great Expectations', 'HIPAA Compliance', 'RBAC', 'Data Masking', 'OpenLineage', 'dbt']
  },

  'telematics-pipeline': {
    id: 'telematics-pipeline',
    title: 'Telematics Data Pipeline',
    category: 'IoT & Telematics',
    tagline: 'Processing millions of connected vehicle events daily for usage-based insurance',
    overview: 'A high-volume data pipeline processing telematics sensor data from connected vehicles, enabling usage-based insurance products and real-time driver behavior scoring.',
    problemStatement: 'The insurance company needed to process massive volumes of time-series telematics data from millions of connected devices to enable real-time risk assessment and usage-based insurance pricing.',
    solution: 'Designed streaming ingestion with Kinesis and batch processing with Spark on EMR, optimized storage with Delta Lake Z-ordering for time-series queries.',
    architecture: {
      title: 'IoT Telematics Architecture',
      description: 'High-throughput ingestion with time-series optimization',
      layers: [
        {
          name: 'Device Layer',
          description: 'Connected vehicle sensors and OBD devices',
          components: ['OBD Dongles', 'Mobile Apps', 'Fleet Devices', 'MQTT'],
          color: 'from-green-500 to-green-600'
        },
        {
          name: 'Ingestion Layer',
          description: 'Real-time event collection',
          components: ['API Gateway', 'Kinesis', 'IoT Core', 'Lambda'],
          color: 'from-orange-500 to-orange-600'
        },
        {
          name: 'Processing Layer',
          description: 'Stream and batch analytics',
          components: ['Kinesis Analytics', 'EMR', 'Spark', 'Flink'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Analytics Layer',
          description: 'Scoring and insights',
          components: ['Driver Scores', 'Trip Analytics', 'Risk Models', 'Dashboards'],
          color: 'from-accent-500 to-accent-600'
        }
      ]
    },
    techStack: [
      {
        category: 'Ingestion',
        tools: [
          { name: 'AWS Kinesis', description: 'Real-time data streaming' },
          { name: 'IoT Core', description: 'Device connectivity and management' },
          { name: 'API Gateway', description: 'REST API for device data' }
        ]
      },
      {
        category: 'Processing',
        tools: [
          { name: 'Apache Spark', description: 'Large-scale data processing' },
          { name: 'Amazon EMR', description: 'Managed Hadoop/Spark' },
          { name: 'Kinesis Analytics', description: 'Real-time stream processing' }
        ]
      },
      {
        category: 'Storage',
        tools: [
          { name: 'Delta Lake', description: 'Time-series optimized storage' },
          { name: 'S3', description: 'Scalable object storage' },
          { name: 'DynamoDB', description: 'Low-latency device state' }
        ]
      },
      {
        category: 'Analytics',
        tools: [
          { name: 'Redshift', description: 'Analytics data warehouse' },
          { name: 'SageMaker', description: 'ML model training' },
          { name: 'QuickSight', description: 'BI dashboards' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'IoT Architecture',
        description: 'Designed device connectivity and data collection',
        deliverables: ['Device protocols', 'API design', 'Security model', 'Capacity planning']
      },
      {
        phase: '02',
        title: 'Streaming Pipeline',
        description: 'Built real-time ingestion with Kinesis',
        deliverables: ['Kinesis streams', 'Lambda processors', 'Error handling', 'Monitoring']
      },
      {
        phase: '03',
        title: 'Batch Processing',
        description: 'Implemented Spark jobs for aggregation and scoring',
        deliverables: ['EMR cluster', 'Spark jobs', 'Scheduling', 'Optimization']
      },
      {
        phase: '04',
        title: 'ML Integration',
        description: 'Deployed driver scoring models',
        deliverables: ['Feature engineering', 'Model training', 'Scoring pipeline', 'A/B testing']
      },
      {
        phase: '05',
        title: 'Product Integration',
        description: 'Connected to insurance pricing systems',
        deliverables: ['API endpoints', 'Premium calculation', 'Agent portal', 'Customer app']
      }
    ],
    keyFeatures: [
      {
        title: 'Real-Time Scoring',
        description: 'Driver behavior scores updated continuously during trips',
        icon: 'Zap'
      },
      {
        title: 'Trip Reconstruction',
        description: 'Accurate trip detection with start/stop and route mapping',
        icon: 'Workflow'
      },
      {
        title: 'Anomaly Detection',
        description: 'Identify unusual driving patterns and potential fraud',
        icon: 'Shield'
      },
      {
        title: 'Fleet Analytics',
        description: 'Aggregate insights for commercial fleet customers',
        icon: 'BarChart3'
      }
    ],
    metrics: [
      { value: '10M+', label: 'Events per Day', description: 'Daily telematics event volume' },
      { value: '30%', label: 'Query Performance', description: 'Improvement with time-series optimization' },
      { value: '<5s', label: 'Score Latency', description: 'Real-time driver score updates' },
      { value: '1M+', label: 'Devices', description: 'Connected vehicles and devices' }
    ],
    challenges: [
      {
        challenge: 'GPS signal gaps and noisy sensor data',
        solution: 'Implemented Kalman filtering and gap interpolation algorithms'
      },
      {
        challenge: 'Cost of storing high-frequency time-series data',
        solution: 'Used Delta Lake Z-ordering and data compaction strategies'
      },
      {
        challenge: 'Device battery impact from frequent data transmission',
        solution: 'Implemented adaptive sampling based on driving context'
      }
    ],
    screenshots: [
      { title: 'IoT Architecture Diagram', description: 'Device to analytics data flow', type: 'architecture' },
      { title: 'Driver Score Dashboard', description: 'Real-time driving behavior analytics', type: 'dashboard' },
      { title: 'Trip Analytics', description: 'Trip details and route visualization', type: 'dashboard' },
      { title: 'EMR Processing', description: 'Spark job monitoring', type: 'pipeline' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'AWS IoT Core & Kinesis Setup',
        description: 'Configure IoT device ingestion pipeline',
        details: [
          'Set up IoT Core rules for device data routing',
          'Create Kinesis streams with appropriate sharding',
          'Configure device authentication and policies',
          'Implement device shadow for state management'
        ],
        codeSnippets: [
          {
            title: 'IoT Core Rule',
            language: 'json',
            description: 'AWS IoT rule for routing telematics data',
            code: `{
  "sql": "SELECT *, topic(2) as device_id, timestamp() as server_time FROM 'vehicles/+/telemetry'",
  "ruleDisabled": false,
  "actions": [
    {
      "kinesis": {
        "streamName": "telematics-stream",
        "partitionKey": "\${device_id}",
        "roleArn": "arn:aws:iam::123456789:role/iot-kinesis-role"
      }
    },
    {
      "s3": {
        "bucketName": "telematics-raw-backup",
        "key": "\${topic(2)}/\${parse_time('yyyy/MM/dd/HH', timestamp())}/\${newuuid()}.json",
        "roleArn": "arn:aws:iam::123456789:role/iot-s3-role"
      }
    }
  ],
  "errorAction": {
    "sns": {
      "targetArn": "arn:aws:sns:us-east-1:123456789:iot-errors",
      "roleArn": "arn:aws:iam::123456789:role/iot-sns-role"
    }
  }
}`
          }
        ]
      },
      {
        step: '02',
        title: 'Spark Telematics Processing',
        description: 'Process high-volume time-series telematics data',
        details: [
          'Read from Kinesis with at-least-once semantics',
          'Apply Kalman filtering for GPS noise reduction',
          'Detect driving events (braking, acceleration)',
          'Calculate real-time driver scores'
        ],
        codeSnippets: [
          {
            title: 'Telematics Processing Job',
            language: 'python',
            description: 'PySpark job for telematics processing',
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.window import Window
import math

spark = SparkSession.builder \\
    .appName("TelematicsProcessor") \\
    .config("spark.sql.shuffle.partitions", "100") \\
    .getOrCreate()

# Define UDF for haversine distance
@udf("double")
def haversine_distance(lat1, lon1, lat2, lon2):
    R = 3959  # Earth radius in miles
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    return R * 2 * math.asin(math.sqrt(a))

# Read telematics data from Delta Lake
telemetry = spark.read.format("delta").table("bronze.telematics_raw")

# Window for time-series analysis
device_window = Window.partitionBy("device_id").orderBy("event_time")

# Calculate driving metrics
driving_events = (
    telemetry
    .withColumn("prev_speed", lag("speed").over(device_window))
    .withColumn("prev_lat", lag("latitude").over(device_window))
    .withColumn("prev_lon", lag("longitude").over(device_window))
    .withColumn("prev_time", lag("event_time").over(device_window))
    .withColumn("time_delta", 
        (col("event_time").cast("long") - col("prev_time").cast("long")))
    .withColumn("acceleration", 
        (col("speed") - col("prev_speed")) / col("time_delta"))
    .withColumn("distance", 
        haversine_distance(col("prev_lat"), col("prev_lon"), 
                          col("latitude"), col("longitude")))
    .withColumn("hard_brake", 
        when(col("acceleration") < -8.0, 1).otherwise(0))
    .withColumn("hard_accel", 
        when(col("acceleration") > 8.0, 1).otherwise(0))
    .withColumn("speeding", 
        when(col("speed") > col("speed_limit") + 10, 1).otherwise(0))
)

# Calculate driver scores per trip
driver_scores = (
    driving_events
    .groupBy("device_id", "trip_id")
    .agg(
        count("*").alias("data_points"),
        sum("distance").alias("total_miles"),
        sum("hard_brake").alias("hard_brakes"),
        sum("hard_accel").alias("hard_accels"),
        sum("speeding").alias("speeding_events"),
        max("speed").alias("max_speed")
    )
    .withColumn("base_score", lit(850))
    .withColumn("brake_penalty", col("hard_brakes") * 5)
    .withColumn("accel_penalty", col("hard_accels") * 3)
    .withColumn("speed_penalty", col("speeding_events") * 2)
    .withColumn("driver_score", 
        greatest(lit(300), 
            col("base_score") - col("brake_penalty") - 
            col("accel_penalty") - col("speed_penalty")))
)

# Write to Delta Lake with Z-ordering for time-series queries
(driver_scores.write
    .format("delta")
    .mode("append")
    .option("delta.zOrderByColumns", "device_id,trip_id")
    .saveAsTable("silver.driver_scores")
)`
          }
        ]
      }
    ],
    technologies: ['AWS Kinesis', 'Spark', 'EMR', 'Delta Lake', 'Redshift', 'Python', 'SageMaker', 'IoT Core']
  },

  'ml-ops': {
    id: 'ml-ops',
    title: 'MLOps for Healthcare Predictions',
    category: 'Machine Learning',
    tagline: 'Production ML pipelines for readmission risk and member risk scoring',
    overview: 'An MLOps platform enabling data science teams to develop, deploy, and monitor machine learning models for healthcare predictions including readmission risk and member risk stratification.',
    problemStatement: 'Data science teams struggled with inconsistent model development practices, slow deployment cycles, lack of model monitoring, and difficulty reproducing experiments.',
    solution: 'Implemented comprehensive MLOps using Databricks MLflow for experiment tracking, model registry, and automated deployment, with integrated feature store and monitoring.',
    architecture: {
      title: 'MLOps Platform Architecture',
      description: 'End-to-end ML lifecycle management',
      layers: [
        {
          name: 'Feature Engineering',
          description: 'Centralized feature development',
          components: ['Feature Store', 'Feature Pipelines', 'Feature Serving', 'Versioning'],
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'Model Development',
          description: 'Experiment tracking and training',
          components: ['MLflow', 'Notebooks', 'AutoML', 'Hyperparameter Tuning'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Model Deployment',
          description: 'Production model serving',
          components: ['Model Registry', 'Model Serving', 'A/B Testing', 'Canary Releases'],
          color: 'from-teal-500 to-teal-600'
        },
        {
          name: 'Monitoring',
          description: 'Production model observability',
          components: ['Drift Detection', 'Performance Metrics', 'Alerts', 'Retraining Triggers'],
          color: 'from-orange-500 to-orange-600'
        }
      ]
    },
    techStack: [
      {
        category: 'ML Platform',
        tools: [
          { name: 'Databricks ML', description: 'Unified ML platform' },
          { name: 'MLflow', description: 'ML lifecycle management' },
          { name: 'Feature Store', description: 'Centralized feature management' }
        ]
      },
      {
        category: 'Model Development',
        tools: [
          { name: 'Python', description: 'Primary development language' },
          { name: 'scikit-learn', description: 'Classical ML algorithms' },
          { name: 'XGBoost', description: 'Gradient boosting framework' }
        ]
      },
      {
        category: 'Model Serving',
        tools: [
          { name: 'MLflow Serving', description: 'REST API model serving' },
          { name: 'Databricks Serving', description: 'Managed model endpoints' },
          { name: 'Delta Tables', description: 'Batch predictions' }
        ]
      },
      {
        category: 'Monitoring',
        tools: [
          { name: 'Evidently', description: 'ML model monitoring' },
          { name: 'Grafana', description: 'Metrics visualization' },
          { name: 'PagerDuty', description: 'Alert management' }
        ]
      }
    ],
    implementation: [
      {
        phase: '01',
        title: 'MLOps Assessment',
        description: 'Evaluated current practices and defined target state',
        deliverables: ['Maturity assessment', 'Tool selection', 'Process design', 'Team structure']
      },
      {
        phase: '02',
        title: 'Platform Setup',
        description: 'Deployed MLflow and feature store infrastructure',
        deliverables: ['MLflow deployment', 'Feature store setup', 'Workspace configuration', 'Access controls']
      },
      {
        phase: '03',
        title: 'Pipeline Development',
        description: 'Built training and deployment pipelines',
        deliverables: ['Training pipelines', 'CI/CD integration', 'Testing framework', 'Documentation']
      },
      {
        phase: '04',
        title: 'Model Migration',
        description: 'Migrated existing models to new platform',
        deliverables: ['Model inventory', 'Migration scripts', 'Validation tests', 'Rollout plan']
      },
      {
        phase: '05',
        title: 'Monitoring & Governance',
        description: 'Implemented monitoring and model governance',
        deliverables: ['Monitoring dashboards', 'Drift detection', 'Model cards', 'Approval workflows']
      }
    ],
    keyFeatures: [
      {
        title: 'Experiment Tracking',
        description: 'All experiments logged with parameters, metrics, and artifacts',
        icon: 'Database'
      },
      {
        title: 'Model Registry',
        description: 'Centralized model versioning with stage transitions',
        icon: 'Workflow'
      },
      {
        title: 'Automated Retraining',
        description: 'Triggered retraining based on performance degradation',
        icon: 'Zap'
      },
      {
        title: 'Model Governance',
        description: 'Approval workflows and model documentation requirements',
        icon: 'Shield'
      }
    ],
    metrics: [
      { value: '70%', label: 'Faster Deployment', description: 'Reduced model deployment time' },
      { value: '100%', label: 'Reproducibility', description: 'All experiments reproducible' },
      { value: '<15min', label: 'Retraining Time', description: 'Automated retraining pipeline' },
      { value: '10+', label: 'Models in Production', description: 'Active production models' }
    ],
    challenges: [
      {
        challenge: 'Data scientists using different tools and practices',
        solution: 'Established standards with project templates and training'
      },
      {
        challenge: 'Slow feedback loop for model performance issues',
        solution: 'Implemented real-time monitoring with automated alerts'
      },
      {
        challenge: 'Feature consistency between training and serving',
        solution: 'Deployed centralized feature store with online/offline serving'
      }
    ],
    screenshots: [
      { title: 'MLflow Experiment Tracking', description: 'Experiment comparison and analysis', type: 'dashboard' },
      { title: 'Model Registry', description: 'Model versions and stage transitions', type: 'dashboard' },
      { title: 'Feature Store', description: 'Feature discovery and lineage', type: 'pipeline' },
      { title: 'Monitoring Dashboard', description: 'Model performance and drift metrics', type: 'dashboard' }
    ],
    technicalProcess: [
      {
        step: '01',
        title: 'Feature Store Implementation',
        description: 'Create centralized feature store for ML features',
        details: [
          'Define feature tables with online/offline serving',
          'Implement point-in-time correct feature lookups',
          'Set up feature freshness monitoring',
          'Enable feature reuse across models'
        ],
        codeSnippets: [
          {
            title: 'Databricks Feature Store',
            language: 'python',
            description: 'Create and populate feature tables',
            code: `from databricks.feature_store import FeatureStoreClient
from databricks.feature_store import feature_table
from pyspark.sql.functions import *

fs = FeatureStoreClient()

# Define feature computation function
def compute_member_features(member_df, claims_df):
    return (
        member_df
        .join(
            claims_df.groupBy("member_id").agg(
                count("*").alias("total_claims"),
                sum("claim_amount").alias("total_claim_amount"),
                avg("claim_amount").alias("avg_claim_amount"),
                max("claim_date").alias("last_claim_date"),
                countDistinct("provider_id").alias("unique_providers")
            ),
            "member_id",
            "left"
        )
        .withColumn("days_since_last_claim",
            datediff(current_date(), col("last_claim_date")))
        .withColumn("claim_frequency",
            col("total_claims") / greatest(
                datediff(current_date(), col("enrollment_date")) / 30, lit(1)))
    )

# Create feature table
fs.create_table(
    name="healthcare_features.member_features",
    primary_keys=["member_id"],
    timestamp_keys=["feature_timestamp"],
    df=compute_member_features(members_df, claims_df),
    description="Member-level features for ML models"
)

# Schedule feature refresh
from databricks.feature_store.online_store_spec import AzureCosmosDBSpec

# Configure online store for real-time serving
online_store_spec = AzureCosmosDBSpec(
    account_uri="https://ml-features.documents.azure.com:443/",
    read_secret_prefix="feature-store/cosmos"
)

# Publish features to online store
fs.publish_table(
    name="healthcare_features.member_features",
    online_store=online_store_spec,
    filter_condition="days_since_last_claim < 365"
)`
          }
        ]
      },
      {
        step: '02',
        title: 'MLflow Model Training Pipeline',
        description: 'Build reproducible model training with MLflow tracking',
        details: [
          'Set up MLflow experiments and runs',
          'Log parameters, metrics, and artifacts',
          'Implement hyperparameter tuning',
          'Register models to Model Registry'
        ],
        codeSnippets: [
          {
            title: 'MLflow Training Pipeline',
            language: 'python',
            description: 'End-to-end model training with MLflow',
            code: `import mlflow
from mlflow.tracking import MlflowClient
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import roc_auc_score, precision_recall_curve
import optuna

mlflow.set_experiment("/Healthcare/ReadmissionPrediction")

def train_model(params, X_train, y_train, X_val, y_val):
    with mlflow.start_run(nested=True):
        # Log parameters
        mlflow.log_params(params)
        
        # Train model
        model = XGBClassifier(
            n_estimators=params['n_estimators'],
            max_depth=params['max_depth'],
            learning_rate=params['learning_rate'],
            subsample=params['subsample'],
            colsample_bytree=params['colsample_bytree'],
            use_label_encoder=False,
            eval_metric='auc'
        )
        
        model.fit(
            X_train, y_train,
            eval_set=[(X_val, y_val)],
            early_stopping_rounds=50,
            verbose=False
        )
        
        # Evaluate and log metrics
        y_pred_proba = model.predict_proba(X_val)[:, 1]
        auc = roc_auc_score(y_val, y_pred_proba)
        
        mlflow.log_metric("auc", auc)
        mlflow.log_metric("best_iteration", model.best_iteration)
        
        # Log feature importance
        importance = dict(zip(X_train.columns, model.feature_importances_))
        mlflow.log_dict(importance, "feature_importance.json")
        
        return auc, model

# Hyperparameter optimization with Optuna
def objective(trial):
    params = {
        'n_estimators': trial.suggest_int('n_estimators', 100, 1000),
        'max_depth': trial.suggest_int('max_depth', 3, 10),
        'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
        'subsample': trial.suggest_float('subsample', 0.6, 1.0),
        'colsample_bytree': trial.suggest_float('colsample_bytree', 0.6, 1.0)
    }
    auc, _ = train_model(params, X_train, y_train, X_val, y_val)
    return auc

# Run optimization
with mlflow.start_run(run_name="hyperparameter_optimization"):
    study = optuna.create_study(direction='maximize')
    study.optimize(objective, n_trials=50)
    
    # Train final model with best params
    best_auc, best_model = train_model(
        study.best_params, X_train, y_train, X_val, y_val
    )
    
    # Log and register best model
    mlflow.xgboost.log_model(
        best_model, 
        "model",
        registered_model_name="ReadmissionRiskModel"
    )
    
    # Transition to staging
    client = MlflowClient()
    latest_version = client.get_latest_versions("ReadmissionRiskModel")[0]
    client.transition_model_version_stage(
        name="ReadmissionRiskModel",
        version=latest_version.version,
        stage="Staging"
    )`
          }
        ]
      },
      {
        step: '03',
        title: 'Model Deployment & Monitoring',
        description: 'Deploy models for batch and real-time inference',
        details: [
          'Configure model serving endpoints',
          'Implement batch inference pipelines',
          'Set up drift detection monitoring',
          'Create automated retraining triggers'
        ],
        codeSnippets: [
          {
            title: 'Model Serving & Monitoring',
            language: 'python',
            description: 'Deploy and monitor ML models',
            code: `from mlflow.deployments import get_deploy_client
from evidently.report import Report
from evidently.metrics import DataDriftTable, DatasetSummaryMetric

# Deploy model to Databricks Model Serving
client = get_deploy_client("databricks")

endpoint_config = {
    "served_models": [{
        "model_name": "ReadmissionRiskModel",
        "model_version": "3",
        "workload_size": "Small",
        "scale_to_zero_enabled": True
    }]
}

client.create_deployment(
    name="readmission-prediction-endpoint",
    config=endpoint_config
)

# Batch inference with Feature Store
from databricks.feature_store import FeatureStoreClient

fs = FeatureStoreClient()

# Score new members
predictions = fs.score_batch(
    model_uri="models:/ReadmissionRiskModel/Production",
    df=members_to_score,
    result_type="double"
)

# Save predictions
(predictions
    .withColumn("prediction_date", current_date())
    .write
    .format("delta")
    .mode("append")
    .saveAsTable("gold.readmission_predictions")
)

# Monitor for data drift
def check_drift(reference_data, current_data):
    report = Report(metrics=[
        DatasetSummaryMetric(),
        DataDriftTable()
    ])
    
    report.run(
        reference_data=reference_data.toPandas(),
        current_data=current_data.toPandas()
    )
    
    drift_results = report.as_dict()
    drift_detected = drift_results['metrics'][1]['result']['drift_share'] > 0.3
    
    if drift_detected:
        # Trigger retraining workflow
        dbutils.notebook.run(
            "/MLOps/Retrain_Readmission_Model",
            timeout_seconds=3600,
            arguments={"trigger": "drift_detected"}
        )
        
        # Send alert
        send_slack_alert(
            channel="#ml-alerts",
            message=f"Data drift detected. Retraining triggered."
        )
    
    return drift_results

# Schedule daily drift check
check_drift(reference_df, current_df)`
          }
        ]
      }
    ],
    technologies: ['MLflow', 'Databricks', 'Python', 'Feature Store', 'Delta Lake', 'Power BI', 'XGBoost', 'scikit-learn']
  }
}
