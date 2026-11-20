import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'

export default function FeaturedProject({ project }) {
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
    <article
      aria-labelledby={`${project.id}-heading`}
      className="grid items-center gap-7 border-b border-border pb-10 last:border-b-0 last:pb-0 md:grid-cols-12 md:gap-10 md:pb-12 md:last:pb-0"
    >
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          className="project-preview md:col-span-7"
          aria-label={`Visit ${project.title} website`}
        >
          {image}
        </a>
      ) : (
        <div className="project-preview md:col-span-7">
          {image}
        </div>
      )}
      <div className="md:col-span-5">
        <p className="mb-2 text-sm text-primary">{project.category}</p>
        <h3 id={`${project.id}-heading`} className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-4">{project.description}</p>
        <p className="mt-3 text-sm text-muted">{project.technologies.join(' · ')}</p>
        <p className="mt-6 text-sm text-muted">{project.features.join(' · ')}</p>
        {(project.liveUrl || project.sourceUrl) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
            {project.liveUrl && (
              <a className="text-link" href={project.liveUrl}>
                Visit website <ArrowUpRight />
              </a>
            )}
            {project.sourceUrl && <a className="text-link" href={project.sourceUrl}>Source code</a>}
          </div>
        )}
      </div>
    </article>
  )
}
