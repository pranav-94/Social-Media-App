import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {atom} from 'recoil'
import { Link } from "react-router-dom"
import Signin from "./Signin"

const Signup = ()=>{
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center flex-wrap bg-slate-200">
        <User/>
        </div>
    )
}

const User = ()=>{
    const [username,setUsername ] = useState('')
    const [password,setPassword ] = useState('')
    const [email,setEmail ] = useState('')
    const navigate = useNavigate()

const addUser = async()=>{
     const res = await axios.post('https://social-media-app-fekd.onrender.com/api/v1/user/signup',{
        username: username,
        email: email,
        password: password
    })
    console.log(res.data.data.username)

    //Redirect to next route if success
    if(res.data.msg === 'success'){
        localStorage.setItem("username", res.data.data.username)
        localStorage.setItem("name",res.data.data.name)
        navigate('/processing')
        return
    }
}

    return(
        <div className="w-[400px] h-[500px] flex flex-wrap flex-col justify-evenly bg-slate-900 text-slate-200 pl-5 pr-5 items-center shadow-lg rounded-lg">
            <p className="text-[25px] mb-5 w-[280px] text-start">Create Account</p>
        <input type="text" className=" bg-slate-900 pb-4  border-b-2 w-[280px] h-[30px] border-slate-400 hover:border-green-500 outline-none" placeholder="username" onChange={e=>{setUsername(e.target.value)}}/>
        <input type="text" placeholder="email address" className="outline-none bg-slate-900  border-b-2 w-[280px] pb-4 h-[30px] border-slate-400 hover:border-green-500" onChange={e=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="password" className=" w-[280px] h-[30px] bg-slate-900  border-b-2 pb-4 border-slate-400 hover:border-green-500 outline-none" onChange={e=>{setPassword(e.target.value)}}/>
        <button className="bg-green-500 w-[280px] h-[40px] rounded-lg text-[17px]" onClick={addUser}>Add User</button>

        <p>Already have an account? <Link to='/signIn'>Sign In</Link></p>
        
        </div>
    )
}

export default Signup