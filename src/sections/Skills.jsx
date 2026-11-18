import skills from '../data/skills.js'

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="mt-12 border-t border-border pt-8 md:mt-14">
      <h2 id="skills-heading" className="text-2xl font-semibold tracking-tight">Skills & tools</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-3">
        {skills.map(group => (
          <div key={group.title}>
            <h3 className="font-semibold">{group.title}</h3>
            <p className="mt-2 text-sm text-muted">{group.description}</p>
            <ul aria-label={`${group.title} technologies`} className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary">
              {group.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
