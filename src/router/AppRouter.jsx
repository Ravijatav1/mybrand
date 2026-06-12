import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import MainLayout from '../layouts/MainLayout'
import { routes } from '../config/routes'
import NotFound from '../pages/NotFound/NotFound'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div className="page-loader">Loading…</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
