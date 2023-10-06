import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "components/ColorModeSwitcher";

const index = () => {
  return (
    <Box position="relative" fontSize="xl" p={3} minH="300vh">
      <Box position="fixed" top={3} backdropBlur="20px">
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
