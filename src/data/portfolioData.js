import healthTipShuffleScreenshot from '@/assets/projects/health-tip-shuffle.png'

export const profile = {
  name: 'Julius T. Piñon',
  shortName: 'Julius',
  role: 'IT student & software developer',
  headline: 'I build practical web and Android experiences.',
  subtitle:
    'My work spans PHP and CodeIgniter systems, Kotlin and Jetpack Compose interfaces, and the thoughtful workflows that connect people to technology.',
  location: 'Philippines',
  email: 'romarjulius@gmail.com',
  github: 'https://github.com/romar0112',
  linkedin: 'https://www.linkedin.com/in/julius-romar-pi%C3%B1on-715495328',
  credly: 'https://www.credly.com/users/julius-romar-pinon',
  availability: 'Open to Job Opportunities',
}

export const stats = [
  { value: '03', label: 'public projects' },
  { value: 'Web + Android', label: 'current focus' },
  { value: 'PH', label: 'based in' },
]

export const programmingSkills = [
  { id: 'php', name: 'PHP', group: 'Web', mark: 'PHP' },
  { id: 'codeigniter', name: 'CodeIgniter', group: 'Web', mark: 'CI' },
  { id: 'javascript', name: 'JavaScript', group: 'Web', mark: 'JS' },
  { id: 'react', name: 'React', group: 'Web', mark: 'R' },
  { id: 'html-css', name: 'HTML & CSS', group: 'Web', mark: '</>' },
  { id: 'kotlin', name: 'Kotlin', group: 'Android', mark: 'KT' },
  { id: 'compose', name: 'Jetpack Compose', group: 'Android', mark: 'JC' },
  { id: 'mysql', name: 'MySQL', group: 'Data', mark: 'SQL' },
]

export const capstoneProject = {
  id: 'air-alert',
  index: '01',
  year: 'Capstone · Android prototype',
  title: 'Air Alert',
  summary:
    'An Android interface prototype for identifying and monitoring indoor air pollutants in small-scale industry settings.',
  outcome:
    'Built the multi-screen experience for pollutant readings, sensor details, logs, alert states, and account navigation.',
  features: ['Pollutant dashboard', 'Sensor detail views', 'Alert & log screens', 'Account flow'],
  softwareUsed: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Navigation Compose'],
  sourceUrl: 'https://github.com/romar0112/AirAlert',
  sourceLabel: 'View Android source',
  accent: 'lime',
  visual: 'mobile',
}

export const softwareProjects = [
  {
    id: 'electric-billing',
    index: '02',
    year: 'Web application · Public source',
    title: 'Electric Billing',
    summary:
      'A database-backed billing application for computing electricity charges and organizing client billing records.',
    outcome:
      'Implemented authenticated user and admin flows, billing computation, client records, role-protected routes, history, and audit logs.',
    features: ['Billing computation', 'Role-based access', 'Client records', 'Audit history'],
    softwareUsed: ['PHP 8.2', 'CodeIgniter 4', 'MySQL', 'JavaScript'],
    sourceUrl: 'https://github.com/romar0112/electric-billing',
    sourceLabel: 'View web source',
    accent: 'cyan',
    visual: 'dashboard',
  },
  {
    id: 'health-tip-shuffle',
    index: '03',
    year: 'Android application · Public source',
    title: 'Health Tips Shuffle',
    summary:
      'A simple Android wellness app that cycles through practical reminders for healthier everyday habits.',
    outcome:
      'Built an adjustable tip carousel with timed rotation, start and pause controls, and an option to shuffle to another tip instantly.',
    features: ['Automatic tip rotation', 'Adjustable timer', 'Pause & resume', 'Manual tip shuffle'],
    softwareUsed: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Android'],
    sourceUrl: 'https://github.com/romar0112/HealthTipShuffle_Mobile',
    sourceLabel: 'View Android source',
    accent: 'coral',
    visual: 'screenshot',
    previewImage: healthTipShuffleScreenshot,
  },
]

export const learning = [
  'Responsive Web Design',
  'JavaScript Fundamentals',
  'Database Management',
  'System Analysis & Design',
  'Cloud & Web Deployment',
  'UI/UX Design',
  'Cybersecurity Awareness',
]

export const timeline = [
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Work', target: '#projects' },
  { label: 'Credentials', target: '#credentials' },
  { label: 'Learning', target: '#learning' },
  { label: 'Contact', target: '#contact' },
]
