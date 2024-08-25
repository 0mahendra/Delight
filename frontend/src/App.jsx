import "./App.css";
import React  from "react";

import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import Homepages from "./otherPages/HomePages";
import Journel from "./otherPages/Journel";
import Meditation from "./otherPages/Meditatoin";
import AboutUs from "./otherPages/AboutUs";
import Audio from "./otherPages/Audio";
// import Aauido from "./otherPages/Aauido"
import ToDoList from "./otherPages/ToDoList";
import ContactUs from "./otherPages/ContactUs";
import Post from "./otherPages/Post";
const App = ()=>{
   return (
    <div className="App">
        <Route path ="/" component ={Homepage} exact / >
        <Route path ="/chats" component = {ChatPage}/>
        <Route path = "/home" component = {Homepages}/>
        <Route path = "/Journel" component = {Journel}/>
        <Route path = "/Post" component = {Post}/>
        <Route path = "/Meditation" component = {Meditation}/>
        <Route path = "/AboutUs" component= {AboutUs}/>
        <Route path = "/Audio" component= {Audio}/>
        {/* <Route path = "/Aauido" component = {Aauido}/> */}
        <Route path = "/ToDo" component = {ToDoList}/>
        <Route path = "/ContactUs" component = {ContactUs}/>

        
        
    </div>
   );
};
export default App;
