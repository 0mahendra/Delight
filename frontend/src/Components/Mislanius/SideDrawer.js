import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner, Text, Tooltip, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState }  from "react";
import {BellIcon, ChevronDownIcon} from "@chakra-ui/icons"
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModel";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ChatLoading from "../ChatLoading";
import axios from "axios";
import UserListItem from "../userAvatar/UserListItem";
 const SideDrawer =()=>{
   
    const [search,setSearch]=useState("");
    const [searchResult,setSearchResult]=useState([]);
    const [loading,setLoading]=useState(false);
    const [loadingChat,setLoadingChat]=useState(false);
    
    const {user,setSelectedChat,chats,setChats} = ChatState();
   const history =useHistory();
   
   const {isOpen,onOpen,onClose} = useDisclosure();

    const home = ()=>{
        history.push("/home",user);
    }
     const logoutHandler = ()=>{
        localStorage.removeItem("userInfo");
        history.push("/");
     };
    const toast= useToast();

     const handleSearch =async ()=>{
      if(!search){
        toast({
            title:"Please Enter someThing in Serach",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"top-left",

        });
        return;
      }
      try {
        setLoading(true)
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`,

            },
            
        };
        const {data} =await axios.get(`/api/user?search=${search}`,config);
    
       
        setLoading(false);
        setSearchResult(data);

      } catch (error) {
         toast({
            title:"Error occured",
            description:"failed to load the Search Result",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"bottom-left",

        });
      }
     };

     const accessChat =async (userId)=>{
try {
    setLoadingChat(true); 

    const config = {
        headers:{
            "Content-type" :"application/json",
            Authorization:`Bearer ${user.token}`,

        },
    };
    const {data} = await axios.post('/api/chat',{userId} , config);
    if(!chats.find((c)=>c._id === data._id))setChats([data,...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose(); 
} catch (error) {
    toast({
        title:"error in fetching the chat",
        status:"warning",
        duration:5000,
        isClosable:true,
        position:"bottom-left",

    });
}

     };
  return(
    <>
   
        <Button variant={"ghost"} onClick={onOpen}>
                 <i class ="fas fa-search"></i>
                 <Text d={{base:"none",md:"flex"}} px={"4"}>
                    Search User
                 </Text>

            </Button>

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
         <DrawerOverlay/>
         <DrawerContent>
            <DrawerHeader borderBottomWidth={"1px"}>Search User</DrawerHeader>
            <DrawerBody>
                <Box display={"flex"} pb={2}>
                  <Input
                   placeholder="Search by name or email"
                      mr={2}
                      value={search}
                      onChange={(e)=>setSearch(e.target.value)}
                  />
                  <Button
                   onClick={handleSearch}
                   > Go</Button> 

                  
                </Box>
                {loading? <ChatLoading/> :
                (
                    searchResult?.map(user =>(
                        <UserListItem
                            key={user._id}
                            user={user}
                            handleFunction ={()=>accessChat(user._id)}
                        />
                    ))
                )}

                {loadingChat && <Spinner ml={"auto"} display={"flex"}/>}
            </DrawerBody>
         </DrawerContent>
        </Drawer>
    </>
  );
 };
 export default SideDrawer;