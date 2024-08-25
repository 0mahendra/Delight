import { Avatar, Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text ,Button, Image ,Img, Center, Portal} from "@chakra-ui/react";
import React, { useState } from "react";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./Homepage.css"
import Header from "./Header";

const HomePages = ()=>{

    

    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);

    const history =useHistory();
    
 
      
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
             <Box bgImage={"url('https://www.artofliving.org/in-en/app/uploads/2023/06/meditation-incarnation.jpg')"} position={"relative"} width={"100vw"} height={"auto"} >
           <Box height={"10vh"} width={"100%"} display={"flex"} flexDirection={"row"} >
             <Box  height={"10vh"} width={"20%"} display={"flex"} alignItems={"center"}>
               <Image 
                borderRadius={"full"}
                
                height={"100%"}
                src="https://res.cloudinary.com/mahisingh/image/upload/v1719895091/10824677_k0smrn.png"
                 ></Image>
                 {/* <Text textAlign={"center"} marginTop={"5%"} fontFamily={"work sans"} fontSize={"5xl"} fontWeight={"800"} > Delight </Text> */}
             </Box>
             <Box width={"60%"}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
             <Button onClick={Homepage}
               
                   variant={"ghost"}
                  _hover={{bgColor:"lightgreen"}}> Home</Button>  
             

             <Button onClick={Chatfunction}
             
                   variant={"ghost"}
                  _hover={{bgColor:"lightgreen"}}> Chat Here</Button>

             <Button onClick={Audio}
              
                 variant={"ghost"}
                _hover={{bgColor:"lightgreen"}}>Audio</Button>     
                 
                  <Menu>
                   <MenuButton  variant={"ghost"} as={Button} borderWidth={"0px"} fontSize={"0.5xl"} fontWeight={"600"}  rightIcon={<ChevronDownIcon/>} >Activity</MenuButton>
                   <Portal>
                    <MenuList>
                    <MenuItem onClick={Journel} >ToDo List</MenuItem>
                    <MenuItem onClick={Todo}>Journal</MenuItem>
                    </MenuList>
                   </Portal>
                  </Menu>   

              <Button onClick={Meditation}
              
                   variant={"ghost"}
                  _hover={{bgColor:"lightgreen"}}>Meditation</Button>
                 
                   <Menu>
                   <MenuButton  variant={"ghost"} as={Button} borderWidth={"0px"} fontSize={"0.5xl"} fontWeight={"600"}  rightIcon={<ChevronDownIcon/>} >Help</MenuButton>
                   <Portal>
                    <MenuList>
                    <MenuItem onClick={AboutUs} >About Us</MenuItem>
                    <MenuItem onClick={ContactUs}>Contact Us</MenuItem>
                    </MenuList>
                   </Portal>
                  </Menu>   
              </Box>
             <Box width={"20%"} display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
             <Menu>
                    <MenuButton p={1}>
                       <BellIcon fontSize={"2xl"} m={1}/> 
                    </MenuButton>
                    {/* <MenuList></MenuList> */}
                </Menu>
                <Menu>
                    <MenuButton variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon/>}>
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
             display={"flex"}
             flexDirection={"column"}
             justifyContent={"center"}
             fontSize={"3xl"}
             h={"100%"}
             w={"100%"}>
                
                <section class="colored-section" id="testimonials">
      <div id="testimonial-carousel" class="carousel slide" data-ride="false">
        <div class="carousel-inner">
          <div class="carousel-item active container-fluid">
            <h2 class="testimonial-text">Meditation is being in tune with our inner universe.</h2>
            <Img class="testimonial-image" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63e309aa07e4d0001dbb6cfd.jpg" alt="dog-profile"/>
            <em class="name">Meditation</em>
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text">Journal writing is a voyage to the interior.</h2>
            <Img class="testimonial-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6nXdkThT_qsgZ-r7ZSsBXf-kk6-rdZAOGQ&usqp=CAU" alt="lady-profile"/>
            <em class="name">Journal</em>
          </div>
          <div class="carousel-item container-fluid">
            <h2 class="testimonial-text">No desired achievement is gained without any goal setting.</h2>
            <Img class="testimonial-image" src="https://cdn2.hubspot.net/hubfs/53/To_Do_List.png" alt="lady-profile"/>
            <em class="name">To Do List</em>
          </div>
        </div>
        <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>

    </section>
    <section class="white-section" id="cta">

<div class="container-fluid">

  <h3 class="big-heading">There is a crack in everything thats how the light gets in!</h3>
</div>
</section>
<section class="colored-section" id="testimonials">
  <div id="testimonial-carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active container-fluid">
        <h2 class="testimonial-text">Do not let others behavior destroy your inner peace</h2>
        <img class="testimonial-image" src="https://media.cntraveller.com/photos/611bed66623b149193c8cd74/4:3/w_1704,h_1278,c_limit/dalai-lama-conde-nast-traveller-25nov16-rex-shutterstock.jpg" alt="dog-profile"/>
        <em class="name">Dalai Lama</em>
      </div>
      <div class="carousel-item container-fluid">
        <h2 class="testimonial-text">You are not alone..You are not the first to go through it..You will not be the last to go through it</h2>
        <img class="testimonial-image" src="https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/master/pass/The-Rock-2020-Potential-Run.jpg" alt="lady-profile"/>
        <em class="name">The Rock</em>
      </div>
      <div class="carousel-item container-fluid">
        <h2 class="testimonial-text">Calmness,gentleness,silence,self-restraint and purity..These are the disciplines of the mind</h2>
        <img class="testimonial-image" src="https://wallpapers.com/images/hd/shri-krishna-day-and-night-silhouette-2j5guszveuuuhtwo.jpg" alt="lady-profile"/>
        <em class="name">Shri Krishna</em>
      </div>
    </div>
    <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</section>

    <section class="white-section" id="features">

<div class="container-fluid">

  <div class="row">
    <div class="feature-box col-lg-4">
      <i class="icon fas fa-check-circle fa-4x">
        <a href="../AboutUs/index.html">
          <h3 class="feature-title">About us.</h3>
          <span class="link"></span>
        </a>
      </i>
    
     
      
      <p>Do not let others behavior destroy your inner peace</p>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-dollar-sign fa-4x"></i>
      <h3 class="feature-title">Help</h3>
      <p>Service before Self is our motive</p>
    </div>

    <div class="feature-box col-lg-4">
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
           
   </Box>
        </>
    );
}

export default HomePages;