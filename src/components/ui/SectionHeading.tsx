import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  delay?: number
  pill?: boolean
  size?: 'default' | 'compact'
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  tone = 'light',
  className = '',
  delay = 0,
  pill = true,
  size = 'default',
}: Props) {
  const centered = align === 'center'
  return (
    <Reveal
      delay={delay}
      className={`${centered ? 'mx-auto text-center' : ''} ${
        size === 'compact' ? 'max-w-4xl' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        pill ? (
          <div className={`mb-5 flex ${centered ? 'justify-center' : ''}`}>
            <span
              className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[13px] font-semibold ${
                tone === 'dark'
                  ? 'border-cream/25 text-cream/85'
                  : 'border-green/20 bg-white/60 text-green'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
              {eyebrow}
            </span>
          </div>
        ) : (
          <p
            className={`mb-4 text-[12px] font-semibold tracking-[0.14em] uppercase ${
              tone === 'dark' ? 'text-cream/70' : 'text-ink-400'
            }`}
          >
            {eyebrow}
          </p>
        )
      )}
      <h2
        className={`font-bold tracking-[-0.035em] ${
          size === 'compact'
            ? 'text-[27px] leading-[1.12] sm:text-[33px] lg:text-[40px]'
            : 'text-[34px] leading-[1.08] sm:text-[44px] lg:text-[56px]'
        } ${tone === 'dark' ? 'text-cream' : 'text-text'}`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`${
            size === 'compact' ? 'mt-4 text-[15.5px] leading-[1.65] sm:text-[17px]' : 'mt-6 text-[17px] leading-[1.7] sm:text-[19px]'
          } ${tone === 'dark' ? 'text-cream/75' : 'text-ink-500'}`}
        >
          {body}
        </p>
      )}
    </Reveal>
  )
}
