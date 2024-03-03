import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../Components/Header"
import Nav from "../Components/NavBar"
import Suggest from "../Components/Suggested";
import SearchUsers from "../Components/SearchComp"

const Search =()=>{
    return(
    <>
         <Header/>
    <div className="md:w-[100%]  md:flex md:justify-between">
         <div className="w-[18%]">
           <Nav/>
        </div> 

         <div>
             <SearchUsers/>
         </div>

         <div className="md:w-[25%]">
             <Suggest/>
         </div>
    </div>
    </>
    )
}

export default Search