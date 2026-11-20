let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
try {
  const savedTheme = localStorage.getItem('portfolio-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme
} catch {
  // Use the system preference when storage is unavailable.
}
document.documentElement.dataset.theme = theme
