import { Box, Text,Button } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AboutUs = ()=>{
    const history = useHistory(); 


    const Chatfunction = () =>{
        history.push("/chats");

    }
    const Journel = () =>{
        history.push("/Journel")
    }
    const logoutHandler = ()=>{
        
        history.push("/");
     };
     const Meditation = ()=>{
        history.push("/Meditation")
     };
     const AboutUs = ()=>{
        history.push("/AboutUs")
     }
    return (
        <>
           
           <Box>
            <Box
             w={"100%"}
             bgColor={"lightblue"}
            
             >

           <Box 
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
                <Button onClick={Chatfunction}
                //   bgColor={"red"}
                  w={"200px"}
                  h={"50px"}
                  fontSize={"2xl"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> Chat Here</Button>

             <Button onClick={Journel}
                    w={"200px"}
                  h={"50px"}
                  fontSize={"2xl"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}> Journel</Button>
           

             <Button onClick={Meditation}
                    w={"200px"}
                  h={"50px"}
                  fontSize={"2xl"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}>Meditation</Button>

             <Button onClick={AboutUs}
                    w={"200px"}
                  h={"50px"}
                  fontSize={"2xl"}
                  borderRadius={"30px"}
                  margin={"auto"}
                  _hover={{bgColor:"lightgreen"}}>AboutUs</Button>    
                  </Box>
                  </Box>
              
            
            </Box>
            <Box
             display={"flex"}
             justifyContent={"center"}
             fontSize={"3xl"}
             h={"100%"}
             w={"100%"}>
                <Text>creater one </Text>
             </Box>
            <Box
             display={"flex"}
             justifyContent={"center"}
             fontSize={"3xl"}
             h={"100%"}
             w={"100%"}>
                <Text>creater two </Text>
             </Box>

             <Box
             display={"flex"}
             justifyContent={"center"}
             fontSize={"3xl"}
             h={"100%"}
             w={"100%"}>
                <Text>creater three</Text>
             </Box>
             
             
        </>
    );
}

export default AboutUs;