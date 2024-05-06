import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "./Slider1";
import fagotw from "../assets/fagotw.png";
import girl from "../assets/imagegirl.webp";
import cap from "../assets/cap.webp";
import la from "../assets/laguges.webp";
import Slider1 from "./Slider1";
import product1 from "../assets/product/product1.webp";
import product2 from "../assets/product/product2.webp";
import product3 from "../assets/product/product3.webp";
import product4 from "../assets/product/product4.webp";
import product5 from "../assets/product/product5.webp";

const Grid = () => {
  return (
    <Box w={"80%"} margin={"auto"} mt={10} mb={50}>
      <Flex color={"red"} w={"100%"} justifyContent={"space-between"}>
        <Box w={"27%"}  height={"800px"}>
          <Box
            height={"30%"}
           
            bg={"#F5F5F5"}
            borderRadius={30}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Flex justifyContent={"space-evenly"} fontSize={30}>
              <Box>
                <Button
                  fontSize={30}
                  bg={"black"}
                  borderRadius={"30px"}
                  color={"white"}
                  height={"50px"}
                >
                  Register
                </Button>
              </Box>
              <Box>
                <Button
                  fontSize={30}
                  border={"1px solid black"}
                  height={"50px"}
                  borderRadius={"30px"}
                >
                  Sign in
                </Button>
              </Box>
            </Flex>
            <Flex justifyContent={"center"} mt={5}>
              <Text color={"black"}>or continue with</Text>
            </Flex>
            <Flex justifyContent={"center"} mt={5}>
              <Text>
                <Image src={fagotw} />
              </Text>
            </Flex>
          </Box>

          <Box
            height={"65%"}
     
            mt={"10%"}
            borderRadius={30}
            pl={5}
            bg={"#FFF5EF"}
            pt={4}
          >
            <Box fontSize={30} fontWeight={700}>
              Welcome Deal
            </Box>
            <Box fontSize={20} color={"black"}>
              Your exclusive price
            </Box>
            <Box>
              <Slider1 />
            </Box>
          </Box>
        </Box>

        <Box
          w={"27%"}
       
          p={10}
          bg={"#F5F5F5"}
          borderRadius={"30px"}
        >
          <Box>
            <Box fontSize={30} fontWeight={700}>
              Bestsellers
            </Box>
            <Box fontSize={20} color={"black"}>
              Get discounts on popular items
            </Box>
          </Box>
          <Box bg={"white"} p={10} borderRadius={"30px"}>
            <Box>
              <Image src={girl} w={"100%"} borderRadius={"30px"} />
              <Text
                textAlign={"center"}
                fontSize={30}
                color={"red"}
                fontWeight={700}
              >
                Rs.100 <strike style={{ color: "#ccc" }}>Rs.200</strike>
              </Text>
            </Box>
            <Box display={"flex"} w={"100%"} justifyContent={"space-evenly"}>
              <Box>
                <Image src={cap} borderRadius={"30px"} />
                <Text
                  textAlign={"center"}
                  fontSize={30}
                  color={"red"}
                  fontWeight={700}
                >
                  Rs.100 <strike style={{ color: "#ccc" }}>Rs.200</strike>
                </Text>
              </Box>
              <Box>
                <Image src={la} borderRadius={"10px"} />
                <Text
                  textAlign={"center"}
                  fontSize={30}
                  color={"red"}
                  fontWeight={700}
                >
                  Rs.100 <strike style={{ color: "#ccc" }}>Rs.200</strike>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w={"37%"} >
          <Box
            height={"45%"}
           
            p={10}
            bg={"#F5F5F5"}
            borderRadius={"30px"}
          >
            <Box>
              <Box fontSize={30} fontWeight={700}>
                Top Brands
              </Box>
              <Box fontSize={20} color={"black"}>
                Top price & quality pics
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={4} w={"95%"}>
              <Box>
                <Image src={product1} borderRadius={"30px"} w={"90%"} />
                <Text fontSize={25} fontWeight={700}><sub>Rs</sub>1,880. <sub>60</sub></Text>
              </Box>
              <Box>
                
                <Image src={product2}  borderRadius={"30px"} w={"90%"} />
                <Text fontSize={25} fontWeight={700}><sub>Rs</sub>1,450. <sub>15</sub></Text>
              </Box>
              <Box>
                
                <Image src={product3} borderRadius={"30px"} w={"90%"} />
                <Text fontSize={25} fontWeight={700}><sub>Rs</sub>1,220. <sub>20</sub></Text>
              </Box>
            </Box>
          </Box>


          <Box height={"45%"}  mt={"10%"} p={10} borderRadius={"30px"} bg={"#F5F5F5"}>
          <Box>
              <Box fontSize={30} fontWeight={700}>
                Weakly deals
              </Box>
              <Box fontSize={20} color={"black"}>
                Low prices in the past 30 days
              </Box>
            </Box>
          
          <Box display={"flex"} justifyContent={"space-between"} mt={4} w={"95%"}>
              <Box>
                <Image src={product4} borderRadius={"30px"} w={"80%"} />
                <Text fontSize={25} fontWeight={700}><sub>Rs</sub>1,880. <sub>60</sub></Text>
              </Box>
              <Box>
                
                <Image src={product5}  borderRadius={"30px"} w={"80%"} />
                <Text fontSize={25} fontWeight={700}><sub>Rs</sub>1,450. <sub>15</sub></Text>
              </Box>
            
            </Box>
            </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Grid;
