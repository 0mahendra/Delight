import { Button, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const Post = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [tilte ,setTitle] =useState();
  const [videoo, setVideoo] =useState();

  const postDetails =(video)=>{
    
    if(video.type ==="image/jpeg" || video.type==="image/png" || video.type ==="video/mp4"){
        const data = new FormData();
        data.append("file",video);
        data.append("upload_preset","chat-app");
        data.append("cloud_name","mahisingh");
        fetch("https://api.cloudinary.com/v1_1/mahisingh/image/upload",{
            method:"post",
            body:data,

        }).then((res)=>res.json())
          .then((data)=>{
            // console.log(data.url.toString());
            setVideoo(data.url.toString());
            console.log(data.url.toString());
            // setLoading(false);
          })
          .catch((err)=>{
            console.log(err);
            // setLoading(false);
          });

    }
    // console.log(videoo);
  }

  console.log(tilte);
  console.log("this is videp" , videoo);
    return(
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"black"}>Post Your video</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Video</FormLabel>
              <Input type="file" placeholder='Video'  
                 onChange={(e)=>postDetails(e.target.files[0])}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

    


export default Post;