import { Link, NavLink } from 'react-router'
import ThemeToggle from '../ui/ThemeToggle.jsx'

export default function Header() {
  return (
    <header className="page-container grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 border-b border-border py-4 sm:grid-cols-[1fr_auto_auto]">
      <Link
        to="/"
        aria-label="Isaías Cordero, home"
        className="col-span-2 flex min-h-11 w-fit items-center gap-5 sm:col-span-1"
      >
        <span className="monogram" aria-hidden="true">IC</span>
        <span className="border-l border-border pl-5 text-sm">
          Isaías Cordero
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="flex items-center sm:gap-2">
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}
