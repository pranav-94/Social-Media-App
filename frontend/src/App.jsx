import AllProfile from "./Routes/AllProfile";
// import Comments from "./Routes/Comments";
import GetInfo from "./Routes/EditProfile";
import Home from "./Routes/Home";
import Post from "./Routes/Post";
import GettingInfo from "./Routes/Processing";
import Profile from "./Routes/Profile";
import Search from "./Routes/Search";
import Settings from "./Routes/Settings";
import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const App =()=>{
  return(
    <>
    <RouterLogic/>
    </>
  )
}

const RouterLogic = ()=>{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Signup}/>
        {/* <Route path="/process" Component={Process}/> */}
        <Route path="/home" Component={Home}/>
        <Route path="/signIn" Component={Signin}/>
        <Route path="/search" Component={Search}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/post" Component={Post}/>
        <Route path="/processing" Component={GettingInfo}/>
        <Route path="/setttings" Component={Settings}/>
        <Route path="/otherProfile" Component={AllProfile}/>
        <Route path="/EditProfile" Component={GetInfo}/>
        {/* <Route path="/comments" Component={Comments}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App