import { useState } from "react";
import { VStack, Container, Stack } from "@chakra-ui/react";
import Navbar from "./Routes/Navbar";
import Footer from "./components/footer";
import Home from "./pages/kid";
import Allroutes from "./Routes/Allroutes";
import "./App.css";

function App() {
  return (

    <VStack margin="auto"  w="100vw" h="100vh">
      
      <Navbar />
   <Allroutes/>
  
   
      {/* Content */}
       <Footer/>
    </VStack>

  );
}

export default App;

//npm i react-alice-carousel