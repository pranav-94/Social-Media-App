import { useEffect, useState } from "react"
import { Audio,Hourglass } from 'react-loader-spinner'
import { useFetcher, useLocation, useNavigate } from "react-router-dom"

const SearchUsers = ()=>{

    const [userData,setUserData] = useState([])
    const [filter,setFilter] = useState([])
    const[query,setQuery] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const [loading,setLoading] = useState(false)
    const Username = localStorage.getItem("username")


useEffect(()=>{
    fetch('https://social-media-app-fekd.onrender.com/api/v1/user/allusers')
    .then(async(res)=>{
        const users = await res.json()
        setUserData(users.data)
        setLoading(true)
    })
},[])

// const filterMainUser = userData.filter((user)=>{
//     return !(user.username.toLowerCase().includes(Username.toLowerCase()))
//  })

useEffect(()=>{
    const filterData = userData.filter(user=>
         user.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilter(filterData)
},[query,userData])

if(!loading){
    return(
        <div className="md:flex md:w-[100%] md:justify-center md:h-[300px] md:items-center">
        <Hourglass
visible={true}
height="80"
width="80"
ariaLabel="hourglass-loading"
wrapperStyle={{}}
wrapperClass=""
colors={['#5D707B', '#5D707B']}
/>
        </div>
    )
}

    return(
        <div className="md:flex md:flex-col md:justify-evenly md:items-center">
        <input className="md:w-[100vh] h-[40px] rounded-md mt-5 mb-5 pl-3 bg-slate-300 text-slate-900 shadow-lg" type="text" placeholder="search" value={query} onChange={e=>{setQuery(e.target.value)}}/>
        {
                 filter.map((user)=>{
                    return(
                        <div className="w-[100vh] h-[110px] bg-slate-300 text-slate-900 mt-5 mb-5 flex justify-around items-center rounded-lg shadow-lg">
                            <div className="md:flex ">
                            <img src={user.profilePic} alt="" className="w-[50px] h-[50px] rounded-full mr-3"/>
                            <div className="md:flex md:flex-col">
                         <p>{user.name}</p>
                         <p>@{user.username}</p>
                         </div>
                         </div>
                            <button onClick={()=>{
                                 navigate('/otherProfile',{state:{name: user.name}}) 
                            }} className="w-[70px] h-[30px] rounded-md bg-slate-900 text-slate-200">View
                          </button>
                         </div>
                    )
                 })
             }
        </div>
    )
}


export default SearchUsers


