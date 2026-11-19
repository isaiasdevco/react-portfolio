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
            I’m Isaías, a sixth-semester Computer Engineering student at UCSG in Guayaquil, Ecuador.
          </p>
          <p className="mt-4 text-muted">
            My background covers programming, web applications and databases. I’ve trained
            in frontend development with HTML, CSS, JavaScript and React, and backend
            development with Python and Django.
          </p>
          <p className="mt-4 text-muted">
            My academic work includes SQL table design and queries, and a group Bash
            module for Linux processes, memory and backups. Medicina brings together
            PHP, Laravel and SQLite for patient and doctor management.
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
          <p className="mt-3 text-sm text-muted">Sixth semester · Since May 2023</p>
          <h3 className="mt-6 font-semibold">Additional training</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted">
            <li>
              <p>Web Frontend Developer · Coding Academy</p>
              <p>December 2025 · 60 academic hours</p>
            </li>
            <li>
              <p>Web Backend Developer · Coding Academy</p>
              <p>December 2025 · 60 academic hours</p>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">English: studying toward B1.</p>
        </section>
      </div>
      <Skills />
    </div>
  )
}
