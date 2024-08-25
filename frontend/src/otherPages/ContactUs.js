import React from "react";
// import "./ContactUs.css";
import { Avatar, Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text ,Button,  Input, useToast, Image, Portal} from "@chakra-ui/react";
import  { useState } from "react";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Header from "./Header";
const ContactUs = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [data,setData] = useState("");
    const [loading,setLoading]  = useState(false);
    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);

    
    const history =useHistory();
    const toast = useToast();
 
      
       
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


   const handleSubmit = async(e)=>{
      e.preventDefault();

      // const username  = name
      // console.log(email);
      // console.log(data);

     
      if(!data){
        toast({
            title:"please put some data!",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"top",

        });
        return;
      }
      setLoading(true);
       try{
       const config = {
         header:{
             "Content-type":"application/json",
         },
       };
       const username = `${name}${Date.now()}`;
       
      
           
      const {dataVal} = await axios.post(

         "/api/datavalue",
         {username,email,data},
          config
         ); 
      

         toast({
                   title:"Your problem is Successful Registered",
                   status:"warning",
                   duration:5000,
                   isClosable:true,
                   position:"bottom",
       
               });
               
               // const datavlaues = [ {name :`${username}`}, {email :`${email}`} ,{data : `${data}`}];
               // localStorage.setItem("dataValues",JSON.stringify(datavlaues));
               history.push("/ContactUs");
      //    //  document.getElementById("#01").display="flex";
      //    setLoading(false);
      }
      catch(e){
         console.log(e);
      }
     
     

   }
    return <>
          
          <Box bgImage={"url('https://www.artofliving.org/in-en/app/uploads/2023/06/meditation-incarnation.jpg')"} position={"fixed"} width={"100vw"}>
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
                 {/* <Button onClick={ContactUs}
                  
                    variant={"ghost"}
                   _hover={{bgColor:"lightgreen"}}>ContactUs</Button>    */}
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

            <Box w={"100%"}
               height={"94.5vh"}
               // bgColor={"lightgray"}
               // bgImage={ URL("https://www.pixelstalk.net/wp-content/uploads/2016/11/Calm-Full-HD-Wallpaper.jpg")}
               // bgImage={property.imageUrl}

                display={"flex"}
                justifyContent={"center"}
                >
               <Box 
                  width={"800px"}
                  height={"90vh"}
                  borderWidth={"3.5px"}
                  borderRadius={"20px"}
                  color={"white"}
                  //  bgColor={"lightgray"}
                  blur={"10xl"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  position={"relative"}
                  >
                 <Text fontSize={"27px" }>Sorry for disappointment .we will solve your problem very early </Text>
                <form  onSubmit={handleSubmit}>
                   <Input type="Text" placeholder="write your name"  onChange={(e)=>setName(e.target.value)}/>
                   <Input type="Text" placeholder="write  your email id"  onChange={(e)=>setEmail(e.target.value)}/>
                   <Box 
                    marginTop={"5px"}>
                   <Input height= {"300px"} type="Text" placeholder="wrtie your complain here"  onChange={(e)=>setData(e.target.value)}/>
                   </Box>
                   <Button type="submit" width={"100%"} bgColor={"black"} color={"white"} 
                   borderRadius={"10px"}
                    > submit</Button>
                   
                   

                </form>
               </Box>

            </Box>
            </Box>
    </>

}

export default ContactUs;