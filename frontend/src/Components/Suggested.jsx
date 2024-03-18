import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"


const Suggest = ()=>{

    const [user,setUser] = useState([])
    const location = useLocation()
    const Username = localStorage.getItem("username")
    const navigate = useNavigate()

    useEffect(()=>{
        const handleData = async()=>{
         const showAccs = await axios.get('https://social-media-app-fekd.onrender.com/api/v1/user/suggestedUsers')
     setUser(showAccs.data.data)
        }
     handleData()
 },[])

 const filterMainUser = user.filter((user)=>{
    return !(user.username.toLowerCase().includes(Username.toLowerCase()))
 })

    return(
        <>
           <div className='md:w-[100%] md:mt-[50px] md:h-[100vh]  md:flex md:flex-col md:justify-evenly md:items-center sticky top-0 bg-slate-200 text-slate-900 hidden'>
            <p>Suggested Users</p>
               <div>
                {
                  filterMainUser.map((item)=>{
                    return(
                        <>
                        <div className="w-[310px] h-[110px] bg-slate-900 text-slate-200 mt-5 mb-5 flex justify-evenly items-center rounded-lg">
                            <img src={item.profilePic} alt="" className="w-[50px] h-[50px] rounded-full"/>
                            <div>
                         <p>{item.name}</p>
                         <p>@{item.username}</p>
                            </div>
                            <button onClick={()=>{
                                 navigate('/otherProfile',{state:{username:localStorage.getItem("username"),name:item.name}}) 
                            }} className="w-[70px] h-[30px] rounded-md bg-slate-200 text-slate-900">View
                          </button>
                         </div>
                        </>
                    )
                  })
                }
               </div>
           </div>
        </>
    )
}

export default Suggest