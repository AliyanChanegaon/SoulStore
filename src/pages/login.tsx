import {
  Button,
  ButtonGroup,
  Highlight,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterDetailsModel } from "../utils/models/login-model";
import { useFormik } from "formik";
import { LoginSchemas } from "../utils/schemas/login-schemas";
import { useRecoilState } from "recoil";
import UserDetailAtom, {
  UserDetailsProps,
} from "../utils/atoms/auth-atoms-state";
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [userDetails, setUserDetails] = useRecoilState<UserDetailsProps>(UserDetailAtom);
  const Navigate = useNavigate();
  const bg = useColorModeValue("#e6e7e8", "#1a202c");
  const boxBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const buttonBg = useColorModeValue("teal", "telegram");
  const color = useColorModeValue("black", "white");
  const textColor = useColorModeValue("red", "#a2d4ec");
  const toast = useToast();

  const HandlingSubmit = (values: RegisterDetailsModel) => {
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

    const User = existingData.find(
      (data: RegisterDetailsModel) => data.email == values.email
    );

    if (User == undefined) {
      return toast({
        title: "Error",
        description: "User Not Found",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    if (User.email == values.email && User.password == values.password) {
      toast({
        title: "Login successful",

        description: "Welcome to soul store",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setUserDetails({
        isAuth: true,
        userName: User.firstName + " " + User.lastName,
      });
      return Navigate("/men");
    }

    if (User.email == values.email && User.password !== values.password) {
      return toast({
        title: "Error",

        description: "Incorrect password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchemas,
      onSubmit: (values) => {
        // action.resetForm();

        if (Object.keys(errors).length === 0) {
          HandlingSubmit(values);
        }
      },
    });

   
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
        w={{ base: "100%", md: "75%", lg: "32%" }}
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
            top: "-3.5%",
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
            <Tooltip
              label={errors.email && touched.email ? errors.email : null}
              bgColor={"red.500"}
              placement="top"
              hasArrow
              arrowSize={5}
            >
              <Input
                name="email"
                value={values.email}
                borderColor={errors.email && touched.email ? "red" : "gray"}
                borderWidth={errors.email && touched.email ? "2px" : "1px"}
                onChange={handleChange}
                onBlur={handleBlur}
                colorScheme="whiteAlpha"
                type="email"
                variant="outline"
                placeholder="Enter email"
                w="100%"
                // onChange={(e) => HandlingChange(e)}
              />
            </Tooltip>
            <Tooltip
              label={
                errors.password && touched.password ? errors.password : null
              }
              bgColor={"red.500"}
              placement="top"
              hasArrow
              arrowSize={5}
            >
              <Input
                name="password"
                value={values.password}
                borderColor={
                  errors.password && touched.password ? "red" : "gray"
                }
                borderWidth={
                  errors.password && touched.password ? "2px" : "1px"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                colorScheme="whiteAlpha"
                type="password"
                variant="outline"
                placeholder="Enter password"
                w="100%"
                // onChange={(e) => HandlingChange(e)}
              />
            </Tooltip>

            <Button
              colorScheme={buttonBg}
              variant="solid"
              w="100%"
              // onClick={HandlingSubmit}
              onClick={() => handleSubmit()}
            >
              LOGIN
            </Button>
          </Stack>

          <Text align="center" fontSize="sm">
            <Link to={"/register"}>
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
            </Link>
          </Text>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default Login;
