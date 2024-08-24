import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import UserMsgs from "./UserMessages"
import { Audio,Hourglass } from 'react-loader-spinner'

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
    const[loading ,setLoading] = useState(true)
    
    useEffect(()=>{
        const userData = fetch(`https://social-media-app-fekd.onrender.com/api/v1/user/userProfile?username=${Username}`)
        .then(async(res)=>{
            const data = await res.json()
            setUser(data.data.name)
            setArr(data.messageData)
            setProfile(data.data.profilePic)
            setNickname(data.data.username)
            setMessage(data.data.bio)
            setLoading(false)
        })
    },[])

    if(loading){
        return(
            <div className="flex w-[100%] justify-center h-[300px] items-center">
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
<div className=" bg-slate-300 text-slate-900 shadow-2xl md:w-[90%] w-[100vh] pt-5 flex flex-col rounded-lg mt-5 ml-20 md:ml-0">
           <div className=" flex justify-evenly items-center">
            <div className="w-[70%]  flex justify-start items-center">
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