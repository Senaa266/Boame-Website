export type Stat = {
  value: number
  suffix: string
  label: string
  note: string
  trend: number[]
}

export const impactStats: Stat[] = [
  {
    value: 12480,
    suffix: ' kg',
    label: 'Plastic recovered',
    note: 'Verified weight across all partner kiosks',
    trend: [22, 30, 27, 41, 38, 52, 61, 74],
  },
  {
    value: 18640,
    suffix: '',
    label: 'Deposits processed',
    note: 'Confirmed deposits from verified users',
    trend: [18, 24, 35, 33, 44, 49, 58, 66],
  },
  {
    value: 24,
    suffix: '',
    label: 'Kiosks active',
    note: 'Connected units reporting live status',
    trend: [10, 12, 15, 15, 18, 20, 22, 24],
  },
  {
    value: 9,
    suffix: '',
    label: 'Partners',
    note: 'Producers, telecoms and institutions',
    trend: [2, 3, 3, 5, 6, 7, 8, 9],
  },
]

export const journeyStages = [
  {
    id: 'gutters',
    label: 'Gutters and streets',
    body: 'Bottles and sachets collect in the places people walk every day.',
  },
  {
    id: 'drains',
    label: 'Blocked drains',
    body: 'Plastic silts drainage systems and stops rainwater from flowing away.',
  },
  {
    id: 'flooding',
    label: 'Flooding',
    body: 'Water backs up into homes, roads and market spaces after every heavy rain.',
  },
  {
    id: 'community',
    label: 'Community impact',
    body: 'Clean-up costs rise, informal waste pickers carry the risk, and recovery stays low.',
  },
]

export type Step = {
  id: string
  number: string
  title: string
  body: string
  detail: string
  metric: string
}

export const howSteps: Step[] = [
  {
    id: 'deposit',
    number: '01',
    title: 'Drop the bottle in',
    body: 'Put your bottle into a BoaMe bin.',
    detail:
      'Bottle, sachet or container â€” just drop it into the slot. You do not need to sort it, weigh it, or do anything else.',
    metric: 'Slot open',
  },
  {
    id: 'detect',
    number: '02',
    title: 'It gets recorded',
    body: 'The bin reads what you dropped in and saves it to your account.',
    detail:
      'A small camera and a scale do the hard part for you. Once the bin knows what it is, it adds it straight to your account.',
    metric: 'Saved to your account',
  },
  {
    id: 'record',
    number: '03',
    title: 'Points add up',
    body: 'Every bottle you drop adds a bit more to your total.',
    detail:
      'Each drop is worth a small number of points. Keep going and your total keeps climbing, and you can check it any time.',
    metric: 'Points climbing',
  },
  {
    id: 'earn',
    number: '04',
    title: 'Get rewarded',
    body: 'Once you have enough, turn your points into something you can use.',
    detail:
      'Swap your points for airtime, mobile money, or a discount from one of our partners.',
    metric: 'Points turned into rewards',
  },
]

export type AccessMethod = {
  id: string
  label: string
  headline: string
  body: string
  steps: string[]
}

export const accessMethods: AccessMethod[] = [
  {
    id: 'rfid',
    label: 'RFID',
    headline: 'Tap and go.',
    body: 'Carry a BoaMe RFID card and the kiosk identifies you with a single tap.',
    steps: ['Tap card on reader', 'Deposit plastic', 'Points add to your card'],
  },
  {
    id: 'phone',
    label: 'Phone number',
    headline: 'Enter your number.',
    body: 'No app and no data bundle. Type your phone number on the kiosk keypad and points follow it.',
    steps: ['Enter phone number', 'Deposit plastic', 'Points on your number'],
  },
  {
    id: 'anonymous',
    label: 'Anonymous',
    headline: 'Just deposit.',
    body: 'Recover plastic without any account, and receive a printed or on-screen reward where supported.',
    steps: ['Deposit plastic', 'Machine verifies item', 'Claim on-site reward'],
  },
]

