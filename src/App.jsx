import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar'
import Navline from './components/navline'
import Add1 from './components/add1'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Add2 from './components/add2'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Footer from './components/footer'

function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Navline></Navline>
    <Add1></Add1>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Add2></Add2>
    <Section4></Section4>
    <Section5></Section5>
    <Section6></Section6>
    <Footer></Footer>
    </>


  )
}

export default App
