import React from 'react'

const Productard = () => {
      const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 }
  ];

  return (
    <>
    {
        products.map((e)=>(

            <div key={e.id}  className="w-64 bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition">
                <p  className="text-xl font-semibold text-gray-800">{e.name}</p>
                <p  className="text-xl font-medium text-gray-800">{e.price}</p>
            </div>
        ))
    }
    </>
  )
}

export default Productard