import {
  VStack,
  Box,
  HStack,
  Stack,
  Image,
  Spacer,
  Center,
  Divider,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Navclick } from "../Redux/navbar.action.type";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";

import MenuBar from "../components/smallcomponents/menu";
import ThemeButton from "../components/smallcomponents/Theme";
import { SearchIcon,MoonIcon } from "@chakra-ui/icons";
import Logo from "../components/smallcomponents/Logo";

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

const NavIcons: any = [
  <SearchIcon />,
  <FaRegUser />,
  <FaRegHeart />,
  <FaShoppingBag />,
  <ThemeButton/>
];

const menusList: Array<{ title: string; options?: Array<string> }> = [
  {
    title: "TOPWAEAR",
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
    title: "MEMBERSHIP",
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
export default function Navbar() {
  const dispatch = useDispatch();
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

  function HandlingClick(title: string) {
    console.log(title);
  }

  const bg = useColorModeValue("red.500", "#2a9df4");
  const color = useColorModeValue("black", "white");
  
  const menubg=useColorModeValue("none", "#0e4482")


  return (
    <VStack gap={0} w="100%" maxW="100vw">
      <HStack
        margin="auto"
        bg={bg}
        w="100%"
        color={color}
        justifyContent="space-around"
      >
        <Stack  position="absolute" left={30} top={2} >
        <Logo />
        </Stack>
      
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
              // style={{ fontSize: "25px", marginTop: "3px" }}
              style={({ isActive }: any) =>
                isActive ? activestyle : defaultstyle
              }
              end
              onClick={() => dispatch(Navclick(el.title))}
            >
              {el.title}
            </NavLink>
          ))}
        </Stack>

        <Stack flexDirection="row" gap={10} mr={-250} color={"white"}>
          <Box>Track order</Box>
          <Box>Contact us</Box>
          <Box mr={10}>Download APP</Box>
        </Stack>
      </HStack>

      <HStack
        w="100%"
        height="3.5rem"
        color={color}
        justifyContent="space-between"
        boxShadow="0px 2px 2px 0px rgba(199,191,199,1)"
        bg={menubg}
        
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

        <HStack mr={50} gap={7}>
          {NavIcons.map((el: any, idx: number) => (
            <IconButton
              key={idx}
              variant="ghost"
              fontSize="2xl"
              aria-label="Call Segun"
              size="xl"
              icon={el}
            />
          ))}
        </HStack>
      </HStack>
    </VStack>
  );
}
