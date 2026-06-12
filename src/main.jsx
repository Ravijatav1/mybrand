import { StrictMode, Suspense } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles/global.css'

const rootElement = document.getElementById('root')

// react-snap ke saath prerendering ke liye:
// Agar page already server-rendered hai toh hydrate karo
// Warna fresh render karo
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <HelmetProvider>
        <Suspense fallback={<div className="page-loader">Loading…</div>}>
          <App />
        </Suspense>
      </HelmetProvider>
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <Suspense fallback={<div className="page-loader">Loading…</div>}>
          <App />
        </Suspense>
      </HelmetProvider>
    </StrictMode>
  )
}
