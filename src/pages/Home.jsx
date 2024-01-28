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
    <p>You have successfully logged in.</p>

        <button onClick={handleLogout} className='btn btn-secondary'>
            Logout
        </button>
    </div>
  )
}

export default Home