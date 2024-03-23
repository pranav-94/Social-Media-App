import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UserMsgs = ({profilePic,name,username,messages,Username,id})=>{
    const navigate = useNavigate()
    // const [likes,setLikes] = useState(false)

    // const handleLikes = ()=>{
    //     setLikes(!likes)
    // }
    // console.log(likes)


    return(
    <>
        <div  className="md:w-[90%] bg-slate-300 hover:bg-slate-400 text-slate-900  pt-8 md:flex shadow-lg rounded-lg mt-5 mb-5 pb-8 md:justify-center pointer md:items-start transition-all ease-in-out duration-300" >
<img onClick={()=>{
                navigate('/otherProfile',{state:{name:name}})
            }} className="w-[50px] h-[50px] cursor-pointer rounded-full mr-5" src={profilePic} alt="" />
            <div className="w-[70%] ">
                    <p onClick={()=>{
                navigate('/otherProfile',{state:{name:name}})
            }} className="text-[20px] cursor-pointer font-semibold">{name}</p>
                    <p onClick={()=>{
                navigate('/otherProfile')
            }} className="mb-3 cursor-pointer">@{username}</p>
                    <p className="cursor-pointer" onClick={()=>{
        navigate('/comments',{state:{username:Username,name:name,profilePic:profilePic,message:messages,Username:username,id:id}}) 
    }}>{messages}</p>  
    {/* <div className="md:flex md:justify-between md:mt-7 cursor-pointer">
    <p onClick={handleLikes}>Likes</p>
    <p>Comments</p>
    <p>Bookmarks</p>
    </div> */}
            </div>       
        </div>
 </>
            )
    }
        
export default UserMsgs