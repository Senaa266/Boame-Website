export const SCROLL_OFFSET = 96

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET,
  )
  window.scrollTo({ top, behavior: 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}
