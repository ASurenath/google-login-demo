import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Auth(
    // {credetials,setCredentials}
) {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1 style={{ textAlign: 'center' }}>Please login with google</h1>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        // setCredentials(`${credentialResponse.credential}`);
                        console.log(credentialResponse);
                        navigate('/home')
                    }}
                    onError={() => {
                        console.log('Login Failed');
                        // auto_select
                    }}

                />
            </div>
        </div>
    )
}

export default Auth