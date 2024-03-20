import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import UserMsgs from "./UserMessages"

const ProfileData = ()=>{
    return(
        <>
            <UserBox/>
        </>
    )
}

const UserBox = ()=>{

    const location = useLocation()
    const Username = localStorage.getItem("username")
    const name = localStorage.getItem("name")
    const[user,setUser] = useState('')
    const[profile,setProfile] = useState('')
    const[nickname,setNickname] = useState('')
    const[message,setMessage] = useState('')
    const [arr,setArr] = useState([])


    
    useEffect(()=>{
        const userData = fetch(`https://social-media-app-fekd.onrender.com/api/v1/user/userProfile?username=${Username}`)
        .then(async(res)=>{
            const data = await res.json()
            setUser(data.data.name)
            setArr(data.messageData)
            setProfile(data.data.profilePic)
            setNickname(data.data.username)
            setMessage(data.data.bio)
        })
    },[])

    return(
        <div>
            <MainprofileComp user={user} nickname={nickname} message={message} profile={profile}/>

            <div className="flex justify-center items-center flex-col">
            {
                    arr.map((messages)=>{
                        return (
             <UserMsgs  profilePic={messages.image} name={messages.name} username={messages.username} messages={messages.message} Username={Username} id={messages._id}/>
                    )})
        }
        </div>
            
        </div>
    )
}

const MainprofileComp = ({user,nickname,message,profile})=>{

const navigate = useNavigate()

const handleEdit = ()=>{
     navigate('/EditProfile',{state:{username:nickname,name:user,bio:message,profilePic:profile}})
}


    return(
        <div className="flex justify-center items-center mb-5">
<div className=" bg-slate-300 text-slate-900 shadow-2xl md:w-[90%] pt-5 md:flex md:flex-col rounded-lg mt-5">
           <div className=" md:flex md:justify-evenly md:items-center">
            <div className="md:w-[70%] md:flex md:justify-start md:items-center">
              <img className="w-[130px] h-[130px] rounded-full" src={profile} alt="" />
              <div className="flex flex-col mb-10 ml-5">
               <p className="text-[30px]">{user}</p>
               <p>@{nickname}</p>
               </div>
            </div>
            <button className="bg-slate-900 text-slate-200 w-[80px] h-[40px] rounded-lg" onClick={handleEdit}>Edit</button>
    </div>
    <p className="ml-10 pt-5 pb-5">{message}</p>
</div>
        </div>
    )
}


export default ProfileData