import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate=useNavigate()
    const [inputData, setinputData] = useState({
       email:"",password:""
    })
    // const [unameInvalid, setunameInvalid] = useState(false)
    const [emailInvalid, setemailInvalid] = useState(false)
    const [passwordInvalid, setpasswordInvalid] = useState(false)

    const setData=(e)=>{
        const {name,value}=e.target
        // if(name=='username'){
        //     if(value.match(/^[a-zA-Z ]+$/)){
        //         setunameInvalid(false)
        //     }
        //     else{
        //         setunameInvalid(true)
        //     }
        // }
        if(name=='email'){
            if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
                setemailInvalid(false)
            }
            else{
                setemailInvalid(true)
            }
        }
        else if(name=='password'){
            if(value.match(/^[a-z]{1,}[A-Z]{1,}[0-9]{1,}$/)){
                setpasswordInvalid(false)
            }
            else{
                setpasswordInvalid(true)
            }
        }
        setinputData({...inputData,[name]:value})
    }
    console.log(inputData);
    return (
            
            <div className=''>
            <h1 className='fw-light text-center pb-3'>Register</h1>
                {/* <FloatingLabel controlId="floatingInput1" label="Username" className="mb-3">
                    <Form.Control onChange={(e)=>setData(e)} name="username" type="email" placeholder="username" />
                </FloatingLabel>

                {
                unameInvalid &&
                <div>
                    <p className='text-danger'>Invalid username</p>
                </div>
                } */}


                <FloatingLabel controlId="floatingInput2" label="Email address" className="mb-3">
                    <Form.Control onChange={(e)=>setData(e)} name="email" type="email" placeholder="name@example.com" />
                </FloatingLabel>

                {
                emailInvalid &&
                <div>
                    <p className='text-danger'>Invalid email</p>
                </div>
                }
                <FloatingLabel controlId="floatingPassword"  label="Password"className="mb-3">
                    <Form.Control onChange={(e)=>setData(e)} name="password" type="password" placeholder="Password" />
                </FloatingLabel>
                {/* {
                passwordInvalid &&
                <div>
                    <p className='text-danger'>Invalid password</p>
                </div>
                } */}
<div className='text-end'>
                    <input onClick={()=>navigate('/home')} type="button" value="Submit"  className='btn btn-success'/>
    
</div>
            </div>
    )
}

export default Register