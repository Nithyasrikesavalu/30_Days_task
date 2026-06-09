// import React, { useState } from 'react'

// const TodoCounter = () => {
//     const[tasks,setTasks] = useState ()

//     const handleChange = (e) => {
//         setTasks(e.target.value)
//     }
//     const data = {tasks}

//   return (
//    <>
//       <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
//         <div className="mb-4 flex flex-col items-center">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="totalTasks">
//             Total Tasks
//           </label>
//           <input
//             type="number"
//             id="totalTasks"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter the tasks"
//           />
//           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//             add task
//           </button>
  
//           </div>
//            </form>
//          <div className="mt-6 text-center">
//            {data.map((item, index)=>(
//             <table className="min-w-full bg-white">
//                 <tr key={index} className="border-b">
//                     <td className="py-2">{item}</td>
//                     <td className="py-2"><button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//                         delete
//                     </button>
//                     </td>
//                 </tr>
//             </table>
//            ))}
//         </div>
//    </>
//   )
// }
//
// export default TodoCounter