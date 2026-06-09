// import React, { useState } from 'react'

// const TodoCounter = () => {
//     const[tasks,setTasks] = useState ()
//     const[task ,setTask] = useState ([])

//     const handleChange = (e) => {
//         setTasks(e.target.value)
//     }
//    const handleSubmit = (e) => {
//     e.preventDefault()
//     setTask([...task,tasks])
//     setTasks('')
//    }
//     const handleDelete = (e) => {      
//           e.preventDefault()
//           const newTask = task.filter((item) => item !== tasks)
//             setTask(newTask)
//  const data = task
//   return (
//    <>
//       <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
//         <div className="mb-4 flex flex-col items-center">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="totalTasks">
//             Total Tasks
//           </label>
//           <input
//             type="text"
//             id="totalTasks"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter the tasks"
//           />
//           <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//             add task
//           </button>
  
//           </div>
//           <p className="text-gray-600 text-center">Total Tasks: {task.length}</p>
//           {task.length === 0 && <p className="text-gray-600 text-center">No tasks added </p>}
//            </form>
//          <div className="mt-6 text-center">
//            {data.map((item, index)=>(
//             <table className="min-w-full bg-white">
//                 <tr key={index} className="border-b">
//                     <td className="py-2">{item}</td>
//                     <td className="py-2"><button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
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

// export default TodoCounter

import React, { useState } from "react";

const TodoCounter = () => {

  const [task, setTask] = useState("");

 
  const [tasks, setTasks] = useState([]);

 
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  
  const handleDelete = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">

      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4">
        Todo Task Counter
      </h2>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mb-4">

        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter the task"
        />

        <button
          type="submit"
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <p className="text-center text-gray-600">
        Total Tasks: {tasks.length}
      </p>
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">
          No tasks added
        </p>
      )}

      <div className="mt-4">
        {tasks.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item}</span>

            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TodoCounter;