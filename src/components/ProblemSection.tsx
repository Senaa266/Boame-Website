import { motion, type Variants } from 'framer-motion'
import { ArrowRight, CloudRain, Droplets, Factory, Waves } from 'lucide-react'
import { journeyStages } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'

const icons = [Droplets, Factory, CloudRain, Waves]

const stageMedia: Record<string, { src: string; alt: string }> = {
  gutters: {
    src: '/images/problem/gutters.jpg',
    alt: 'Plastic litter covering a city street between buildings',
  },
  drains: {
    src: '/images/problem/drains.jpg',
    alt: 'A metal drain grate choked with leaves and debris',
  },
  flooding: {
    src: '/images/problem/flooding.jpg',
    alt: 'A flooded street with standing rainwater',
  },
  community: {
    src: '/images/problem/community.jpg',
    alt: 'Community members collecting plastic bottles during a clean-up',
  },
}

const cardIn: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const listIn: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

export function ProblemSection() {
  return (
    <section id="problem" className="relative scroll-mt-24 py-14 pt-18 sm:py-16 sm:pt-20 lg:py-20 lg:pt-24">
      <div className="shell">
        <SectionHeading
          eyebrow="The problem"
          pill={false}
          size="compact"
          title={
            <>
              Plastic doesn&rsquo;t disappear.{' '}
              <span className="text-ink-400">It moves.</span>
            </>
          }
          body="It collects where people walk, silts the drainage systems built to protect them, and ends up in gutters, drains, rivers and coastal waters. The problem is not awareness. It is that recovery has never been worth much to the person doing it."
        />

        <motion.ol
          variants={listIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4"
        >
          {journeyStages.map((stage, i) => {
            const Icon = icons[i]
            const media = stageMedia[stage.id]
            const isLast = i === journeyStages.length - 1
            return (
              <motion.li
                key={stage.id}
                variants={cardIn}
                className="group relative"
              >
                <div className="relative flex h-full min-h-[310px] flex-col justify-end overflow-hidden rounded-[22px] border border-ink-900/10 transition-all duration-400 group-hover:-translate-y-1 group-hover:border-green/30 group-hover:shadow-[0_28px_55px_-30px_rgba(23,51,48,0.7)]">
                  {media && (
                    <img
                      src={media.src}
                      alt={media.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                  )}

                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/88 via-black/55 to-black/20"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(15,110,102,0.35),transparent_62%)]"
                    aria-hidden="true"
                  />

                  <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 py-1 pr-3 pl-2.5 text-[10.5px] font-bold tracking-[0.12em] text-cream backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4FD3C0]" />
                    0{i + 1}
                  </span>

                  <div className="relative z-10 p-5">
                    <span
                      className={`mb-3.5 flex h-9 w-9 items-center justify-center rounded-[11px] border backdrop-blur-md ${
                        isLast
                          ? 'border-[#4FD3C0]/45 bg-[#4FD3C0]/20 text-cream'
                          : 'border-white/25 bg-white/15 text-cream'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-[17.5px] leading-tight font-semibold tracking-[-0.02em] text-cream [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                      {stage.label}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-cream/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                      {stage.body}
                    </p>
                  </div>
                </div>

                {i < journeyStages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -right-3.5 z-20 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-green text-cream shadow-[0_6px_16px_-6px_rgba(15,110,102,0.9)] ring-4 ring-beige lg:flex"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
