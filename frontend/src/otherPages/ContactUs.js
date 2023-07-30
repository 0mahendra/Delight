import React from "react";
import "./ContactUs.css";
import { Avatar, Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text ,Button,  Input, useToast} from "@chakra-ui/react";
import  { useState } from "react";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
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
     
     
   //   const imageUrl = "https://www.pixelstalk.net/wp-content/uploads/2016/11/Calm-Full-HD-Wallpaper.jpg";
   //   function AirbnbCard() {
   //    const property = {
   //    imageUrl : "https://www.pixelstalk.net/wp-content/uploads/2016/11/Calm-Full-HD-Wallpaper.jpg",
   //      imageAlt: 'Rear view of modern home with pool',
   //      beds: 3,
   //      baths: 2,
   //      title: 'Modern home in city center in the heart of historic Los Angeles',
   //      formattedPrice: '$1,900.00',
   //      reviewCount: 34,
   //      rating: 4,
   //    }
   // }
    
   }
    return <>
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
                  height={"95vh"}
                  borderWidth={"3.5px"}
                  borderRadius={"20px"}
                   bgColor={"lightgray"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
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
    </>

}

export default ContactUs;