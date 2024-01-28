import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import login from '../assets/login.png'
import { Col, Container, Row } from 'react-bootstrap';
import Register from './Register';

function Auth(
    // {credetials,setCredentials}
) {
    const navigate = useNavigate()
    return (
        <div>
                <Row>
                    <Col lg={8} className='text-left'>
                        
                        <img src={login} className='img-fluid' alt="" />
                    </Col>
                    <Col lg={4}style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        
                        <div  >
                            <Register/>
                            <hr/>
    
                            <p style={{ textAlign: 'center' }}>Or login with google</p>
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
                    </Col>
                </Row>
            
        </div>
    )
}

export default Auth