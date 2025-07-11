import { useState } from 'react'
import { SignUp } from './Components/auth.jsx'
import './App.css'
import RoomSelection from './Components/roomSelection.jsx'
import Chatroom from './Components/Chatroom.jsx'
import Cookies from 'universal-cookie'

const cookies= new Cookies();
function App() {


  const [isAuth, setisAuth] = useState(cookies.get('auth-token'));
  const [room,setRoom]=useState(null);
  

 
  
  if(!isAuth){
    return(
      <SignUp  setisAuth={setisAuth} />
    )
  }
 

  return (
    <div>
      {room ? (
        <Chatroom room={room} isAuth={isAuth} setisAuth={setisAuth} />
      ) : (
        <RoomSelection  setRoom={setRoom}/> 
      )}
    </div>
  )
 
}

export default App
