import {
  Button,
  ButtonGroup,
  Highlight,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const bg = useColorModeValue("#e6e7e8", "#1a202c");
  const boxBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const buttonBg = useColorModeValue("teal", "telegram");
  const color = useColorModeValue("black", "white");
  const textColor = useColorModeValue("red", "#a2d4ec");
  return (
    <VStack
      w="100%"
      bgColor={bg}
      p={{ base: 0, md: 4 }}
      color={color}
      fontSize="sm"
    >
      <Stack
        margin="auto"
        w={{ base: "100%", md: "32%" }}
        h="auto"
        justifyContent="center"
        p={{ base: 6, md: 8 }}
        gap={4}
        bgColor={boxBg}
      >
        <Text align="center" fontWeight="600" fontSize="md">
          Login with The Souled Store
        </Text>
        <Stack direction="row" gap={0}>
          <Button
            w="50%"
            borderRadius="0px"
            colorScheme={buttonBg}
            variant="solid"
          >
            Login
          </Button>
          <Button
            w="50%"
            borderRadius="0px"
            colorScheme={buttonBg}
            variant="outline"
            onClick={() => Navigate("/register")}
          >
            Register
          </Button>
        </Stack>

        <Stack
          pos="relative"
          _after={{
            content: `""`,
            position: "absolute",
            top: "-4%",
            left: "24%",
            marginLeft: "-5px",
            width: "0",
            height: "0",

            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid grey",
          }}
          border="1px solid #a7a6a6"
          bgColor={boxBg}
          justifyContent="center"
          p={5}
          gap={2}
          align="center"
        >
          <Stack direction="row" gap={2}>
            <ButtonGroup p={3} size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Add to friends"
                icon={<Image w={5} src="\img\facebook.png" />}
              />
              <Button>Facebook</Button>
            </ButtonGroup>
            <ButtonGroup p={3} size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Add to friends"
                icon={<Image w={5} src="\img\google.png" />}
              />
              <Button>Google</Button>
            </ButtonGroup>
          </Stack>

          <Text align="center">- OR -</Text>

          <Stack gap={4} w="100%">
            <Input
              colorScheme="whiteAlpha"
              type="number"
              variant="outline"
              placeholder="Enter Phone Number"
              w="100%"
            />

            <Button colorScheme={buttonBg} variant="solid" w="100%">
              Button
            </Button>
          </Stack>

          <Text align="center" fontSize="sm">
            <Highlight
              query="Create Account"
              styles={{
                cursor: "pointer",
                color: textColor,
                textDecoration: "underline",
              }}
            >
              New User ? Create Account
            </Highlight>
          </Text>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default Login;
