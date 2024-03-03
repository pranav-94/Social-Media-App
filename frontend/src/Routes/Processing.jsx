import axios from "axios"
import { useEffect, useState } from "react"

const GettingInfo = ()=>{
    return(
        <div>
            <p>Complete your profile now to use this app</p>

            <UserImg/>
        </div>
    )
}

const UserImg =()=>{

    const [files,setFiles] = useState(null)
    const[img,setImg ] = useState('')

    const handleImg = (e)=>{
        setImg(URL.createObjectURL(files))
    }

    return(
    <>
       <div>
          <img src={img} alt="" className="w-[60px] h-[60px] rounded-full"/>
          <input type="file" onChange={e=>{setFiles(e.target.files[0])}}/>
          <button onClick={handleImg}>Add Img</button>
       </div>

       <UserForm image={img}/>
    </>
    )
}

const UserForm = ({image})=>{

    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const[bio,setBio] = useState('')

    const updateInfo = async()=>{
            const update = await axios.put('http://localhost:3000/api/v1/user/onBoarding',{
                username: username,
                name: name,
                bio: bio,
                profilePic: image
            })
            console.log(update)

    }

    return(
        <div className="flex flex-col flex-wrap">
            <input type="text" className="text-center" onChange={e=>{setUsername(e.target.value)}} placeholder="Name"/>
            <input type="text" className="text-center" onChange={e=>{setName(e.target.value)}} placeholder="Username"/>
            <input type="text" className="text-center" onChange={e=>{setBio(e.target.value)}} placeholder="Bio"/>
            <button onClick={updateInfo}>Continue</button>
        </div>
    )
}

export default GettingInfo

