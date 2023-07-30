import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,useToast } from "@chakra-ui/react";
import React ,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

const Signup = ()=>{
    const[name ,setName] = useState();
    const[email,setEmail] = useState();
    const[confirmpassword,setConfirmpassword] = useState();
    const[password,setPassword] = useState();
    const[pic,setPic]= useState();
    const[show,setShow] = useState(false);
    const[loading,setLoading]=useState(false);
    const toast  =useToast();
    const history =useHistory();

   

    const handleClick= () =>{
        setShow(!show);
    }
    const postDetails = (pics)=>{
       setLoading(true);
        if(pics == undefined){
            toast({
                title:"please select an image!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",

            });
            return;
        }
        if(pics.type ==="image/jpeg" || pics.type==="image/png"){
            const data = new FormData();
            data.append("file",pics);
            data.append("upload_preset","chat-app");
            data.append("cloud_name","mahisingh");
            fetch("https://api.cloudinary.com/v1_1/mahisingh/image/upload",{
                method:"post",
                body:data,

            }).then((res)=>res.json())
              .then((data)=>{
                setPic(data.url.toString());
                // console.log(data.url.toString());
                setLoading(false);
              })
              .catch((err)=>{
                console.log(err);
                setLoading(false);
              });

        }
        else{
            toast({
                title:"please select an image!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",

            });
            setLoading(false);
            return;
            
        }

    }
    const submitHandler = async() =>{
     setLoading(true);
     if(!name || !email|| !password || !confirmpassword){
        toast({
            title:"sarri field fill karo yrr!",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"bottom",

        });
        setLoading(false);
        return; 
     }
     if(password !==confirmpassword){
        toast({
            title:"please select an image!",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"bottom",

        });
        setLoading(false);
        return;
     }
     try{
      const config = {
        header:{
            "Content-type":"application/json",
        },
      };
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

        setLoading(false);
        history.push("/chats")

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
 return (
    <VStack spacing={"5px"} color={"black"}>
    <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
        />
    </FormControl>
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
            placeholder="Enter Your Email"
            onChange={(e)=>setEmail(e.target.value)}
        />
    </FormControl>
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
         <Input
         type={show ? "text" :"password"}
            placeholder="Enter Your Paasowrd"
            onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width={"4.5rem"}>
            <Button h= "1.75rem" size={"sm"} onClick={handleClick}>
                {show ?"Hide" :"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
       
    </FormControl>
    <FormControl id='confirmpassword' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
         <Input
         type={show ? "text" :"password"}
            placeholder="Confirm Paasowrd"
            onChange={(e)=>setConfirmpassword(e.target.value)}
        />
        <InputRightElement width={"4.5rem"}>
            <Button h= "1.75rem" size={"sm"} onClick={handleClick}>
                {show ?"Hide" :"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>
       
    </FormControl>
    <FormControl id='pic' >
        <FormLabel>Upload your picture</FormLabel>
        <Input
         type="file"
         p={.5}
         accept="image/"
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
        Sign Up
    </Button>

    </VStack>
 );
}

export default Signup;