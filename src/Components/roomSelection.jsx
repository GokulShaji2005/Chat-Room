import React from 'react'
import { useRef } from 'react'
import Chatroom from './Chatroom';
const RoomSelection = ({setRoom}) => {
const roomInputRef=useRef(null);

  return (
    <div className='text-purple-600 flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='w-full  md:w-1/2  max-w-md border bg-white text-center p-8 rounded-lg shadow-lg m-4'>
      {/* <h1 className='text-3xl font-bold mb-6'>Sign-Up</h1> */}
    <div className='w-full mb-4 '>
      <label htmlFor="room" className='flex flex-start font-semibold text-xl'>Enter the Room Name:</label>
        <input 
        type="text" 
        name="room" 
        id="room" 
      ref={roomInputRef}
        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'/>
    
    </div>
        <button type="button"
        className='w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition '
        onClick={()=>setRoom(roomInputRef.current.value)}
        >Enter Chat</button>
</div>
</div>
  )
}

export default RoomSelection