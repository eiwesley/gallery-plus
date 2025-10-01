import { BrowserRouter, Route, Routes } from 'react-router'
import LayoutMain from './pages/layout-main'
import PageComponents from './pages/page-components'
import PageHome from './pages/page-home'
import PagePhotoDetails from './pages/page-photo-details'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/fotos/:id" element={<PagePhotoDetails />}></Route>
          <Route path="/componentes" element={<PageComponents />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
