import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaRupeeSign,
} from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { BsPhone } from "react-icons/bs";

import { ReactNode } from "react";
import Logo from "./smallcomponents/logo";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const color = useColorModeValue("red.500", "#2a9df4");
  return (
    <VStack
    p={0}
    m={0}
      w="100%"
      bg={"blackAlpha.200"}
      color={useColorModeValue("gray.700", "gray.200")}
     
    >
      <Container as={Stack} maxW={"6xl"} pt="25px" >
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text fontWeight="bolder" fontSize="xl" color={color}>
              NEED HELP
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Contact Us
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Track Order
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Returns & Refunds
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              FAQs
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              My Account
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight="bolder" fontSize="xl" color={color}>
              COMPANY
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              About Us
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Careers
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Stores Near Me
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              From The Soul Us
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Souled Army
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight="bolder" fontSize="xl" color={color}>
              MORE INFO
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              T&C
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Privacy Policy
            </Text>
            <Text cursor="pointer" _hover={{ color: color }}>
              Sitemap
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Other</ListHeader>
            <HStack>
              <FaRupeeSign />
              <Text cursor="pointer" _hover={{ color: color }}>
                COD Available
              </Text>
            </HStack>
            <HStack>
              <IoIosRefresh />
              <Text cursor="pointer" _hover={{ color: color }}>
                30 Days Easy Returns
              </Text>
            </HStack>
          </Stack>
        </SimpleGrid>
        <HStack mt="20px" flexDirection="column">
          <Stack justify="center" flexDirection="row">
            <Text mt="3px">
              <BsPhone />{" "}
            </Text>
            <Text fontWeight="bolder"> EXPERIENCE THE SOULED STORE APP</Text>
          </Stack>
          <Stack flexDirection="row">
            <Image h={10} src="\img\Footer-images\appstore.png" />
            <Image h={10} src="\img\Footer-images\playstore.png" />
          </Stack>
        </HStack>
        <HStack
          justify={{ base: "center", sm: "center", md: "flex-end" }}
          mr={{ base: "none", sm: "none", md: "80px" }}
        >
          <ListHeader>Follow us</ListHeader>
          <HStack mb="5px">
            <FaFacebook />
            <FaInstagram />
            <FaSnapchatGhost />
            <FaTwitter />
          </HStack>
        </HStack>
      </Container>
      <Box pb="25px" >
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © The Souled Store 2023-24
        </Text>
      </Box>
    </VStack>
  );
}
