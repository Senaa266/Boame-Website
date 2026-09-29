import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollManager } from './components/ScrollManager'
import { Home } from './pages/Home'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-beige">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:h-11 focus:rounded-[12px] focus:bg-green focus:px-5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />
      <ScrollManager />

      <div id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  )
}
