import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../Components/Header"
import Nav from "../Components/NavBar"
import Suggest from "../Components/Suggested";
import HomeContent from "../Components/HomeComp"

const Home =()=>{
    return(
    <div className="bg-slate-200 text-slate-900 ">
         <Header/>
    <div className="md:w-[100%]  md:flex md:justify-between">
         <div className="w-[18%]">
           <Nav/>
        </div> 

         <div className="md:w-[57%]">
         <p className="md:text-[25px] md:ml-7">Home</p>
             <HomeContent/>
         </div>

         <div className="md:w-[25%]">
             <Suggest/>
         </div>
    </div>
    </div>
    )
}

export default Home