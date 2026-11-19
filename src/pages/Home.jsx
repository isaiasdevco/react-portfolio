import { Link } from 'react-router'
import Hero from '../sections/Hero.jsx'
import FeaturedProject from '../sections/FeaturedProject.jsx'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'
import projects from '../data/projects.js'
import profile from '../data/profile.js'

export default function Home() {
  const selectedProjects = projects.filter(project => project.featured)

  return (
    <>
      <Hero />

      <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="scroll-mt-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 id="work-heading" className="text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link className="text-link" to="/projects">
            All projects <ArrowUpRight />
          </Link>
        </div>
        <div className="space-y-12 md:space-y-16">
          {selectedProjects.map(project => <FeaturedProject key={project.id} project={project} />)}
        </div>
      </section>

      <section
        id="contact"
        tabIndex={-1}
        aria-labelledby="contact-heading"
        className="mt-12 scroll-mt-6 border-t border-border py-8 md:mt-14"
      >
        <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">Let’s connect.</h2>
        <p className="mt-2 text-muted">Find my projects and code on GitHub.</p>
        <a className="text-link mt-2" href={profile.githubUrl}>
          Visit my GitHub <ArrowUpRight />
        </a>
      </section>
    </>
  )
}
