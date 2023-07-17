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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterDetailsModel } from "../utils/model/login-model";
const RegisterDetails = {
  email: "",
  password: "",
};

const Login = () => {
  const [registerData, setRegisterData] =
    useState<RegisterDetailsModel>(RegisterDetails);
  const Navigate = useNavigate();
  const bg = useColorModeValue("#e6e7e8", "#1a202c");
  const boxBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const buttonBg = useColorModeValue("teal", "telegram");
  const color = useColorModeValue("black", "white");
  const textColor = useColorModeValue("red", "#a2d4ec");
  const toast = useToast();

  const HandlingSubmit = () => {
    const existingData =
      JSON.parse(localStorage.getItem("userData") as string) || [];

    if (existingData.length === 0) {
      toast({
        title: "User not exist",

        description: "Please register",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }




    const existingEmails = existingData.map(
      (data: RegisterDetailsModel) => data.email 
    );

    const existingPassword = existingData.map(
      (data: RegisterDetailsModel) => data.password 
    );


    if (
      existingEmails.includes(registerData.email) &&
      existingPassword.includes(registerData.password)
    ) {
      toast({
        title: "Login successful",

        description: "Welcome to soul store",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    if (
      !existingEmails.includes(registerData.email) &&
      !existingPassword.includes(registerData.password)
    ) {
      toast({
        title: "Error",

        description: "Incorrect credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    if (
      !existingEmails.includes(registerData.email) &&
      existingPassword.includes(registerData.password)
    ) {
      toast({
        title: "Error",

        description: "Incorrect email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    if (
      existingEmails.includes(registerData.email) &&
      !existingPassword.includes(registerData.password)
    ) {
      toast({
        title: "Error",

        description: "Incorrect password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const HandlingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(e.target)
     
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

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
              name="email"
              colorScheme="whiteAlpha"
              type="email"
              variant="outline"
              placeholder="Enter email"
              w="100%"
              onChange={(e) => HandlingChange(e)}
            />
            <Input
              name="password"
              colorScheme="whiteAlpha"
              type="password"
              variant="outline"
              placeholder="Enter password"
              w="100%"
              onChange={(e) => HandlingChange(e)}
            />

            <Button
              colorScheme={buttonBg}
              variant="solid"
              w="100%"
              onClick={HandlingSubmit}
            >
              LOGIN
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
