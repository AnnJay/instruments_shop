import { Route, Routes } from 'react-router-dom'

import { CategoryPage, HomePage } from './pages'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:categoryType" element={<CategoryPage />} />
    </Routes>
  )
}
