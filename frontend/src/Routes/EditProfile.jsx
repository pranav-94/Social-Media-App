import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const GetInfo = ()=>{
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center flex-wrap bg-slate-200">
        <div className="w-[500px] h-[500px] flex flex-wrap flex-col justify-evenly bg-slate-900 text-slate-200 pl-5 pr-5 items-center shadow-lg rounded-lg">
            <p className="text-[22px] font-semibold text-slate-300 mb-5  ">Edit Profile</p>

            <UserImg/>
        </div>
        </div>
    )
}

const UserImg =()=>{

    const [img,setImg] = useState('')
    const location = useLocation()

    return(
    <>
       <div className="md:flex justify-evenly w-[400px] items-center">
          <img src={img} alt="" className="w-[70px] h-[70px] rounded-full"/>
          <input className="outline-none bg-slate-900 pb-4  border-b-2 w-[280px] h-[30px] border-slate-400 hover:border-green-500" type="text" placeholder="Enter pic url" onChange={e=>{setImg(e.target.value)}}/>
       </div>

       <UserForm image={img} setImage={setImg}/>
    </>
    )
}

const UserForm = ({image,setImage})=>{

    const location = useLocation()
    const user = location.state.username
    const Name = location.state.name
    const profilePic = location.state.profilePic
    const Bio = location.state.bio
    const [name,setName] = useState('')
    const[bio,setBio] = useState('')
    const navigate = useNavigate()

    if(name === '' && bio === '' && image === ''){
        setName(Name)
        setBio(Bio)
        setImage(profilePic)
    }

    const updateInfo = async()=>{
            const update = await axios.put(`http://localhost:3000/api/v1/user/editProfile?username=${user}`,{
                name: name,
                bio: bio,
                profilePic: image
            })

            navigate('/profile',{state:{username:localStorage.getItem("username")}})

    }

    return(
        <div className="w-[400px]  flex flex-col flex-wrap justify-evenly items-center h-[200px] ">
            <input className="outline-none bg-slate-900 pb-4  border-b-2 w-[350px] h-[30px] border-slate-400 hover:border-green-500" type="text"  onChange={e=>{setName(e.target.value)}} placeholder="Name"/>
            <input className=" bg-slate-900 pb-4  border-b-2 w-[350px] h-[60px] border-slate-400 hover:border-green-500 outline-none" type="text"  onChange={e=>{setBio(e.target.value)}} placeholder="Bio"/>
            <button className="bg-green-500 w-[350px] h-[40px] rounded-lg text-[17px]" onClick={updateInfo}>Continue</button>
        </div>
    )
}

export default GetInfo

