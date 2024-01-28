import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='499195029269-cud61eoeh11skv0ecue8bcq15coiohj3.apps.googleusercontent.com'>
      <BrowserRouter>
      <App />
      </BrowserRouter>
     
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
