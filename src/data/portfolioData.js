export const profile = {
  name: 'Julius T. Piñon',
  role: 'Information Technology Student and Software Developer',
  subtitle:
    'A clean portfolio built with Bootstrap for presenting school projects, technical growth, and capstone work in one place.',
  location: 'Philippines',
  email: 'your.email@example.com',
  focus: ['Bootstrap', 'React', 'Clean Architecture', 'UI Systems'],
}

export const programmingSkills = [
  { id: 'html-css', name: 'HTML / CSS', level: 95 },
  { id: 'javascript', name: 'JavaScript', level: 88 },
  { id: 'react', name: 'React', level: 85 },
  { id: 'bootstrap', name: 'Bootstrap', level: 92 },
  { id: 'php', name: 'PHP', level: 80 },
  { id: 'mysql', name: 'MySQL', level: 82 },
  { id: 'figma', name: 'Figma', level: 74 },
]

export const certificates = [
  { id: 'rwd', label: 'Responsive Web Design' },
  { id: 'js', label: 'JavaScript Fundamentals' },
  { id: 'db', label: 'Database Management' },
  { id: 'sad', label: 'System Analysis and Design' },
  { id: 'cloud', label: 'Cloud and Web Deployment' },
]

export const seminars = [
  { id: 'web-trends', label: 'Web Development Trends and Best Practices' },
  { id: 'uiux', label: 'UI / UX Design for Student Portfolios' },
  { id: 'cybersec', label: 'Cybersecurity Awareness for Developers' },
  { id: 'capstone-def', label: 'Capstone Project Defense Preparation' },
]

export const softwareProjects = [
  {
    id: '1st-year',
    year: '1st Year',
    title: 'Student Information Tracker',
    machineProblem:
      'Manual record keeping made student records slow to update and difficult to search.',
    features: [
      'Student profile registration',
      'Search and filtering',
      'Printable records',
      'Basic CRUD workflow',
    ],
    screenshots: [
      'Login and dashboard screen',
      'Student form and table view',
      'Search and print preview',
    ],
    softwareUsed: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: '2nd-year',
    year: '2nd Year',
    title: 'Inventory and Borrowing System',
    machineProblem:
      'Borrowed equipment and stock items were tracked using spreadsheets and handwritten logs.',
    features: [
      'Item catalog and categories',
      'Borrow and return workflow',
      'Low-stock notifications',
      'User roles and history logs',
    ],
    screenshots: [
      'Inventory overview screen',
      'Borrowing transaction form',
      'Reports and logs screen',
    ],
    softwareUsed: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
  },
  {
    id: '3rd-year',
    year: '3rd Year',
    title: 'Clinic Appointment and Records Platform',
    machineProblem:
      'Clinic appointments and patient records needed a simple web-based workflow for faster scheduling.',
    features: [
      'Appointment scheduling',
      'Patient record management',
      'Status updates and notifications',
      'Admin dashboard analytics',
    ],
    screenshots: [
      'Patient dashboard screen',
      'Calendar and appointment form',
      'Records and analytics panel',
    ],
    softwareUsed: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
  },
  {
    id: '4th-year',
    year: '4th Year',
    title: 'Capstone Support System',
    machineProblem:
      'The final-year project required a reliable system with cleaner structure, better navigation, and presentation-ready screens.',
    features: [
      'Role-based access',
      'Responsive dashboard',
      'Automated summaries',
      'Export-ready reports',
    ],
    screenshots: [
      'Landing page and login flow',
      'Admin dashboard screen',
      'Reports and settings page',
    ],
    softwareUsed: ['React', 'Bootstrap', 'Node', 'REST APIs'],
  },
]

export const capstoneProject = {
  title: 'Capstone Project: Smart Campus Resource Management System',
  machineProblem:
    'Campus resources, requests, and records were fragmented across multiple manual processes.',
  features: [
    'Centralized request handling',
    'User-friendly dashboard',
    'Approval workflow',
    'Searchable records and logs',
    'Mobile-responsive interface',
  ],
  screenshots: [
    'Public landing page and login',
    'Role-based dashboard overview',
    'Request and approval workflow',
    'Reports, history, and export screen',
  ],
  softwareUsed: ['React', 'Bootstrap', 'Node.js', 'Express', 'MySQL'],
}

export const hardwareUsed = [
  { id: 'laptop', label: 'Laptop or desktop computer for development' },
  { id: 'android', label: 'Android phone for mobile responsiveness testing' },
  { id: 'peripherals', label: 'External mouse and keyboard' },
  { id: 'network', label: 'Wi-Fi or LAN connection for local testing and deployment' },
  { id: 'printer', label: 'Printer or PDF viewer for report checking' },
]

export const timeline = [
  { label: 'Programming Skills', target: '#skills' },
  { label: 'Certificates', target: '#certificates' },
  { label: 'Seminars', target: '#seminars' },
  { label: 'Projects', target: '#projects' },
  { label: 'Capstone', target: '#capstone' },
  { label: 'Hardware', target: '#hardware' },
]
