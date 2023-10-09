import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "components/ColorModeSwitcher";
import { useSidebarContext } from "contexts/SidebarContext";

const DefaultPages = () => {
  const { onToggle } = useSidebarContext();

  return (
    <Box position="relative" fontSize="xl" p={3} minH="300vh">
      <Box position="fixed" top={3} backdropBlur="20px">
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher />
          <Button onClick={onToggle}>Click</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default DefaultPages;
