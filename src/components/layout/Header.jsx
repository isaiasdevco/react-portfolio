const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="page-container flex items-center justify-between gap-3 border-b border-border py-4">
      <a
        href="#home"
        aria-label="Isaías Cordero, home"
        className="flex min-h-11 items-center gap-5"
      >
        <span className="monogram" aria-hidden="true">IC</span>
        <span className="hidden border-l border-border pl-5 text-sm md:inline">
          Isaías Cordero
        </span>
      </a>
      <nav aria-label="Main navigation">
        <ul className="flex items-center sm:gap-2">
          {navigation.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link"
                aria-current={label === 'Home' ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
