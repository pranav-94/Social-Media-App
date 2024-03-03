import axios from "axios"
import { useEffect, useState } from "react"

const Suggest = ()=>{

    const [username,setUsername] = useState([])


    useEffect(async()=>{
    const showAccs = await axios.get('http://localhost:3000/api/v1/user/suggestedUsers')
    setUsername(showAccs.data.data)
    console.log(showAccs.data.data)
},[])


    return(
        <>
           <div className='md:w-[100%] md:h-[100vh]  md:flex md:flex-col md:justify-evenly md:items-center bg-orange-500 hidden'>
            <p>Suggested Users</p>
               <div>
                {
                  username.map((item)=>{
                    return(
                        <>
                        <div className="w-[200px] h-[60px] bg-slate-100 mt-5 mb-5 flex justify-center items-center flex-col">
                         <p>{item.username}</p>
                         <p>{item.username}</p>
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