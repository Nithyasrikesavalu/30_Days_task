import React, { useState } from 'react'

const StudentGradeSystem = () => {

    const [data, setData] = useState ({ name: '', mark: 0,})
    const [show, setShow] = useState("")
    const handlechange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleclick = (e) => {
        e.preventDefault();
        if (data.mark >= 90 ) {
            setShow(" Grade A  ")
        } else if(data.mark >= 75 ) {
            setShow(" Grade B ")
        } else if(data.mark >= 50 ) {
            setShow(" Grade C ")
        }else{
             setShow(" fail ")
        }
           
    
    }

    return (
        <>
            <div className="text-4xl font-bold text-center mt-10 text-gray-800 drop-shadow-lg">
                Student Grade System
            </div>
            <form className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
                <input type="text" name='name' onChange={handlechange} placeholder='Enter Student Name' className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
                <input type="number" name="mark" onChange={handlechange} placeholder="Enter Student Mark" className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
                <button type='submit' onClick={handleclick} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Calculate Grade</button>
            </form>
            <div className='mt-4 items-center justify-center text-center'>
                <p className='text-lg font-bold'>Student Name: {data.name}</p>
                <p className='text-md font-semibold'>Grade: {show}</p>
            </div>

        </>
    )
}

export default StudentGradeSystem