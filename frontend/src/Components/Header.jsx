import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Header =()=>{
  
  const location = useLocation()
  const username = location.state.username
  const [profilePic , setProfilePic] = useState('')

  useEffect(()=>{
    const userImg = fetch(`http://localhost:3000/api/v1/user/userProfile?username=${username}`)
    .then(async(res)=>{
        const data = await res.json()
        setProfilePic(data.data.profilePic)
    })
},[])

  return(
    <div className="md:flex md:justify-center pt-3 pb-3 bg-slate-200 text-slate-900">
        <div className=" md:w-[87%] md:h-[65px] md:flex md:justify-between md:items-center  ">
             <p>App Name</p>
             <div className="md:w-[150px] md:flex md:justify-evenly md:items-center ">
                  <img src={profilePic} alt="" className="w-[50px] h-[50px] rounded-full"/>
                 <p className="">{username}</p>
             </div>
        </div>
    </div>
  )
}

export default Header