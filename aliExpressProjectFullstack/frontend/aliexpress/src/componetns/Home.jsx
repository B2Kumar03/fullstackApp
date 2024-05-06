import React from 'react'
import Choices from './Choices'
import Navbar from './Navbar'
import Slider1 from './Slider1'
import Banner from './Banner'
import Pannel from './Pannel'
import Products from './Products'
import { Footer } from './Footer'
import Heading from './Heading'
import Grid from './Grid'

const Home = () => {
  return (
    <>
     <Pannel/>
     <Choices/>
     <Grid/>
     <Banner/>
     <Heading/>
     <Products/>
     <Footer/>
    </>
  )
}

export default Home