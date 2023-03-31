



import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import "../Styles/App.css"
import NavLogin from "./NavLogin";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
// import NavSearchSec from "./NavSearch

export default function Navbar() {
  return (
    <Box className="Navbar" 
    bg="#0F0617" 
    // margin="auto"
    height= "73px"
    >
      <Flex justify="space-between">
       <NavLogo/>
       <NavSearch/>
       <NavLogin/>
      </Flex>
    </Box>
  );
}
