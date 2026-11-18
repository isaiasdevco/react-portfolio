import { Link } from 'react-router'
import Skills from '../sections/Skills.jsx'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'

export default function About() {
  return (
    <div className="py-12 md:py-14">
      <h1 className="hero-title">About me</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="text-lg">
            I’m Isaías, a Computer Engineering student at UCSG in Guayaquil, Ecuador.
          </p>
          <p className="mt-4 text-muted">
            I’m focusing on frontend development. My projects range from a responsive
            landing page in HTML, CSS and JavaScript to this portfolio in React.
          </p>
          <p className="mt-4 text-muted">
            I’ve also worked with PHP, Laravel and SQLite on Medicina, an academic
            app for managing patient and doctor records.
          </p>
          <Link to="/projects" className="text-link mt-4">
            View my projects <ArrowUpRight />
          </Link>
        </div>
        <section
          aria-labelledby="education-heading"
          className="border-t border-border pt-6 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-8"
        >
          <h2 id="education-heading" className="font-semibold">Education</h2>
          <p className="mt-4 text-lg">Computer Engineering</p>
          <p className="mt-2 text-muted">Universidad Católica de Santiago de Guayaquil</p>
          <p className="mt-3 text-sm text-muted">Undergraduate student</p>
        </section>
      </div>
      <Skills />
    </div>
  )
}
