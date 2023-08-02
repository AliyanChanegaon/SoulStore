import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  useColorModeValue,
  useDisclosure,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  Divider,
  useToast,
  Tooltip,
  Tag,
  Avatar,
  TagLabel,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MenuBar from "../components/smallcomponents/menu";
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Logo from "../components/smallcomponents/logo";
import ThemeButton from "../components/smallcomponents/theme";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../components/smallcomponents/Search";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

import { ConfirmationDialog } from "../components/dialog/confirmation-dialog";
import { useRecoilState } from "recoil";
import UserDetailAtom, {
  UserDetailsProps,
} from "../utils/atoms/auth-atoms-state";

interface HamburgerProp {
  onClose: () => void;
}

const menusList: Array<{ title: string; options?: Array<string> }> = [
  {
    title: "TOPWEAR",
    options: [
      "Shirts",
      "Tops",
      "T-Shirts",
      "Boyfriend T-shirts",
      "Co-ord Sets",
      "Lounge Bralettes",
      "Dresses",
      "Sweatshirts & Sweaters",
      "Hoodies & Jackets",
    ],
  },

  {
    title: "BOTTOMWEAR",
    options: [
      "Cargos & Joggers",
      "Shorts",
      "Innerwear",
      "Freestyle Leggings",
      "All Day Pants",
      "Pajamas",
    ],
  },
  {
    title: "SHOES & ACCESSORIES",
    options: ["Shoes New", "Perfumes", "Socks", "Backpacks", "Caps"],
  },
  {
    title: "SHOP BY THEMES",
    options: [
      "TSS ORIGINALS",
      "SOLIDS",
      "SUPERHEROES",
      "All Superheroes",
      "Captain America™",
      "X-Men™",
      "Marvel™",
      "Spider-Man™",
      "Black Panther™",
      "Iron Man™",
      "Captain Marvel™",
      "Punisher™",
      "Doctor Strange",
      "DC Comics™",
      "Batman™",
      "Superman™",
      "Wonder Woman™",
      "The Flash™",
      "Hulk™",
      "Thor™",
      "Joker™",
      "Deadpool™",
    ],
  },
];

