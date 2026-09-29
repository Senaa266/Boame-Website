import logoMark from '../../assets/logo_boame.png'

type Tone = 'dark' | 'light'

type WordmarkProps = {
  tone?: Tone
  className?: string
  markClass?: string
  tagline?: boolean
}

export function Wordmark({
  tone = 'dark',
  className = '',
  markClass = '',
  tagline = true,
}: WordmarkProps) {
  const main = tone === 'dark' ? 'text-text' : 'text-cream'
  const sub = tone === 'dark' ? 'text-ink-400' : 'text-cream/55'

  return (
    <span className={`flex items-center gap-2.5 text-left ${className}`}>
      <img
        src={logoMark}
        alt="BoaMe"
        width={40}
        height={40}
        className={`h-9 w-9 shrink-0 object-contain ${markClass}`}
      />
      <span className="flex min-w-0 flex-col items-start text-left leading-none">
        <span className={`text-[19px] font-bold tracking-[-0.03em] ${main}`}>
          BoaMe
        </span>
        {tagline && (
          <span
            className={`mt-1 hidden self-start text-[9.5px] font-medium tracking-[0.13em] whitespace-nowrap uppercase sm:block ${sub}`}
          >
            Turn waste into value
          </span>
        )}
      </span>
    </span>
  )
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <img
      src={logoMark}
      alt="BoaMe"
      width={40}
      height={40}
      className={`h-9 w-9 object-contain ${className}`}
    />
  )
}
