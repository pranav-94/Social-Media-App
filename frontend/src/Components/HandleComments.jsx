import { useLocation, useNavigate } from "react-router-dom"
import UserMsgs from "./UserMessages"
import axios from "axios"
import { useEffect, useState } from "react"

const HandleComment = ()=>{
    return(
        <div className="flex justify-center items-center flex-col ">
        <MessageCard/>
        <CommentCard/>
        </div>
    )
}

const MessageCard = ()=>{
     const location = useLocation()
     console.log(location)

     return(
        <UserMsgs profilePic={location.state.profilePic} name={location.state.name} username={location.state.Username} messages={location.state.message} Username={location.state.username} />
     )
}

const CommentCard = ()=>{

    const [comment,setComment] = useState('')
    const [arr,setArr] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.state.id
    console.log(id)
    const Username = (location.state.username)

    const handlePost = async()=>{
    const addComment = await axios.post('http://localhost:3000/api/v1/user/comments',{
        id: id,
        comment: comment,
        username: location.state.username
    })
    console.log(addComment)
}
    
useEffect(()=>{
    const getComments = fetch(`http://localhost:3000/api/v1/user/retriveComments?id=${id}`).then(async(res)=>{
       const result = await res.json()
       setArr(result.data)
       console.log(result.data)
    })
},[])

console.log(arr)

    return(
        <div className="md:w-[90%]">
            <div className="  shadow-md bg-slate-300 flex md:justify-around md:items-center">
             <input className=" md:w-[70%] bg-slate-300 outline-none h-[80px]" type="text" onChange={e=>{setComment(e.target.value)}} placeholder="Post Comment"/>
             <button className="bg-slate-900 text-slate-200 rounded-lg w-[90px] h-[40px]" onClick={handlePost}>Reply</button>
             </div>
             <div className="flex flex-col mt-[50px]  border-slate-500">
             <p className="md:text-[25px] md:ml-7">Comments</p>
                {
                    arr.map((comment)=>{
                        return(
                            <>
                               <div  className="md:w-[100%] bg-slate-200  text-slate-900 pt-8 md:flex  mt-5 mb-5 md:justify-center pointer md:items-start transition-all ease-in-out duration-300 border-t-[1px] border-slate-500 " >
<img onClick={()=>{
                navigate('/otherProfile',{state:{username:Username,name:comment.name}})
            }} className="w-[50px] h-[50px] cursor-pointer rounded-full mr-5" src={comment.profilePic} alt="" />
            <div className="w-[80%] ">
                    <p onClick={()=>{
                navigate('/otherProfile',{state:{username:Username,name:comment.name}})
            }} className="text-[20px] cursor-pointer font-semibold">{comment.name}</p>
                    <p onClick={()=>{
                navigate('/otherProfile',{state:{username:Username,name:comment.name}})
            }} className="mb-3 cursor-pointer">@{comment.username}</p>
                    <p className="" >{comment.comment}</p>
            </div>
                               
        </div>
                            </>
                        )
                    })
                }
             </div>
        </div>
    )
}

export default HandleComment