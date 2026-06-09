import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide drop-shadow-lg text-center">
          ✨ Welcome to Day_2_Task ✨
        </h1>

        <div className="min-h-screen bg-gray-100 flex flex-wrap items-center justify-center gap-4 p-6">

          <Link to="/login">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
              Login Validation
            </button>
          </Link>

          <Link to="/product">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600">
              Product Price Calculator
            </button>
          </Link>

          <Link to="/student">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600">
              Student Grade System
            </button>
          </Link>

          <Link to="/employee">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600">
              Employee Salary
            </button>
          </Link>

          <Link to="/todo">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600">
              Todo Task Counter
            </button>
          </Link>

          <Link to="/search">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600">
              User Search
            </button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Home