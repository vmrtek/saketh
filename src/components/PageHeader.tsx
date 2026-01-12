import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-teal-500 mx-auto rounded-full mt-6" />
    </motion.div>
  )
}
