import {
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("red.500", "blue.900");
  const color = useColorModeValue("black", "white");
  
  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        fontSize="2xl"
        aria-label="Call Segun"
        size="xl"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        _hover={{ borderBottom: `4px solid ${color}`, bgColor: bg }}
      />
    </header>
  );
}

export default ThemeButton;
