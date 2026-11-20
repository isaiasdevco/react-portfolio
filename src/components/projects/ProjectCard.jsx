import { useState } from 'react'
import ArrowUpRight from '../ui/ArrowUpRight.jsx'

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)
  const previewUrl = project.liveUrl || project.sourceUrl
  const previewLabel = project.liveUrl ? `Visit ${project.title} website` : `View ${project.title} source code`
  const image = (
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={project.image.width}
      height={project.image.height}
      loading="lazy"
      className="aspect-[16/10] w-full object-cover object-top"
    />
  )

  return (
    <article aria-labelledby={`${project.id}-heading`} className="min-w-0 border-b border-border pb-8">
      {previewUrl ? (
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${previewLabel} (opens in a new tab)`}
          className="project-preview"
        >
          {image}
        </a>
      ) : (
        <div className="project-preview">
          {image}
        </div>
      )}

      <h2 id={`${project.id}-heading`} className="mt-5 text-2xl font-semibold tracking-tight">
        {project.title}
      </h2>
      <p className="mt-3">{project.overview}</p>
      <ul aria-label={`${project.title} technologies`} className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
        {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
      </ul>

      <button
        type="button"
        aria-expanded={showDetails}
        aria-controls={`${project.id}-details`}
        aria-label={`${showDetails ? 'Hide' : 'Show'} details for ${project.title}`}
        onClick={() => setShowDetails(previous => !previous)}
        className="text-link mt-3 cursor-pointer"
      >
        {showDetails ? 'Hide details' : 'Show details'}
        <span aria-hidden="true">{showDetails ? '−' : '+'}</span>
      </button>
      <div id={`${project.id}-details`} hidden={!showDetails} className="mt-4 border-t border-border pt-5">
        <h3 className="font-medium">How I built it</h3>
        <p className="mt-2 text-sm text-muted">{project.implementation}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
          {project.features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
      </div>

      {(project.liveUrl || project.sourceUrl) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
          {project.liveUrl && (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit website for ${project.title} (opens in a new tab)`}
            >
              Visit website <ArrowUpRight />
            </a>
          )}
          {project.sourceUrl && (
            <a
              className="text-link"
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code for ${project.title} (opens in a new tab)`}
            >
              Source code
            </a>
          )}
        </div>
      )}
    </article>
  )
}
