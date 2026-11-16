const projects = [
  {
    id: 'novaweb',
    title: 'NovaWeb',
    category: 'Web development',
    description: 'A responsive landing page for a fictional digital studio.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive layout', 'Mobile navigation'],
    sourceUrl: 'https://github.com/isaiasdevco/landing-page-project',
    liveUrl: 'https://isaiasdevco.github.io/landing-page-project/',
    image: {
      src: '/images/projects/novaweb.png',
      alt: 'NovaWeb homepage with its introduction and coffee brand illustration.',
      width: 1440,
      height: 1050,
    },
    featured: true,
  },
  {
    id: 'medicina',
    title: 'Medicina',
    description: 'An academic app for managing patients and doctors.',
    technologies: ['PHP', 'Laravel', 'SQLite'],
    sourceUrl: null,
    liveUrl: null,
    image: {
      src: '/images/projects/medicina.png',
      alt: 'Medicina homepage with patient, doctor and document modules.',
      width: 1440,
      height: 1000,
    },
  },
]

export default projects
