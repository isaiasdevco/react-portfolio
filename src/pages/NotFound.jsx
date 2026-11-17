import { Link } from 'react-router'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'

export default function NotFound() {
  return (
    <div className="py-16 md:py-24">
      <p className="mb-2 text-primary">404</p>
      <h1 className="hero-title">Page not found</h1>
      <p className="mt-4 max-w-lg text-muted">
        This address doesn’t match a page on my portfolio. You can return home or browse my projects.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
        <Link className="button-primary" to="/">Back to home</Link>
        <Link className="text-link" to="/projects">
          View projects <ArrowUpRight />
        </Link>
      </div>
    </div>
  )
}
