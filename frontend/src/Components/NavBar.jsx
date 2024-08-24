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
        navigate('/search')
    }

    const Home = ()=>{
        navigate('/home')
    }

    const Profile = ()=>{
        navigate('/profile')
    }

    const Post = ()=>{
        navigate('/post')
    }

    const Settings = ()=>{
        navigate('/setttings')
    }

    return(
        <>
        <div className="w-[100%] h-[100vh] sticky top-0  flex flex-col justify-center">
         <div className="h-[80vh] flex flex-col justify-evenly items-center ">
            <button className="hover:bg-slate-900 hover:text-slate-200 md:w-[180px] w-[80px]  font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Home}>Home</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 md:w-[180px] w-[80px]  font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={searchUser}>Search</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 md:w-[180px] w-[80px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Post}>Post</button>
            <button className="hover:bg-slate-900 hover:text-slate-200  font-semibold h-[50px] md:w-[180px] w-[80px] rounded-lg transition-all ease-in-out duration-500" onClick={Profile}>Profile</button>
            <button className="hover:bg-slate-900 hover:text-slate-200 md:w-[180px] w-[80px] font-semibold h-[50px] rounded-lg transition-all ease-in-out duration-500" onClick={Settings}>Settings</button>
            
        </div>
        <div className="h-[20vh] flex justify-center items-center">
            <Link className="hover:bg-slate-900 hover:text-slate-200 w-[180px] font-semibold h-[50px] rounded-lg flex justify-center items-center" to={'/'}>Log Out</Link>
        </div>
        </div>
        </>
    )
}

export default Nav 