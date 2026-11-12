type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  status: string
  image: string
  demoUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'photobarber',
    title: 'PhotoBarber',
    description:
      'PhotoBarber is a free, browser-based platform offering simple and accessible tools for editing and converting images, without accounts, subscriptions, or usage limits.',
    technologies: ['Next.js', 'React & TypeScript', 'Tailwind CSS', 'Browser Canvas API'],
    status: 'Featured',
    image: '/images/photobarber.png',
    demoUrl: 'https://photo-barber-eight.vercel.app/',
    githubUrl: 'https://github.com/NobleBorn/PhotoBarber',
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio',
    description:
      'A custom OS-inspired portfolio with glass interfaces, reactive status elements, project navigation, and interactive components.',
    technologies: ['Vue 3', 'TypeScript', 'CSS', 'Spring Boot'],
    status: 'In progress',
    image: '/images/portfolio-project.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'text-to-sql-research',
    title: 'Master Thesis',
    description:
      "A master's thesis investigating the accuracy, reliability, and failure patterns of Large Language Models in Text-to-SQL generation.",
    technologies: [
      'Python',
      'SQL',
      'LLM',
      'Data Analysis',
      'Prompt Engineering',
      'Text-to-SQL',
      'LLM Evaluation',
      'Failure Analysis',
      'Experimental Design',
    ],
    status: 'Research',
    image: '/images/text-to-sql-project.png',
    githubUrl: 'https://github.com/NobleBorn/Maste-Thesis',
  },
  {
    id: 'chalmers-location-explorer',
    title: 'Chalmers Location Explorer',
    description:
      'A data pipeline that collects, processes, and organizes room and building information from the Chalmers Maps API.',
    technologies: ['Python', 'REST API', 'JSON', 'Data Processing'],
    status: 'Completed',
    image: '/images/chalmers-map-project.png',
    githubUrl: '#',
  },
]
