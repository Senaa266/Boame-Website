import { motion } from 'framer-motion'
import { Hash, Nfc, Ticket } from 'lucide-react'
import { accessMethods } from '../data/content'
import { stagger } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

const icons = [Nfc, Hash, Ticket]
const images = [
  '/images/access/rfid.jpg',
  '/images/access/phone.jpg',
  '/images/access/anonymous.jpg',
]
const alts = [
  'A card reader waiting for a tap',
  'A hand holding a phone',
  'A container collecting plastic bottles for recycling',
]

export function InclusiveAccess() {
  return (
    <section id="access" className="relative scroll-mt-24 py-16 pt-20 sm:py-20 sm:pt-24 lg:py-24 lg:pt-28">
      <div className="shell">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Inclusive access"
            pill={false}
            title={
              <>
                You don&rsquo;t need a smartphone
                <br />
                <span className="text-green">to make an impact.</span>
              </>
            }
            body="Three ways to deposit, and every one of them earns a reward."
          />
        </div>

        <motion.ul
          variants={stagger(0.12, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3"
        >
          {accessMethods.map((method, index) => {
            const Icon = icons[index]
            return (
              <motion.li
                key={method.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group flex flex-col overflow-hidden rounded-[20px] border sm:rounded-[24px] border-line-soft bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_30px_56px_-40px_rgba(23,51,48,0.65)]"
              >
                <div className="relative aspect-3/2 overflow-hidden bg-mist">
                  <img
                    src={images[index]}
                    alt={alts[index]}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-900/55 via-ink-900/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/90 text-green shadow-[0_10px_24px_-14px_rgba(23,51,48,0.9)] backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="absolute bottom-4 left-4 text-[11.5px] font-semibold tracking-[0.1em] text-white/90 uppercase">
                    {method.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[20px] leading-tight font-semibold tracking-[-0.03em] text-text sm:text-[22px]">
                    {method.headline}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-500">
                    {method.body}
                  </p>

                  <ol className="mt-4 space-y-2 border-t border-line-soft pt-4 sm:mt-5 sm:pt-5">
                    {method.steps.map((step, i) => (
                      <li
                        key={step}
                        className="flex items-center gap-3 text-[14px] text-ink-700"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist text-[11px] font-bold text-green">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
