import { useState } from "react"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Signin =()=>{
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center flex-wrap bg-slate-200">
        <SignInUser/>
        </div>
    )
}

const SignInUser = ()=>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const addUser = async()=>{
        const signInRes = await axios.post('https://social-media-app-fekd.onrender.com/api/v1/user/signIn',{
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
        <div className="w-[400px] h-[450px] flex flex-wrap flex-col justify-evenly bg-slate-900 text-slate-200 pl-5 pr-5 items-center shadow-lg rounded-lg">
         <p className="text-[25px] mb-5 w-[280px]     text-start">Sign In</p>

        <input type="text" className="outline-none bg-slate-900 pb-4  border-b-2 w-[280px] h-[30px] border-slate-400 hover:border-green-500" placeholder="email" onChange={e=>{setEmail(e.target.value)}}/>

        <input type="text" className="outline-none bg-slate-900 pb-4  border-b-2 w-[280px] h-[30px] border-slate-400 hover:border-green-500" placeholder="password" onChange={e=>{setPassword(e.target.value)}}/>

        <button className="bg-green-500 w-[280px] h-[40px] rounded-lg text-[17px]" onClick={addUser}>Sign In</button>
        <p>Don't have an account? <Link to='/'>Sign Up</Link></p>

        </div>
    )
}

export default Signin