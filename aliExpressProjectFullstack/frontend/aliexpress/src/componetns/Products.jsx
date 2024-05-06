import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";


const Products = () => {

const [data,setData]=useState([])
const [loading,setLoading]=useState(false)
  async function fetData() {
    setLoading((prev)=>!prev)
    try {
      const {data}=await axios.get('https://backendapp-5.onrender.com/product')
      console.log(data);
      setData(data)
      setLoading((prev)=>!prev)
    } catch (error) {
      console.log(error);
      setLoading((prev)=>!prev)
    }
   }
  useEffect(() => {
    
    fetData();
  }, []);
  if(loading){
    return <Loader/>
  }
  return (
    <>
    
      <SimpleGrid
        columns={[2, null, 4]}
        spacing="40px"
        mt={50}
        w={"80%"}
        margin={"auto"}
        mb={100}
      >
        
        {data.map((ele) => {
          let t = "";
          if (ele.title.length > 20) {
            t = ele.title.slice(0, 20) + "...";
          } else {
            t = ele.title;
          }
          let d = ele.description.slice(0, 40) + "...";
          return (
            <Box
              w={300}
              h={450}
              border={"1px solid #ccc"}
              borderRadius={5}
              _hover={{ scaleX: "10px" }}
              key={ele.id}
              p={2}
              className="shadow"
            >
              <Image src={ele.image} w={"100%"} borderRadius={5} h={"58%"} />
              <Text fontSize={20} mt={2} fontWeight={700}>
                {t}
              </Text>
              <Text>{d}</Text>
              <Text fontSize={20} fontWeight={600} color={"black"}>
                ₹{ele.price}{" "}
              </Text>
              <hr />
              <Box
                display={"flex"}
                justifyContent="flex-start"
                flexDirection={"column"}
                mt={5}
              >
                <Box>
                  <Link to={`/product/${ele.id}`}>
                    <Button
                      bg={"black"}
                      color={"white"}
                      _hover={{ color: "black" }}
                    >
                      View details
                    </Button>
                  </Link>
                  <Button
                    bg={"white"}
                    color={"black"}
                    ml={5}
                    
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Products;
