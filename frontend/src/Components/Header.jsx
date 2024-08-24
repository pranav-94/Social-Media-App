import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Header =()=>{
  
  const location = useLocation()
  const username = localStorage.getItem("username")
  const [profilePic , setProfilePic] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const userImg = fetch(`https://social-media-app-fekd.onrender.com/api/v1/user/userProfile?username=${username}`)
    .then(async(res)=>{
        const data = await res.json()
        setProfilePic(data.data.profilePic)
    })
},[])

  return(
    <div className="flex justify-center pt-3 pb-3 bg-slate-200 text-slate-900">
        <div className=" w-[87%] h-[65px] flex justify-between items-center  ">
          <div className="flex">
            <img src="favicon.ico" className="w-[30px] h-[30px] mr-2" alt="" />
             <p>SocialPulse</p>
          </div>
             <div className="w-[150px] flex justify-evenly items-center ">
                  <img src={profilePic} alt="" className="w-[50px] h-[50px] rounded-full"/>
                 <p className="">{username}</p>
             </div>
        </div>
    </div>
  )
}

export default Header