const mainLinks: Array<{ path: string; title: string }> = [
  {
    path: "/men",
    title: "MEN",
  },

  {
    path: "/women",
    title: "WOMEN",
  },

  {
    path: "/kid",
    title: "KID",
  },
];
export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  
  const [UserDetails] = useRecoilState<UserDetailsProps>(UserDetailAtom);
  const [Searchbar, SetSearchBar] = useState(false);
  const Navigate = useNavigate();

  const bg = useColorModeValue("red.500", "#2a9df4");
  const menubg = useColorModeValue("none", "#0e4482");

  return (
    <Box width="full">
      <Flex
        h={30}
        display={{ base: "block", md: "block", lg: "none" }}
        width="full"
        bgColor={bg}
      ></Flex>
      <Flex
        bg={menubg}
        color={useColorModeValue("gray.600", "white")}
        h={{ base: "40px", md: "50px", lg: "105px" }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        position="relative"
      >
        <Stack
          flex={{ base: 0, md: "auto" }}
          display={{ base: "inline", md: "inline", lg: "none" }}
          position="absolute"
          zIndex="1"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={20} h={20} />
              ) : (
                <HamburgerIcon w={20} h={20} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Stack>
        <Stack
          display={{ base: "flex", md: "flex", lg: "none" }}
          flexDirection="row"
          position="absolute"
          zIndex={3}
          right="5%"
          style={{ filter: menubg === "none" ? "none" : "invert(100%)" }}
        >
          <Image
            onClick={() => SetSearchBar(!Searchbar)}
            height="25px"
            src="\public\img\icons\search.png"
          />

          <Image
            onClick={() => Navigate("/wishlist")}
            height="25px"
            src="\public\img\icons\heart.png"
          />

          <Image
            onClick={() => Navigate("/cart")}
            height="25px"
            src="\public\img\icons\cart.png"
          />
        </Stack>

        <Flex
          position="relative"
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          {Searchbar === false && (
            <Stack
              position={{ base: "relative", md: "relative", lg: "absolute" }}
              left={{ md: "40%", lg: 30 }}
              top={{ base: -2, md: 2 }}
            >
              <Logo />
            </Stack>
          )}

          <DesktopNav />
        </Flex>

        {UserDetails.isAuth && (
          <Tag
            zIndex={9}
            display={{ base: "none", md: "initial" }}
            position="absolute"
            top={120}
            right={0}
            size="lg"
            borderRadius="full"
            borderEndRadius={0}
            bgColor={bg}
            color="white"
          >
            <Stack flexDirection="row" h="100%" mt={1}>
              <Avatar
                src="\img\avatar.png"
                size="xs"
                name={UserDetails.userName}
              />
              <TagLabel>{UserDetails.userName}</TagLabel>
            </Stack>
          </Tag>
        )}

        {Searchbar && (
          <Stack
            w="100%"
            onBlur={() => SetSearchBar(!Searchbar)}
            position="absolute"
            zIndex={4}
          >
            <SearchBar />
          </Stack>
        )}
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            color="transparent"
            style={{ height: "92px" }}
          >
            Basic Drawer
          </DrawerHeader>
          <DrawerBody p={0}>
            <MobileDrawer onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const [UserDetails, setUserDetails] =
    useRecoilState<UserDetailsProps>(UserDetailAtom);
  const [isHovered, setIsHovered] = useState(false);
  const NavIcons: any = [
    {
      path: "/login",
      type: UserDetails.isAuth ? "logout" : "link",
      icon: UserDetails.isAuth ? "" : <FaRegUser />,
    },

    {
      path: "/wishlist",
      type: "link",
      icon: <FaRegHeart />,
    },
    {
      path: "/cart",
      type: "link",
      icon: <FaShoppingBag />,
    },
    {
      type: "button",
      icon: <ThemeButton />,
    },
  ];

  const toast = useToast();
  const bg = useColorModeValue("red.500", "#2a9df4");
  const color = useColorModeValue("black", "white");
  const menubg = useColorModeValue("none", "#0e4482");
  const [isDialogOpen, setisDialogOpen] = useState(false);

  const Handlinghover = () => {
    setIsHovered(true);
  };
  const HandlingMouseLeave = () => {
    setIsHovered(false);
  };
  const defaultstyle = {
    color: "white",
    padding: "12px",
    width: "100px",
  };

  const activestyle = {
    color: "black",
    width: "100px",
    backgroundColor: "white",
    padding: "12px",
  };

  return (
    <VStack
      display={{ base: "none", md: "none", lg: "flex" }}
      gap={0}
      w="100%"
      maxW="100vw"
    >
      <HStack
        margin="auto"
        bg={bg}
        w="100%"
        color={color}
        justifyContent="space-around"
      >
        <Stack
          flexDirection="row"
          textAlign="center"
          ml={-75}
          gap={0}
          fontWeight="700"
        >
          {mainLinks.map((el, idx) => (
            <NavLink
              key={idx}

              to={el.path}
              style={({ isActive }: any) =>
                isActive ? activestyle : defaultstyle
              }
              end
            >
              {el.title}
            </NavLink>
          ))}
        </Stack>

        <Stack flexDirection="row" gap={10} mr={-200} color={"white"}>
          <Box>Track order</Box>
          <Box>Contact us</Box>
          <Box>Download APP</Box>
        </Stack>
      </HStack>

      <HStack
        w="100%"
        height="3.5rem"
        color={color}
        justifyContent="space-between"
        boxShadow="0px 2px 2px 0px rgba(199,191,199,1)"
        bg={menubg}
        // border="2px solid red"
      >
        <Stack
          flexDirection="row"
          textAlign="center"
          ml={190}
          gap={5}
          fontWeight="700"
          h="full"
        >
          {menusList.map((el, idx) => (
            <MenuBar key={idx} {...el} />
          ))}
        </Stack>

        <HStack mr={50} gap={7} w="35%" justifyContent="space-between">
          <Stack
            w="65%"
            zIndex={2}
            style={{ display: isHovered ? "flex" : "none" }}
            onMouseEnter={Handlinghover}
            onMouseLeave={HandlingMouseLeave}
          >
            <SearchBar />
          </Stack>
          <Stack
            position="absolute"
            onMouseOver={Handlinghover}
            onMouseLeave={HandlingMouseLeave}
            style={{ display: isHovered ? "none" : "flex" }}
            right="17%"
            zIndex={3}
          >
            <BsSearch size="20px" />
          </Stack>

          <Stack
            position="absolute"
            w="34.5%"
            flexDirection="row"
            justifyContent="flex-end"
            gap={5}
          >
            {NavIcons.map((el: any, idx: number) => {
              if (el.type == "logout") {
                return (
                  <div key={idx}>
                    <Tooltip key={idx} label={UserDetails.userName} placement="top">
                      <IconButton
                        key="FiLogOut"
                        variant="ghost"
                        fontSize="2xl"
                        aria-label="Call Segun"
                        size="xl"
                        onClick={() => setisDialogOpen(true)}
                        icon={<FiLogOut />}
                      />
                    </Tooltip>
                    {isDialogOpen && (
                      <ConfirmationDialog
                        isOpen={isDialogOpen}
                        onClose={() => setisDialogOpen(false)}
                        confirmationMessage={<Text>Logout</Text>}
                        messageBodyLines={
                          <>
                            <Text>Are you sure you want to logout ? </Text>
                          </>
                        }
                        onYesClick={() => {
                          setUserDetails({ isAuth: false, userName: "" });
                          setisDialogOpen(false);
                          toast({
                            title: "Logout Successfull.",
                            // description: "We've created your account for you.",
                            status: "info",
                            duration: 9000,
                            isClosable: true,
                          });
                        }}
                      />
                    )}
                  </div>
                );
              }

              return el.type == "link" ? (
                <NavLink key={idx} to={el.path} end>
                  <IconButton
                    key={idx}
                    variant="ghost"
                    fontSize="2xl"
                    aria-label="Call Segun"
                    size="xl"
                    icon={el.icon}
                    _hover={{ bgColor: "none" }}
                  />
                </NavLink>
              ) : (
                <div key={idx} style={{ backgroundColor: "none" }}>
                  {el.icon}{" "}
                </div>
              );
            })}
          </Stack>
        </HStack>
      </HStack>
    </VStack>
  );
};

const MobileDrawer = ({ onClose: DrawerClose }: HamburgerProp) => {
  
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [UserDetails, setUserDetails] =
    useRecoilState<UserDetailsProps>(UserDetailAtom);

  const bg = useColorModeValue("black", "white");
  const bgAvtar = useColorModeValue("red.500", "#2a9df4");
  const Navigate = useNavigate();
  const menubg = useColorModeValue("white", "#2d3748");

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      display={{ lg: "none" }}
      width="100%"
    >
      {UserDetails.isAuth && (
        <Tag
          zIndex={9}
          display={{ base: "initial", md: "none" }}
          position="absolute"
          bottom={10}
          left={0}
          size="lg"
          borderRadius="full"
          borderStartRadius={0}
          bgColor={bgAvtar}
          color="white"
        >
          <Stack flexDirection="row" h="100%" mt={1}>
            <Avatar
              src="\img\avatar.png"
              size="xs"
              name={UserDetails.userName}
            />
            <TagLabel>{UserDetails.userName}</TagLabel>
          </Stack>
        </Tag>
      )}
      <Stack
        display={{ base: "flex", md: "none", lg: "none" }}
        position="absolute"
        top="2%"
        left="5%"
      >
        <Logo />
      </Stack>
      <Stack
        display={{ base: "flex", lg: "none" }}
        position="absolute"
        top="2%"
        left={UserDetails.isAuth ? "65%" : "45%"}
      >
        {UserDetails.isAuth ? (
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => setisDialogOpen(true)}
          >
            Logout
          </Button>
        ) : (
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => Navigate("/login")}
          >
            Login/Register
          </Button>
        )}
        {isDialogOpen && (
          <ConfirmationDialog
            isOpen={isDialogOpen}
            onClose={() => setisDialogOpen(false)}
            confirmationMessage={<Text>Logout</Text>}
            messageBodyLines={
              <>
                <Text>{`${UserDetails.userName} are you sure you want to logout ? `}</Text>
              </>
            }
            onYesClick={() => {
              setUserDetails({ isAuth: false, userName: "" });
              setisDialogOpen(false);
              DrawerClose();
            }}
          />
        )}
      </Stack>
      <Stack
        pt={2}
        align="center"
        justify="center"
        fontWeight="500"
        bgColor={menubg}
        gap={0}
        color={bg}
      >
        <Stack
          p={2}
          m={0}
          _hover={{ bgColor: "#b9b8b8" }}
          textAlign="center"
          align="center"
          width="100%"
        >
          <Text cursor="pointer" onClick={() => Navigate("/men")}>
            Mens
          </Text>
        </Stack>

        <Divider p={0} m={0} h="1px" w="80%" />

        <Stack
          p={2}
          _hover={{ bgColor: "#b9b8b8" }}
          textAlign="center"
          align="center"
          width="100%"
        >
          <Text cursor="pointer" onClick={() => Navigate("/women")}>
            Womens
          </Text>
        </Stack>

        <Divider p={0} m={0} h="1px" w="80%" />

        <Stack
          p={2}
          _hover={{ bgColor: "#b9b8b8" }}
          textAlign="center"
          align="center"
          width="100%"
        >
          <Text cursor="pointer" onClick={() => Navigate("/kid")}>
            Kids
          </Text>
        </Stack>

        <Divider p={0} m={0} h="1px" w="80%" />

        <Stack
          p={2}
          _hover={{ bgColor: "#b9b8b8" }}
          textAlign="center"
          align="center"
          width="100%"
        >
          <Text cursor="pointer" onClick={() => Navigate("/mens-product")}>
            Mens product page
          </Text>
        </Stack>

        <Divider p={0} m={0} h="1px" w="80%" />

        <Stack
          p={2}
          _hover={{ bgColor: "#b9b8b8" }}
          textAlign="center"
          align="center"
          width="100%"
        >
          <Text cursor="pointer" onClick={() => Navigate("/womens-product")}>
            Womens product page
          </Text>
        </Stack>

        <Divider p={0} m={0} h="1px" w="80%" />

        <Stack
          p={2}
          _hover={{ bgColor: "#b9b8b8" }}
          textAlign="center"
          align="center"
          width="100%"
        >
          <Text cursor="pointer" onClick={() => Navigate("/kids-product")}>
            Kids product page
          </Text>
        </Stack>

        <Divider p={0} m={0} h="1px" w="80%" />
      </Stack>
    </Stack>
  );
};
