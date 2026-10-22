/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio -- no component changes needed.
 */

export type Link = {
  label: string
  href: string
  /** icon key, see components/Icon.tsx */
  icon: IconName
  /** shown as the visible value on contact cards */
  value?: string
}

export type IconName =
  | 'mail'
  | 'phone'
  | 'pin'
  | 'linkedin'
  | 'github'
  | 'external'
  | 'download'
  | 'copy'
  | 'check'
  | 'arrow'
  | 'sparkle'
  | 'code'
  | 'cube'
  | 'brain'
  | 'database'
  | 'layers'
  | 'eye'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'refresh'
  | 'desktop'
  | 'mobile'
  | 'play'
  | 'cap'
  | 'star'
  | 'image'

export const profile = {
  name: 'Jetti Leela Mani Charan',
  /** the hero renders one <span> per line, last line gets the accent colour */
  nameLines: ['Jetti Leela Mani', 'Charan'],
  initials: 'JLC',
  role: 'Software Engineer',
  tagline: 'Full-Stack & AI Solutions',
  location: 'Hyderabad, Telangana - 500081',
  availability: 'Open to Software Engineer roles',
  greeting: "Hello, I'm",
  /** big serif statement under the name */
  headline: ['I build software that', 'survives real traffic.'],
  heroIntro:
    "Full-stack engineer at Cornerstone OnDemand. The Learning Details microservice I architected is now the company's most-clicked feature — 125k+ and counting.",
  summary:
    'Software Engineer with experience building full-stack microservices, scalable RESTful APIs, and accessible UI components. Proven track record of delivering high-traffic production features (125k+ engagements), engineering custom AI/MCP workflows, and driving end-to-end automation. Skilled in React, .NET Core, C#, Python, and WCAG accessibility standards.',
  aboutParagraphs: [
    'I am a Software Engineer based in Hyderabad, working across the whole stack — from .NET Core services and BFF layers to React component libraries that real users touch every day.',
    'Most of my favourite work sits at the intersection of scale and craft: a Learning Details microservice that grew into the highest-trafficked feature at Cornerstone OnDemand, a custom Accessibility MCP server that helped teams clear 150+ WCAG 2.1 defects in a single week, and a production MERN commerce platform with a 0% payment failure rate.',
    'I care about accessibility, measurable performance, and shipping things that keep working after launch.',
  ],
  /** printable resume page generated from this same data */
  resumeHref: '/resume.html',
  links: {
    email: {
      label: 'Email',
      value: 'leelamanicharanjetti@gmail.com',
      href: 'mailto:leelamanicharanjetti@gmail.com',
      icon: 'mail',
    },
    phone: {
      label: 'Phone',
      value: '+91 99856 71569',
      href: 'tel:+919985671569',
      icon: 'phone',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'linkedin.com/in/leelamanicharan45',
      href: 'https://linkedin.com/in/leelamanicharan45',
      icon: 'linkedin',
    },
    location: {
      label: 'Location',
      value: 'Hyderabad, Telangana - 500081',
      href: 'https://maps.google.com/?q=Hyderabad,Telangana',
      icon: 'pin',
    },
  } satisfies Record<string, Link>,
} as const

export const stats = [
  { value: '125k+', label: 'clicks on the feature I shipped', accent: 'clay' },
  { value: '150+', label: 'WCAG 2.1 defects remediated', accent: 'olive' },
  { value: '95%', label: 'computer-vision model accuracy', accent: 'indigo' },
  { value: '0%', label: 'payment failure rate in production', accent: 'amber' },
] as const

export type Experience = {
  company: string
  title: string
  type: string
  location: string
  period: string
  /** short label used by the timeline rail */
  short: string
  bullets: string[]
  tags: string[]
  /** file name expected in src/assets/logos/ */
  logo: string
}

