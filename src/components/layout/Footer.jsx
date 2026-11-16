export default function Footer() {
  return (
    <footer className="page-container flex flex-col gap-2 border-t border-border py-6 text-sm text-muted sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} Isaías Cordero</p>
      <p>Guayaquil, Ecuador</p>
    </footer>
  )
}
