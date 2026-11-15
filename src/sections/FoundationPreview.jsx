import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'

export default function FoundationPreview() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <div className="lg:col-span-7">
        <p className="eyebrow mb-6">Personal portfolio / Frontend development</p>
        <h1 id="intro-heading" className="intro-heading">
          Hi, I’m Isaías.<br />
          I build for <span className="text-primary">the web.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted sm:mt-8">
          I’m a Computer Engineering student at UCSG. I’m learning to turn
          ideas into clear, useful interfaces, one project at a time.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10">
          <a className="button-primary" href="https://github.com/isaiasdevco">
            Explore my GitHub <ArrowUpRight />
          </a>
          <a className="text-link" href="#background">
            A little about me <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <aside
        id="background"
        aria-labelledby="background-heading"
        className="background-card scroll-mt-8 lg:col-span-5"
      >
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="eyebrow text-primary">A little background</p>
          <span className="status-dot" aria-hidden="true" />
        </div>
        <h2 id="background-heading" className="text-display font-serif leading-tight">
          Learning<br />by building.
        </h2>
        <dl className="mt-8 divide-y divide-border">
          <div className="pb-5">
            <dt className="mb-2 text-sm text-muted">Education</dt>
            <dd className="font-medium">Computer Engineering</dd>
            <dd className="mt-1 text-sm text-muted">Universidad Católica de Santiago de Guayaquil</dd>
          </div>
          <div className="py-5">
            <dt className="mb-2 text-sm text-muted">Focus</dt>
            <dd className="font-medium">Frontend development</dd>
          </div>
        </dl>
        <div className="border-t border-border pt-5">
          <p className="mb-3 text-sm text-muted">Working with</p>
          <ul aria-label="Technologies" className="flex flex-wrap gap-2">
            <li className="technology-tag">JavaScript</li>
            <li className="technology-tag">React</li>
            <li className="technology-tag">CSS</li>
          </ul>
        </div>
      </aside>
    </section>
  )
}
