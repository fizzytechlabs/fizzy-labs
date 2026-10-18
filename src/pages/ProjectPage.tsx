import { Link, useParams } from 'react-router-dom'
import { DocumentTitle } from '../components/DocumentTitle'
import { PageShell } from '../components/PageShell'
import { getProject } from '../content/site'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <PageShell>
        <DocumentTitle title="Not found — Fizzy Labs" />
        <section className="not-found">
          <p className="eyebrow">404</p>
          <h1>nothing here yet.</h1>
          <Link className="text-link" to="/">
            return home ↗
          </Link>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <DocumentTitle title={`${project.title} — Fizzy Labs`} />
      <article className="editorial-page project-page">
        <header className="project-header">
          <Link className="back-link" to="/#projects">
            ← selected work
          </Link>
          <div className="project-heading">
            <p className="project-number">{project.number}</p>
            <h1>{project.title}</h1>
            <p className="project-deck">{project.description}</p>
          </div>
          <dl className="project-facts">
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                <span className="status-dot" aria-hidden="true" />
                {project.status}
              </dd>
            </div>
          </dl>
        </header>

        <p className="project-introduction">{project.introduction}</p>

        <div className="project-sections">
          {project.sections.map((section) => (
            <section key={section.label}>
              <p className="eyebrow">{section.label}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        {project.slug === 'fizzy-os' && (
          <aside className="coming-soon" aria-label="Fizzy OS launch status">
            <span>Reserved address</span>
            <strong>{project.futureUrl?.replace('https://', '')}</strong>
            <span>coming soon</span>
          </aside>
        )}
      </article>
    </PageShell>
  )
}
