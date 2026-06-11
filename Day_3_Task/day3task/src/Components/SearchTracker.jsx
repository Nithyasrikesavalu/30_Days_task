import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const SearchTracker = () => {
const[search,setSearch]=useState("")
const previousvalue = useRef("")
const oldvalue = previousvalue.current


useEffect(()=>{
    previousvalue.current = search
},[search])



  return (
    <>
    <input type="text" value={search}
      onChange={(e)=>setSearch(e.target.value)} 
      name="search" placeholder="search"></input>

      <p> current value : {search}</p>
      <p>previousvalue : {oldvalue}</p>
    </>

  )
}

export default SearchTracker