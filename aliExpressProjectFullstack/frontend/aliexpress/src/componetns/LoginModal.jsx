import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Input,
    Box,
    Button,
  } from '@chakra-ui/react'
import axios from 'axios'

const LoginModal = ({isOpen,onClose}) => {
  const [user,setUser]=useState({
    "name":"",
    "email":"",
    "password":""
  })
  const handleClick=async()=>{
    
    try {
      const {data}=await axios.post("https://backendapp-6.onrender.com/register",user)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent p={10}>
          <ModalHeader textAlign="center">Register/Sign in</ModalHeader>
          <Text textAlign="center" bg="#e6ffe6" p="1" fontSize={12} fontWeight={700}>Your information is protected</Text>
          <ModalBody textAlign="center">
            <Box><Input placeholder='Name' onChange={(e)=>setUser({
              ...user,
               name:e.target.value
            })}/></Box>
            <Box mt={5}><Input placeholder='Email' onChange={(e)=>setUser({
              ...user,
               email:e.target.value
            })}/></Box>
            <Box mt={6}><Input placeholder='Password' onChange={(e)=>setUser({
              ...user,
               password:e.target.value
            })}/></Box>
            <Box mt={10}><Input type="submit" value="Continue" bg="red"  color="white" borderRadius="30px" onClick={handleClick}/></Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginModal