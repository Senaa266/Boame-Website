import { motion } from 'framer-motion'
import { AboutBoaMe } from '../components/AboutBoaMe'
import { FAQ } from '../components/FAQ'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { ImpactStats } from '../components/ImpactStats'
import { InclusiveAccess } from '../components/InclusiveAccess'
import { ProblemSection } from '../components/ProblemSection'
import { Team } from '../components/Team'
import { TrustStrip } from '../components/TrustStrip'

export function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <AboutBoaMe />
      <HowItWorks id="how-it-works" />
      <InclusiveAccess />
      <ImpactStats />
      <Team />
      <FAQ />
    </motion.main>
  )
}
