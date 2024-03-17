import { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom"

const SearchUsers = ()=>{

    const [userData,setUserData] = useState([])
    const [filter,setFilter] = useState([])
    const[query,setQuery] = useState('')


useEffect(()=>{
    fetch('https://social-media-app-fekd.onrender.com/api/v1/user/allusers')
    .then(async(res)=>{
        const users = await res.json()
        setUserData(users.data)
    })
},[])

useEffect(()=>{
    const filterData = userData.filter(user=>
         user.username.toLowerCase().includes(query.toLowerCase())
    )
    setFilter(filterData)
},[query,userData])

    return(
        <>
        <input type="text" placeholder="search" value={query} onChange={e=>{setQuery(e.target.value)}}/>
        {
                 filter.map((user)=>{
                    return(
                        <>
                          <p>{user.username}</p>
                        </>
                    )
                 })
             }
        </>
    )
}


export default SearchUsers


