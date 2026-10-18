import { DocumentTitle } from '../components/DocumentTitle'
import { PageShell } from '../components/PageShell'
import { ProjectRow } from '../components/ProjectRow'
import { projects } from '../content/site'

export function HomePage() {
  return (
    <PageShell>
      <DocumentTitle title="Fizzy Labs — developer, creative, curious human" />
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">hello, i&apos;m fizzy.</h1>
        <p className="hero-statement">
          i build things for the internet.
          <br />
          sometimes useful. sometimes just because.
        </p>
        <p className="hero-meta">
          developer / creative / curious human
          <br />
          based in singapore.
        </p>
      </section>

      <section className="work-section" id="projects" aria-labelledby="work-title">
        <h2 className="section-label" id="work-title">
          Selected work
        </h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
