import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        fontSize="2xl"
        aria-label="Call Segun"
        size="xl"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        _hover={{ bgColor: "none" }}
      />
    </header>
  );
}

export default ThemeButton;