export type Member = {
  name: string
  image: string
}

export const team: Member[] = [
  { name: 'Sandra Ama Appiah', image: '/images/team/sandra.jpg' },
  { name: 'Paulina Dansoa Adomako', image: '/images/team/paulina.jpg' },
  { name: 'Emmanuella Lodonu', image: '/images/team/emmanuella.jpg' },
  {
    name: 'Priscilla Akosua Agyapong Boatemaa',
    image: '/images/team/priscilla.jpg',
  },
  { name: 'Amanda Mirekuwaa Agyare', image: '/images/team/amanda.jpg' },
  { name: 'Sena Belinda Yekple', image: '/images/team/sena.jpg' },
  { name: 'Elikplim Kofi Nyahe', image: '/images/team/elikplim.jpg' },
]

export type Faq = { id: string; question: string; answer: string }

export const faqs: Faq[] = [
  {
    id: 'what',
    question: 'What is BoaMe?',
    answer:
      'BoaMe is a waste-to-reward ecosystem built around smart reverse-vending kiosks. People deposit plastic waste, the kiosk verifies what was deposited, and the deposit becomes reward points and recovery data.',
  },
  {
    id: 'how',
    question: 'How does the BoaMe kiosk work?',
    answer:
      'You deposit a plastic item into the intake slot. A camera module and load cell identify and verify the deposit, the firmware decides whether to accept it, and a solenoid lock opens the storage drawer. The deposit is recorded and synced, then points are issued to you.',
  },
  {
    id: 'smartphone',
    question: 'Do I need a smartphone?',
    answer:
      'No. You can use an RFID card, a phone number entered on the kiosk keypad, or deposit anonymously and claim a reward on site where that is supported. The mobile app is an option, not a requirement.',
  },
  {
    id: 'rewards',
    question: 'How do I earn rewards?',
    answer:
      'Verified deposits become reward points. Points can be redeemed for airtime, mobile money credit, campus discounts and other partner rewards, depending on the partners supporting a given kiosk.',
  },
  {
    id: 'types',
    question: 'What types of plastic can I deposit?',
    answer:
      'Depositable plastic is determined by the classification each kiosk supports, and the item type accepted is shown on the kiosk display before you deposit. If an item cannot be verified, the kiosk does not accept it.',
  },
  {
    id: 'fraud',
    question: 'How does BoaMe prevent fraudulent deposits?',
    answer:
      'Every deposit is checked by the machine before it counts. Visual classification identifies the item, the load cell verifies its weight, and the deposit only becomes points and data if those checks pass.',
  },
  {
    id: 'money',
    question: 'How does BoaMe make money?',
    answer:
      'The model runs on partnerships. Beverage and FMCG producers, telecom companies, universities and community partners fund rewards and deployment, and recovery data gives those partners a measurable return on that investment.',
  },
  {
    id: 'partner',
    question: 'How can my company partner with BoaMe?',
    answer:
      'Use the partnership form on this site and tell us the type of partnership you are interested in. We will come back with the relevant model for producers, telecoms, institutions or community organisations.',
  },
  {
    id: 'where',
    question: 'Where are BoaMe kiosks available?',
    answer:
      'Kiosk locations are still being finalised with partner sites. Locations will be published as deployments are confirmed, and the app will show the nearest kiosk once it is available.',
  },
]


export type NavLink = { label: string; id: string; hint: string }

export const navLinks: NavLink[] = [
  { label: 'Home', id: 'home', hint: 'The problem, and what we built' },
  { label: 'About', id: 'about', hint: 'What BoaMe is' },
  {
    label: 'How It Works',
    id: 'how-it-works',
    hint: 'Four steps, and how anyone takes part',
  },
  { label: 'Impact', id: 'impact', hint: 'What a verified deposit changes' },
  { label: 'Team', id: 'team', hint: 'The people behind BoaMe' },
  { label: 'FAQ', id: 'faq', hint: 'Questions people actually ask' },
]
