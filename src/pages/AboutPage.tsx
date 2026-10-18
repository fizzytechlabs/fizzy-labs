import { DocumentTitle } from '../components/DocumentTitle'
import { PageShell } from '../components/PageShell'

const interests = [
  'programming & python',
  'telegram bots & automation',
  'web development & ui/ux',
  'motion graphics & after effects',
  'music production',
  'creative technology',
]

export function AboutPage() {
  return (
    <PageShell>
      <DocumentTitle title="About — Fizzy Labs" />
      <article className="editorial-page about-page">
        <header className="page-intro">
          <p className="eyebrow">About</p>
          <h1>hey, i&apos;m fizzy.</h1>
        </header>

        <div className="prose lead-prose">
          <p>
            i&apos;m a singapore-based creative who enjoys building things, experimenting with technology,
            and turning random ideas into real projects.
          </p>
          <p>
            from telegram bots to interactive web experiences, i like exploring the space between
            technology and creativity.
          </p>
          <p>
            i care about how things work, but also how they feel to use. sometimes the result is useful.
            sometimes it exists because making it sounded fun.
          </p>
        </div>

        <section className="interest-section" aria-labelledby="interests-title">
          <h2 className="section-label" id="interests-title">
            Things I keep coming back to
          </h2>
          <ul className="interest-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  )
}
