import {
  Portal,
  Box,
  useColorModeValue,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from "@chakra-ui/react";
import { useSidebarContext } from "contexts/SidebarContext";
import React from "react";

const Navbar = () => {
  const sidebarContext = useSidebarContext();
  const mainText = useColorModeValue("navy.700", "white");
  const secondaryText = useColorModeValue("gray.700", "white");
  const navbarPosition = "fixed" as const;
  const navbarFilter = "none";
  const navbarBackdrop = "blur(20px)";
  const navbarShadow = "none";
  const navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );
  const navbarBorder = "transparent";
  const secondaryMargin = "0px";
  const paddingX = "15px";
  const gap = "0px";

  return (
    <Portal>
      <Box
        position={navbarPosition}
        boxShadow={navbarShadow}
        bg={navbarBg}
        borderColor={navbarBorder}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="16px"
        borderWidth="1.5px"
        borderStyle="solid"
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        alignItems={{ xl: "center" }}
        display={true ? "block" : "flex"}
        minH="75px"
        justifyContent={{ xl: "center" }}
        lineHeight="25.6px"
        mx="auto"
        mt={secondaryMargin}
        pb="8px"
        right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
        px={{
          sm: paddingX,
          md: "10px",
        }}
        ps={{
          xl: "12px",
        }}
        pt="8px"
        top={{ base: "12px", md: "16px", xl: "18px" }}
        w={{
          base: "calc(100vw - 6%)",
          md: "calc(100vw - 8%)",
          lg: "calc(100vw - 6%)",
          xl: "calc(100vw - 350px)",
          "2xl": "calc(100vw - 365px)",
        }}
      >
        <Flex
          w="100%"
          flexDirection={{
            sm: "column",
            md: "row",
          }}
          alignItems={{ xl: "center" }}
          mb={gap}
        >
          <Box mb={{ sm: "8px", md: "0px" }}>
            <Breadcrumb>
              <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
                <BreadcrumbLink href="#" color={secondaryText}>
                  Pages
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color={secondaryText} fontSize="sm">
                <BreadcrumbLink href="#" color={secondaryText}>
                  {sidebarContext.activeItem}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            {/* Here we create navbar brand, based on route name */}
            <Link
              color={mainText}
              href="#"
              bg="inherit"
              borderRadius="inherit"
              fontWeight="bold"
              fontSize="34px"
              _hover={{ color: { mainText } }}
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              {sidebarContext.activeItem}
            </Link>
          </Box>
          <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
            {/* <AdminNavbarLinks
              onOpen={props.onOpen}
              secondary={props.secondary}
              fixed={props.fixed}
            /> */}
          </Box>
        </Flex>
      </Box>
    </Portal>
  );
};

export default Navbar;
