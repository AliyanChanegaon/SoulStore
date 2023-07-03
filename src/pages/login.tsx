import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Highlight,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  return (
    <VStack w="100%" bgColor="#e6e7e8" p={{ base: 0, md: 4 }} fontSize="sm">
      <Stack
        margin="auto"
        w={{ base: "100%", md: "32%" }}
        h="auto"
        justifyContent="center"
        p={{ base: 6, md: 8 }}
        gap={4}
        bgColor="#ffffff"
      >
        <Text align="center" fontWeight="600" fontSize="md">
          Login with The Souled Store
        </Text>
        <Stack direction="row" gap={0}>
          <Button w="50%" borderRadius="0px" colorScheme="teal" variant="solid">
            Login
          </Button>
          <Button
            w="50%"
            borderRadius="0px"
            colorScheme="teal"
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
          bgColor="#f1f1f2"
          justifyContent="center"
          p={5}
          gap={2}
          align="center"
        >
          <Stack direction="row" gap={2}>
            <ButtonGroup p={3} size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Add to friends"
                icon={<Image w={5} src=".\src\img\facebook.png" />}
              />
              <Button>Facebook</Button>
            </ButtonGroup>
            <ButtonGroup p={3} size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Add to friends"
                icon={<Image w={5} src=".\src\img\google.png" />}
              />
              <Button>Google</Button>
            </ButtonGroup>
          </Stack>

          <Text align="center">- OR -</Text>

          <Stack gap={4} w="100%">
            <Input
              bgColor="white"
              type="number"
              variant="outline"
              placeholder="Enter Phone Number"
              w="100%"
            />

            <Button colorScheme="red" variant="solid" w="100%">
              Button
            </Button>
          </Stack>

          <Text align="center" fontSize="sm">
            <Highlight
              query="Create Account"
              styles={{
                cursor: "pointer",
                color: "red",
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
