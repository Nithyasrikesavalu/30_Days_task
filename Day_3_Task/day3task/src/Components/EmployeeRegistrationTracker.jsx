import React, { useState } from 'react'

const EmployeeRegistrationTracker = () => {

   const [formdata,setFormdata]=useState({name:"", dept:"",salary:0}) 
   const handlechange =(e)=>{
      setFormdata({...formdata,[e.target.name] : e.target.value});
   };
   const[employees,setEmployees]=useState([])
   
    const handlesubmit=(e)=>{
      e.preventDefault();
      setEmployees([...employees,formdata])
    }
  return (
   <>
   <div className="max-w-2xl mx-auto mt-10 p-6">
     <h2 className="text-2xl font-bold text-center">
          Employee Registration
        </h2>
    <form  onSubmit={handlesubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <input type='text' className="w-full border rounded-md p-2" onChange={handlechange} name='name' placeholder='Employee Name '></input>
        <input type='text' className="w-full border rounded-md p-2" onChange={handlechange}  name='dept' placeholder='Enter Department '></input>
        <input type='number' className="w-full border rounded-md p-2" onChange={handlechange}  name='salary' placeholder='Enter employee salary '></input>
        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" >Submit</button>
    </form>
    <h3 className="text-xl font-semibold mt-6 mb-4">Total Employees : {employees.length} </h3>
    {employees.map((e,i)=>(
      <div key={i} className="border rounded-lg p-4 shadow-sm bg-white" > 
          <p>Name : {e.name}</p>
          <p>Deparitment : {e.dept}</p>
          <p>salary : {e.salary} </p>
      </div>
    ))}
   </div>
   </>
  )
}

export default EmployeeRegistrationTracker