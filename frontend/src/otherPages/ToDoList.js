import React, { useState }  from "react";
import "./TodoList.css";
import { Avatar, Box, Button, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList ,  Portal , Image} from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ProfileModal from "../Components/Mislanius/ProfileModel";

const ToDoList = () =>{
    const [todo,setTodo] = useState("");
    const [todos,setTodos] =useState([]);
    const [editId,setEditId] = useState(0);

   const user1 = localStorage.getItem("userInfo");
   const user = JSON.parse(user1);
//    console.log(user.name);

    
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
                    <MenuItem onClick={Todo} >ToDo List</MenuItem>
                    <MenuItem onClick={Journel}>Journal</MenuItem>
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
     <Box height={"90vh"} className="bgi">      
    <div className="Todo">
        <div className="container">
            <h1>ToDo List App </h1>
            <form className="Todoform" onSubmit={handleSubmit}>
                <Input width = {"80%"}
                   padding = {"10px"}
                   border-radius={"20px"}
                   value={todo}
                   color={"black"}
                   bg={"white"}
                  type="text" onChange={(e)=>setTodo(e.target.value)} />
                <Button 
                         color={"black"}
                   bg={"white"}
                        width={"20%"}
                         borderRadius={"20px"}
                         height={"100%"}
                         type="submit">{editId?"Edit":"Go"}</Button>
            </form>
            <ul className="AllTodo">

               {todos.map((t)=>(
                <li className="singleTodo">
                    <span className="todoData "color="black" key={t._id}> {t.todo}</span>
                    <Button width={"20%"}
                          color={"black"}
                   bg={"white"}
                         borderRadius={"20px"}
                         height={"100%"}
                         marginTop={"5px"}
                         onClick={()=>handleEdit(t._id)}>Edit</Button> 
                    <Button 
                        color={"black"}
                        bg={"white"}                   
                       width={"20%"}
                         borderRadius={"20px"}
                         height={"100%"}
                         marginTop={"5px"}
                         onClick={()=>handleDelete(t._id)}>Delete</Button>
                </li>
               ))}
               
               
            </ul>
        </div>
    </div>
    </Box>
  
   </>


}

export default ToDoList;