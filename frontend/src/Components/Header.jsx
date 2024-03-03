import { useLocation } from "react-router-dom"

const Header =()=>{
  
  const location = useLocation()
  const username = location.state.username

  return(
    <>
        <div className="sticky top-0 md:w-[100%] md:h-[65px] md:flex md:justify-around md:items-center bg-blue-300">
             <p>App Name</p>
             <div className="md:w-[150px] md:flex md:justify-evenly md:items-center ">
                  <img src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" className="w-[40px] h-[40px] rounded-full" alt="" />
                 <p className="text-black">{username}</p>
             </div>
        </div>
    </>
  )
}

export default Header