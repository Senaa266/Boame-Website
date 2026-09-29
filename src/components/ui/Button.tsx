import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light'
type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 will-change-transform disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-green text-cream shadow-[0_10px_24px_-12px_rgba(15,110,102,0.9)] hover:bg-green-secondary hover:shadow-[0_16px_32px_-14px_rgba(15,110,102,0.85)]',
  secondary:
    'border border-green/25 bg-white/70 text-green backdrop-blur-sm hover:border-green/50 hover:bg-white',
  ghost: 'text-green hover:bg-green/8',
  light: 'bg-cream text-green hover:bg-white',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-base',
}

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
  arrow?: boolean
}

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
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
      )}
    </>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  arrow,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  )
}

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  arrow,
  state,
}: CommonProps & { to: string; state?: unknown }) {
  return (
    <Link
      to={to}
      state={state}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  )
}

export function ButtonLinkAnchor({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  arrow,
}: CommonProps & { href: string }) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </a>
  )
}
