import React, { useState } from 'react'

const FetchAndDisplay = () => {

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphone", price: 1500 },
  { id: 4, name: "Keyboard", price: 800 }
];
   const [search,setSearch]=useState("");
const filterproduct = products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));

  return (
   <>
   <input type='text' value={search} placeholder='search' onChange={(e)=>setSearch(e.target.value)}></input> 
   {filterproduct.length === 0 ? (<h3>product not found</h3>):
   (filterproduct.map((e,i)=>(
    <div key={i} className="border p-4 rounded-lg shadow-md bg-white mb-3">
        <p className="font-bold">{e.name}</p>
        <p>{e.price}</p>
    </div> 
   )))}
   </>
  )
}

export default FetchAndDisplay