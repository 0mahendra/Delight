import { Box, Text,Button, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import React from "react";
import "./Aboutus.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ProfileModal from "../Components/Mislanius/ProfileModel";

const AboutUs = ()=>{



    const history = useHistory(); 
        
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
          height={"100vh"}>
         <section className="colored-section" id="colored">
        <div className="row">
            <div className="col">
              <div className="card" >
                <img src="/shagun.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Shagun Tiwari</h5>
                  <Text className="card-text">Tech enthusiast,sophomore and Electrical Engineering Undergrad at MNNIT Prayagraj </Text>
                </div>
                
              </div>
            </div>
          
            <div className="col">
                
                <div className="card" >
                  <img src="/mahi.jpeg" className="card-img-top" alt="..." height="600px"/>
                  <div className="card-body">
                    <h5 className="card-title">Mahendra Singh</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  
                </div>
               
            </div>
          
            <div className="col">
               
              <div classNameName="card">
                <img src="/mansi.jpeg" className="card-img-top" alt="..." height="600px"/>
                <div className="card-body">
                  <h5 className="card-title">Mansi Singh</h5>
                  <p className="card-text">An enthusiatic out of the box thinking,carefree,bubbly,chirpy,beautiful girl.</p>
                </div>
                
              </div>
            </div>
          
        </div>
    </section>
    
    <section className="white-section" id="features">

      <div className="container-fluid">

        <div className="row">
          
          <div className="feature-box col-lg-6">
            <i className="icon fas fa-dollar-sign fa-4x"></i>
            <h3 className="feature-title">Help</h3>
            <p>Service before Self is our motive</p>
          </div>

          <div className="feature-box col-lg-6">
            <i className="fa-solid icon fas fa-4x fa-bolt"></i>
            <h3 className="feature-title">FAQ</h3>
            <p>The site's smooth as butter,even the giants dont stutter.</p>
          </div>
        </div>


      </div>
    </section>
         </Box>    
    

    {/* <!-- Footer --> */}

    <footer className="colored-section" id="footer">
      <p>Contact Us</p>
      <div className="container-fluid">
        <i className="social-icon fab fa-facebook-f"></i>
        <i className="social-icon fab fa-twitter"></i>
        <i className="social-icon fab fa-instagram"></i>
        <i className="social-icon fas fa-envelope"></i>

      </div>
    </footer>
        </>
    );
}

export default AboutUs;