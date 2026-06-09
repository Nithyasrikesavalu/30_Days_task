import React, { useState } from 'react'

const LoginForm = () => {
  
  const[formData, setFormData]=useState ({email:'', password:''})
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
    const handleLogin=(e)=>{
        e.preventDefault()
        setError("");
        setSuccess("");
       if(!formData.email.includes('@')){
            setError("Invalid email address");
            return;
        }
        
        if(formData.password.length < 6){
            setError("Password must be at least 6 characters long");
            return
        } 
          setSuccess("Login successful");
    }

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 p-6">
    <div className="text-3xl font-bold text-gray-800 mb-6 text-center">Login Form</div>
    <input type="email" name='email' onChange={handleChange} placeholder='email' className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
    <input type="password" name='password' onChange={handleChange} placeholder='password' className='border-2 border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
    <button onClick={handleLogin} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Login</button>
    {error && <div className="text-red-500 mt-4">{error}</div>}
    {success && <div className="text-green-500 mt-4">{success}</div>}
    </div>
    </>
  )
}

export default LoginForm