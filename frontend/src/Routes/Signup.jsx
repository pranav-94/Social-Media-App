import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {atom} from 'recoil'
import { Link } from "react-router-dom"
import Signin from "./Signin"

const userAtom = atom({
    key: 'userName',
    default: ''
})

const Signup = ()=>{
    return(
        <>
        <User/>
        </>
    )
}

const User = ()=>{
    const [username,setUsername ] = useState('')
    const [password,setPassword ] = useState('')
    const [email,setEmail ] = useState('')
    const navigate = useNavigate()

const addUser = async()=>{
     const res = await axios.post('http://localhost:3000/api/v1/user/signup',{
        username: username,
        email: email,
        password: password
    })
    console.log(res.data.data.username)

    //Redirect to next route if success
    if(res.data.msg === 'success'){
        navigate(`/home`,{state: {username:res.data.data.username }})
        return
    }
}

    return(
        <>
        <input type="text" placeholder="username" onChange={e=>{setUsername(e.target.value)}}/>
        <input type="text" placeholder="email" onChange={e=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="password" onChange={e=>{setPassword(e.target.value)}}/>
        <button onClick={addUser}>Add User</button>

        <p>Already have an account? <Link to='/signIn'>Sign In</Link></p>
        
        </>
    )
}

export default Signup