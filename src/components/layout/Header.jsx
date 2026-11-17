import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="page-container flex items-center justify-between gap-3 border-b border-border py-4">
      <Link
        to="/"
        aria-label="Isaías Cordero, home"
        className="flex min-h-11 items-center gap-5"
      >
        <span className="monogram" aria-hidden="true">IC</span>
        <span className="hidden border-l border-border pl-5 text-sm md:inline">
          Isaías Cordero
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="flex items-center sm:gap-2">
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
          <li><Link to="/#about" className="nav-link">About</Link></li>
          <li><Link to="/#contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
