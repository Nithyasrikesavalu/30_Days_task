import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EmployeeSalaryFilter from './Components/EmployeeSalaryFilter'
import Productard from './Components/Productard'
import FindSearch from './Components/FindSearch'
import Carttotal from './Components/Carttotal'
import StudentManagement from './Components/StudentManagement'
import OrderManagement from './Components/OrderManagement'



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={< EmployeeSalaryFilter/>} />|
      <Route path="/task2" element={<Productard/>} />
      <Route path="/task3" element={<FindSearch />} />
      <Route path="/task4" element={<Carttotal/>} />
      <Route path="/task5" element={<StudentManagement />} />
      <Route path="/task6" element={<OrderManagement/>} />


    </Routes>

  )
}

export default App