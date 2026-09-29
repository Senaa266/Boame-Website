import { motion } from 'framer-motion'
import { navLinks } from '../data/content'
import { scrollToSection } from '../lib/scrollToSection'
import { Wordmark } from './ui/Logo'

const social = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line-soft bg-cream pt-12 pb-7 sm:pt-16 sm:pb-8">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(15,110,102,0.07),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              aria-label="Back to top"
              className="inline-block"
            >
              <Wordmark />
            </button>
            <p className="mt-6 max-w-xs text-[16px] font-semibold tracking-[-0.02em] text-text">
              Turn Waste Into Value.
            </p>
            <p className="mt-3 max-w-xs text-[14.5px] leading-[1.7] text-ink-500">
              A smart plastic-recovery and reward ecosystem built in Ghana.
            </p>
          </div>

          <FooterCol title="Navigation">
            {navLinks.map((link) => (
              <FooterLink key={link.id} id={link.id}>
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Social">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14.5px] text-ink-500 transition-colors duration-300 hover:text-green"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line-soft pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13.5px] text-ink-400">
            &copy; 2026 BoaMe. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[13.5px] text-ink-400"
          >
            Built in Ghana. Designed for impact.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[12px] font-semibold tracking-[0.1em] text-ink-300 uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => scrollToSection(id)}
        className="text-[14.5px] text-ink-500 transition-colors duration-300 hover:text-green"
      >
        {children}
      </button>
    </li>
  )
}