export const experience: Experience[] = [
  {
    company: 'Cornerstone OnDemand',
    title: 'Junior Engineer',
    type: 'Full-time',
    location: 'Hyderabad',
    period: 'Apr 2025 — Oct 2026',
    short: 'Cornerstone',
    logo: 'cornerstone',
    bullets: [
      'Spearheaded UI/UX enhancements for an Enterprise AI Chatbot by engineering 6 interactive, reusable React shortcut components, streamlining complex workflows and reducing user prompt friction.',
      'Engineered a custom Accessibility (A11y) Model Context Protocol (MCP) server integrated into automated testing pipelines, enabling cross-functional teams to remediate 150+ WCAG 2.1 compliance defects in one week.',
      "Architected and deployed a high-scale Learning Details microservice using React and a BFF (Backend-for-Frontend) layer to consume core .NET Core RESTful APIs — scaled to become the company's highest-trafficked feature (125k+ clicks).",
    ],
    tags: ['React', '.NET Core', 'BFF Architecture', 'MCP', 'WCAG 2.1', 'Microservices'],
  },
  {
    company: 'Archover Solutions',
    title: 'Computer Vision Engineering Intern',
    type: 'Internship',
    location: 'Vijayawada (Remote)',
    period: 'Apr 2023 — Jul 2023',
    short: 'Archover',
    logo: 'archover',
    bullets: [
      'Engineered a real-time CCTV video analytics pipeline using Python, Flask, OpenCV, and YOLOv3 to process live video feeds with minimal latency.',
      'Trained and integrated object detection models to identify public safety hazards and facility risks in real-time, achieving 95% model accuracy in a web-based production monitoring environment.',
      'Integrated real-time object detection models into a functional Flask web application dashboard, enabling operators to track alerts and review automated safety logs for 10+ concurrent video streams.',
      'Streamlined model processing workflows and image preprocessing pipelines to reduce frame drop rates by 30%, ensuring reliable 24/7 uptime in a simulated production surveillance environment.',
    ],
    tags: ['Python', 'Flask', 'OpenCV', 'YOLOv3', 'Deep Learning'],
  },
]

export type SkillGroup = {
  title: string
  icon: IconName
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'code',
    items: [
      'C#',
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'Java',
      'SQL',
      'HTML5',
      'CSS3 / Tailwind',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'layers',
    items: [
      'React.js',
      'ASP.NET Core',
      'Node.js',
      'Express.js',
      'Flask',
      'MERN Stack',
    ],
  },
  {
    title: 'Architecture & Web APIs',
    icon: 'cube',
    items: [
      'RESTful APIs',
      'Microservices',
      'BFF Architecture',
      'System Design',
      'JSON',
      'Webhooks',
    ],
  },
  {
    title: 'AI & Specialized Tools',
    icon: 'brain',
    items: [
      'Machine Learning',
      'Deep Learning',
      'MCP creation',
      'Computer Vision',
    ],
  },
  {
    title: 'Databases & Tools',
    icon: 'database',
    items: [
      'PostgreSQL / MySQL',
      'MongoDB',
      'Git',
      'GitHub',
      'Postman',
      'Vercel',
      'Apache Server',
    ],
  },
]

