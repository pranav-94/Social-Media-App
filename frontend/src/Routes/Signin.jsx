import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

const Signin =()=>{
    return(
        <>
        <SignInUser/>
        </>
    )
}

const SignInUser = ()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const addUser = async()=>{
        const signInRes = await axios.post('http://localhost:3000/api/v1/user/signIn',{
            email: email,
            password: password
        })
        console.log(signInRes.data.user.username)
        if(signInRes.data.msg === 'sign in successful'){
            navigate('/home',{state: {username: signInRes.data.user.username}})
            return
        }
    }

    return(
        <>
        <input type="text" placeholder="email" onChange={e=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="password" onChange={e=>{setPassword(e.target.value)}}/>
        <button onClick={addUser}>Sign In</button>
        </>
    )
}

export default Signin