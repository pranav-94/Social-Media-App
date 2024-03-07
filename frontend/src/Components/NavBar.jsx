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

    const Settings = ()=>{
        const username = location.state.username
        console.log(username)
        navigate('/setttings',{state:{username:username}})
    }

    return(
        <>
        <div className="md:w-[100%] md:h-[100vh] sticky top-0  md:flex md:flex-col md:justify-center">
         <div className="md:h-[80vh] md:flex md:flex-col md:justify-evenly md:items-center ">
            <button className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Home}>Home</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={searchUser}>Search</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Post}>Post</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Profile}>Profile</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Profile}>Settings</button>
            
        </div>
        <div className="md:h-[20vh] md:flex md:justify-center md:items-center">
            <Link className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg flex justify-center items-center" to={'/'}>Log Out</Link>
        </div>
        </div>
        </>
    )
}

export default Nav 