import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
