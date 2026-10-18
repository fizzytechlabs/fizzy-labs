import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView()
      } else {
        window.scrollTo({ top: 0 })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>
    </>
  )
}
