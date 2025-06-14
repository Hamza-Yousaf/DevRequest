import React from 'react'

const Task = ({ task }) => {
    const roles = task.roles.join(", ");
    const created = task.createdAt;
    const date = new Date(created);
    const positions = task.positions.join(", ");

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}, ${hours}:${minutes}`;

  return (
    <div className='flex flex-col bg-white w-65 h-70 flex shadow-md p-4 m-2'>
        <div className="items-center justify-between mb-2">
            <div className='flex justify-between mb-1'>
                <h4 className='font-bold'>{roles}</h4>
                <h4 className='text-gray-500'>{task.author}</h4>
            </div>
            <h4 className='text-blue-500'>{positions}</h4>
            <div className="flex justify-between">
                <h4 className='text-green-500'>{task.status}</h4>
                <h4 className='text-red-500'>{task.deadline}</h4>
                <h4 className='text-red-900'>{task.priority}</h4>
            </div>
        </div>
        <div className='bg-gray-100 h-0.5 w-full'></div>
        <div className="my-2">{task.description}</div>
        <div className='bg-gray-100 h-0.5 w-full'></div>
        <h4 className='text-sm text-gray-500 my-1'>{formattedDate}</h4>
        <div className='flex justify-between items-end h-full'>
            <button className='bg-green-300 w-full hover:bg-green-400 mr-2 p-1'>{task.status}</button>
            <button className='bg-green-300 w-full hover:bg-green-400 p-1'>View</button>
        </div>
    </div>
  )
}

export default Task