import { VStack } from "@chakra-ui/react";
import Navbar from "./routes/Navbar";
import Footer from "./components/footer";
import Allroutes from "./routes/Allroutes";
import "./App.css";

function App() {
  return (
    <VStack margin="auto" w="100vw" h="100vh" gap={0} p={0} m={0} overflowX="hidden">
      <Navbar />
      <Allroutes />
      <Footer />
    </VStack>
  );
}

export default App;

//npm i react-alice-carousel
