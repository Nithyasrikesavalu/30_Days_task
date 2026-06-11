import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EmployeeRegistrationTracker from './Components/EmployeeRegistrationTracker'
import FetchAndDisplay from './Components/FetchAndDisplay'
import { ProductSearchSystem } from './Components/ProductSearchSystem'
import SearchTracker from './Components/SearchTracker'
import DarkModeToggle from './Components/DarkModeToggle'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<EmployeeRegistrationTracker />} />|
      <Route path="/task2" element={<FetchAndDisplay />} />
      <Route path="/task3" element={<ProductSearchSystem />} />
      <Route path="/task5" element={<SearchTracker />} />
      <Route path="/task4" element={<DarkModeToggle />} />



    </Routes>

  )
}

export default App