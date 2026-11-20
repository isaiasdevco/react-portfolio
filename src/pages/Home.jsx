import { Link } from 'react-router'
import Hero from '../sections/Hero.jsx'
import FeaturedProject from '../sections/FeaturedProject.jsx'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'
import projects from '../data/projects.js'

export default function Home() {
  const selectedProjects = projects.filter(project => project.featured)

  return (
    <>
      <Hero />

      <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="scroll-mt-6 border-t border-border pt-8 md:pt-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 id="work-heading" className="text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link className="text-link" to="/projects">
            All projects <ArrowUpRight />
          </Link>
        </div>
        <div className="space-y-10 md:space-y-12">
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
        <p className="mt-2 text-muted">For projects or opportunities, get in touch by email.</p>
        <Link className="text-link mt-2" to="/contact">
          Contact me <ArrowUpRight />
        </Link>
      </section>
    </>
  )
}
