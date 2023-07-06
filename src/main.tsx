import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./context/app-context.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <ChakraProvider>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ChakraProvider>
  
);
