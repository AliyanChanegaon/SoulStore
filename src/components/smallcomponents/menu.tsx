import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Stack,
  useDisclosure,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

interface menuType {
  title: string;
  options?: Array<string>;
}

const MenuBar = (data: menuType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("red.100", "#2a9df4");
  const color = useColorModeValue("black", "white");
  const bgstrip = useColorModeValue("red", "#04538f");
  const TextColor=useColorModeValue("red", "white");

  console.log();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        color={color}
        fontSize={14}
        fontWeight="bold"
        borderRadius={0}
        borderColor="blackAlpha.400"
        h="full"
        _hover={{ borderBottom: `4px solid ${bg}`, color: TextColor }}
      >
        {data?.options?.length ? (
          <>
            {data?.title}{" "}
            {isOpen ? (
              <ChevronUpIcon animation="ease-in" />
            ) : (
              <ChevronDownIcon animation="ease-in" />
            )}
          </>
        ) : (
          data?.title
        )}
      </MenuButton>

      {data.options && (
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          borderRadius={0}
          borderColor="blackAlpha.200"
          mt={-2}
        >
          <Grid
            templateRows="repeat(5, 1fr)"
            templateColumns={
              data?.options?.length >= 25
                ? `repeat(5,1fr)`
                : `repeat(${Math.ceil((data?.options?.length || 0) / 5)}, 1fr)`
            }
          >
            {data?.options?.map((el, idx) => (
              <MenuItem
                key={idx}
                _hover={{
                  borderLeft: `4px solid ${bgstrip}`,
                  color: color,
                  backgroundColor: bg,
                }}
                color={color}
                // style={{
                //   gridColumn: `span ${Math.ceil((idx + 1) / 5)}`,
                //   gridRow: `${Math.ceil((idx % 5) + 1)}`,
                // }}
              >
                {el}
              </MenuItem>
            ))}
          </Grid>
        </MenuList>
      )}
    </Menu>
  );
};

export default MenuBar;
