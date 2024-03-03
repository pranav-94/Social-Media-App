import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../Components/Header"
import Nav from "../Components/NavBar"
import Suggest from "../Components/Suggested";
import HomeContent from "../Components/HomeComp"

const Home =()=>{
    return(
    <>
         <Header/>
    <div className="md:w-[100%]  md:flex md:justify-between">
         <div className="w-[18%]">
           <Nav/>
        </div> 

         <div className="md:w-[57%]">
             <HomeContent/>
         </div>

         <div className="md:w-[25%]">
             <Suggest/>
         </div>
    </div>
    </>
    )
}

export default Home