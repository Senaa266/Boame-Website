import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Variants } from 'framer-motion'
import { howSteps } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const AUTO_MS = 4600

const stepImages: Record<string, string> = {
  deposit: '/images/how/deposit.jpg',
  detect: '/images/how/detect.jpg',
  record: '/images/how/record.jpg',
  earn: '/images/how/earn.jpg',
}

const stepIn: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HowItWorks({ id }: { id?: string }) {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const t = window.setInterval(
      () => setActive((a) => (a + 1) % howSteps.length),
      AUTO_MS,
    )
    return () => window.clearInterval(t)
  }, [reduce])

  const step = howSteps[active]
  const src = stepImages[step.id] ?? stepImages.deposit

  return (
    <section id={id} className="relative scroll-mt-24 py-16 pt-20 sm:py-20 sm:pt-24 lg:py-24 lg:pt-28">
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          pill={false}
          title={
            <>
              Four simple steps.
              <br />
              <span className="text-green">That is the whole thing.</span>
            </>
          }
          body="Throw in your plastic, see what it is worth, and get your reward. No sorting, no weighing, no guessing — just drop it in and let the bin do the rest."
          align="center"
        />

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:mt-14 lg:grid-cols-[1fr_0.86fr] lg:gap-14">
          <motion.ol
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-2.5"
          >
            {howSteps.map((s, i) => {
              const isActive = i === active
              return (
                <motion.li
                  key={s.id}
                  variants={stepIn}
                  className={`relative flex items-start gap-4 rounded-[20px] border p-4 transition-all duration-700 sm:gap-5 sm:p-6 ${
                    isActive
                      ? 'border-green/20 bg-white shadow-[0_24px_50px_-38px_rgba(23,51,48,0.7)]'
                      : 'border-transparent'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] text-[14px] font-bold sm:h-11 sm:w-11 transition-all duration-700 ${
                      isActive
                        ? 'bg-green text-cream shadow-[0_10px_22px_-12px_rgba(15,110,102,0.95)]'
                        : 'bg-mist text-green/60'
                    }`}
                  >
                    {s.number}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className={`text-[18px] font-semibold tracking-[-0.025em] transition-colors duration-500 sm:text-[21px] ${
                          isActive ? 'text-text' : 'text-ink-400'
                        }`}
                      >
                        {s.title}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="rounded-full bg-green/10 px-2.5 py-1 text-[11px] font-semibold text-green"
                        >
                          {s.metric}
                        </motion.span>
                      )}
                    </span>

                    <AnimatePresence initial={false} mode="wait">
                      {isActive ? (
                        <motion.span
                          key="detail"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="block overflow-hidden"
                        >
                          <span className="mt-2.5 block text-[15px] leading-[1.65] text-ink-500">
                            {s.detail}
                          </span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="short"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="mt-1.5 block text-[14.5px] text-ink-400"
                        >
                          {s.body}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </motion.li>
              )
            })}
          </motion.ol>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[28px] border border-line-soft bg-white shadow-[0_40px_90px_-60px_rgba(23,51,48,0.6)]">
                <div className="relative aspect-4/5 overflow-hidden bg-ink-900 sm:aspect-4/3">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <motion.div
                        className="h-full w-full"
                        animate={reduce ? undefined : { scale: [1, 1.08] }}
                        transition={{
                          duration: 16,
                          ease: 'linear',
                          repeat: Infinity,
                          repeatType: 'mirror',
                        }}
                      >
                        <img
                          src={src}
                          alt={`${step.title} — ${step.body}`}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062220]/92 via-[#062220]/25 to-[#062220]/45"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 top-0 p-4 sm:p-5">
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
                      {step.number}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[30px]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 max-w-[42ch] text-[14.5px] leading-[1.6] text-white/75">
                          {step.body}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="relative border-t border-line-soft bg-white p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold tracking-[0.14em] text-ink-400 uppercase">
                      Step{' '}
                      <span className="text-green">
                        {String(active + 1).padStart(2, '0')}
                      </span>
                      <span className="text-ink-300"> / {String(howSteps.length).padStart(2, '0')}</span>
                    </span>
                  </div>

                  <div className="mt-2.5 h-[26px] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={step.metric}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-[19px] font-semibold tracking-[-0.02em] text-text"
                      >
                        {step.metric}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    {howSteps.map((s, i) => (
                      <span
                        key={s.id}
                        className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-line-soft"
                      >
                        {i < active && (
                          <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: 'left' }}
                            className="absolute inset-0 rounded-full bg-green/45"
                          />
                        )}
                        {i === active && (
                          <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              duration: reduce ? 0.001 : AUTO_MS / 1000,
                              ease: 'linear',
                            }}
                            style={{ transformOrigin: 'left' }}
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-green to-[#3FA99B]"
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
