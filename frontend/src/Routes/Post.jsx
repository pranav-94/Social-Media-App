import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../Components/Header"
import Nav from "../Components/NavBar"
import Suggest from "../Components/Suggested";
import PostLogic from "../Components/PostComp"

const Post =()=>{
    return(
        <div className="bg-slate-200 text-slate-900">
         <Header/>
    <div className="w-[100%]  flex justify-between">
         <div className="w-[18%]">
           <Nav/>
        </div> 

        <div className="w-[57%]">
         <p className="text-[25px] ml-7">Post</p>
             <PostLogic/>
         </div>

         <div className="w-[25%]">
             <Suggest/>
         </div>
    </div>
    </div>
    )
}

export default Post