import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  HStack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import MenuBar from "../components/smallcomponents/menu";
import { FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import Logo from "../components/smallcomponents/logo";
import ThemeButton from "../components/smallcomponents/theme";
import { NavLink, useNavigate } from "react-router-dom";
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

  return (
    <Box width="full">
      <Flex
        h={30}
        display={{ base: "block", md: "none" }}
        width="full"
        bgColor="red.500"
      ></Flex>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h={{ base: "40px", md: "105px" }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 0, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "inline", md: "none" }}
          position="absolute"
          left="5%"
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
        </Flex>
        <Stack
          display={{ base: "flex", md: "none" }}
          flexDirection="row"
          position="absolute"
          right="4%"
        >
          <NavLink to={"/"} end>
            <Image height="25px" src="\src\img\icons\search.png" />
          </NavLink>

          <NavLink to={"/wishlist"} end>
            <Image height="25px" src="\src\img\icons\heart.png" />
          </NavLink>

          <NavLink to={"/cart"} end>
            <Image height="25px" src="\src\img\icons\cart.png" />
          </NavLink>
        </Stack>
        <Flex
          position="relative"
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          //
        >
          <Stack
            // display={{ base: "none", md: "inline" }}
            position={{ base: "relative", md: "absolute" }}
            left={{ md: 30 }}
            top={{ base: -2, md: 2 }}
          >
            <Logo />
          </Stack>

          <DesktopNav />
        </Flex>
      </Flex>
      {/* <Button border="2px solid red" colorScheme='blue' onClick={onOpen}>
        Open
      </Button> */}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            color="white"
            style={{ height: "92px" }}
          >
            Basic Drawer
          </DrawerHeader>
          <DrawerBody p={0}>
            <MobileDrawer />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("red.500", "#2a9df4");
  const color = useColorModeValue("black", "white");

  const menubg = useColorModeValue("none", "#0e4482");
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
      display={{ base: "none", md: "flex" }}
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
        border="2px solid red"
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
          {NavIcons.map((el: any, idx: number) => {
            return el.type == "link" ? (
              <NavLink key={idx} to={el.path} end>
                <IconButton
                  key={idx}
                  variant="ghost"
                  fontSize="2xl"
                  aria-label="Call Segun"
                  size="xl"
                  icon={el.icon}
                />
              </NavLink>
            ) : (
              <div key={idx}>{el.icon}</div>
            );
          })}
        </HStack>
      </HStack>
    </VStack>
  );
};

const MobileDrawer = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("red.500", "#2a9df4");
  const color = useColorModeValue("black", "white");
  const Navigate = useNavigate();
  const menubg = useColorModeValue("none", "#0e4482");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      display={{ md: "none" }}
      width="100%"
    >
      <Stack
        display={{ base: "flex", md: "none" }}
        position="absolute"
        top="2%"
        left="5%"
      >
        <Logo />
      </Stack>
      <Stack
        display={{ base: "flex", md: "none" }}
        position="absolute"
        top="2%"
        left="45%"
      >
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => Navigate("/login")}
        >
          Login/Register
        </Button>
      </Stack>
      <Tabs style={{ width: "full" }} p={2} align="center" variant="line">
        <TabList
          style={{
            width: "fit-content",
            boxShadow:
              "box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          }}
        >
          <Tab>Men</Tab>
          <Tab>Women</Tab>
          <Tab>Kids</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {NAV_ITEMS.map((navItem) => (
              <MobileDrawerItem key={navItem.label} {...navItem} />
            ))}
          </TabPanel>
          <TabPanel>
            {NAV_ITEMS.map((navItem) => (
              <MobileDrawerItem key={navItem.label} {...navItem} />
            ))}
          </TabPanel>
          <TabPanel>
            {NAV_ITEMS.map((navItem) => (
              <MobileDrawerItem key={navItem.label} {...navItem} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

const MobileDrawerItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {menusList.length &&
            menusList.map((child, idx) => (
              <Link key={idx} py={2}>
                {child.title}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

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

const NavIcons: any = [
  {
    type: "button",
    icon: <SearchIcon />,
  },

  {
    path: "/login",
    type: "link",
    icon: <FaRegUser />,
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

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
