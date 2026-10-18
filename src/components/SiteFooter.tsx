import { siteConfig } from '../content/site'

function ConfigurableLink({ label, url, note }: { label: string; url: string | null; note: string }) {
  if (!url) {
    return (
      <span className="placeholder-link" aria-disabled="true" title={note}>
        {label}
      </span>
    )
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="social-links" aria-label="Social and contact links">
        {siteConfig.socials.map((social) => (
          <ConfigurableLink key={social.label} {...social} />
        ))}
        <ConfigurableLink label="email" url={siteConfig.email.url} note={siteConfig.email.note} />
      </nav>
      <p>© {siteConfig.year} fizzy labs.</p>
    </footer>
  )
}
