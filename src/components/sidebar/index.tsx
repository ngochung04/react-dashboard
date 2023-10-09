import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarMargins = "0px";

  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="300px"
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
          <Stack direction="column" mt="8px" mb="auto">
            <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
              {/* <Links routes={routes} /> */}
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
