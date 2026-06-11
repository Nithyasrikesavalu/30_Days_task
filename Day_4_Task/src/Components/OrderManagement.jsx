import React from 'react'

const OrderManagement = () => {

      const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
  ];
   const completedOrders = orders.filter((order) => order.status === "Completed");
   const foundOrder = orders.find((order) => order.id === 3);
   const totalRevenue = orders.reduce((total, order) => total + order.amount, 0);
  return (
    <>
    <h1>ALL ORDERS</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            {order.customer} - ₹{order.amount} - {order.status}
          </p>
        </div>
      ))}
      <h1>COmmplete Order</h1>

        {completedOrders.map((order) => (
        <div key={order.id}>
          <p>{order.customer}</p>
        </div>
      ))}
       <h1>Found Order</h1>
      <p>{foundOrder.customer}</p>

      <h1>Total Revenue</h1>
      <p>₹{totalRevenue}</p>
     
    </>

  )
}

export default OrderManagement