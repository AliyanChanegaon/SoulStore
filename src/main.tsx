import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./context/app-context.js";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <BrowserRouter>
      <AppContextProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </AppContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
