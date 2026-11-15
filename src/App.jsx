import ArrowUpRight from './components/ui/ArrowUpRight.jsx'
import FoundationPreview from './sections/FoundationPreview.jsx'

export default function App() {
  return (
    <div className="page-container flex min-h-svh flex-col">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="flex items-center justify-between gap-4 border-b border-border py-6 sm:py-8">
        <a
          className="flex min-h-11 items-center gap-3 sm:gap-5"
          href="/"
          aria-label="Isaías Cordero, home"
        >
          <span className="monogram" aria-hidden="true">
            IC
          </span>
          <span className="border-l border-border pl-3 text-sm font-semibold sm:pl-5 sm:text-base">
            Isaías Cordero
          </span>
        </a>
        <a className="text-link text-sm" href="https://github.com/isaiasdevco">
          GitHub <ArrowUpRight />
        </a>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 items-center py-12 sm:py-16 lg:py-24"
      >
        <FoundationPreview />
      </main>

      <footer className="flex flex-col gap-2 border-t border-border py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Isaías Cordero</p>
        <p>
          Guayaquil, Ecuador
          <span aria-hidden="true" className="mx-2">/</span>
          A portfolio in progress
        </p>
      </footer>
    </div>
  )
}
