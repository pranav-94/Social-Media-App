import axios from "axios"
import { useState,useEffect } from "react"
import { useAsyncError, useLocation } from "react-router-dom"

const PostLogic = ()=>{

    const location = useLocation()
    const username = localStorage.getItem("username")
    const [message,setMessage] = useState('')
    const[nickname,setNickname] = useState('')
    const[img,setImg] = useState('')

    useEffect(()=>{
        const userData = fetch(`https://social-media-app-fekd.onrender.com/api/v1/user/userProfile?username=${username}`)
        .then(async(res)=>{
            const data = await res.json()
            setNickname(data.data.name)
            setImg(data.data.profilePic)
        })
    },[])

    const handlePost=async ()=>{
    const sendPost = await axios.post('https://social-media-app-fekd.onrender.com/api/v1/user/sendmessage',{
    username: username,
    message: message,
    name: nickname,
    image: img
  })
}


    return(
        <div className="flex flex-col justify-evenly h-[350px]  items-center">
        <textarea cols="30" rows="10" className="md:w-[500px] outline-none shadow-md h-[250px] w-[300px] ml-20 md:ml-0 bg-slate-300 " type="text" onChange={e=>{setMessage(e.target.value)}}> </textarea>
        <button className="bg-slate-900 text-slate-200 md:w-[500px] w-[200px] ml-20 md:ml-0 h-[40px] rounded-lg text-[17px]" onClick={handlePost}>Post</button>
        </div>
    )
}



export default PostLogic
