import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <>
        <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Box>
      </>
    </ChakraProvider>
  );
}

export default App;
