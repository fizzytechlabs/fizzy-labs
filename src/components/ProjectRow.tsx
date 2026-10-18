import { Link } from 'react-router-dom'
import type { Project } from '../content/site'

export function ProjectRow({ project }: { project: Project }) {
  const content = (
    <>
      <span className="project-number" aria-hidden="true">
        {project.number}
      </span>
      <span className="project-copy">
        <strong>{project.title}</strong>
        <span>{project.description}</span>
      </span>
      <span className="project-arrow" aria-hidden="true">
        ↗
      </span>
      <span className="sr-only">View {project.title}</span>
    </>
  )

  const destination = project.externalUrl ?? (project.slug === 'fizzy-os' ? project.futureUrl : undefined)

  if (destination) {
    return (
      <a className="project-row" href={destination}>
        {content}
      </a>
    )
  }

  return (
    <Link className="project-row" to={`/projects/${project.slug}`}>
      {content}
    </Link>
  )
}
