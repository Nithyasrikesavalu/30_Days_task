import React from 'react'

const StudentManagement = () => {
    const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Karthik", mark: 45 },
    { id: 3, name: "Vijay", mark: 92 },
    { id: 4, name: "Ajay", mark: 35 }
  ];
    const passed = students.filter((student)=>student.mark>50)
    const found = students.find((student)=>student.id==3)
    const total = students.reduce((total,item)=>total+item.mark,0)
    const averge = total/students.length;

  return (
    <>
    <h1>ALL STUDENTS</h1>
    {
        students.map((student)=>(
            <div key={student.id}>
                <p>{student.name}:{student.mark}</p>
            </div>
        ))

    }
    <h1>STUDENT PASSED EXAM</h1>
     {passed.map((stu)=>(
          <div key={stu.id}>
            <p>{stu.name}</p>
          </div>
     ))
      }
   <h2>Found Student</h2>
   <p>{found.name}</p>
   <p>TOTAL:{total}</p>
   <p>AVERAGE:{averge}</p>

    
    
    </>
  )
}

export default StudentManagement