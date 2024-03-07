import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import UserMsgs from "./UserMessages"

const AllProfileData = ()=>{
    return(
        <>
            <UserBox/>
        </>
    )
}

const UserBox = ()=>{

    const location = useLocation()
    const username = location.state.username 
    const name = location.state.name
    const[user,setUser] = useState('')
    const[profile,setProfile] = useState('')
    const[nickname,setNickname] = useState('')
    const[message,setMessage] = useState('')
    const [arr,setArr] = useState([])


    
    useEffect(()=>{
        const userData = fetch(`http://localhost:3000/api/v1/user/AlluserProfile?name=${name}`)
        .then(async(res)=>{
            const data = await res.json()
            setUser(data.data.name)
            console.log(data.data.name)
            setArr(data.messageData)
            setProfile(data.data.profilePic)
            setNickname(data.data.username)
            setMessage(data.data.bio)
        })
    },[])

    return(
        <div>
            <MainprofileComp user={user} nickname={nickname} message={message} profile={profile}/>

            <UserMsgs arr={arr} profile={profile} nickname={nickname}/>
            
        </div>
    )
}

const MainprofileComp = ({user,nickname,message,profile})=>{
    return(
        <div className="flex justify-center items-center mb-5">
<div className=" bg-slate-300 text-slate-900 shadow-lg md:w-[90%] pt-5 md:flex md:flex-col rounded-lg mt-5">
           <div className=" md:flex md:justify-around">
            <div className="md:w-[70%] md:flex md:justify-start md:items-center">
              <img className="w-[130px] h-[130px] rounded-full" src={profile} alt="" />
              <div className="flex flex-col mb-10 ml-5">
               <p className="text-[30px]">{user}</p>
               <p>@{nickname}</p>
               </div>
            </div>
            <button className="">Follow</button>
    </div>
    <p className="ml-10 pt-5 pb-5">{message}</p>
</div>
        </div>
    )
}


export default AllProfileData