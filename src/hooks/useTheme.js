import { useEffect, useState, useSyncExternalStore } from 'react'

const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')

function subscribe(onChange) {
  systemPreference.addEventListener('change', onChange)
  return () => systemPreference.removeEventListener('change', onChange)
}

function getSystemTheme() {
  return systemPreference.matches ? 'dark' : 'light'
}

function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null
  } catch {
    return null
  }
}

export default function useTheme() {
  const systemTheme = useSyncExternalStore(subscribe, getSystemTheme)
  const [preference, setPreference] = useState(getSavedTheme)
  const theme = preference ?? systemTheme

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-bg').trim()
  }, [theme])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setPreference(nextTheme)
    try {
      localStorage.setItem('portfolio-theme', nextTheme)
    } catch {
      // Keep the choice for this session when storage is unavailable.
    }
  }

  return { theme, toggleTheme }
}
