
import React, { useEffect } from "react";
import "./HomePage.css";
import {
    Container,
    Box,
    Text ,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useHighlight,
    variant
    } from '@chakra-ui/react';
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = ()=>{

  const history = useHistory();
 
      
    return <Container maxW={"xl"} variant={"ghost"} centerContent>

    <Box 
    d="flex"
    justifyContent="center"
     p={3}
    //  bg={"white"}
     w="100%"
     m="40px 0 15px 0"
     borderRadius="1g"
     borderWidth="1px"
     >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color="black"> Delight </Text>
    </Box>
    <Box  color={"white"} w ="100%" p={4} borderRadius="1g" borderWidth={"1px"} variant={"ghost"}>
    <Tabs variant='ghost' colorScheme='green' >
  <TabList>
    <Tab width={"50%"}>login </Tab>
    <Tab width={"50%"}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel >
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