import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const ProfileData = ()=>{
    return(
        <>
            <UserBox/>
        </>
    )
}

const UserBox = ()=>{

    const location = useLocation()
    const username = location.state.username 
    const[user,setUser] = useState('')
    const [arr,setArr] = useState([])

    console.log(username)
    
    useEffect(()=>{
        const userData = fetch(`http://localhost:3000/api/v1/user/userProfile?username=${username}`)
        .then(async(res)=>{
            const data = await res.json()
            setUser(data.data.username)
            setArr(data.messageData)
            console.log(data.messageData)
        })
    },[])

    return(
        <>
           <div>
               <p>{user}</p>
           </div>

           <div>
                {
                    arr.map((messages)=>{
                        return (
                            <div className="md:mt-5 md:mb-5">
                               <p>{messages.username}</p>
                               <p>{messages.message}</p>
                            </div>
                        )
                    })
                }
           </div>
        </>
    )
}

export default ProfileData