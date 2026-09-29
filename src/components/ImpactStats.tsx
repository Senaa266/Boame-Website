import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { BadgeCheck, Handshake, MapPin, Package, Recycle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { impactStats } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const icons: LucideIcon[] = [Recycle, Package, MapPin, Handshake]

function Counter({
  value,
  suffix,
  run,
}: {
  value: number
  suffix: string
  run: boolean
}) {
  const [display, setDisplay] = useState(0)
  const reduce = useReducedMotion()
  const shown = reduce || !run ? value : display

  useEffect(() => {
    if (!run || reduce) return
    const controls = animate(0, value, {
      duration: 1.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [run, value, reduce])

  return (
    <span className="tabular-nums">
      {shown.toLocaleString()}
      {suffix}
    </span>
  )
}

function Sparkline({ points, run }: { points: number[]; run: boolean }) {
  const reduce = useReducedMotion()
  const max = Math.max(...points)
  const min = Math.min(...points)
  const span = max - min || 1
  const w = 100
  const h = 30
  const step = w / (points.length - 1)
  const path = points
    .map((p, i) => {
      const x = i * step
      const y = h - ((p - min) / span) * (h - 5) - 2.5
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
  const area = `${path} L${w} ${h} L0 ${h} Z`

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="mt-5 h-9 w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`spark-${points[0]}-${points.length}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f6e66" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0f6e66" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#spark-${points[0]}-${points.length})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: run ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#0f6e66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: run ? 1 : 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}

export function ImpactStats({ showHeading = true }: { showHeading?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="relative scroll-mt-24 py-16 pt-20 sm:py-20 sm:pt-24 lg:py-24 lg:pt-28">
      <div className="shell">
        {showHeading && (
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Impact"
              pill={false}
              title={
                <>
                  Measure the impact.
                  <br />
                  <span className="text-green">Not just the intention.</span>
                </>
              }
              body="Every verified deposit produces a record: what was recovered, how much it weighed, where it happened and who funded the reward."
            />
          </div>
        )}

        <div
          ref={ref}
          className={`grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 ${showHeading ? 'mt-10' : ''}`}
        >
          {impactStats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={stat.label} delay={i * 0.08} y={18}>
                <div className="group relative h-full overflow-hidden rounded-[22px] border border-line-soft bg-white p-5 transition-all sm:p-6 duration-400 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_28px_54px_-40px_rgba(23,51,48,0.65)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-mist text-green transition-colors duration-400 group-hover:bg-green group-hover:text-cream">
                    <Icon className="h-5 w-5" />
                  </span>

                  <p className="mt-5 text-[36px] leading-none font-bold tracking-[-0.04em] text-text sm:text-[42px]">
                    <Counter value={stat.value} suffix={stat.suffix} run={inView} />
                  </p>
                  <p className="mt-2.5 text-[15px] font-semibold tracking-[-0.015em] text-text">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-ink-400">{stat.note}</p>

                  <Sparkline points={stat.trend} run={inView} />
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-[13px] leading-[1.6] text-ink-400">
            <BadgeCheck className="h-4 w-4 shrink-0 text-green/60" />
            Demo figures shown for illustration only. No recovery data has been claimed
            yet and real numbers replace these as partner kiosks come online.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
