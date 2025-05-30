import React, { useState } from 'react'

const DashboardPage = () => {
  const [selectedSort, setSelectedSort] = useState();
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [selectedStatuss, setSelectedStatuss] = useState([]);

  const toggleSelection = (value, selectedArray, setSelectedArray) => {
    if(selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter(item => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  }

  const displaySelected = (text, onClick, isSelected) => {
    return (
      <button
      key={text}
      onClick={onClick}
      className={`cursor-pointer w-full px-3 py-2 text-sm text-left 
        ${isSelected ? 'bg-emerald-200 font-semibold' : 'bg-gray-50 hover:bg-gray-100'} text-emerald-900`}
      >
      {text}
      </button>
    )

  }

  return (
    // <div>DashboardPage</div>

    <div className="">

      <nav className='w-full h-10 bg-gray-100 flex items-center justify-between fixed px-5 py-6 z-10 shadow-xl'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#065f46" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <h1 className='text-2xl text-emerald-800 font-bold'>DevRequest</h1>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#065f46" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </nav>

      <div className="flex flex-col p-4 absolute h-[calc(100vh-2.5rem)] w-50 bg-gray-100 z-0 top-10 overflow-y-auto">
        <h4 className='mt-5 text-md mb-5 '>Overview</h4>

        <div className="">

          <h4 className='text-sm mb-2 text-emerald-800'>Sort by</h4>

          <div className="bg-white w-40 h-75 shadow-sm self-center h-auto">
            
            {['ALL', 'Newest', 'Deadline', 'Priority'].map(option =>
              displaySelected(option, () => toggleSelection(option, selectedRoles, setSelectedRoles), selectedRoles.includes(option))
            )}

            <h4 className='pl-3 pt-2 font-weight mt-4'>Role</h4>
            {['Frontend', 'Backend', 'Fullstack'].map(role =>
              displaySelected(role, () => toggleSelection(role, selectedRoles, setSelectedRoles), selectedRoles.includes(role))
            )}

            <h4 className='pl-3 pt-2 underline mt-4'>Position</h4>
            {['Intern', 'Junior', 'Senior', 'Lead'].map(pos =>
              displaySelected(pos, () => toggleSelection(pos, selectedPositions, setSelectedPositions), selectedPositions.includes(pos))
            )}

            <h4 className='pl-3 pt-2 underline mt-4'>Status</h4>
            {['Open', 'Claimed', 'Completed', 'Abandoned'].map(status =>
              displaySelected(status, () => toggleSelection(status, selectedStatuss, setSelectedStatuss), selectedStatuss.includes(status))
            )}

          </div>

        </div>
      </div>
    </div>

  )
}

export default DashboardPage