import React, { useState } from 'react'

const EmployeeSalary = () => {

    const [data, setData] = useState ({ name: '', salary: 0 })
    const [show, setShow] = useState(0)
    const [bonus, setBonus] = useState(0)
        

const handlechange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value })
}
const handleclick = (e) => {
    e.preventDefault();
    const result =  Number(data.salary);
    let bonusAmount = 0;

    if (result >= 30000) {
        bonusAmount = 5000;
    } else if (result >= 20000) {
        bonusAmount  = 3000;
    } else {
        bonusAmount = 1000;
    }
    setShow(result + bonusAmount)
    setBonus(bonusAmount)
}
    return (
        <>
            <div className="text-4xl font-bold text-center mt-10 text-gray-800 drop-shadow-lg">
                Employee Salary Bonus Calculator
            </div>
            <form className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
                <input type="text" name='name' onChange={handlechange} placeholder='Enter Employee Name' className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
                <input type="number" name="salary" onChange={handlechange} placeholder="Enter Employee Salary" className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
                <button type='submit' onClick={handleclick} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Calculate Bonus</button>
            </form>
            <div className='mt-4 items-center justify-center text-center'>
                <p className='text-lg font-bold'>Employee Name: {data.name}</p>
                <p className='text-md font-semibold'>Employee Salary: {data.salary}</p>
                <p className='text-md font-semibold'>Bonus Amount: {bonus}</p>
                <p className='text-md font-semibold'>Total Salary with Bonus: {show}</p>
            </div>
            
        </>
    )
}

export default EmployeeSalary