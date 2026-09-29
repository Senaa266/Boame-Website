import { motion, useReducedMotion } from 'framer-motion'
import {
  Gift,
  History,
  Home,
  MapPin,
  Recycle,
  Settings,
  User,
  Wallet,
  Wifi,
} from 'lucide-react'
import type { ReactNode } from 'react'

export type PhoneScreen = 'dashboard' | 'rewards'

const activity = [
  { label: 'Plastic Bottle (Voltic)', meta: 'Verified · 0.04 kg', time: '10:42', points: '+10' },
  { label: 'Plastic Bottle (Voltic)', meta: 'Verified · 0.05 kg', time: '09:15', points: '+15' },
]

const tabs = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: MapPin, label: 'Kiosks', id: 'kiosks' },
  { icon: Wallet, label: 'Rewards', id: 'rewards' },
  { icon: User, label: 'Profile', id: 'profile' },
]

function StatusBar() {
  return (
    <div className="relative flex items-center justify-between px-5 pt-3.5 pb-0.5">
      <span className="text-[10.5px] font-semibold text-text/70">9:41</span>
      <span className="absolute top-2 left-1/2 h-4.5 w-14 -translate-x-1/2 rounded-full bg-[#141B1A]" />
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[3.5, 5, 6.5, 8].map((h) => (
            <span
              key={h}
              className="w-[2.5px] rounded-[1px] bg-text/45"
              style={{ height: h }}
            />
          ))}
        </span>
        <Wifi className="h-2.5 w-2.5 text-text/45" />
        <span className="ml-0.5 h-2 w-3.5 rounded-[3px] border border-text/30 p-[1.5px]">
          <span className="block h-full w-3/4 rounded-[1px] bg-text/40" />
        </span>
      </span>
    </div>
  )
}

function AppHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 pt-2 pb-2.5">
      <div className="flex h-7.5 w-7.5 items-center justify-center rounded-[9px] bg-green/10 text-green">
        <Recycle className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] leading-tight font-semibold tracking-[-0.02em] text-text">
          {title}
        </p>
        <p className="mt-0.5 truncate text-[10px] text-ink-400">{sub}</p>
      </div>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line-soft bg-white text-ink-400">
        <Settings className="h-3 w-3" />
      </span>
    </div>
  )
}

function KioskMap() {
  return (
    <div className="rounded-[16px] border border-line-soft bg-white p-3 shadow-[0_1px_2px_rgba(23,51,48,0.05)]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-semibold tracking-[0.07em] text-ink-300 uppercase">
          Kiosks near you
        </p>
        <span className="rounded-full bg-green/10 px-2 py-0.5 text-[10px] font-semibold text-green">
          3 nearby
        </span>
      </div>

      <div className="relative h-[88px] overflow-hidden rounded-[11px] bg-[#EFEADF]">
        <svg
          viewBox="0 0 300 128"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-label="Map showing three BoaMe kiosks near you"
          role="img"
        >
          <rect width="300" height="128" fill="#EDE7DA" />
          <g fill="#E2DACB">
            <rect x="8" y="10" width="62" height="34" rx="4" />
            <rect x="82" y="6" width="48" height="42" rx="4" />
            <rect x="142" y="14" width="70" height="30" rx="4" />
            <rect x="224" y="8" width="64" height="40" rx="4" />
            <rect x="14" y="60" width="46" height="52" rx="4" />
            <rect x="72" y="62" width="58" height="24" rx="4" />
            <rect x="74" y="96" width="56" height="24" rx="4" />
            <rect x="146" y="58" width="40" height="58" rx="4" />
            <rect x="200" y="62" width="40" height="26" rx="4" />
            <rect x="200" y="98" width="40" height="20" rx="4" />
            <rect x="254" y="62" width="34" height="56" rx="4" />
          </g>
          <g stroke="#F7F3EA" strokeWidth="7" strokeLinecap="round">
            <path d="M0 55h300" />
            <path d="M70 0v128" />
            <path d="M190 0v128" />
            <path d="M250 0v128" />
            <path d="M0 92h300" />
          </g>
          <g stroke="#D8CFBE" strokeWidth="1" strokeDasharray="4 6">
            <path d="M0 55h300" />
            <path d="M70 0v128" />
          </g>
        </svg>

        <span className="absolute top-[26%] left-[24%] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-green shadow-[0_4px_10px_rgba(15,110,102,0.5)]">
          <Recycle className="h-2.5 w-2.5 text-cream" />
        </span>
        <span className="absolute top-[62%] left-[66%] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-green shadow-[0_4px_10px_rgba(15,110,102,0.5)]">
          <Recycle className="h-2.5 w-2.5 text-cream" />
        </span>
        <span className="absolute top-[24%] left-[84%] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-green/85 shadow-[0_4px_10px_rgba(15,110,102,0.45)]">
          <Recycle className="h-2.5 w-2.5 text-cream" />
        </span>

        <span className="absolute top-[74%] left-[38%] flex h-3.5 w-3.5 items-center justify-center">
          <span className="absolute h-3.5 w-3.5 rounded-full bg-[#2F6FED] opacity-25" />
          <span className="h-2 w-2 rounded-full border border-white bg-[#2F6FED]" />
        </span>
      </div>
    </div>
  )
}

