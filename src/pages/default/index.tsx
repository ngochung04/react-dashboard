import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { ColorModeSwitcher } from "components/ColorModeSwitcher";
import { useSidebarContext } from "contexts/SidebarContext";

const DefaultPages = () => {
  const { onToggle } = useSidebarContext();
  const [value, setValue] = React.useState<any>({});

  const handle = (e: any) => {
    setValue((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const gio = useMemo(() => {
    return value.luong / value.ngay / 8;
  }, [value]);

  return (
    // <Box position="relative" fontSize="xl" p={3} minH="300vh">
    //   <Box position="fixed" top={3} backdropBlur="20px">
    <Flex justifyContent="flex-end">
      <ColorModeSwitcher />
      <Button onClick={onToggle}>Click me</Button>
      <Box>
        <Input name="luong" value={value?.luong ?? 0} onChange={handle}></Input>
        <Input name="ngay" value={value?.ngay ?? 0} onChange={handle}></Input>
        <Input
          name="gio300"
          value={value?.gio300 ?? 0}
          onChange={handle}
        ></Input>
        <Input
          name="gio150"
          value={value?.gio150 ?? 0}
          onChange={handle}
        ></Input>
        {Number(value.luong) +
          Number(gio) * 3 * Number(value.gio300) +
          Number(gio) * 1.5 * Number(value.gio150)}
      </Box>
    </Flex>
    //   </Box>
    // </Box>
  );
};

export default DefaultPages;
