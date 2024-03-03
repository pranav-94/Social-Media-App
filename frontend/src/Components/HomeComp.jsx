import { useEffect, useState } from "react"

const HomeContent = ()=>{

    const [arr,setArr] = useState([])
    const[username,setUsername] = useState('')
    const[message,setMessage] = useState('')

    useEffect(()=>{
    const messageData = fetch('http://localhost:3000/api/v1/user/retriveMessages')
    .then(async(res)=>{
        const msg = await res.json()
        setArr(msg.data)
    })
},[])

    return(
        <>
            <h1>Home</h1>
            <div>
            {
                arr.map((users)=>{
                    return(
                    <div className="md:mt-5 md:mb-5">
                         <p>{users.username}</p>
                         <p>{users.message}</p>
                    </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default HomeContent