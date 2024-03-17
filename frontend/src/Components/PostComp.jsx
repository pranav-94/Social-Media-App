import axios from "axios"
import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"

const PostLogic = ()=>{

    const location = useLocation()
    const username = location.state.username
    console.log(username)
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

    console.log(nickname)

    const handlePost=async ()=>{
    const sendPost = await axios.post('http://localhost:3000/api/v1/user/sendmessage',{
    username: username,
    message: message,
    name: nickname,
    image: img
  })
  console.log(sendPost)
}

console.log(message)

    return(
        <div className="md:flex md:flex-col md:justify-evenly md:h-[350px]  md:items-center">
        <input className="md:w-[500px]  md:h-[250px] bg-slate-300 " type="text" onChange={e=>{setMessage(e.target.value)}}/>
        <button className="bg-slate-900 text-slate-200 w-[150px] h-[40px] rounded-lg text-[17px]" onClick={handlePost}>Post</button>
        </div>
    )
}

export default PostLogic
