import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const PostLogic = ()=>{

    const location = useLocation()
    const username = location.state.username
    console.log(username)
    const [message,setMessage] = useState('')

    const handlePost=async ()=>{
    const sendPost = await axios.post('http://localhost:3000/api/v1/user/sendmessage',{
    username: username,
    message: message
  })
  console.log(sendPost)
}

console.log(message)

    return(
        <>
        <input className="md:w-[300px] md:h-[400px] bg-green-300" type="text" placeholder="send message here" onChange={e=>{setMessage(e.target.value)}}/>
        <button onClick={handlePost}>Post Message</button>
        </>
    )
}

export default PostLogic