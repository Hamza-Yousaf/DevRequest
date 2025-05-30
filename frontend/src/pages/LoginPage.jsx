import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const loginPage = () => {
  const [details, setDetails] = useState({
    name: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    if(!details.name || !details.password) {
      console.log("please proivde all fields");
      return {success: false, message: "Please provide all fields"}
    }

    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(details)
    })
    
    const data = await res.json();

    console.log(data.message);

    if(data.success) {
      navigate("/dashboard");
    }

  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="flex justify-center items-center h-full w-full">
            <div className="w-100 h-150 bg-emerald-800 p-10 flex flex-col justify-between" >
                <div className="flex flex-col">
                    <h1 className='text-xl text-gray-900 mb-5 text-white'>Login to <span className='font-bold text-orange-200'>DevRequest</span></h1>

                    <input type="text" placeholder='Username' className='relative w-full mt-4 p-2 bg-white rounded-sm border-2 border-gray-300 focus:border-orange-200 focus:border-2 focus:outline-none'
                    value={details.name}
                    onChange={(e) => setDetails(prev => ({ ...prev, name: e.target.value }))}/>

                    <input type="password" placeholder='Password' className='relative w-full mt-4 p-2 bg-white rounded-sm border-2 border-gray-300 focus:border-orange-200 focus:border-2 focus:outline-none'
                    value={details.password}
                    onChange={(e) => setDetails(prev => ({ ...prev, password: e.target.value }))}/>
                </div>

                <button className='bg-gray-900 w-full h-auto p-2 rounded-sm text-white cursor-pointer'
                onClick={handleLogin}>
                  Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default loginPage