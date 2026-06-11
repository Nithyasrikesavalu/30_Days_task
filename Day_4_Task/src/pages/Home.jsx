
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Day 3 Tasks
        </h1>

        <div className="flex flex-col gap-4">

          <Link
            to="/task1"
            className="bg-blue-500 text-white py-3 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-300"
          >
           Employee Salary Filter
          </Link>

          <Link
            to="/task2"
            className="bg-green-500 text-white py-3 px-4 rounded-lg text-center hover:bg-green-600 transition duration-300"
          >
            productCard
          </Link>

          <Link
            to="/task3"
            className="bg-purple-500 text-white py-3 px-4 rounded-lg text-center hover:bg-purple-600 transition duration-300"
          >
           FindSearch
          </Link>

          <Link
            to="/task4"
            className="bg-orange-500 text-white py-3 px-4 rounded-lg text-center hover:bg-orange-600 transition duration-300"
          >
           Carttotal
           </Link>

          <Link
            to="/task5"
            className="bg-red-500 text-white py-3 px-4 rounded-lg text-center hover:bg-red-600 transition duration-300"
          >
            Student management
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Home