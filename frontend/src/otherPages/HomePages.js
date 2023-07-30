import { Avatar, Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text ,Button, Img} from "@chakra-ui/react";
import React, { useState } from "react";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./Homepage.css"

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
            <Img class="testimonial-image" src="https://chopra.brightspotcdn.com/ba/5b/a4e607054e908c357b72c88d4102/7fbroqcg.jpeg" alt="dog-profile"/>
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
<section class="colored-section " id="testimonials">
<div id="testimonial-carousel" class="carousel slide" data-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active container-fluid">
      <h2 class="testimonial-text">Do not let others behavior destroy your inner peace</h2>
      <Img class="testimonial-image" src="https://media.cntraveller.com/photos/611bed66623b149193c8cd74/4:3/w_1704,h_1278,c_limit/dalai-lama-conde-nast-traveller-25nov16-rex-shutterstock.jpg" alt="dog-profile"/>
      <em class="name">Dalai Lama</em>
    </div>
    <div class="carousel-item container-fluid">
      <h2 class="testimonial-text">You are not alone..You are not the first to go through it..You will not be the last to go through it</h2>
      <Img class="testimonial-image" src="https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/master/pass/The-Rock-2020-Potential-Run.jpg" alt="lady-profile"/>
      <em class="name">The Rock</em>
    </div>
    <div class="carousel-item container-fluid">
      <h2 class="testimonial-text">Calmness,gentleness,silence,self-restraint and purity..These are the disciplines of the mind</h2>
      <Img class="testimonial-image" src="https://wallpapers.com/images/hd/shri-krishna-day-and-night-silhouette-2j5guszveuuuhtwo.jpg" alt="lady-profile"/>
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
           

        </>
    );
}

export default HomePages;