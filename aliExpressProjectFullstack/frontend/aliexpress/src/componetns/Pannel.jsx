import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { SlArrowDown } from 'react-icons/sl'

const Pannel = () => {
  return (
    <Box bg={"black"} color={"white"} w={"100%"}>
     <Box>
        <Flex
          justifyContent={"space-evenly"}
          alignItems={"center"}
          w={"100%"}
          margin={"auto"}
          p={5}
          fontSize={20}
        >
          <Box>
            <Button
              bg={"#535353"}
              _hover={{ color: "black" }}
              borderRadius={"30px"}
            >
              <Flex fontSize={20} color={"white"} alignItems={"center"} w={300}>
                <Box fontSize={30}>
                  {" "}
                  <IoReorderThreeOutline />
                </Box>
                <Box>All categories</Box>
                <Spacer />
                <Box fontSize={15}>
                  <SlArrowDown />
                </Box>
              </Flex>
            </Button>
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            NN
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            Bestsellers
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            Top Brands
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            Shoes
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            Women's Clothing
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            Sports & Entertainment
          </Box>
          <Box
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            _hover={{ bg: "#535353", cursor: "pointer" }}
            borderRadius={"30px"}
          >
            <Flex fontSize={20} color={"white"} alignItems={"center"}>
              <Box>More</Box>
              <Spacer />
              <Box fontSize={15}>
                <SlArrowDown />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Pannel