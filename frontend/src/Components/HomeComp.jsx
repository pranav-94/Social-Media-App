import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import UserMsgs from "./UserMessages"

const HomeContent = ()=>{

    const [arr,setArr] = useState([])
    const navigate = useNavigate()
    const Username = localStorage.getItem("username")
    
    useEffect(()=>{
        const messages = fetch('https://social-media-app-fekd.onrender.com/api/v1/user/retriveMessages').then(async(res)=>{
            const msgData= await res.json()
            console.log(msgData)
            setArr(msgData.data)
        })
    },[])

    return(
        <div className="flex justify-center items-center flex-col">
            {
                    arr.map((messages)=>{
                        return (
             <UserMsgs  profilePic={messages.image} name={messages.name} username={messages.username} messages={messages.message} Username={Username} id={messages._id}/>
                    )})
        }
        </div>
    )
}

export default HomeContent