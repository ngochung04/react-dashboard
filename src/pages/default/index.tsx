import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "components/ColorModeSwitcher";

const index = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>
  );
};

export default index;