function BalanceCard({ progress }: { progress: number }) {
  return (
    <div className="relative overflow-hidden rounded-[16px] bg-green px-3.5 py-2.5 text-cream">
      <div
        className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full border border-cream/15"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-medium text-cream/70">Points balance</p>
          <p className="mt-0.5 flex items-baseline gap-1 text-[24px] leading-none font-bold tracking-[-0.04em]">
            1,240
            <span className="text-[10px] font-semibold text-cream/60">pts</span>
          </p>
        </div>
        <span className="flex h-6.5 w-6.5 items-center justify-center rounded-[8px] bg-cream/15">
          <Wallet className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-between text-[9.5px] text-cream/70">
          <span>Airtime</span>
          <span>1,240 / 2,000</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-cream/20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-cream"
          />
        </div>
        <p className="mt-1 text-[9.5px] text-cream/60">
          760 pts to GHS 10 airtime
        </p>
      </div>
    </div>
  )
}

function ActivityList() {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-[10px] font-semibold tracking-[0.07em] text-ink-300 uppercase">
          Recent deposits
        </p>
        <span className="flex items-center gap-1 text-[10px] text-green">
          <History className="h-2.5 w-2.5" />
          All
        </span>
      </div>
      <ul className="space-y-1.5">
        {activity.map((item) => (
          <li
            key={item.label + item.time}
            className="flex items-center gap-2 rounded-[11px] border border-line-soft bg-white px-2.5 py-1.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px] bg-mist text-green">
              <Recycle className="h-3 w-3" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11.5px] font-semibold text-text">
                {item.label}
              </span>
              <span className="block truncate text-[9.5px] text-ink-400">
                {item.meta}
              </span>
            </span>
            <span className="shrink-0 text-right">
              <span className="block text-[11.5px] font-bold text-green">
                {item.points}
              </span>
              <span className="block text-[9px] text-ink-300">{item.time}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RewardsScreen() {
  const reduce = useReducedMotion()
  return (
    <>
      <AppHeader title="Rewards" sub="Spend your points" />
      <div className="space-y-2.5 px-4">
        <BalanceCard progress={62} />
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Wifi, label: 'Airtime', note: 'From 500 pts' },
            { icon: Wallet, label: 'MoMo credit', note: 'From 2,000 pts' },
            { icon: Gift, label: 'Campus discount', note: 'Partner offers' },
            { icon: Recycle, label: 'Partner rewards', note: 'From 1,000 pts' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="rounded-[14px] border border-line-soft bg-white p-2.5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-mist text-green">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <p className="mt-2 text-[11.5px] leading-tight font-semibold text-text">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[9.5px] text-ink-400">{item.note}</p>
              </div>
            )
          })}
        </div>
        {!reduce && (
          <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-mist">
            <motion.div
              className="h-full bg-green"
              animate={{ x: ['-100%', '320%'] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        )}
      </div>
    </>
  )
}

function DashboardScreen() {
  return (
    <>
      <AppHeader title="Hello, Sandra" sub="Keep your community clean" />
      <div className="space-y-2.5 px-4">
        <BalanceCard progress={62} />
        <KioskMap />
        <ActivityList />
      </div>
    </>
  )
}

function TabBar({ active = 'home' }: { active?: string }) {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-line-soft bg-white/90 px-3 pt-1.5 pb-2.5 backdrop-blur-sm">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = tab.id === active
        return (
          <div
            key={tab.id}
            className={`flex flex-1 flex-col items-center gap-0.5 py-0.5 ${
              isActive ? 'text-green' : 'text-ink-300'
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="text-[8.5px] font-medium">{tab.label}</span>
          </div>
        )
      })}
    </div>
  )
}

type Props = {
  screen?: PhoneScreen
  width?: string
  delay?: number
  float?: boolean
  children?: ReactNode
  className?: string
}

export function PhoneApp({
  screen = 'dashboard',
  width = 'max-w-[300px]',
  delay = 0,
  float = true,
  className = '',
}: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${width} ${className}`}
    >
      <div
        className="absolute -inset-8 -z-10 rounded-[56px] bg-[radial-gradient(circle,rgba(15,110,102,0.16),transparent_66%)]"
        aria-hidden="true"
      />
      <motion.div
        animate={float && !reduce ? { y: [0, -11, 0] } : { y: 0 }}
        transition={{ duration: 7.5, repeat: float && !reduce ? Infinity : 0, ease: 'easeInOut' }}
        className="rounded-[32px] border border-ink-900/15 bg-[#141B1A] p-1.5 shadow-[0_44px_90px_-42px_rgba(0,0,0,0.65)]"
      >
        <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-[25px] bg-beige">
          <StatusBar />
          {screen === 'dashboard' ? <DashboardScreen /> : <RewardsScreen />}
          <TabBar active={screen === 'dashboard' ? 'home' : 'rewards'} />
        </div>
      </motion.div>
    </motion.div>
  )
}
