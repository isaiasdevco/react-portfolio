import ArrowUpRight from '../ui/ArrowUpRight.jsx'

export default function ProjectCard({ project }) {
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
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          aria-label={`Visit ${project.title} website`}
          className="project-preview"
        >
          {image}
        </a>
      ) : (
        <div className="overflow-hidden rounded-preview border border-border bg-surface">
          {image}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 id={`${project.id}-heading`} className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h2>
        {!project.liveUrl && <p className="text-sm text-muted">Local preview</p>}
      </div>
      <p className="mt-3">{project.description}</p>
      <ul aria-label={`${project.title} technologies`} className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
        {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
      </ul>

      {project.liveUrl || project.sourceUrl ? (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
          {project.liveUrl && (
            <a className="text-link" href={project.liveUrl}>
              Visit website <ArrowUpRight />
            </a>
          )}
          {project.sourceUrl && (
            <a className="text-link" href={project.sourceUrl}>Source code</a>
          )}
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted">Captured locally with fictitious demo data.</p>
      )}
    </article>
  )
}
