import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import { SCROLL_OFFSET, scrollToSection } from '../lib/scrollToSection'
import { Wordmark } from './ui/Logo'
import type { NavLink } from '../data/content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(navLinks[0].id)

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0

      let current = navLinks[0].id
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top - SCROLL_OFFSET <= 0) {
          current = link.id
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 8
      if (atBottom) current = navLinks[navLinks.length - 1].id
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const goTo = useCallback((id: string) => {
    setOpen(false)
    scrollToSection(id)
  }, [])

  const dark = !open

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <nav
          className="shell relative mx-auto flex w-full max-w-none items-center justify-between gap-4 rounded-[19px] border border-white/20 bg-ink-900/25 px-4 py-2.5 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-[70px] backdrop-saturate-150 backdrop-contrast-110 sm:px-5"
          aria-label="Main"
        >
          <button
            type="button"
            onClick={() => goTo(navLinks[0].id)}
            className="shrink-0 rounded-lg transition-opacity hover:opacity-80"
            aria-label="BoaMe home"
          >
            <Wordmark tone={dark ? 'light' : 'dark'} />
          </button>

          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex">
            {navLinks.map((link: NavLink) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => goTo(link.id)}
                  className={`relative rounded-lg px-3 py-2 text-[14.5px] font-medium whitespace-nowrap transition-colors duration-300 ${
                    dark
                      ? isActive
                        ? 'text-cream'
                        : 'text-cream/70 hover:text-cream'
                      : isActive
                        ? 'text-green'
                        : 'text-ink-500 hover:text-green'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full ${dark ? 'bg-[#4FD3C0]' : 'bg-green'}`}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <button
              type="button"
              className="group inline-flex h-11 shrink-0 items-center gap-1.5 rounded-[14px] bg-green px-4 text-[14.5px] font-semibold whitespace-nowrap text-cream transition-all duration-300 hover:bg-green-secondary hover:shadow-[0_14px_30px_-16px_rgba(15,110,102,0.9)]"
            >
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`flex h-11 w-11 items-center justify-center rounded-[13px] border backdrop-blur-sm transition-colors lg:hidden ${
              dark
                ? 'border-white/25 bg-white/10 text-cream hover:border-white/50'
                : 'border-line bg-white/70 text-text hover:border-green/30'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto pt-22 pb-6 sm:pt-24">
              <p className="shell text-[11px] font-semibold tracking-[0.14em] text-ink-300 uppercase">
                Menu
              </p>
              <ul className="shell mt-4 flex flex-1 flex-col justify-center">
                {navLinks.map((link: NavLink, i: number) => {
                  const isActive = active === link.id
                  return (
                    <li key={link.id} className="overflow-hidden">
                      <motion.div
                        initial={{ y: 26, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.05 + i * 0.05,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => goTo(link.id)}
                          className="group flex w-full items-center gap-4 border-b border-line-soft py-3.5 text-left"
                        >
                          <span className="w-6 shrink-0 text-[11px] font-semibold text-ink-300">
                            0{i + 1}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span
                              className={`block text-[22px] leading-tight font-semibold tracking-[-0.03em] sm:text-[26px] ${
                                isActive
                                  ? 'text-green'
                                  : 'text-text transition-colors duration-300 group-hover:text-green'
                              }`}
                            >
                              {link.label}
                            </span>
                            <span className="mt-0.5 block truncate text-[13px] text-ink-400">
                              {link.hint}
                            </span>
                          </span>
                          <ArrowUpRight
                            className={`h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              isActive ? 'text-green' : 'text-ink-300'
                            }`}
                          />
                        </button>
                      </motion.div>
                    </li>
                  )
                })}
              </ul>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="shell mt-6"
              >
                <button
                  type="button"
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-[15px] bg-green text-[15px] font-semibold text-cream sm:text-base"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="mt-4 text-center text-[13px] text-ink-400">
                  Built in Ghana. Designed for impact.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
