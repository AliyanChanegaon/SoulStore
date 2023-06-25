import { useState } from "react";
import { VStack, Container, Stack } from "@chakra-ui/react";
import Navbar from "./Routes/Navbar";
import Footer from "./components/footer";

function App() {
  return (

    <VStack margin="auto"  w="100vw" h="100vh">
      <Navbar />
      {/* Content */}
     
     <Footer/>
    </VStack>

  );
}

export default App;
