import Hero from '../sections/Hero.jsx'
import FeaturedProject from '../sections/FeaturedProject.jsx'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'
import projects from '../data/projects.js'

export default function Home() {
  const featuredProject = projects.find(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <>
      <Hero />

      <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="scroll-mt-6">
        <h2 id="work-heading" className="mb-6 text-2xl font-semibold tracking-tight">
          Selected work
        </h2>
        <FeaturedProject project={featuredProject} />
      </section>

      <div className="grid gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-14">
        <div>
          {otherProjects.map(project => (
            <article
              key={project.id}
              aria-labelledby={`${project.id}-heading`}
              className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-preview border border-border object-cover object-top"
              />
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 id={`${project.id}-heading`} className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted">{project.liveUrl ? 'Live project' : 'Local preview'}</p>
                </div>
                <p className="mt-2 text-muted">{project.description}</p>
                <p className="mt-2 text-sm text-muted">{project.technologies.join(' · ')}</p>
                {project.sourceUrl && (
                  <a className="text-link mt-2" href={project.sourceUrl}>View repository</a>
                )}
              </div>
            </article>
          ))}
        </div>

        <section
          id="contact"
          tabIndex={-1}
          aria-labelledby="contact-heading"
          className="scroll-mt-6 border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12"
        >
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight">
            Let’s connect.
          </h2>
          <p className="mt-2 text-muted">Find my projects and code on GitHub.</p>
          <a className="text-link mt-2" href="https://github.com/isaiasdevco">
            Visit my GitHub <ArrowUpRight />
          </a>
        </section>
      </div>
    </>
  )
}
