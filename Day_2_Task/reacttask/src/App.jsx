import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import PriceCalculator from './Components/PriceCalculator'
import StudentGradeSystem from './Components/StudentGradeSystem'
import EmployeeSalary from './Components/EmployeeSalary'
import TodoCounter from './Components/TodoCounter'
import UserSearch from './Components/UserSearch'
import LoginForm from './Components/LoginForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<PriceCalculator />} />
        <Route path='/student' element={<StudentGradeSystem />} />
        <Route path='/employee' element={<EmployeeSalary />} />
        <Route path='/todo' element={<TodoCounter />} />
        <Route path='/search' element={<UserSearch />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App