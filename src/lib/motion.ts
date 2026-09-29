import type { Variants } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

export const stagger = (
  delayChildren = 0,
  staggerChildren = 0.08,
): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
})
