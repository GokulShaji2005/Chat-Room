import React, { useEffect, useState,useRef } from 'react'
import { addDoc ,collection,serverTimestamp,onSnapshot,query,where,orderBy,getDoc,doc,deleteDoc,setDoc} from 'firebase/firestore';

import { db,Auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';


 
const cookies=new Cookies();
const Chatroom = ({room,isAuth,setisAuth}) => {
const [Newmessage,setnewMessage]=useState("");
const [message,setMessage]=useState([]);
const [members,setMembers]=useState([]);
const messageRef=collection(db,'Messages')
const scrollRef=useRef(null);
const bottomRef=useRef(null);

const user=Auth.currentUser;
const signUserOut= async ()=>{
  await signOut(Auth);
  cookies.remove("auth-token")
  setisAuth(false)

}
const nearBottom=()=>{
  const container=scrollRef.current;
  if(!container){
    return false;
  }


  const threshold=100;
  const position=container.scrollTop + container.clientHeight;
  const height=container.scrollHeight;

  return height-position <= threshold;
}

useEffect(()=>{
  const queryMessages=query(messageRef,where("room","==",room),
   orderBy("createdAt"));

  const clean=onSnapshot(queryMessages,(snapshot)=>{
  let groupMessage=[];
 snapshot.forEach((doc)=>{
    groupMessage.push({...doc.data(),id:doc.id});
  })
  
  setMessage(groupMessage);
})
return ()=>clean()
},[])

useEffect(()=>{
  if(nearBottom()){
    bottomRef.current?.scrollIntoView({behavior:'smooth'})
  }
},[message])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Newmessage === "") {
      return;
    }

    await addDoc(messageRef, {
      text: Newmessage,
      createdAt: serverTimestamp(),
      user: Auth.currentUser.displayName,
      room:room,
    });

    setnewMessage("");
  };


  return (
    <div className='max-w-3xl  h-screen md:h-[80vh]  mx-auto p-4 flex flex-col shadow-lg border border-gray-200'>
  
     <div className='text-white text-3xl bg-purple-600 flex justify-between p-4 rounded-t-sm'>
      {/* <button type="button" onClick={}>arrow</button> */}
      <h1>{room}</h1>
     <button
    type="button"
    onClick={signUserOut}
    className="text-sm bg-white text-purple-700 px-3 py-1 rounded hover:bg-purple-100 transition"
  >
    Sign out
  </button>
      </div>
   
      <div className='overflow-y-auto h-80 border p-3 rounded-b-sm bg-white flex-1' ref={scrollRef}>
         
        {message.map((msg) => (
          <div key={msg.id} className="mb-3 flex items-start">
            <div className="font-semibold text-purple-700 mr-2">{msg.user}:</div>
            <div className="bg-gray-100 rounded px-3 py-2 text-gray-800 break-words max-w-[70%]">
              {msg.text}
            </div>
          </div>
          
                ))}
                <div ref={bottomRef}></div>
      </div>
      <form onSubmit={handleSubmit} className='flex gap-2 mt-4'>
        <input
          type="text"
          name="message"
          id="message"
          placeholder='Type your message...'
          onChange={(e) => setnewMessage(e.target.value)}
          value={Newmessage}
          className='border p-2 rounded w-full'
        />
        <button
          type="submit"
          className='bg-purple-600 text-white px-4 py-2 rounded'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatroom