import { useState } from "react";
import { VStack, Container, Stack } from "@chakra-ui/react";
import Navbar from "./Routes/Navbar";
import Footer from "./components/footer";
import Allroutes from "./Routes/Allroutes";
import "./App.css";

function App() {
  return (
    <VStack margin="auto" w="100vw" h="100vh" gap={0} p={0} m={0}>
      <Navbar />
      <Allroutes />

      {/* Content */}
      <Footer />
    </VStack>
  );
}

export default App;

//npm i react-alice-carousel
