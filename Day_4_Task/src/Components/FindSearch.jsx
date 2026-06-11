import React from 'react'

const FindSearch = () => {
  const users = [
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" }
  ];
      
    const user = users.find((e)=> e.id == 2)
  return (
    <>

      <h1> Find_Search </h1>
        <p> ID :{user.id}</p>
      <p> name :{user.name}</p>
    
    </>
  )
}

export default FindSearch