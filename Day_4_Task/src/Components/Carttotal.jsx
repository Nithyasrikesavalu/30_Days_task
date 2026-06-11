import React from 'react'

const Carttotal = () => {
const cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 500 },
    { product: "Keyboard", price: 1500 }
  ];
  const cartvalue = cart.reduce((total,num)=>total +num.price,0)
  return (
    <>
     <h1>CartTotal</h1>
     <p>Total Amount :{cartvalue}</p>
    </>
  )
}

export default Carttotal