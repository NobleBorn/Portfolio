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
    status: 'Complete',
    image: '/images/photobarber.png',
    demoUrl: 'https://photo-barber-eight.vercel.app/',
    githubUrl: 'https://github.com/NobleBorn/PhotoBarber',
  },
  {
    id: 'runeterra-ai',
    title: 'Runeterra AI',
    description:
      'An AI-powered chatbot that lets users explore the League of Legends universe through natural conversations. Built with Retrieval-Augmented Generation (RAG), hybrid search, and LLMs to deliver accurate, context-aware answers grounded in official game lore.',
    technologies: [
      'Python',
      'FastAPI',
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Git',
      'RAG',
      'LLM',
      'Hybrid Search',
      'Vector Embeddings',
    ],
    status: 'In progress',
    image: '/images/runeterra-ai.png',
    githubUrl: 'https://github.com/NobleBorn/Runeterra-AI',
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
]
