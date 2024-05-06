import React, { useEffect, useState } from "react";
import logo from "../assets/logoAliexpress.png";
import axios from "axios";
import { IoReorderThreeOutline } from "react-icons/io5";
import {
  Flex,
  Box,
  Image,
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  InputRightElement,
  Text,
  Button,
  Spacer,
  Select,
  TagLabel,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { PiSquaresFourBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import LoginModal from "./LoginModal";
import ModalR from "./ModalR";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure()
  console.log(onClose);
  const [defaul, setDefault] = useState({
    name: "",
    image: "",
    currencies: "",
  });

  const [isOpen1, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [all,setAll]=useState([])

  const handleMenuOpen = () => {
    setData({
      backgroundColor: "#2A55E5",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      rotate: "180deg",
    });
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
    setData({});
  };
  const handleOneModal=()=>{
    onOpen()
  }
  const handleOneModal2=()=>{
    onOpen2()
  }

  const fetchData = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setAll(data)
    const newData = data.filter((ele) => {
      if (ele.name.common == "India") {
        setDefault({
          ...defaul,
          name: ele.name.common,
          image: ele.flags.png,
        });

        return ele;
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box bg={"black"} color={"white"} w={"100%"} className="headroom">
      <LoginModal isOpen={isOpen} onClose={onClose}/>
      <ModalR isOpen={isOpen2} onClose={onClose2}/>
      <Box>
        <Flex
          justifyContent="space-evenly"
          alignItems={"center"}
          p={5}
          w={"95%"}
        >
          <Box>
            <Box>
              <Image src={logo} alt="logo" width={"200px"} />
            </Box>
          </Box>

          <Box width={"45%"}>
            <InputGroup
              bg={"white"}
              borderRadius="30px"
              color={"black"}
              height={50}
            >
              <Input
                placeholder="iphone 11 promax"
                borderRadius="30px"
                height={50}
              />
              <InputRightElement
                bg="black"
                borderRadius="100%"
                p={5}
                color={"white"}
                height={50}
                mr={2}
              >
                <Text color={"white"} fontSize={30} fontWeight={800}>
                  <CiSearch />
                </Text>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box>
            <Flex>
              <Box fontSize={45}>
                <PiSquaresFourBold />
              </Box>
              <Box>
                <Box>Download the</Box>
                <Box>aliExpress App</Box>
              </Box>
            </Flex>
          </Box>

          <Box w={"5%"} _hover={{cursor:"pointer"}}>
            <Menu style={{ width: "200px" }}>
              <MenuButton as={Box}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Box>
                    <Image src={defaul.image} w={10} />
                  </Box>
                  <Box>
                    <Text>{defaul.name}</Text>
                    <Text
                      fontWeight={700}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      INR <SlArrowDown />
                    </Text>
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList
                color={"black"}
                mx={-300} // Remove horizontal margin
                my={-2}
                w={350}
                p={5}
              >
                <FormLabel fontSize={30}>Ship to</FormLabel>
                <Menu>
                  <MenuButton as={Select}></MenuButton>
                  
                  <MenuList w={300}>
                  <Box className="menu-container" fontSize={20}>
                    {all.map((ele)=>{
                      return <>
                      <MenuItem w={300}>
                    <Flex justifyContent={"space-between"} mr={5}>
                      <Box>
                        <Image src={ele.flags.png} 
                        w={10}/>
                      </Box>
                      <Box>
                        <Text>{ele.name.common}</Text>
                      </Box>
                    </Flex>
                    </MenuItem>
                      </>
                    })}
                   </Box> 
                  </MenuList>
                  
                </Menu>

                <FormLabel fontSize={30}>Language</FormLabel>
                <Select placeholder="English" size="lg">
                  
                </Select>

                <FormLabel fontSize={30}>Currancy</FormLabel>
                <Select placeholder="INR" size="lg">
                  <option value="">USD</option>
                  <option value="">Euro</option>
                </Select>


                <Button  w={"100%"}
                    bg={"black"}
                    borderRadius={"30px"}
                    color={"white"}
                    height={"50px"}
                    fontSize={20}
                    mt={10}
                    >Save</Button>
              </MenuList>
            </Menu>
          </Box>

          <Box
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
            _hover={{ cursor: "pointer" }}
          >
            <Menu
              isOpen={isOpen1}
              onClose={handleMenuClose}
              style={{ width: "200px" }}
            >
              <MenuButton as={Box}>
                <Flex>
                  <Box fontSize={40}>
                    <FaRegUser />
                  </Box>
                  <Box>
                    <Box>Welcome</Box>
                    <Flex alignItems={"center"}>
                      {" "}
                      <Box>Sign in /Register </Box>
                      <Box>
                        <SlArrowDown />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList
                color={"black"}
                mx={0} // Remove horizontal margin
                my={-2}
                w={350}
                p={5}
              >
                <MenuOptionGroup _focus={{ outline: "none", border: "s" }}>
                  <Button
                    w={"100%"}
                    bg={"black"}
                    borderRadius={"30px"}
                    color={"white"}
                    height={"50px"}
                    fontSize={20}
                    onClick={handleOneModal2}
                  >
                    Sign Up
                  </Button>
                  <Button
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"30px"}
                    color={"#ccc"}
                    height={"50px"}
                    fontSize={20}
                    _focus={{ outline: "none", border: "s" }}
                    onClick={handleOneModal}
                  >
                    Register
                  </Button>
                </MenuOptionGroup>
                <MenuDivider />
                <Box className="menu-container" fontSize={20}>
                  <MenuOptionGroup>
                    <MenuItem _hover={{ color: "red" }}>My Orders</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>My Coins</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>
                      Message Center
                    </MenuItem>
                    <MenuItem _hover={{ color: "red" }}>Payment</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>Wish List</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>My Coupons</MenuItem>
                    <MenuDivider />

                    <MenuItem _hover={{ color: "red" }}>Settings</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>DS Center</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>Seller Login</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>
                      Buyer Protection
                    </MenuItem>
                    <MenuItem _hover={{ color: "red" }}>Help Center</MenuItem>
                    <MenuItem _hover={{ color: "red" }}>
                      Disputes & Reports
                    </MenuItem>
                    <MenuItem _hover={{ color: "red" }}>
                      Report IPR infringement
                    </MenuItem>
                    <MenuItem _hover={{ color: "red" }}>Accessibility</MenuItem>
                  </MenuOptionGroup>
                </Box>
              </MenuList>
            </Menu>
          </Box>

          <Box w={"5%"}>
            <Flex justifyContent="space-evenly">
              <Box fontSize={30}>
                <FiShoppingCart />
              </Box>
              <Box>
                <Box>
                  <Text
                    align={"center"}
                    width={"8"}
                    h={"5"}
                    bg="white"
                    fontWeight={700}
                    borderRadius="20px"
                    color={"black"}
                  >
                    0
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight={700}>Cart</Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      
    </Box>
  );
};

export default Navbar;
