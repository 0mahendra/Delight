import "./App.css";
import React  from "react";

import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import Homepages from "./otherPages/HomePages";
import Journel from "./otherPages/Journel";
import Meditation from "./otherPages/Meditatoin";
import AboutUs from "./otherPages/AboutUs";

const App = ()=>{
   return (
    <div className="App">
        <Route path ="/" component ={Homepage} exact / >
        <Route path ="/chats" component = {ChatPage}/>
        <Route path = "/home" component = {Homepages}/>
        <Route path = "/Journel" component = {Journel}/>
        <Route path = "/Meditation" component = {Meditation}/>
        <Route path = "/AboutUs" component= {AboutUs}/>

        
        
        
    </div>
   );
};
export default App;
