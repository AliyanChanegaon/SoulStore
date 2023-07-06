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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  const bg = useColorModeValue("#e6e7e8", "#1a202c");
  const boxBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const buttonBg = useColorModeValue("teal", "telegram");
  const textColor = useColorModeValue("red", "#a2d4ec");
  return (
    <VStack w="100%" bgColor={bg} p={{ base: 0, md: 4 }} fontSize="sm">
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

          <Grid templateRows="repeat(7,1fr)" gap={{ base: 2, md: 4 }}>
            <GridItem colSpan={1}>
              <Input
                type="text"
                variant="outline"
                placeholder="First Name"
                bgColor={boxBg}
                rounded="xl"
                required
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Input
                type="text"
                variant="outline"
                placeholder="Last Name"
                bgColor={boxBg}
                rounded="xl"
                required
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="email"
                variant="outline"
                placeholder="Email ID"
                bgColor={boxBg}
                rounded="xl"
                required
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="password"
                variant="outline"
                placeholder="Choose New Password"
                bgColor={boxBg}
                rounded="xl"
                required
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Input
                type="password"
                variant="outline"
                placeholder="Confirm Password"
                bgColor={boxBg}
                rounded="xl"
                required
              />
            </GridItem>
            <GridItem colSpan={2}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  variant="outline"
                  placeholder="Mobile Number (Status Update)"
                  bgColor={boxBg}
                  rounded="xl"
                  required
                />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={2}>
              <RadioGroup defaultValue="2">
                <Stack spacing={2} direction="row">
                  <Text fontSize="md">Gender</Text>
                  <Radio  value="1">
                    Male
                  </Radio>
                  <Radio  value="2">
                    Female
                  </Radio>
                  <Radio  value="3">
                    Other
                  </Radio>
                </Stack>
              </RadioGroup>
            </GridItem>
            <GridItem colSpan={2}>
              <Button w="100%" colorScheme={buttonBg} borderRadius={2}>
                Register
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
