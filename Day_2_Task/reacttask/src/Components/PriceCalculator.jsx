import React, { useState } from 'react'

const PriceCalculator = () => {
  const [data, setData] = useState({ name: '', price: 0, quantity: 0 })
  const [total, setTotal] = useState(0)
  const [show, setShow] = useState("")
  const handlechange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleclick = (e) => {
    e.preventDefault();
    const result = data.price * data.quantity ;
    setTotal(result);
    if (result > 5000) {
      setShow("Discount Eligible")
    } else {
      setShow("discount not eligible")
    }
  }


  return (
    <>
    <div className="text-4xl font-bold text-center mt-10 text-gray-800 drop-shadow-lg">
      product price calculator
      </div>
      <form className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
        <input type="text" name='name' onChange={handlechange} placeholder='Enter Product Name' className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
        <input type="number" name="price" onChange={handlechange} placeholder="Enter Product Price" className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
        <input type="number" name="quantity" onChange={handlechange} placeholder="Enter the Quantity" className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full' />
        <button type='submit' onClick={handleclick} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Calculate Total Price</button>
      </form>
      <div className='mt-4 items-center justify-center text-center'>
        <p className='text-lg font-bold'>Product Name: {data.name}</p>
        <p className='text-lg font-bold'>Total Price: ${total}</p>
        <p className='text-md font-semibold'>Discount Status: {show}</p>
      </div>
    </>
  )
}

export default PriceCalculator