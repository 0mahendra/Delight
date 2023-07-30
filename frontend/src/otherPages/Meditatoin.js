// import { Box, Text,Button } from "@chakra-ui/react";
import "./Meditation.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text,Button, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
const Meditation = ()=>{
    const history =useHistory();
    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);
    
    const Chatfunction = () =>{
      if(user) history.push("/chats");     

  }
  const Homepage = ()=>{
    if(user) history.push("/home");     
  }
  const Journel = () =>{
      history.push("/Journel")
  }
  const Todo = ()=>{
    history.push("/Todo")
  }
  const logoutHandler = ()=>{
      
      history.push("/");
   };
   const Meditation = ()=>{
      history.push("/Meditation")
   };
   const ContactUs = ()=>{
      history.push("/ContactUs")
   }
   const AboutUs = ()=>{
    history.push("/AboutUs")
   }
   const Audio = ()=>{
    history.push("/Audio")
 }
    return (
        <>
             <Box
             w={"100%"}
             bgColor={"lightblue"} >
              
                <Box 
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}>
              <Button onClick={Homepage}
                //   bgColor={"red"}
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> Home</Button>
                <Button onClick={Chatfunction}
                //   bgColor={"red"}
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> Chat Here</Button>

               <Button onClick={Audio}
                
                fontSize={"2xs"}
                borderRadius={"30px"}
                margin={"auto"}
                _hover={{bgColor:"lightgreen"}}>Audio</Button>   

             <Button onClick={Journel}
                   
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> Journel</Button>

              <Button onClick={Todo}
                //   bgColor={"red"}
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> ToDo List</Button>
           

             <Button onClick={Meditation}
                
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}>Meditation</Button>

             <Button onClick={ContactUs}
                   
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}>ContactUs</Button>   
             
             <Button onClick={AboutUs}
                //   bgColor={"red"}
                  fontSize={"2xs"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> AboutUs</Button>
           

            <Menu>
                    <MenuButton p={1}>
                       <BellIcon fontSize={"2xl"} m={1}/> 
                    </MenuButton>
                    {/* <MenuList></MenuList> */}
                </Menu>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                       <Avatar size={"sm"} cursor={"pointer"} name={user.name} src={user.pic}></Avatar>
                    </MenuButton>
                    <MenuList>
                         <ProfileModal user={user}>
                         <MenuItem>My Profile</MenuItem>
                         </ProfileModal>
                       
                        <MenuDivider></MenuDivider>
                        <MenuItem onClick={logoutHandler} >Logout</MenuItem> 
                    </MenuList>
                    </Menu>       
                  </Box>
                
                  
            
            </Box>

            <Box
            >
            <section class="colored-section" id="colored">
             {/* <div class="card-deck" >  */}
            <div class="card text-white bg-info" > 
              
              <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
              <div class="card-body">
               
                <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
                
              </div>
            </div>
            <div class="card text-white bg-info">
              <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
              <div class="card-body">
               
                <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
                
              </div>
              
            </div>
            <div class="card text-white bg-info">
              <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
              <div class="card-body">
               
                <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
                
              </div>
          </div>
    </section>
    <section class="colored-section" id="colored">
        <div class="card-deck">
            <div class="card text-white bg-info">
              <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
              <div class="card-body">
               
                <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
                
              </div>
            </div>
            <div class="card text-white bg-info">
              <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
              <div class="card-body">
               
                <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
                
              </div>
            </div>
            <div class="card text-white bg-info">
              <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
              <div class="card-body">
               
                <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
                
              </div>
            </div>
          </div>
    </section>
    <section class="colored-section" id="colored">
        {/* <div class="card-deck"> */}
          <div class="card text-white bg-info">
            <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
            <div class="card-body">
             
              <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
              
            </div>
          </div>
          <div class="card text-white bg-info">
            <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
            <div class="card-body">
             
              <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
              
            </div>
          </div>
          <div class="card text-white bg-info">
            <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" > <img class="card-img-top" src="/meditation1.jpg "   alt="Card image cap" /></a>
            <div class="card-body">
             
              <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=G8nNGk6LHaM" >Deep Sleep and Stress Relief </a></h5>
              
            </div>
          </div>
    </section>
    
    <section class="white-section" id="features">

      <div class="container-fluid">

        <div class="row">
          
          <div class="feature-box col-lg-6">
            <i class="icon fas fa-dollar-sign fa-4x"></i>
            <h3 class="feature-title">Help</h3>
            <p>Service before Self is our motive</p>
          </div>

          <div class="feature-box col-lg-6">
            <i class="fa-solid icon fas fa-4x fa-bolt"></i>
            <h3 class="feature-title">FAQ</h3>
            <p>The site's smooth as butter,even the giants dont stutter.</p>
          </div>
        </div>


      </div>
    </section>

 

    <footer class="colored-section" id="footer">
      <p>Contact Us</p>
      <div class="container-fluid">
        <i class="social-icon fab fa-facebook-f"></i>
        <i class="social-icon fab fa-twitter"></i>
        <i class="social-icon fab fa-instagram"></i>
        <i class="social-icon fas fa-envelope"></i>

      </div>
    </footer>
                
             </Box>
        </>
    );
}

export default Meditation;