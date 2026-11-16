import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'

export default function FeaturedProject({ project }) {
  return (
    <article aria-labelledby={`${project.id}-heading`} className="grid items-center gap-7 md:grid-cols-12 md:gap-10">
      <a
        href={project.liveUrl}
        className="project-preview md:col-span-7"
        aria-label={`Visit ${project.title} website`}
      >
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </a>
      <div className="md:col-span-5">
        <p className="mb-2 text-sm text-primary">{project.category}</p>
        <h3 id={`${project.id}-heading`} className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-4">{project.description}</p>
        <p className="mt-3 text-sm text-muted">{project.technologies.join(' · ')}</p>
        <p className="mt-6 text-sm text-muted">{project.features.join(' · ')}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
          <a className="text-link" href={project.liveUrl}>
            Visit website <ArrowUpRight />
          </a>
          <a className="text-link" href={project.sourceUrl}>Source code</a>
        </div>
      </div>
    </article>
  )
}
