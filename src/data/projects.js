const projects = [
  {
    id: 'novaweb',
    title: 'NovaWeb',
    category: 'Web development',
    description: 'A responsive landing page for a fictional digital studio.',
    overview: 'A single-page website for a fictional digital studio. It introduces the studio, presents its services and sample work, and guides visitors to the contact section.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    implementation: 'HTML structures the page content, CSS handles the responsive layout and visual styles, and JavaScript controls the mobile menu. The sections share the same navigation on desktop and smaller screens.',
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
    category: 'Web application',
    description: 'An academic application for managing patients, doctors and their assignments.',
    overview: 'An academic web application for keeping patient and doctor records together. Patients can be linked to doctors and specialties, with record actions available from the same panel.',
    technologies: ['PHP', 'Laravel', 'SQLite'],
    implementation: 'PHP and Laravel handle routes, form validation and access to patient and doctor records. SQLite stores the data. Patient records can also be exported as PDF documents and represented with QR codes.',
    features: ['Patient and doctor records', 'PDF and QR output'],
    sourceUrl: 'https://github.com/isaiasdevco/Medicina',
    liveUrl: null,
    image: {
      src: '/images/projects/medicina.png',
      alt: 'Medicina patient list with doctor assignments and record actions.',
      width: 1440,
      height: 900,
    },
    featured: true,
  },
]

export default projects
