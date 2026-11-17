import ProjectCard from '../components/projects/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  return (
    <div className="py-12 md:py-14">
      <h1 className="hero-title">Projects</h1>
      <p className="mt-4 max-w-xl text-muted">
        Web projects from my studies and practice, with screenshots and the technologies I used.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  )
}