export type Project = {
  slug: string
  name: string
  period: string
  blurb: string
  bullets: string[]
  stack: string[]
  /** when present, the project renders an embedded live-demo window */
  demoUrl?: string
  repoUrl?: string
  /**
   * Optional sign-in details surfaced next to the live preview so a visitor
   * can get past a login wall. Anything put here is PUBLIC — use a throwaway
   * demo account, never a personal one, and never a reused password.
   */
  demoCredentials?: {
    username: string
    password: string
    note?: string
  }
  featured?: boolean
  /** expected file name (without extension) in src/assets/gallery/ */
  image: string
  /** extra screenshot slots rendered as image windows */
  shots?: { image: string; caption: string }[]
  metrics?: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: 'companions',
    name: 'Companion',
    period: '2026',
    featured: true,
    demoUrl: 'https://companionsi.vercel.app/login?next=%2F',
    image: 'companions',
    blurb:
      'A local-first AI companion that keeps conversations on your own machine by default, routing to an Ollama model and only reaching for the cloud with your explicit consent.',
    bullets: [
      'Built a chat companion that runs against a locally hosted Ollama model, so conversation data never has to leave the user\u2019s device.',
      'Designed a consent-gated fallback to Google Gemini: when the local model cannot serve a reply, the user is told exactly what will be sent before anything leaves the machine.',
      'Engineered a memory layer that assembles recent messages, a rolling profile summary and relevant stored memories into the model context for continuity across sessions.',
      'Kept the server a pass-through that forwards requests without persisting message content, and made the model provider switchable from Settings.',
    ],
    stack: ['Ollama', 'Google Gemini API', 'Authentication', 'Vercel'],
    demoCredentials: {
      username: 'leelamanicharanjetti@gmail.com',
      // SECURITY: replaced with a placeholder on purpose - see the note in the
      // chat. Put a dedicated throwaway demo account's password here, never a
      // password you use anywhere else.
      password: 'REPLACE_WITH_DEMO_ACCOUNT_PASSWORD',
      note: 'Read-only demo account so you can look around without signing up.',
    },
    metrics: [
      { value: 'Local', label: 'first, via Ollama' },
      { value: 'Opt-in', label: 'cloud fallback' },
      { value: 'Memory', label: 'aware conversations' },
    ],
  },
  {
    slug: 'sri-sai-shopping',
    name: 'Sri Sai Shopping',
    period: 'Nov 2024 — Jan 2026',
    featured: true,
    demoUrl: 'https://srisaishopping.vercel.app/',
    image: 'sri-sai-shopping',
    blurb:
      'A production-grade MERN retail commerce platform with secure Razorpay payments, live inventory and serverless delivery on Vercel.',
    bullets: [
      'Built and deployed a production-grade MERN stack retail e-commerce platform handling 500+ daily catalog requests and managing customer carts and order processing.',
      'Integrated Razorpay API with server-side HMAC signature verification to process 100% secure real-time transactions, achieving a 0% payment failure rate across UPI, cards, and net banking.',
      'Deployed on Vercel with optimized serverless routing, achieving sub-second page load times (under 800ms latency) and high availability.',
      'Engineered dynamic workflows handling real-time inventory updates for 100+ active product listings and live transaction statuses.',
    ],
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Razorpay',
      'HMAC',
      'Vercel',
    ],
    metrics: [
      { value: '500+', label: 'daily catalog requests' },
      { value: '<800ms', label: 'page load latency' },
      { value: '0%', label: 'payment failures' },
      { value: '100+', label: 'live product listings' },
    ],
    shots: [
      { image: 'sss-collections', caption: 'Collections' },
      { image: 'sss-checkout', caption: 'Checkout' },
    ],
  },
  {
    slug: 'university-website',
    name: 'University Website Maintenance',
    period: 'Feb 2023 — Jan 2025',
    image: 'university-website',
    blurb:
      'Enterprise PHP/MySQL applications serving 1,500+ students and faculty, including an automated Student Exit Survey portal and FADS.',
    bullets: [
      'Built and maintained enterprise PHP/MySQL web applications used by 1,500+ active university students and faculty members, including an automated Student Exit Survey portal and FADS.',
      'Managed local Apache HTTP Server deployments on college infrastructure, maintaining 99.9% local network uptime and robust data security.',
      'Provided 2 years of continuous operational support, successfully resolving 200+ bug fixes and feature enhancements.',
      'Designed custom data-capture pipelines that reduced faculty evaluation processing time by 40%.',
    ],
    stack: ['PHP', 'MySQL', 'Apache', 'JavaScript'],
    metrics: [
      { value: '1,500+', label: 'active users' },
      { value: '99.9%', label: 'local uptime' },
      { value: '200+', label: 'fixes shipped' },
    ],
  },
  {
    slug: 'cropeasy',
    name: 'Cropeasy',
    period: 'Academic project',
    image: 'cropeasy',
    blurb:
      'A crop recommendation system that pairs a Decision Tree model with live weather data to send actionable alerts to farmers.',
    bullets: [
      'Engineered a predictive Decision Tree machine learning model with 91% prediction accuracy to suggest optimal crops based on regional parameters and soil N-P-K nutrient levels.',
      'Built a Python/Flask backend integrated with a real-time Weather API, dispatching automated weather alerts to farmers.',
    ],
    stack: ['Python', 'Flask', 'scikit-learn', 'Weather API'],
    metrics: [
      { value: '91%', label: 'prediction accuracy' },
      { value: 'N-P-K', label: 'soil-aware inputs' },
    ],
  },
]

export const education = [
  {
    degree: "Bachelor's Degree in CSE",
    specialisation: 'Artificial Intelligence and Machine Learning',
    school: 'JNTUK',
    location: 'Vijayawada',
    period: 'Dec 2021 — May 2025',
    score: '7.96 CGPA',
  },
]

export const leadership = [
  {
    org: 'AURA Student Club',
    role: 'Vice President',
    period: 'Jan 2024 — Jan 2025',
    location: 'Vijayawada, Andhra Pradesh',
    note: 'Led club operations and student-run technical events as Vice President.',
    image: 'aura-club',
  },
]

/**
 * Image windows you can fill at any time.
 * Drop a file named `<image>.jpg|png|webp` into `src/assets/gallery/`
 * and it appears automatically. Until then a labelled placeholder shows.
 */
export const gallery = [
  { image: 'portrait', caption: 'Portrait', hint: 'A clean headshot, 1:1' },
  { image: 'desk-setup', caption: 'Workspace', hint: 'Your desk / setup' },
  { image: 'aura-club', caption: 'AURA Student Club', hint: 'Event or team photo' },
  { image: 'talk', caption: 'Speaking / Workshop', hint: 'On stage or presenting' },
  { image: 'team', caption: 'Team', hint: 'With your team at work' },
  { image: 'certificate', caption: 'Certificate / Award', hint: 'Any recognition' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]
