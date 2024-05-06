import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Text } from "@chakra-ui/react";
import img1 from '../assets/sliderimg/img1.webp'
import img2 from '../assets/sliderimg/img2.webp'
import img3 from '../assets/sliderimg/img3.webp'
import img4 from '../assets/sliderimg/img4.webp'
import { color } from "framer-motion";

function Slider1() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed:500,
    cssEase: "linear",
   
  };
  return (
    <Box className="slider-container" w={"300px"} >
      <Slider {...settings}>
        <Box borderRadius={"30px"} h={"700px"}>
          <Image src={img1} borderRadius={"30px"} h={"50%"} />
          <Text textAlign={"center"} fontSize={30} color={"red"} fontWeight={700}>Rs.100 <strike style={{color:"#ccc"}}>Rs.200</strike></Text>
        </Box>
        <Box borderRadius={"30px"} ml={5} h={"700px"}>
          <Image src={img2} borderRadius={"30px"} h={"50%"}/>
          <Text textAlign={"center"} fontSize={30} color={"red"} fontWeight={700}>Rs.1400 <strike style={{color:"#ccc"}}>Rs.1450</strike></Text>
        </Box>
        <Box borderRadius={"30px"} h={"700px"}>
          <Image src={img3} borderRadius={"30px"} h={"50%"}/>
          <Text textAlign={"center"} fontSize={30} color={"red"} fontWeight={700}>Rs.1,000 <strike style={{color:"#ccc"}}>Rs.2000</strike></Text>
        </Box>
        <Box borderRadius={"30px"} h={"700px"}>
          <Image src={img4} borderRadius={"30px"} h={"50%"}/>
          <Text textAlign={"center"} fontSize={30} color={"red"} fontWeight={700}>Rs.1900 <strike style={{color:"#ccc"}}>Rs.2000</strike></Text>
        </Box>
       
      </Slider>
    </Box>
  );
}

export default Slider1;
