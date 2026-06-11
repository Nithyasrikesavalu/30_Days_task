import React from 'react'

const EmployeeSalaryFilter = () => {

const employees = [
  { id: 1, name: "John", salary: 25000 },
  { id: 2, name: "David", salary: 45000 },
  { id: 3, name: "Sam", salary: 60000 },
  { id: 4, name: "Peter", salary: 30000 }
];


 const filterdata = employees.filter((e)=>e.salary > 40000)



  return (
  <>

   <h2>Employees with Salary Greater than 40,000</h2>
  {filterdata.map((e,i)=>(
    <div key={i}>
   <h1>{e.name}</h1>
   <p>{e.salary}</p>
    </div>

  ))
}
  
  </>
  )
}

export default EmployeeSalaryFilter