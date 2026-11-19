import { Link } from 'react-router'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'
import profile from '../data/profile.js'

export default function Hero() {
  return (
    <section
      id="home"
      tabIndex={-1}
      aria-labelledby="intro-heading"
      className="grid scroll-mt-6 gap-6 py-12 md:grid-cols-12 md:items-end md:gap-12 md:py-14"
    >
      <div className="md:col-span-9">
        <p className="mb-2 text-primary">{profile.focus}</p>
        <h1 id="intro-heading" className="hero-title">{profile.name}</h1>
        <p id="about" tabIndex={-1} className="mt-4 max-w-xl scroll-mt-6 text-base sm:text-lg">
          I’m a sixth-semester Computer Engineering student at UCSG.
          My work brings together programming, web applications and databases.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link className="button-primary" to="/projects">Explore projects</Link>
          <a className="text-link" href={profile.githubUrl}>
            GitHub <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="text-sm md:col-span-3 md:pb-1 md:text-right">
        <p className="text-muted">Based in</p>
        <p>{profile.location}</p>
      </div>
    </section>
  )
}
