import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { faqs as FAQS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function FAQ({ showHeading = true }: { showHeading?: boolean }) {
  const [open, setOpen] = useState<string | null>('what')

  return (
    <section id="faq" className="relative scroll-mt-24 py-16 pt-20 sm:py-20 sm:pt-24 lg:py-24 lg:pt-28">
      <div className="shell">
        <div
          className={`grid gap-10 sm:gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16 ${
            showHeading ? '' : 'max-w-4xl mx-auto'
          }`}
        >
          {showHeading && (
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="FAQ"
                pill={false}
                title="Questions people actually ask."
                body="If something is still unclear, send it through the partnership form and we will answer directly."
              />
            </div>
          )}

          <ul className="divide-y divide-line-soft border-y border-line-soft">
            {FAQS.map((faq, i) => {
              const isOpen = open === faq.id
              return (
                <li key={faq.id}>
                  <Reveal delay={Math.min(i, 4) * 0.05} y={14}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${faq.id}`}
                        className="group flex w-full items-start justify-between gap-4 py-5 text-left sm:gap-6 sm:py-6"
                      >
                        <span
                          className={`text-[17px] leading-snug font-semibold tracking-[-0.02em] transition-colors duration-300 sm:text-[19px] ${
                            isOpen ? 'text-green' : 'text-text group-hover:text-green'
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                            isOpen
                              ? 'rotate-45 border-green bg-green text-cream'
                              : 'border-line text-ink-400 group-hover:border-green/40 group-hover:text-green'
                          }`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </h3>

                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pr-4 pb-6 text-[15px] sm:pr-10 sm:pb-7 leading-[1.7] text-ink-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
