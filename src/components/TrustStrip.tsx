import { Database, Gift, Recycle, Users } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const points = [
  { icon: Recycle, label: 'Smart collection' },
  { icon: Gift, label: 'Inclusive rewards' },
  { icon: Database, label: 'Recovery data' },
  { icon: Users, label: 'Partner-funded impact' },
]

export function TrustStrip() {
  return (
    <section className="bg-green">
      <div className="shell py-7 sm:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <Reveal>
            <p className="text-[19px] leading-tight font-semibold tracking-[-0.03em] text-cream sm:text-[22px]">
              Built for Ghana.{' '}
              <span className="text-[#4FD3C0]">Designed to scale.</span>
            </p>
          </Reveal>

          <Reveal delay={0.12} className="lg:flex-1">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:flex-wrap sm:justify-end sm:gap-x-7">
              {points.map((point) => {
                const Icon = point.icon
                return (
                  <li
                    key={point.label}
                    className="flex items-center gap-2 text-[13.5px] font-medium text-cream/85 sm:text-[14.5px]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-cream/15 text-cream">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {point.label}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
