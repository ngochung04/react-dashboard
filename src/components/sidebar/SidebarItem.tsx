import {
  HStack,
  Flex,
  useColorModeValue,
  Box,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IRouteItem } from "routers";

interface Props {
  route: IRouteItem;
}

const SidebarItem = ({ route }: Props) => {
  const location = useLocation();

  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  const activeIcon = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.500", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const activeRoute = () => {
    return location.pathname.includes(route.path);
  };

  return (
    <NavLink to={route?.path ?? ""}>
      <Box>
        <HStack spacing={activeRoute() ? "22px" : "26px"} py="5px" ps="10px">
          <Flex w="100%" alignItems="center" justifyContent="center">
            <Box
              color={activeRoute() ? activeIcon : textColor}
              me="18px"
              verticalAlign="middle"
            >
              {
                <Icon
                  as={route.icon}
                  width="20px"
                  height="20px"
                  color="inherit"
                />
              }
            </Box>
            <Text
              me="auto"
              color={activeRoute() ? activeColor : textColor}
              fontWeight={activeRoute() ? "bold" : "normal"}
            >
              {route.name}
            </Text>
          </Flex>
          <Box
            h="36px"
            w="4px"
            bg={activeRoute() ? brandColor : "transparent"}
            borderRadius="5px"
          />
        </HStack>
      </Box>
    </NavLink>
  );
};

export default SidebarItem;
