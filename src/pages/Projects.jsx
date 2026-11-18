import { useRef, useState } from 'react'
import ProjectCard from '../components/projects/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  const [technologyFilter, setTechnologyFilter] = useState('')
  const filterInput = useRef(null)
  const normalizedFilter = technologyFilter.trim().toLowerCase()
  const filteredProjects = projects.filter(project =>
    project.technologies.some(technology => technology.toLowerCase().includes(normalizedFilter)),
  )

  function clearFilter() {
    setTechnologyFilter('')
    filterInput.current.focus()
  }

  return (
    <div className="py-12 md:py-14">
      <h1 className="hero-title">Projects</h1>
      <p className="mt-4 max-w-xl text-muted">
        Web projects from my studies and practice, with screenshots and the technologies I used.
      </p>

      <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-3 border-b border-border pb-6">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="technology-filter" className="block text-sm text-muted">
            Filter by technology
          </label>
          <input
            id="technology-filter"
            ref={filterInput}
            type="search"
            value={technologyFilter}
            onChange={event => setTechnologyFilter(event.target.value)}
            placeholder="e.g. Laravel"
            aria-controls="project-results"
            className="mt-2 min-h-11 w-full rounded-control border border-control-border bg-surface px-3 py-2 text-text placeholder:text-muted"
          />
        </div>
        <button
          type="button"
          onClick={clearFilter}
          disabled={!technologyFilter}
          className="text-link cursor-pointer disabled:cursor-default disabled:opacity-40"
        >
          Clear filter
        </button>
        <p role="status" aria-atomic="true" className="ml-auto flex min-h-11 items-center text-sm text-muted">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      <div id="project-results" className="mt-8 grid gap-10 md:grid-cols-2 md:gap-8">
        {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
        {filteredProjects.length === 0 && (
          <p className="py-6 text-muted md:col-span-2">
            No projects match this technology. Try HTML or Laravel, or clear the filter.
          </p>
        )}
      </div>
    </div>
  )
}
