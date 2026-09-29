import { motion } from 'framer-motion'
import { team } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'

export function Team({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="team" className="relative scroll-mt-24 overflow-hidden py-16 pt-20 sm:py-20 sm:pt-24 lg:py-24 lg:pt-28">
      <div className="shell">
        {showHeading && (
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="center"
              eyebrow="The team"
              pill={false}
              title={
                <>
                  Built by young engineers
                  <br className="hidden sm:block" /> in Ghana.
                </>
              }
              body="BoaMe was designed and built by a seven-member team from Ghana Communication Technology University, working from problem research through to a working prototype."
            />
          </div>
        )}

        <ul
          className={`flex flex-wrap justify-center gap-x-5 gap-y-9 sm:gap-x-6 ${
            showHeading ? 'mt-12 lg:mt-14' : ''
          }`}
        >
          {team.map((member, i) => (
            <motion.li
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group w-full xs:w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-[20px] bg-mist ring-1 ring-line-soft transition-all duration-500 group-hover:-translate-y-1.5 group-hover:ring-green/30 group-hover:shadow-[0_34px_62px_-42px_rgba(23,51,48,0.7)] sm:rounded-[22px]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-900/45 via-ink-900/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="mt-3.5 px-0.5 sm:mt-4">
                <p className="text-[14.5px] leading-snug font-semibold tracking-[-0.02em] text-text sm:text-[15px]">
                  {member.name}
                </p>
                <span className="mt-2 block h-[2px] w-7 origin-left scale-x-0 rounded-full bg-green transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
