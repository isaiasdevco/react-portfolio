import { useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import profile from './data/profile.js'

const pageTitles = {
  '/': `${profile.name} | ${profile.role}`,
  '/projects': 'Projects | Isaías Cordero',
  '/about': 'About | Isaías Cordero',
}

export default function App() {
  const location = useLocation()
  const previousLocation = useRef(location)

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/'
    document.title = pageTitles[pathname] ?? 'Page not found | Isaías Cordero'

    // Move focus with the page, while keeping the initial tab order intact.
    if (previousLocation.current !== location || location.hash) {
      const target = document.getElementById(location.hash.slice(1) || 'main-content')
      target?.focus({ preventScroll: true })

      if (location.hash) {
        target?.scrollIntoView()
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }

    previousLocation.current = location
  }, [location])

  return (
    <div className="flex min-h-svh flex-col">
      <Link className="skip-link" to={{ hash: '#main-content' }}>
        Skip to content
      </Link>

      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className="page-container flex-1"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
