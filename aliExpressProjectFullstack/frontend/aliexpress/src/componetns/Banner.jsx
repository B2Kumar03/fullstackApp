import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import floor from '../assets/product/floor.webp'
import card from '../assets/card.png'

const Banner = () => {
  return (
    <Flex w={"100%"}  bg={"#FFD057"} mb={10} justifyContent={"center"} p={20} >
       <Box  w={"80%"} display={"flex"} >
       <Box w={"50%"} >
        <Box display={"flex"} fontSize={30}>
             <Text  fontWeight={700}>Choice</Text>
             <Text  fontWeight={700} color={"red"}>Day</Text>
             <Text >&nbsp;ends May 8,12:29(GMT+5.5)</Text>
        </Box>
        <Box>
            <Box fontWeight={700} color={"red"} fontSize={100}>Up to 60% off</Box>
            <Box fontWeight={700} color={"black"} fontSize={60}>Save more with coupons</Box>
        </Box>
       </Box>
       <Box  w={"50%"}>
       <Box  >
        <Image src={floor}   />
       </Box>
       <Box mt={-120} _hover={{cursor:"pointer"}}>
        <Image src={card} w={"80%"}/>
       </Box>
       </Box>
       </Box>
    </Flex>
  )
}

export default Banner