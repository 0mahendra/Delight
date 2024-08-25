// import { Box, Text,Button } from "@chakra-ui/react";
// import "./Meditation.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileModal from "../Components/Mislanius/ProfileModel";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text,Button, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider , Image , Portal, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Link  } from "@chakra-ui/react";
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
           <Box  bgImage={"url('https://www.artofliving.org/in-en/app/uploads/2023/06/meditation-incarnation.jpg')"} position={"fixed"} width={"100vw"}>
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
           <Divider /> 
          <Box display="flex" flexWrap="wrap" ml={"60px"} overflow={"scroll"} height={"85vh"} >
              <Card maxW='50vh' variant={"ghost"} margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://img.lovepik.com/element/40142/4996.png_300.png'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
                <Link href="https://www.youtube.com/watch?v=-dHOWvFZa4M&pp=ygUPbWVkaXR0aW9uIGludHJv" isExternal>
                <Heading size="md">Meditation Intro</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"} margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://t3.ftcdn.net/jpg/06/28/74/96/360_F_628749692_Q5mUEjr9QsIfjZpqgKS8na2uQ9TxowMb.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
                <Link href="https://www.youtube.com/watch?v=4J97THGPxoc&pp=ygUJU3VraGFzYW5h" isExternal>
                <Heading size="md">Sukhasana</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://static.vecteezy.com/system/resources/previews/015/397/713/original/man-doing-cow-face-pose-or-gomukhasana-exercise-flat-illustration-isolated-on-white-background-vector.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
                <Link href="https://www.youtube.com/watch?v=4J97THGPxoc&pp=ygUJU3VraGFzYW5h" isExternal>
                <Heading size="md">Gomukhasana (Cow Face Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"} margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://st2.depositphotos.com/3245537/10748/i/950/depositphotos_107487774-stock-photo-yoga-girl-doing-exercises-in.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
                <Link href="https://www.youtube.com/watch?v=w_j4lnfRC38&pp=ygUWUGFkbWFzYW5hIChMb3R1cyBQb3NlKQ%3D%3D" isExternal>
                <Heading size="md">Padmasana (Lotus Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://realhappiness.org/images/10-best-poses-for%20meditation.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
                <Link href="https://www.youtube.com/watch?v=82p0aGNJSF4&pp=ygUcVmFqcmFzYW5hIChUaHVuZGVyYm9sdCBQb3NlKQ%3D%3D" isExternal>
                <Heading size="md">Vajrasana (Thunderbolt Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://images.onlymyhealth.com/imported/images/2021/September/13_Sep_2021/big_YogaForNervousSystem.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://www.youtube.com/watch?v=xYysLJFWz9Y&pp=ygUcQXJkaGEgUGFkbWFzYW5hIChIYWxmIExvdHVzKQ%3D%3D" isExternal>
                <Heading size="md">Ardha Padmasana (Half Lotus)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://cdn.shopify.com/s/files/1/0259/3665/8531/files/blog-05_bd3c29a3-082e-4e16-aace-a9c730a90345.jpg?v\u003d1570099683'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://www.youtube.com/watch?v=Fd6kqofmbMs&pp=ygUeU2lkZGhhc2FuYSAoQWNjb21wbGlzaGVkIFBvc2Up" isExternal>
                <Heading size="md">Siddhasana (Accomplished Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>

          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://media.graphassets.com/resize=fit:clip,height:350,width:600/k2bWxYDDSUKqxXVnB2Fq'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://www.youtube.com/shorts/mDbm9ViSXws" isExternal>
                <Heading size="md">Swastikasana (Auspicious Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://images.squarespace-cdn.com/content/v1/5b636f1c5cfd79ab80c2a1b8/1598922537473-2WQ43SGKJ78OILKPCQSS/IMG_4438.JPG'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://www.youtube.com/watch?v=kzQvZksDnFQ&pp=ygUUVmlyYXNhbmEgKEhlcm8gUG9zZSk%3D" isExternal>
                <Heading size="md">Virasana (Hero Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://images.squarespace-cdn.com/content/v1/5b636f1c5cfd79ab80c2a1b8/1598921779955-NRBBI6PW34MFODA1FUBV/IMG_4436.JPG'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://www.youtube.com/watch?v=hRcvSEtoecg&pp=ygUiQmFkZGhhIEtvbmFzYW5hIChCb3VuZCBBbmdsZSBQb3NlKQ%3D%3D" isExternal>
                <Heading size="md">Baddha Konasana (Bound Angle Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://www.keralatourism.org/images/yoga/static-banner/large/Janu_Sirshasana_-_The_Head_to_Knee_Pose-07032020172908.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://www.youtube.com/watch?v=2MJGg-dUKh0&pp=ygUXQmFsYXNhbmEgKENoaWxkJ3MgUG9zZSk%3D" isExternal>
                <Heading size="md">Balasana (Child's Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>
          <Card maxW='50vh' variant={"ghost"}  margin={"15px"} ml ={"80px"} width = {"500px"}>
               <CardBody >
                    <Image
                     src='https://www.yogadaycelebration.com/assets/images/bhujangasana.jpg'
                    alt='meditation Image'
                    borderRadius='lg'
                     />
                <Stack mt='6' spacing='1'>
               <Link href="https://i.ytimg.com/vi/3CnPUfZsIwg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKddlrxoGWIJBAmYFNtvuRF_d2Ew" isExternal>
                <Heading size="md">Matsyasana (Fish Pose)</Heading>
              </Link>
             
            
             </Stack>
         </CardBody>
          </Card>

               
             </Box>
             <Box height={"100px"}> footer</Box>



           </Box>

            
        </>
    );
}

export default Meditation;