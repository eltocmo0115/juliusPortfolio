import healthTipShuffleScreenshot from '@/assets/projects/health-tip-shuffle.png'
import ePadalaLanding from '@/assets/projects/epadala-landing.png'
import ePadalaRequests from '@/assets/projects/epadala-customer-requests.png'
import ePadalaDriver from '@/assets/projects/epadala-driver-dashboard.png'
import ePadalaAdmin from '@/assets/projects/epadala-admin-dashboard.png'
import binanLogin from '@/assets/projects/binan-login.png'
import binanHomepage from '@/assets/projects/binan-homepage.png'
import binanAdminDashboard from '@/assets/projects/binan-admin-dashboard.png'
import quickServePos from '@/assets/projects/quickserve-pos.png'

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
  { value: '06', label: 'public projects' },
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
    softwareUsed: ['C#', '.NET 10', 'Android SDK', 'XML Layouts'],
    sourceUrl: 'https://github.com/romar0112/HealthTipShuffle_Mobile',
    sourceLabel: 'View Android source',
    accent: 'coral',
    visual: 'screenshot',
    previewImage: healthTipShuffleScreenshot,
  },
  {
    id: 'epadala',
    index: '04',
    year: 'Web marketplace · Public source',
    title: 'E-Padala',
    summary:
      'A local courier marketplace that connects customers needing deliveries with verified drivers operating across Laguna.',
    outcome:
      'Built secure customer, driver, and administrator workflows for delivery requests, estimates, offers, fleet management, transactions, profiles, and reporting.',
    features: ['Delivery request marketplace', 'Role-based dashboards', 'Driver & vehicle management', 'Offer & transaction flow'],
    softwareUsed: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQLite'],
    sourceUrl: 'https://github.com/romar0112/E-padala-Courier-Service',
    sourceLabel: 'View web source',
    accent: 'gold',
    visual: 'gallery',
    previewImages: [
      { src: ePadalaLanding, alt: 'E-Padala courier service landing page' },
      { src: ePadalaRequests, alt: 'E-Padala customer delivery requests workspace' },
      { src: ePadalaDriver, alt: 'E-Padala driver dashboard' },
      { src: ePadalaAdmin, alt: 'E-Padala administrator dashboard' },
    ],
  },
  {
    id: 'binan-city-website',
    index: '05',
    year: 'Government web portal · Public source',
    title: 'City Government of Biñan Website',
    summary:
      'A public information portal and content-management system for the City Government of Biñan.',
    outcome:
      'Contributed to the public-facing city website and its authenticated administration workspace for managing municipal content, services, departments, careers, officials, disclosures, and visitor activity.',
    features: ['Public information portal', 'Admin content management', 'Role-based access', 'Visitor analytics'],
    softwareUsed: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript'],
    sourceUrl: 'https://github.com/JustinMoscoso/websiteBinan',
    sourceLabel: 'View web source',
    accent: 'green',
    visual: 'gallery',
    previewImages: [
      { src: binanHomepage, alt: 'City Government of Biñan public website homepage' },
      { src: binanLogin, alt: 'City Government of Biñan administrator sign-in page' },
      { src: binanAdminDashboard, alt: 'City Government of Biñan content management dashboard' },
    ],
  },
  {
    id: 'quickserve-pos',
    index: '06',
    year: 'Point-of-sale system · Public source',
    title: 'QuickServe POS',
    summary:
      'A local-first, browser-based point-of-sale system designed for fast-food counter operations.',
    outcome:
      'Built a responsive cashier workspace backed by independently deployable menu, ordering, and API gateway services, with persistent menu and order records.',
    features: ['Fast order entry', 'Menu management', 'Order status workflow', 'Persistent local records'],
    softwareUsed: ['TypeScript', 'React', 'C#', 'ASP.NET Core'],
    sourceUrl: 'https://github.com/romar0112/Fast_Food_POS',
    sourceLabel: 'View POS source',
    accent: 'orange',
    visual: 'gallery',
    previewImages: [
      { src: quickServePos, alt: 'QuickServe POS cashier order-building workspace' },
    ],
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
