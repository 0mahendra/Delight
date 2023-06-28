
import React, { useEffect } from "react";
import {
    Container,
    Box,
    Text ,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useHighlight} from '@chakra-ui/react';
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Homepage = ()=>{

  const history = useHistory();
  useEffect (()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user) history.push("/chats");
  },[history]);
 
    return <Container maxW={"xl"} centerContent>
    <Box 
    d="flex"
    justifyContent="center"
     p={3}
     bg={"white"}
     w="100%"
     m="40px 0 15px 0"
     borderRadius="1g"
     borderWidth="1px"
     >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color="black">Talk-A-Tive</Text>
    </Box>
    <Box bg="white" color={"white"} w ="100%" p={4} borderRadius="1g" borderWidth={"1px"}>
    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab width={"50%"}>login </Tab>
    <Tab width={"50%"}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login></Login>
    </TabPanel>
    <TabPanel>
      <Signup></Signup>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    </Container>
     

};
export default Homepage;