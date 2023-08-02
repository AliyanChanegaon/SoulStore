import { PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Stack,
  Text,
  VStack,
  Highlight,
  ButtonGroup,
  IconButton,
  Image,
  Input,
  Grid,
  GridItem,
  RadioGroup,
  Radio,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  FormControl,
  Tooltip,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { RegisterSchemas } from "../utils/schemas/register-schemas";
import { RegisterDetailsModel } from "../utils/model/login-model";

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  confirmPassword: "",
};

const Register = () => {
  // const [registerData, setRegisterData] =
  //   useState<RegisterDetailsModel>(InitialDetails);

  const Navigate = useNavigate();
  const bg = useColorModeValue("#e6e7e8", "#1a202c");
  const boxBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const buttonBg = useColorModeValue("teal", "telegram");
  const textColor = useColorModeValue("red", "#a2d4ec");

  const Submitfunc = (values: RegisterDetailsModel) => {
    const existingData =
      JSON.parse(localStorage.getItem("userData") as string) || [];
    // console.log(existingData);
    const updatedData = [...existingData, values];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    console.log(updatedData);
    Navigate("/login");
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: RegisterSchemas,
    onSubmit: (values, action) => {
      action.resetForm();

      if (Object.keys(errors).length === 0) {
        Submitfunc(values);
        setValues(initialValues);
      }
    },
  });

  return (
    <VStack w="100%" bgColor={bg} p={{ base: 0, md: 4 }} fontSize="sm">
      <Stack
        margin="auto"
        w={{ base: "100%", md: "50%", lg: "32%" }}
        h="auto"
        justifyContent="center"
        p={{ base: 6, md: 8 }}
        gap={4}
        bgColor={boxBg}
      >
        <Text align="center" fontWeight="600" fontSize="md">
          Register with The Souled Store
        </Text>
        <Stack direction="row" gap={0}>
          <Button
            w="50%"
            borderRadius="0px"
            colorScheme={buttonBg}
            variant="outline"
            onClick={() => Navigate("/login")}
          >
            Login
          </Button>
          <Button
            w="50%"
            borderRadius="0px"
            colorScheme={buttonBg}
            variant="solid"
          >
            Register
          </Button>
        </Stack>

        <Stack
          pos="relative"
          _after={{
            content: `""`,
            position: "absolute",
            top: "-2%",
            left: "73%",
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
          p={{ base: 2, md: 5 }}
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

          <Grid templateRows="repeat(7,1fr)" gap={{ base: 2, md: 4 }}>
            <GridItem colSpan={1}>
              <FormControl>
                <Tooltip
                  label={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : null
                  }
                  bgColor={"red.500"}
                  placement="top"
                  hasArrow
                  arrowSize={5}
                >
                  <Input
                    name="firstName"
                    value={values.firstName}
                    borderColor={
                      errors.firstName && touched.firstName ? "red" : "gray"
                    }
                    borderWidth={
                      errors.firstName && touched.firstName ? "2px" : "1px"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    variant="outline"
                    placeholder="First Name"
                    bgColor={boxBg}
                    rounded="xl"
                  />
                </Tooltip>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <Tooltip
                  label={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                  bgColor={"red.500"}
                  placement="top"
                  hasArrow
                  arrowSize={5}
                >
                  <Input
                    name="lastName"
                    value={values.lastName}
                    borderColor={
                      errors.lastName && touched.lastName ? "red" : "gray"
                    }
                    borderWidth={
                      errors.lastName && touched.lastName ? "2px" : "1px"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    variant="outline"
                    placeholder="Last Name"
                    bgColor={boxBg}
                    rounded="xl"
                    required
                  />
                </Tooltip>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
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
                    type="email"
                    variant="outline"
                    placeholder="Email ID"
                    bgColor={boxBg}
                    rounded="xl"
                    required
                  />
                </Tooltip>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
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
                    type="password"
                    variant="outline"
                    placeholder="Choose New Password"
                    bgColor={boxBg}
                    rounded="xl"
                    required
                  />
                </Tooltip>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <Tooltip
                  label={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : null
                  }
                  bgColor={"red.500"}
                  placement="top"
                  hasArrow
                  arrowSize={5}
                >
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    borderColor={
                      errors.confirmPassword && touched.confirmPassword
                        ? "red"
                        : "gray"
                    }
                    borderWidth={
                      errors.confirmPassword && touched.confirmPassword
                        ? "2px"
                        : "1px"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outline"
                    placeholder="Confirm Password"
                    bgColor={boxBg}
                    rounded="xl"
                    required
                  />
                </Tooltip>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Tooltip
                    label={
                      errors.phoneNumber && touched.phoneNumber
                        ? errors.phoneNumber
                        : null
                    }
                    bgColor={"red.500"}
                    placement="top"
                    hasArrow
                    arrowSize={5}
                  >
                    <Input
                      name="phoneNumber"
                      value={values.phoneNumber}
                      borderColor={
                        errors.phoneNumber && touched.phoneNumber
                          ? "red"
                          : "gray"
                      }
                      borderWidth={
                        errors.phoneNumber && touched.phoneNumber
                          ? "2px"
                          : "1px"
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="number"
                      variant="outline"
                      placeholder="    Mobile Number (Status Update)"
                      bgColor={boxBg}
                      rounded="xl"
                      required
                    />
                  </Tooltip>
                </InputGroup>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <RadioGroup defaultValue="2">
                <Stack spacing={2} direction="row">
                  <Text fontSize="md">Gender</Text>
                  <Radio value="1">Male</Radio>
                  <Radio value="2">Female</Radio>
                  <Radio value="3">Other</Radio>
                </Stack>
              </RadioGroup>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                type="submit"
                w="100%"
                colorScheme={buttonBg}
                borderRadius={2}
                onClick={() => handleSubmit()}
              >
                REGISTER
              </Button>
            </GridItem>
          </Grid>
          <Text align="center" fontSize="sm">
            <Highlight
              query="login"
              styles={{
                cursor: "pointer",
                color: textColor,
                textDecoration: "underline",
              }}
            >
              Already a Customer? login
            </Highlight>
          </Text>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default Register;
