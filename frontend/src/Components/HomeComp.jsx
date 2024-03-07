import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import UserMsgs from "./UserMessages"

const HomeContent = ()=>{

    const [arr,setArr] = useState([])
    
    useEffect(()=>{
        const messages = fetch('http://localhost:3000/api/v1/user/retriveMessages').then(async(res)=>{
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