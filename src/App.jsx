import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CategoryPage, HomePage, InstrumentPage } from './pages'
import { InstrumentContext } from './context'

export const App = () => {
  const [instrument, setInstrument] = useState(null)

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryType" element={<CategoryPage />} />
        <Route
          path="/:categoryType/:instrumentId"
          element={<InstrumentPage />}
        />
      </Routes>
    </InstrumentContext.Provider>
  )
}
