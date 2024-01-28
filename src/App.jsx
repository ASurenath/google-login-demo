import { useState } from 'react'
import './App.css'
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'



function App() {
  const [credentials, setCredentials] = useState("")

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Auth
      //  credentials={credentials} setCredentials={setCredentials}
       />}/>
      <Route path={'/home'} element={<Home 
      // credentials={credentials} setCredentials={setCredentials}
      />}/>

    </Routes>
    </>
  )
}

export default App
