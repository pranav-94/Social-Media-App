import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import UserMsgs from "./UserMessages"

const HomeContent = ()=>{

    const [arr,setArr] = useState([])
    
    useEffect(()=>{
        const messages = fetch('https://social-media-app-fekd.onrender.com/api/v1/user/retriveMessages').then(async(res)=>{
            const msgData= await res.json()
            console.log(msgData)
            setArr(msgData.data)
        })
    },[])

    return(
        <>
             <UserMsgs arr={arr}/>
        </>
    )
}

export default HomeContent
