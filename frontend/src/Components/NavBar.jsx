import { Link, useLocation, useNavigate } from "react-router-dom"

const Nav = ()=>{
    return(
        <>
        <NavComponent/>
        </>
    )
}

const NavComponent = ()=>{
    const navigate = useNavigate()
    const location = useLocation()

    const searchUser = ()=>{
        const username = location.state.username
        const userId = location.state.userId
        console.log(username)
        navigate('/search',{state:{username:username,userId: userId}})
    }

    const Home = ()=>{
        const username = location.state.username
        console.log(username)
        navigate('/home',{state:{username:username}})
    }

    const Profile = ()=>{
        const username = location.state.username
        console.log(username)
        navigate('/profile',{state:{username:username}})
    }

    const Post = ()=>{
        const username = location.state.username
        console.log(username)
        navigate('/post',{state:{username:username}})
    }

    return(
        <>
        <div className="md:w-[100%] md:h-[100vh] bg-red-500 md:flex md:flex-col md:justify-center">
         <div className="md:h-[80vh] md:flex md:flex-col md:justify-evenly md:items-center bg-red-300">
            <button onClick={Home}>Home</button>
            <button onClick={searchUser}>Search</button>
            <button onClick={Post}>Post</button>
            <button onClick={Profile}>Profile</button>
            
        </div>
        <div className="md:h-[20vh] md:flex md:justify-center md:items-center">
            <Link to={'/'}>Log Out</Link>
        </div>
        </div>
        </>
    )
}

export default Nav 