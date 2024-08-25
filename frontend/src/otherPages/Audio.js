// import { Box, Text } from "@chakra-ui/react";
import "./Audio.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {  FormControl, FormLabel, Input,useToast } from "@chakra-ui/react";
import { Box, Text,Button, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider , Image , Portal} from "@chakra-ui/react";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
const Audio = ()=>{
     
   const [pic,setPic] =useState();
    const[file,setFile]= useState();
    const[show,setShow] = useState(false);
    const[loading,setLoading]=useState(false);
    const {user,setSelectedChat,chats,setChats} = ChatState();
        
    const toast  =useToast();
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

     const postDetails = (audio)=>{
        setLoading(true);
         if(audio == undefined){
             toast({
                 title:"please select an image!",
                 status:"warning",
                 duration:5000,
                 isClosable:true,
                 position:"bottom",
 
             });
             return;
         }
            setFile(audio);
            console.log(audio);
             const data = new FormData();
             data.append("file",audio);
             data.append("upload_preset","chat-app");
             data.append("cloud_name","mahisingh");
             fetch("https://api.cloudinary.com/v1_1/mahisingh/video/upload",{
                 method:"post",
                 body:data,
 
             }).then((res)=>res.json())
               .then((data)=>{
                 setPic(data.url.toString());
                 console.log(data.url.toString());
                 setLoading(false);
               })
               .catch((err)=>{
                 console.log(err);
                 setLoading(false);
               });
 
        
    
             setLoading(false);
             return;
     }

     const submitHandler = async() =>{
        setLoading(true);
     
        try{
         const config = {
           header:{
               "Content-type":"application/json",
           },
         };
        
         const name = user.name + file.name;
         const email = user.name+"gmail.com";
         const password = user.name;
        
        
         console.log(name);
         console.log(email);
         
         const {data} = await axios.post(
            "/api/user",
            {name,email,password,pic},
             config
            ); 
           toast({
               title:"Registration Successful",
               status:"warning",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           localStorage.setItem("userInfo",JSON.stringify(data));
            document.getElementById("#01").display="flex";
           setLoading(false);
           history.push("/Audio")
   
        }
        catch(error){
           toast({
               title:"error occured",
               status:"error",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           setLoading(false);
        }
       };


       const AudioPlay = ()=>{
       if(pic===""){
        toast({
          title:"error occured",
          status:"error",
          duration:5000,
          isClosable:true,
          position:"bottom",

      });
       }
           
       }
    return (
        <>

<Box bgImage={"url('https://www.artofliving.org/in-en/app/uploads/2023/06/meditation-incarnation.jpg')"} position={"relative"} width={"100vw"} height={"100%"} >
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
            <div id="bi">
        <h1 id="titleee">How does this section work</h1>
        <Text color={"white"}>Self-help or self-improvement is a self-guided improvement[1]—economically, physically, intellectually, and emotionally—often with a substantial psychological basis.

When engaged in self-help, people often use publicly available information or support groups, on the Internet as well as in person, where people in similar situations join together.[1] From early examples in self-driven legal practice[2] and home-spun advice, the connotations of the word have spread and often apply particularly to education, business, exercise, psychology and psychotherapy, commonly distributed through the popular genre of self-help books. According to the APA Dictionary of Psychology, potential benefits of self-help groups that professionals may not be able to provide include friendship, emotional support, experiential knowledge, identity, meaningful roles, and a sense of belonging.[1]

Many different self-help group programs exist, each with its own focus, techniques, associated beliefs, proponents and in some cases, leaders. Concepts and terms originating in self-help culture and Twelve-Step culture, such as recovery, dysfunctional families, and codependency have become firmly integrated in mainstream language.[3] Groups associated with health conditions may consist of patients and caregivers. As well as featuring long-time members sharing experiences, these health groups can become support groups and clearing-houses for educational material. Those who help themselves by learning and identifying health problems can be said to exemplify self-help, while self-help groups can be seen more as peer-to-peer or mutual-support groups.</Text>
        </div>

            <Box
             display={"flex"}
             justifyContent={"center"}
             flexDirection={"column"}
             fontSize={"6xl"}
             h={"100%"}
             w={"100%"}>
            
            <FormControl id='Audio' >
        <FormLabel>Upload your picture</FormLabel>
        <Input
         type="file"
         p={.5}
         accept="audio"
        onChange={(e)=>postDetails(e.target.files[0])}
        />
    </FormControl>
    <Button
        colorScheme = "blue"
        width= "100%"
        style ={{marginTop:15}}
        onClick = {submitHandler}
        isLoading={loading}
        >
        Submit Audio 
    </Button>

   
    <Button 
    colorScheme = "blue"
        width= "100%"
        style ={{marginTop:15}}
        onClick={AudioPlay}
        isLoading={loading}
        // display={"none"}
        
        
        id="#01">
        
  <a href={pic}>play the auido </a> 
    </Button>

           
                  
             </Box>
           </Box>  
        </>
    );
}

export default Audio;