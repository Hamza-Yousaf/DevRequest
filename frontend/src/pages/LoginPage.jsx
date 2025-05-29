import React, { useState } from 'react'

const LoginPage = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    role: "",
    position: "",
    email: ""
  });

  const handleAddUser = async () => {
    if(!newUser.name || !newUser.role || !newUser.position || !newUser.email) {
      console.log("please proivde all fields");
      return {success: false, message: "Please provide all fields"}
    }

    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newUser)
    })
    
    const data = await res.json();
  }

  return (
    // <div>loginPage</div>

    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="flex justify-center items-center h-full w-full">
            <div className="w-100 h-150 bg-emerald-800 p-10 flex flex-col justify-between" >
                <div className="flex flex-col">
                    <h1 className='text-xl text-gray-900 mb-5 text-white'>Sign Up to <span className='font-bold text-orange-200'>DevRequest</span></h1>

                    <input type="text" placeholder='Username' className='relative w-full mt-4 p-2 bg-white rounded-sm border-2 border-gray-300 focus:border-orange-200 focus:border-2 focus:outline-none'
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value})}/>

                    <input type="text" placeholder='Role' className='relative w-full mt-4 p-2 bg-white rounded-sm border-2 border-gray-300 focus:border-orange-200 focus:border-2 focus:outline-none'
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value})}/>

                    <input type="text" placeholder='Position' className='relative w-full mt-4 p-2 bg-white rounded-sm border-2 border-gray-300 focus:border-orange-200 focus:border-2 focus:outline-none'
                    value={newUser.position}
                    onChange={(e) => setNewUser({ ...newUser, position: e.target.value})}/>

                    <input type="text" placeholder='Email' className='relative w-full mt-4 p-2 bg-white rounded-sm border-2 border-gray-300 focus:border-orange-200 focus:border-2 focus:outline-none'
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value})}/>
                </div>

                <button className='bg-gray-900 w-full h-auto p-2 rounded-sm text-white cursor-pointer'
                onClick={handleAddUser}>
                  Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage