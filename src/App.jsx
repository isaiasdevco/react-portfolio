import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className="page-container flex-1"
      >
        <Home />
      </main>
      <Footer />
    </div>
  )
}
