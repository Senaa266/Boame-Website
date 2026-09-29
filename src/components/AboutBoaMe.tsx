import { motion, type Variants } from 'framer-motion'
import {
  BrainCircuit,
  Cloud,
  Coins,
  Database,
  ScanLine,
  Smartphone,
} from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { stagger } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'
import { PhoneApp } from './product/PhoneApp'
import { useReducedMotion } from 'framer-motion'

const pillars = [
  {
    icon: ScanLine,
    title: 'Smart kiosks',
    body: 'A reverse-vending point that verifies every deposit before it counts.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligent classification',
    body: 'The kiosk identifies what was inserted, so recovery data is real.',
  },
  {
    icon: Coins,
    title: 'Digital rewards',
    body: 'Verified deposits become airtime, mobile money credit or discounts.',
  },
  {
    icon: Cloud,
    title: 'Cloud technology',
    body: 'Deposits, users and trends sync into one backend.',
  },
  {
    icon: Smartphone,
    title: 'Mobile experience',
    body: 'An app for balances, history and nearby kiosks, without being required.',
  },
  {
    icon: Database,
    title: 'Recovery data',
    body: 'Weight and deposit records partners can actually act on.',
  },
]

const pointIn: Variants = {
  hidden: { opacity: 0, x: -22, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function AboutBoaMe() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-cream/70 py-16 pt-20 sm:py-20 sm:pt-24 lg:py-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green/15 to-transparent"
        aria-hidden="true"
      />
      <div className="shell">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="What is BoaMe"
              pill={false}
              title={
                <>
                  Meet{' '}
                  <span className="text-green">BoaMe.</span>
                </>
              }
              body="A smarter way to recover plastic, reward participation, and turn every deposit into measurable impact."
            />

            <motion.ul
              variants={stagger(0.18, 0.09)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-10 grid gap-x-7 gap-y-6 sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7"
            >
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <motion.li
                    key={pillar.title}
                    variants={pointIn}
                    className="group flex gap-4"
                  >
                    <span className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-mist text-green transition-colors duration-300 group-hover:bg-green group-hover:text-cream">
                      <motion.span
                        initial={
                          reduce
                            ? false
                            : { scale: 0.4, rotate: -25, opacity: 0 }
                        }
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.24 + i * 0.09,
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </motion.span>
                    </span>
                    <span>
                      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-text">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-500">
                        {pillar.body}
                      </p>
                    </span>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto flex max-w-[300px] items-center justify-center">
              <div className="absolute inset-x-6 inset-y-10 rounded-[40px] bg-linear-to-b from-mist/80 to-transparent" />
              <PhoneApp
                screen="dashboard"
                delay={0.3}
                float={!reduce}
                width="max-w-none"
                className="relative"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
