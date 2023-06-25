import { Image, useColorModeValue } from "@chakra-ui/react"



const Logo = () => {
    const imgColor = useColorModeValue("none", "hue-rotate(205deg)");
  return (
    <Image filter={imgColor}  src="/src/img/logo.png"/>

  )
}

export default Logo;