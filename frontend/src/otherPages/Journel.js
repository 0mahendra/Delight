import React, { useState }  from "react";
import "./Journel.css";
import { Avatar, Box, Button,Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ProfileModal from "../Components/Mislanius/ProfileModel";

const Journel = () =>{
    const [todo,setTodo] = useState("");
    const [todos,setTodos] =useState([]);
    const [editId,setEditId] = useState(0);

    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);

    
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

    const handleSubmit = (e)=>{
     e.preventDefault();

     if(editId){
        const editTodo= todos.find((i)=>i._id ===editId);
        const updatetodos = todos.map((t)=>
        t._id === editTodo._id 
         ?(t={id:t._id,todo})
         :{id:t._id,todo:t.todo}
     );
     setTodos(updatetodos);
     setEditId(0);
     setTodo("");
     return;
     }
     if(todo !== ""){
        setTodos([{_id:`${todo}+${Date.now()}`,todo},...todos]);
        
     }
     const val = todos;
     localStorage.setItem("data",JSON.stringify(val));
     const getData = localStorage.getItem("data");
       const fetData2 = JSON.parse(getData);
     console.log(fetData2.todo);
     setTodo("");
    };
    const handleDelete = (id)=>{
        const delTodo = todos.filter((to)=> to._id !==id);
        setTodos([...delTodo]);
    }
    const handleEdit = (id)=>{
        const editTodo = todos.find((i)=> i._id ===id);
        setTodo(editTodo.todo);
        setEditId(id);
    }
   return <>
   <Box bgColor={"#5dadf8"}
   display={"flex"}
   alignItems={"center"}
   justifyContent={"center"}>
   <h1 bgColor="lightblue">Journel Data Page </h1>
   </Box>
      {/* // header  */}
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
  
  <Box display={"flex"}
   flexDir={"column"}
     alignItems={"space-between"}>

      {/* body  */}
  <Box className="Journel"
        m={"0"}
        p={"0"}
        height={"100vh"}
        bgColor={"#5dadf8"}>
        <Box className="Journel-container"
            display={"flex"}
            marginLeft={"2px"}
            marginRight={"2px"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            margin={"0"}
            p={"0"}
            borderRadius={"5px"}
            borderColor={"blue"}
            >
            <form className="Journelform"  onSubmit={handleSubmit}>
            <Box
             display={"flex"}
             flexDir={"column"}
             height={"200px"}
             width={"200px"} 
            borderWidth={"1.5px"}
             borderColor={"blue"}
             bgColor={"white"}
             >
              
            <Input 
                width={"100%"}
                height={"80%"}
                fontSize={"20px"}
                bgColor={"white"}
                  type="text" placeholder="write your data" onChange={(e)=>setTodo(e.target.value)} />
                <Button 
                         color={"black"}
                         bg={"white"}
                        width={"95%"}
                         borderRadius={"20px"}
                         borderColor={"white"}
                         height={"30%"}
                         _hover={{bgColor:"lightgreen"}}
                         type="submit">{editId?"Edit":"Go"}</Button>
            </Box>
            
               
            </form>
            <ul className="AllTodo" >

               {todos.map((t)=>(
                <li className="singleJournel">
                    <Box
                    m={"0px"}
                    p={"0px"}
                     display={"flex"}
                     flexDir={"column"}
                     justifyContent={"space-between"}
                     borderWidth={"2.5px"}
                     borderColor={"red"}
                     height={"200px"}
                     width={"200px"} 
                     marginRight={"2px"}
                     marginLeft={"2px"}>
                     <Box
                     width={"100%"}
                     height={"80%"}
                     display={"flex"}
                     justifyContent={"center"}
                     alignItems={"center"}
                     fontSize={"20px"}
                     bgColor={"white"}>
                    <span className="todoData "  key={t._id}> {t.todo}</span>
                    </Box>
                    <Box 
                     display={"flex"}
                      width={"100%"}
                      flexDir={"row"}
                      borderColor={"black"}
                      borderWidth={"1.5px"}
                      justifyContent={"center"}
                      bgColor={"white"}>
                    <Button 
                    // width={"20%"}
                          color={"black"}
                   bg={"white"}
                         borderRadius={"20px"}
                        //  height={"100%"}
                        //  marginTop={"5px"}
                        _hover={{bgColor:"lightgreen"}}
                         onClick={()=>handleEdit(t._id)}>Edit</Button> 
                    <Button 
                        color={"black"}
                        bg={"white"}                   
                      //  width={"20%"}
                         borderRadius={"20px"}
                      //    height={"100%"}
                      //    marginTop={"5px"}
                      _hover={{bgColor:"lightgreen"}}
                         onClick={()=>handleDelete(t._id)}>Delete</Button>
                         </Box>
                      </Box>
                </li>
               ))}
               
               
            </ul>
        </Box>
    </Box>

   {/* footer  */}
    <Box  m={"0px"}
     p={"0px"}>
    
    <section class="white-section" id="features">

<div class="container-fluid">

  <div class="row">
    <div class="feature-box col-lg-4">
      <i class="icon fas fa-check-circle fa-4x">
        <a href="../AboutUs/index.html">
          <h3 class="feature-title">About us.</h3>
          <span class="link"></span>
        </a>
      </i>
    
     
      
      <p>Do not let others behavior destroy your inner peace</p>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-dollar-sign fa-4x"></i>
      <h3 class="feature-title">Help</h3>
      <p>Service before Self is our motive</p>
    </div>

    <div class="feature-box col-lg-4">
      <i class="fa-solid icon fas fa-4x fa-bolt"></i>
      <h3 class="feature-title">FAQ</h3>
      <p>The site's smooth as butter,even the giants dont stutter.</p>
    </div>
  </div>


</div>
</section>



<footer class="colored-section" id="footer">
<p>Contact Us</p>
<div class="container-fluid">
  <i class="social-icon fab fa-facebook-f"></i>
  <i class="social-icon fab fa-twitter"></i>
  <i class="social-icon fab fa-instagram"></i>
  <i class="social-icon fas fa-envelope"></i>

</div>
</footer>

    </Box>
  </Box>
   </>


}

export default Journel;