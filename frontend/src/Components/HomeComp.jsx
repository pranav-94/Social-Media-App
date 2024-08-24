import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import UserMsgs from "./UserMessages"
import { Audio,Hourglass } from 'react-loader-spinner'

const HomeContent = ()=>{

    const [arr,setArr] = useState([])
    const navigate = useNavigate()
    const Username = localStorage.getItem("username")
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        const messages = fetch('https://social-media-app-fekd.onrender.com/api/v1/user/retriveMessages').then(async(res)=>{
            const msgData= await res.json()
            setArr(msgData.data)
            setLoading(true)
        })
    },[])

    if(!loading){
        return(
            <div className="flex w-[100%]  justify-center h-[300px] items-center">
            <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#5D707B', '#5D707B']}
  />
            </div>
        )
    }

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