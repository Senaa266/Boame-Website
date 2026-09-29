import { motion, useReducedMotion } from 'framer-motion'
import { Check, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { scrollToSection } from '../lib/scrollToSection'
import { PhoneApp } from './product/PhoneApp'

// Photo: "Assorted garbage bottles on sandy surface" by John Cameron,
// Unsplash License. Swap this file (or the constant) for a Ghana shot later.
export const HERO_BG = '/images/hero-bg.jpg'
export const HERO_PHOTO_CREDIT =
  'Photo: John Cameron / Unsplash'

const floatCards = [
  {
    id: 'detected',
    icon: Check,
    title: 'Plastic detected',
    line: 'Bottle verified',
    className: 'left-[-4%] top-[13%] lg:left-[-14%]',
    delay: 1.15,
  },
  {
    id: 'points',
    icon: TrendingUp,
    title: '+10 points',
    line: 'Deposit completed',
    className: 'right-[-4%] top-[38%] lg:right-[-12%]',
    delay: 1.35,
  },
  {
    id: 'data',
    icon: TrendingUp,
    title: 'Kiosk online',
    line: 'Syncing recovery data',
    className: 'left-[-2%] bottom-[13%] hidden lg:left-[-8%] lg:block',
    delay: 1.55,
  },
]

function FloatingCard({
  card,
  float,
}: {
  card: (typeof floatCards)[number]
  float: boolean
}) {
  const Icon = card.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: card.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 ${card.className}`}
    >
      <motion.div
        animate={float ? { y: [0, -9, 0] } : { y: 0 }}
        transition={{
          duration: 6,
          repeat: float ? Infinity : 0,
          ease: 'easeInOut',
          delay: card.delay,
        }}
        className="flex items-center gap-3 rounded-[18px] border border-white/70 bg-white/92 p-3.5 pr-5 shadow-[0_18px_40px_-26px_rgba(23,51,48,0.65)] backdrop-blur-md sm:gap-3.5 sm:p-4 sm:pr-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-green/10 text-green sm:h-10 sm:w-10">
          <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold text-text sm:text-[14px]">
            {card.title}
          </span>
          <span className="mt-0.5 text-[11px] text-ink-400 sm:text-xs">
            {card.line}
          </span>
        </span>
      </motion.div>
    </motion.div>
  )
}

function ValueWord() {
  const letters = 'Value'.split('')
  const reduce = useReducedMotion()
  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { y: '110%', opacity: 0, rotate: 6 }}
          animate={{ y: '0%', opacity: 1, rotate: 0 }}
          transition={{
            delay: 0.72 + i * 0.06,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block text-[#4FD3C0] will-change-transform [text-shadow:0_0_16px_rgba(63,196,179,0.40)]"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const float = !reduce
  const [bgFailed, setBgFailed] = useState(false)

  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
      <div
        className="absolute inset-0 -z-20 bg-[#0C1A18]"
        aria-hidden="true"
      />

      {!bgFailed && (
        <>
          <img
            src={HERO_BG}
            alt=""
            aria-hidden="true"
            onError={() => setBgFailed(true)}
            className="pointer-events-none absolute h-px w-px opacity-0"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 -z-20 bg-cover bg-center saturate-[1.15] contrast-[1.08]"
            style={{ backgroundImage: `url(${HERO_BG})` }}
            aria-hidden="true"
          />
        </>
      )}

      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/82 via-black/48 to-black/12"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/60 via-transparent to-black/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_42%,rgba(15,110,102,0.30),transparent_58%)]"
        aria-hidden="true"
      />
      <div
        className="grain pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="text-[40px] leading-[0.98] font-bold tracking-[-0.04em] text-cream [text-shadow:0_2px_30px_rgba(0,0,0,0.45)] xs:text-[46px] sm:text-[62px] lg:text-[82px]"
            >
              Turn Waste
              <br />
              Into <ValueWord />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="mt-7 max-w-xl text-[18px] leading-[1.65] text-cream/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.5)] sm:text-[21px]"
            >
              BoaMe makes plastic recovery rewarding for people and measurable for
              businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.44 }}
              className="mt-4 max-w-xl text-[15px] leading-[1.7] text-cream/70 [text-shadow:0_1px_18px_rgba(0,0,0,0.5)] sm:text-base"
            >
              A smart waste-to-reward ecosystem helping communities recover plastic
              while creating meaningful recovery data for the partners that fund the
              loop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => scrollToSection('how-it-works')}
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-[15px] bg-green px-7 text-base font-semibold text-cream shadow-[0_16px_34px_-14px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-green-secondary hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.75)]"
              >
                Explore BoaMe
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="inline-flex h-14 items-center justify-center rounded-[15px] border border-cream/35 bg-white/10 px-7 text-base font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream/70 hover:bg-white/20"
              >
                Learn More
              </button>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[272px] sm:max-w-[286px] lg:max-w-[292px]"
            >
              <PhoneApp screen="dashboard" delay={0.55} float={float} width="max-w-none" />

              {floatCards.map((card) => (
                <FloatingCard key={card.id} card={card} float={float} />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-8 text-right text-[11px] text-cream/45"
        >
          {HERO_PHOTO_CREDIT}
        </motion.p>
      </div>
    </section>
  )
}
