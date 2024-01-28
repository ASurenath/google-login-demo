import React from 'react'
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Home(
    // {credetials,setCredentials}
    ) {
    const navigate=useNavigate()
    const handleLogout=()=>{
        googleLogout()
        // setCredentials("")
        navigate('/')
    }
  return (
    <div><h2>Home</h2>
    {/* <p>{credetials}</p> */}

        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Home