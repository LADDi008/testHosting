import React, { useState } from 'react'
import axios from "axios"

function SignUp() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');

    const handleSubmit= async()=>{
        const data = {
            name,email,password
        }
        try {
            const response = await axios.post("http://localhost:8001/createUser",data)
            console.log(response.data);
        } catch (error) {

            console.log(error);
        }
    }

    const handleGet = async()=>{
 
        try {
            const response = await axios.get("http://localhost:8001/allUser")
            console.log(response.data);
        } catch (error) {

            console.log(error);
        }
    }
  return (
    <div className='flex border-red-500 items-center justify-center h-screen'>
        <div>
            <ul className='list-none'>
<li>
<input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
</li>
<li>
<input type='text' value={email} onChange={e=>setEmail(e.target.value)}></input>
    
</li>
    <li>
    <input type='text' value={password} onChange={e=>setPassword(e.target.value)}></input>
        </li>            
<li className='flex justify-between'>
<input type='button' value={"SignUP"} onClick={handleSubmit}/>
<input type='button' value={"Get Data"} onClick={handleGet}/>
</li>
            </ul>
        </div>


    </div>
  )
}

export default SignUp