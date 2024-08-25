import { Box, Text,Button, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider, Portal, Image } from "@chakra-ui/react";
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
           
           <Box height={"10vh"} width={"100%"} display={"flex"} flexDirection={"row"}>
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
             {/* <Button onClick={Todo}
               
                   variant={"ghost"}
                  _hover={{bgColor:"lightgreen"}}> ToDo List</Button>    */}
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
          height={"100vh"}>
         <section className="colored-section" id="colored">
        <div className="row">
            <div className="col">
              <div >
                <img src="/shagun.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body" >
                  <h5 className="card-title">Shagun Tiwari</h5>
                  <Text className="card-text">Tech enthusiast,sophomore and Electrical Engineering Undergrad at MNNIT Prayagraj </Text>
                </div>
                
              </div>
            </div>
          
            <div className="col">
                
                <div >
                  <img src="/mahi.jpeg" className="card-img-top" alt="..." height="600px"/>
                  <div className="card-body">
                    <h5 className="card-title" >Mahendra Singh</h5>
                    <p > A full stack web developer , tech enthusiast , problem solver and competitive programmer </p>
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