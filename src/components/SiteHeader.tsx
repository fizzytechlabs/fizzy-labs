import { NavLink } from 'react-router-dom'

export function SiteHeader() {
  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Fizzy Labs home">
        fizzy labs.
      </NavLink>
      <nav className="primary-nav" aria-label="Primary navigation">
        <NavLink to="/#projects">projects</NavLink>
        <NavLink to="/about">about</NavLink>
      </nav>
    </header>
  )
}
